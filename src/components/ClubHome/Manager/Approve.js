import React from "react";
import styles from "../../../styles/Club/Home/Manager/Approve.module.scss";
import ApproveHeader from "./ApproveHeader";

const questions = [
  "이름",
  "학번",
  "학과",
  "학년",
  "성별",
  "휴대전화",
  "지원동기",
  "다룰 줄 아는 프로그래밍 언어는?",
  "하고 싶은 프로젝트",
];

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
  return (
    <div className={styles.container}>
      <ApproveHeader answers={answers} />
      {answers.map((e, index) => {
        return (
          <div key={index}>
            <div className={styles.kkk}>
              <div id={styles.q}>
                {questions.map((q, i) => {
                  return (
                    <div key={i}>
                      <span>{q}</span>
                    </div>
                  );
                })}
              </div>
              <div id={styles.a}>
                {e.map((a, i) => {
                  return (
                    <div key={i}>
                      <span>{a}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Approve;
