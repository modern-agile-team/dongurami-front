import React from "react";
import styles from "../../../styles/Club/Home/Schedule/Calendar.module.scss";

const OtherDays = ({ setPop, setDate, index, days, schedule }) => {
  return (
    <td key={index} className={styles.dayblock} id={days.format("YYYY-MM-DD")}>
      <span
        onClick={() => {
          setPop("DailyControl");
          setDate(days.format("YYYY-MM-DD"));
        }}
        className={styles.otherday}
      >
        {days.format("D")}
      </span>
      {schedule.map((el) => {
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

export default OtherDays;
