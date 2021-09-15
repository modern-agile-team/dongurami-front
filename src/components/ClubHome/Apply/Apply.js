import React, { useState } from "react";
import ApplyHeader from "./ApplyHeader";
import styles from "../../../styles/Club/Home/Apply/Apply.module.scss";
import ApplyQuestions from "./ApplyQuestions";
import Additional from "./Additional";
import { IoIosAddCircleOutline, IoIosCheckmark } from "react-icons/io";
import Router from "next/router";

const token = {
  studentID: 201708051,
};

const clubInfo = {
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

export const list = [
  {
    question: "지원 동기",
  },
  {
    question: "다룰 줄 아는 프로그래밍 언어는?",
  },
  {
    question: "하고 싶은 프로젝트",
  },
];

const Apply = () => {
  const updateState = new Array(list.length).fill(false);

  const [newQuestion, setNewQuestion] = useState("");
  const [questions, setQuestions] = useState(list);
  const [isUpdate, setIsUpdate] = useState(updateState);
  const [resume, setResume] = useState([]);
  const [grade, setGrade] = useState("");
  const [sex, setSex] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [addQuestion, setAddQuestion] = useState([]);

  const reloadPage = () => {
    Router.push("/ClubHome");
  };

  const iconSize = 40;

  // 질문 추가
  const onQuestionAdd = () => {
    const newList = [...questions, { question: newQuestion }];
    const a = [...isUpdate, false];
    setIsUpdate(a);
    setQuestions(newList);
  };

  // 질문 제거
  const onRemove = (i) => {
    const b = questions.filter((el, index) => {
      return i !== index;
    });
    const a = isUpdate.slice(1);
    setIsUpdate(a);
    setQuestions(b);
  };

  // 질문 업데이트
  const onUpdate = (i, e) => {
    console.log(e.target.parentNode);
    console.log(isUpdate);
    const update = isUpdate.map((el, index) => {
      return i === index ? !el : el;
    });
    setIsUpdate(update);
  };

  // 질문 입력창 변화 감지
  const handleChange = (e) => {
    setNewQuestion(e.target.value);
  };

  // 학년
  const onGradeChange = (e) => {
    setGrade(e.target.value);
  };

  // 성별
  const onSexChange = (e) => {
    setSex(e.target.value);
  };

  // 핸드폰 번호
  const onPhoneNumberInput = (e) => {
    setPhoneNumber(e.target.value);
  };

  // 지원서 제출
  const onResumeSubmit = () => {
    const result = [
      user.name,
      user.studentID,
      user.department,
      grade,
      sex,
      phoneNumber,
      ...addQuestion,
    ];
    setResume(result);
    reloadPage();
  };

  // 추가 질문 저장
  const onQuestionInputChange = (e) => {
    const index = e.target.parentNode.id;
    const input = e.target.value;
    const temp = [...addQuestion];
    temp[index] = input;
    setAddQuestion(temp);
  };
  console.log(resume);
  return (
    <div className={styles.container}>
      <ApplyHeader />
      <ApplyQuestions
        onGradeChange={onGradeChange}
        onSexChange={onSexChange}
        onPhoneNumberInput={onPhoneNumberInput}
      />
      <Additional
        onQuestionInputChange={onQuestionInputChange}
        isUpdate={isUpdate}
        onUpdate={onUpdate}
        onRemove={onRemove}
        list={questions}
      />
      <div
        className={
          token.studentID === clubInfo.ownerID ? styles.add : styles.none
        }
      >
        <span>새로운 질문</span>
        <input type="text" onChange={handleChange} />
        <IoIosAddCircleOutline onClick={onQuestionAdd} size={iconSize} />
      </div>
      <div className={styles.submit}>
        <IoIosCheckmark size={iconSize} onClick={onResumeSubmit} />
      </div>
    </div>
  );
};

export default Apply;
