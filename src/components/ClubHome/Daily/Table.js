import React from "react";
import styles from "../../../styles/Club/Home/Schedule/Calendar.module.scss";

const Table = ({ calendarArr }) => {
  return (
    <table className={styles.calendar}>
      <tbody>
        <tr className={styles.days}>
          <td className={styles.daysblock}>
            <span>일</span>
          </td>
          <td className={styles.daysblock}>
            <span>월</span>
          </td>
          <td className={styles.daysblock}>
            <span>화</span>
          </td>
          <td className={styles.daysblock}>
            <span>수</span>
          </td>
          <td className={styles.daysblock}>
            <span>목</span>
          </td>
          <td className={styles.daysblock}>
            <span>금</span>
          </td>
          <td className={styles.daysblock}>
            <span>토 </span>
          </td>
        </tr>
        {calendarArr()}
      </tbody>
    </table>
  );
};

export default Table;
