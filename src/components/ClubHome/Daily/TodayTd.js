import React from "react";
import styles from "../../../styles/Club/Home/Schedule/Table.module.scss";

const TodayTd = ({ setDate, setPop, nowDate, index, days, schedule }) => {
  return (
    <td
      className={styles.dayblock}
      key={index}
      ref={nowDate}
      id={days.format("YYYY-MM-DD")}
    >
      <div className={styles.tdBlock}>
        <div className={styles.date}>
          <span
            onClick={() => {
              setPop("DailyControl");
              setDate(days.format("YYYY-MM-DD"));
            }}
            className={styles.today}
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
              <div>
                <span
                  className={styles.scheduleSpan}
                  style={{ color: `${el.colorCode}` }}
                  key={days.format("YYYY-MM-DD")}
                >
                  {el.title.split(" ").join("").length < 9
                    ? el.title
                    : el.title.slice(0, 8) + ".."}
                </span>
              </div>
            ) : null;
          })}
        </div>
      </div>
    </td>
  );
};

export default TodayTd;
