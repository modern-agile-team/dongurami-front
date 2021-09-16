import React from "react";
import styles from "../../../styles/Club/Home/Manager/ApproveList.module.scss";
import AnswerList from "./AnswerList";
import QuestionList from "./QuestionList";

const ApproveList = ({ answers, questions, onApplyAccept, onApplyDelete }) => {
  return (
    <>
      {answers.map((e, i) => {
        return (
          <>
            <div key={i} id={i} className={styles.kkk}>
              <QuestionList questions={questions} />
              <AnswerList answers={e} />
            </div>
            <div key={i + 100} className={styles.button}>
              <button id={i} onClick={onApplyAccept}>
                승인
              </button>
              <button id={i} onClick={onApplyDelete}>
                거절
              </button>
              <hr />
            </div>
          </>
        );
      })}
    </>
  );
};

export default ApproveList;
