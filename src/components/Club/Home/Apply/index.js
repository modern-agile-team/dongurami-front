import React, { useEffect, useState, useRef, useCallback } from 'react';
import ApplyHeader from './ApplyHeader';
import { useRouter } from 'next/router';
import {
  getApply,
  postApply,
  deleteApply,
  putApply,
  postSubmit
} from 'apis/clubhome';
import ApplyBody from './ApplyBody';

const Apply = ({ clubs }) => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    id: '',
    major: '',
    grade: '',
    sex: '',
    phoneNumber: ''
  });
  const [newQuestion, setNewQuestion] = useState('');
  const [questions, setQuestions] = useState([]);
  const [isUpdate, setIsUpdate] = useState([]);
  const [addQuestion, setAddQuestion] = useState([]);
  const [updateQuestion, setUpdateQuestion] = useState('');
  const [leader, setLeader] = useState(false);

  const { grade, sex, phoneNumber } = userInfo;

  const router = useRouter();

  const newQuestionInput = useRef();

  const iconSize = 40;

  // 지원서 불러오기
  const getApplyQuestions = useCallback(() => {
    getApply(router.query.id)
      .then((res) => {
        setUserInfo({
          name: res.data.result.clientInfo.name,
          id: res.data.result.clientInfo.id,
          major: res.data.result.clientInfo.major,
          grade: res.data.result.clientInfo.grade,
          sex: res.data.result.clientInfo.gender,
          phoneNumber: res.data.result.clientInfo.phoneNumber
        });
        setLeader(res.data.result.clientInfo.leaderFlag);
        setIsUpdate(new Array(res.data.result.questions.length).fill(false));
        setQuestions(res.data.result.questions);
      })
      .catch((err) => alert(err.response.data.msg));
  }, [router.query.id]);

  // 질문 추가
  const onQuestionAdd = async () => {
    await postApply(
      {
        description: newQuestion
      },
      router.query.id
    )
      .then((res) => alert(res.data.msg))
      .catch((err) => alert(err.response.data.msg));

    getApplyQuestions();
    newQuestionInput.current.value = '';
  };

  // 질문 삭제
  const onRemove = async (i) => {
    await deleteApply({ description: newQuestion }, i, router.query.id)
      .then((res) => alert(res.data.msg))
      .catch((err) => alert(err.response.data.msg));
    getApplyQuestions();
  };

  // 질문 수정
  const onUpdateQuestionClick = async (i, no) => {
    const update = isUpdate.map((el, index) => {
      return i === index ? !el : el;
    });

    if (isUpdate[i]) {
      await putApply({ description: updateQuestion }, no, router.query.id)
        .then((res) => alert(res.data.msg))
        .catch((err) => alert(err.response.data.msg));
      getApplyQuestions();
    }
    setIsUpdate(update);
  };

  // -------------------   지원서 제출   -------------------------
  const post = (data) => {
    postSubmit(
      {
        basic: {
          grade: parseInt(grade),
          gender: parseInt(sex),
          phoneNum: phoneNumber.match(/[0-9]/g).join('')
        },
        extra: data,
        url: `manager/${router.query.id}`,
        notiCategoryNum: 7
      },
      router.query.id
    )
      .then((res) => {
        alert(res.data.msg);
        router.reload();
      })
      .catch((err) => alert(err.response.data.msg));
  };

  const onResumeSubmit = () => {
    if (
      addQuestion.length === questions.length &&
      userInfo.phoneNumber !== '' &&
      userInfo.phoneNumber !== null &&
      userInfo.grade !== null &&
      userInfo.grade !== '0' &&
      userInfo.sex !== '0'
    ) {
      post(
        addQuestion.map((el, i) => {
          return { no: questions[i].no, description: el };
        })
      );
    } else {
      alert('질문에 대한 답변을 모두 입력해주세요.');
    }
  };
  //---------------------------------------------------------------

  // 질문 수정할 입력창
  const onUpdateInputChange = (e) => {
    setUpdateQuestion(e.target.value);
  };

  // 새로운 질문 입력창 변화 감지
  const handleChange = (e) => {
    setNewQuestion(e.target.value);
  };

  // 유저 정보 (학년, 성별, 전화번호)
  const onUserInfoChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  // 추가 질문 답변 저장
  const onAnswerInputChange = (e) => {
    const temp = [...addQuestion];
    temp[e.target.parentNode.id] = e.target.value;
    setAddQuestion(temp);
  };

  useEffect(() => {
    getApplyQuestions();
  }, [getApplyQuestions]);

  return (
    <>
      <ApplyHeader clubName={clubs} />
      <ApplyBody
        onUserInfoChange={onUserInfoChange}
        userInfo={userInfo}
        onAnswerInputChange={onAnswerInputChange}
        isUpdate={isUpdate}
        onUpdateQuestionClick={onUpdateQuestionClick}
        onRemove={onRemove}
        questions={questions}
        onUpdateInputChange={onUpdateInputChange}
        leader={leader}
        newQuestionInput={newQuestionInput}
        handleChange={handleChange}
        onQuestionAdd={onQuestionAdd}
        iconSize={iconSize}
        onResumeSubmit={onResumeSubmit}
      />
    </>
  );
};

export default Apply;
