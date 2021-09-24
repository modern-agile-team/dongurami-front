import React from "react";
import styles from "../../../styles/Club/Home/Schedule/Calendar.module.scss";

const Control = ({ setMoment, getMoment, today, setPop }) => {
  return (
    <div>
      <div className={styles.control}>
        <span
          className={styles.lastmonth}
          onClick={() => {
            setMoment(getMoment.clone().subtract(1, "month"));
          }}
        >
          &lt;
        </span>
        <span className={styles.thisMonth}>{today.format("YYYY년 MM월")}</span>
        <span
          className={styles.nextmonth}
          onClick={() => {
            setMoment(getMoment.clone().add(1, "month"));
          }}
        >
          &gt;
        </span>
      </div>
      <div className={styles.add}>
        <span className={styles.addBtn} onClick={() => setPop(1)}>
          일정 추가하기
        </span>
      </div>
    </div>
  );
};

export default Control;