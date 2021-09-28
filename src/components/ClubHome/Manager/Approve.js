import React, { useState } from "react";
import styles from "../../../styles/Club/Home/Manager/Approve.module.scss";
import ApproveHeader from "./ApproveHeader";
import ApproveList from "./ApproveList";

const questions = ["이름", "학번", "학과", "학년", "성별"];

const answers = [
  [
    "민순기",
    "201708051",
    "컴퓨터전자공학과",
    "3학년",
    "남자",
    "010-9096-9808",
    "코딩에 관심이 많아서",
    "C언어 파이썬 자바스크립트 등",
    "동그라미",
  ],
  [
    "유준상",
    "201708055",
    "컴퓨터소프트웨어공학과",
    "1학년",
    "남자",
    "010-5196-9808",
    "코딩에 관심이 많아서",
    "리액트 리덕스 sass 자바스크립트 등",
    "동그라미",
  ],
  [
    "박현우",
    "201904057",
    "정통과",
    "2학년",
    "남자",
    "010-9516-6708",
    "코딩에 관심이 많아서",
    "자바스크립트",
    "동그라미",
  ],
];

export const Approve = () => {
  const [listOpen, setListOpen] = useState(false);
  const [applyList, setApplyList] = useState(answers);

  const onApplyDelete = (e) => {
    const index = e.target.id;
    const deleteApplyList = applyList.filter((el) => el !== applyList[index]);
    setApplyList(deleteApplyList);
    alert("가입이 거절되었습니다.");
  };
  const onApplyAccept = (e) => {
    const index = e.target.id;
    const deleteApplyList = applyList.filter((el) => el !== applyList[index]);
    setApplyList(deleteApplyList);
    alert("가입이 승인되었습니다.");
  };

  const onApplyListOpen = () => {
    setListOpen(!listOpen);
  };

  return (
    <div className={styles.container}>
      <ApproveHeader
        listOpen={listOpen}
        onClick={onApplyListOpen}
        answers={applyList}
      />
      {listOpen ? (
        <ApproveList
          onApplyDelete={onApplyDelete}
          onApplyAccept={onApplyAccept}
          answers={applyList}
          questions={questions}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Approve;
