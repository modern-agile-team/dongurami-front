import React, { useEffect, useState, useRef } from "react";
import ApplyHeader from "./ApplyHeader";
import styles from "../../../styles/Club/Home/Apply/Apply.module.scss";
import ApplyQuestions from "./ApplyQuestions";
import Additional from "./Additional";
import axios from "axios";
import ApplySubmit from "./ApplySubmit";

export const clubInfo = {
  name: "우아한 애자일",
  owner: "민순기",
  ownerID: 201708051,
  department: "컴퓨터전자공학과",
};

export const user = {
  name: "민순기",
  studentID: 201708051,
  department: "컴퓨터전자공학과",
};

const Apply = () => {
  const [userInfo, setUserInfo] = useState({
    grade: "",
    sex: "",
    phoneNumber: "",
  });
  const [newQuestion, setNewQuestion] = useState("");
  const [questions, setQuestions] = useState([]);
  const [isUpdate, setIsUpdate] = useState([]);
  const [resume, setResume] = useState({});
  const [addQuestion, setAddQuestion] = useState([]);
  const [updateQuestion, setUpdateQuestion] = useState("");

  const { grade, sex, phoneNumber } = userInfo;

  const newQuestionInput = useRef();

  const iconSize = 40;

  let jwtTocken = "";

  if (typeof window !== "undefined") {
    jwtTocken = localStorage.getItem("jwt");
  }

  // 지원서 불러오기
  const getApplyQuestions = async () => {
    const options = {
      headers: {
        "Content-type": "application/json; charset=utf-8",
        "x-auth-token": jwtTocken,
      },
    };
    await axios
      .get("http://3.36.72.145:8080/api/club/application/1", options)
      .then((res) => {
        console.log(res.data);
        const updateState = new Array(res.data.questions.length).fill(false);
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
        "x-auth-token": jwtTocken,
      },
      data: {
        description: newQuestion,
      },
    };
    await axios("http://3.36.72.145:8080/api/club/application/1", options)
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
        "x-auth-token": jwtTocken,
      },
      data: {
        description: newQuestion,
      },
    };
    await axios(`http://3.36.72.145:8080/api/club/application/1/${i}`, options)
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
        "x-auth-token": jwtTocken,
      },
      data: {
        description: updateQuestion,
      },
    };

    if (isUpdate[i]) {
      await axios(
        `http://3.36.72.145:8080/api/club/application/1/${no}`,
        options
      )
        .then((res) => res.data)
        .catch((err) => alert(err.response.data.msg));
      await getApplyQuestions();
    }
    setIsUpdate(update);
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

  // 지원서 제출
  const onResumeSubmit = async () => {
    const result = {
      basic: {
        grade: parseInt(grade),
        gender: parseInt(sex),
        phoneNum: phoneNumber,
      },
      extra: questions,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=utf-8",
        "x-auth-token": jwtTocken,
      },
      data: result,
    };
    await axios(
      `http://3.36.72.145:8080/api/club/application/1/answer`,
      options
    )
      .then((res) => res.data)
      .catch((err) => alert(err.response.data.msg));
    setResume(result);
    console.log(result);
  };

  // 추가 질문 답변 저장
  const onAnswerInputChange = (e) => {
    const index = e.target.parentNode.id;
    const input = e.target.value;
    const temp = [...addQuestion];
    temp[index] = input;
    setAddQuestion(temp);
    console.log(e.target.value);
  };

  useEffect(() => {
    getApplyQuestions();
  }, []);

  return (
    <div className={styles.container}>
      <ApplyHeader />
      <ApplyQuestions onUserInfoChange={onUserInfoChange} />
      <Additional
        onAnswerInputChange={onAnswerInputChange}
        isUpdate={isUpdate}
        onUpdate={onUpdateQuestionClick}
        onRemove={onRemove}
        questions={questions}
        onUpdateInputChange={onUpdateInputChange}
      />
      <ApplySubmit
        newQuestionInput={newQuestionInput}
        handleChange={handleChange}
        onQuestionAdd={onQuestionAdd}
        iconSize={iconSize}
        onResumeSubmit={onResumeSubmit}
      />
    </div>
  );
};

export default Apply;
