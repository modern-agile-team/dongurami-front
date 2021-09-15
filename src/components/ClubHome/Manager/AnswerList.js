import React from "react";
import styles from "../../../styles/Club/Home/Manager/ApproveList.module.scss";

const AnswerList = ({ answers }) => {
  return (
    <div id={styles.a}>
      {answers.map((a, i) => {
        return (
          <div key={i}>
            <span>{a}</span>
          </div>
        );
      })}
    </div>
  );
};

export default AnswerList;
