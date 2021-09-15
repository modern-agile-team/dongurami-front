import React from "react";
import styles from "../../../styles/Club/Home/Manager/ApproveList.module.scss";

const ApproveList = ({ answers, questions }) => {
  return (
    <>
      {answers.map((e, i) => {
        return (
          <>
            <div key={i} className={styles.kkk}>
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
            <div className={styles.button}>
              <button>승인</button>
              <button>거절</button>
              <hr />
            </div>
          </>
        );
      })}
    </>
  );
};

export default ApproveList;
