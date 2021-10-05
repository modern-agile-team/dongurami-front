import React, { useEffect, useState, useRef } from "react";
import ApplyHeader from "./ApplyHeader";
import styles from "../../../styles/Club/Home/Apply/Apply.module.scss";
import ApplyQuestions from "./ApplyQuestions";
import Additional from "./Additional";
import axios from "axios";
import ApplySubmit from "./ApplySubmit";
import { useRouter } from "next/router";

const Apply = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    id: "",
    major: "",
    grade: "",
    sex: "",
    phoneNumber: "",
  });
  const [newQuestion, setNewQuestion] = useState("");
  const [questions, setQuestions] = useState([]);
  const [isUpdate, setIsUpdate] = useState([]);
  const [addQuestion, setAddQuestion] = useState([]);
  const [updateQuestion, setUpdateQuestion] = useState("");
  const [leader, setLeader] = useState("");

  const { grade, sex, phoneNumber } = userInfo;

  const router = useRouter();

  const newQuestionInput = useRef();

  const iconSize = 40;

  let jwtToken = "";

  if (typeof window !== "undefined") {
    jwtToken = localStorage.getItem("jwt");
  }

  // 지원서 불러오기
  const getApplyQuestions = async () => {
    const options = {
      headers: {
        "Content-type": "application/json; charset=utf-8",
        "x-auth-token": jwtToken,
      },
    };
    await axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/club/application/1`, options)
      .then((res) => {
        const updateState = new Array(res.data.questions.length).fill(false);
        setUserInfo({
          name: res.data.clientInfo[0].name,
          id: res.data.clientInfo[0].id,
          major: res.data.clientInfo[0].major,
          grade: "",
          sex: "",
          phoneNumber: "",
        });
        setLeader(res.data.leader);
        setIsUpdate(updateState);
        setQuestions(res.data.questions);
      })
      .catch((err) => alert(err.response.data.msg));
  };

  // 질문 추가
  const onQuestionAdd = async () => {
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=utf-8",
        "x-auth-token": jwtToken,
      },
      data: {
        description: newQuestion,
      },
    };
    await axios(
      `${process.env.NEXT_PUBLIC_API_URL}/api/club/application/1`,
      options
    )
      .then((res) => console.log(res.data))
      .catch((err) => alert(err.response.data.msg));

    // GET
    await getApplyQuestions();

    // input 비우기
    newQuestionInput.current.value = "";
  };

  // 질문 삭제
  const onRemove = async (i) => {
    const options = {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=utf-8",
        "x-auth-token": jwtToken,
      },
      data: {
        description: newQuestion,
      },
    };
    await axios(
      `${process.env.NEXT_PUBLIC_API_URL}/api/club/application/1/${i}`,
      options
    )
      .then((res) => res.data)
      .catch((err) => alert(err.response.data));
    await getApplyQuestions();
  };

  // 질문 수정
  const onUpdateQuestionClick = async (i, no) => {
    const update = isUpdate.map((el, index) => {
      return i === index ? !el : el;
    });

    const options = {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=utf-8",
        "x-auth-token": jwtToken,
      },
      data: {
        description: updateQuestion,
      },
    };

    if (isUpdate[i]) {
      await axios(
        `${process.env.NEXT_PUBLIC_API_URL}/api/club/application/1/${no}`,
        options
      )
        .then((res) => res.data)
        .catch((err) => alert(err.response.data.msg));
      await getApplyQuestions();
    }
    setIsUpdate(update);
  };

  // 지원서 제출
  const onResumeSubmit = async () => {
    // {no: no, description: description} 형태로 가공
    const obj = addQuestion.map((el, i) => {
      return { no: questions[i].no, description: el };
    });

    const result = {
      basic: {
        grade: parseInt(grade),
        gender: parseInt(sex),
        phoneNum: phoneNumber,
      },
      extra: obj,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=utf-8",
        "x-auth-token": jwtToken,
      },
      data: result,
    };
    await axios(
      `${process.env.NEXT_PUBLIC_API_URL}/api/club/application/1/answer`,
      options
    )
      .then((res) => {
        alert(res.data.msg);
        router.push("/clubhome"); // 가입신청 후 새로고침
      })
      .catch((err) => alert(err.response.data.msg));
  };

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
    const index = e.target.parentNode.id;
    const input = e.target.value;
    const temp = [...addQuestion];
    temp[index] = input;
    setAddQuestion(temp);
  };

  useEffect(() => {
    getApplyQuestions();
  }, []);

  return (
    <div className={styles.container}>
      <ApplyHeader />
      <ApplyQuestions onUserInfoChange={onUserInfoChange} userInfo={userInfo} />
      <Additional
        onAnswerInputChange={onAnswerInputChange}
        isUpdate={isUpdate}
        onUpdate={onUpdateQuestionClick}
        onRemove={onRemove}
        questions={questions}
        onUpdateInputChange={onUpdateInputChange}
        leader={leader}
        userInfo={userInfo}
      />
      <ApplySubmit
        newQuestionInput={newQuestionInput}
        handleChange={handleChange}
        onQuestionAdd={onQuestionAdd}
        iconSize={iconSize}
        onResumeSubmit={onResumeSubmit}
        leader={leader}
        userInfo={userInfo}
      />
    </div>
  );
};

export default Apply;
