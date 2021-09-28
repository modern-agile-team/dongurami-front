import React from "react";
import styles from "../../../styles/Club/Home/Schedule/Table.module.scss";

const Table = ({ calendarArr }) => {
  const yoil = ["일", "월", "화", "수", "목", "금", "토"];
  return (
    <div>
      <div className={styles.yoil}>
        {yoil.map((el) => {
          return <span key={el.no}>{el}</span>;
        })}
      </div>
      <table className={styles.calendar}>
        <tbody>{calendarArr()}</tbody>
      </table>
    </div>
  );
};

export default Table;
