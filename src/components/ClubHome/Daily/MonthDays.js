import React from "react";
import styles from "../../../styles/Club/Home/Schedule/Table.module.scss";

const MonthDays = ({ setDate, setPop, index, schedule, days }) => {
  return (
    <td key={index} className={styles.dayblock} id={days.format("YYYY-MM-DD")}>
      <div className={styles.tdBlock}>
        <div className={styles.date}>
          <span
            onClick={() => {
              setPop("DailyControl");
              setDate(days.format("YYYY-MM-DD"));
            }}
            className={styles.monthdays}
          >
            {days.format("D")}
          </span>
        </div>
        <div className={styles.scheduleTitle}>
          {schedule.map((el) => {
            return Date.parse(el.startDate) <=
              Date.parse(days.format("YYYY-MM-DD")) &&
              Date.parse(days.format("YYYY-MM-DD")) <=
                Date.parse(el.endDate) ? (
              <>
                <span
                  className={styles.scheduleSpan}
                  style={{ color: `${el.colorCode}` }}
                  key={days.format("YYYY-MM-DD")}
                >
                  {el.title.split(" ").join("").length < 9
                    ? el.title
                    : el.title.slice(0, 8) + ".."}
                </span>
              </>
            ) : null;
          })}
        </div>
      </div>
    </td>
  );
};

export default MonthDays;
// styles 다 만들어줘야됨
