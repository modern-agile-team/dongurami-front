import React, { useState } from "react";
import ApplyHeader from "./ApplyHeader";
import styles from "../../../styles/Club/Home/Apply/Apply.module.scss";
import ApplyQuestions from "./ApplyQuestions";
import Additional from "./Additional";
import { IoIosAddCircleOutline, IoIosCheckmark } from "react-icons/io";

const token = {
  studentID: 201708051,
};

const clubInfo = {
  name: "우아한 애자일",
  owner: "민순기",
  ownerID: 201708051,
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

  const iconSize = 40;

  // 질문 추가
  const onQuestionAdd = () => {
    const newList = [...questions, { question: newQuestion }];
    setQuestions(newList);
  };

  // 질문 제거
  const onRemove = (i) => {
    const b = questions.filter((el, index) => {
      return i !== index;
    });
    setQuestions(b);
  };

  // 질문 업데이트
  const onUpdate = (i) => {
    const update = isUpdate.map((el, index) => {
      return i === index ? !el : el;
    });
    setIsUpdate(update);
  };

  // 질문 입력창 변화 감지
  const handleChange = (e) => {
    setNewQuestion(e.target.value);
  };

  return (
    <div className={styles.container}>
      <ApplyHeader />
      <ApplyQuestions />
      <Additional
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
        <IoIosCheckmark size={iconSize} />
      </div>
    </div>
  );
};

export default Apply;
