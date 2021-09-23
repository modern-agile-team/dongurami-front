import React from "react";
import styles from "../../../styles/Club/Home/Schedule/Calendar.module.scss";
import OtherDays from "./OtherDays";
import MonthDays from "./MonthDays";
import TodayTd from "./TodayTd";
import moment from "moment";

const MakeTd = ({ schedule, nowDate, today, week }) => {
  return (
    <tr className={styles.num} key={week}>
      {Array(7)
        .fill(0)
        .map((data, index) => {
          let days = today
            .clone()
            .startOf("year")
            .week(week)
            .startOf("week")
            .add(index, "day");
          if (moment().format("YYYYMMDD") === days.format("YYYYMMDD")) {
            return (
              <TodayTd
                index={index}
                days={days}
                schedule={schedule}
                nowDate={nowDate}
              />
            );
          } else if (days.format("MM") !== today.format("MM")) {
            return <OtherDays index={index} days={days} schedule={schedule} />;
          } else {
            return <MonthDays index={index} schedule={schedule} days={days} />;
          }
        })}
    </tr>
  );
};

export default MakeTd;
