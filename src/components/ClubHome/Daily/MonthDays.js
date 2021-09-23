import React from "react";
import styles from "../../../styles/Club/Home/Schedule/Calendar.module.scss";

const MonthDays = ({ setDate, setPop, index, schedule, days }) => {
  return (
    <td key={index} className={styles.dayblock} id={days.format("YYYY-MM-DD")}>
      <span
        onClick={() => {
          setPop(2);
          setDate(days.format("YYYY-MM-DD"));
        }}
        className={styles.monthdays}
      >
        {days.format("D")}
      </span>
      {schedule.map((el, i) => {
        return Date.parse(el.startDate) <=
          Date.parse(days.format("YYYY-MM-DD")) &&
          Date.parse(days.format("YYYY-MM-DD")) <= Date.parse(el.endDate) ? (
          <>
            <br />
            <span
              style={{ color: `${el.colorCode}` }}
              key={days.format("YYYY-MM-DD")}
            >
              {el.title}
            </span>
          </>
        ) : null;
      })}
    </td>
  );
};

export default MonthDays;
// styles 다 만들어줘야됨
