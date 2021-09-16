import React from "react";
import styles from "../../../styles/Club/Home/Manager/ApproveList.module.scss";

const QuestionList = ({ questions }) => {
  return (
    <div id={styles.q}>
      {questions.map((q, i) => {
        return (
          <div key={i}>
            <span>{q}</span>
          </div>
        );
      })}
    </div>
  );
};

export default QuestionList;
