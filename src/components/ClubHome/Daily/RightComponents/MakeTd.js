import React from 'react';
import styles from 'styles/Club/Home/Schedule/Table.module.scss';
import OtherDays from '../Tds/OtherDays';
import MonthDays from '../Tds/MonthDays';
import TodayTd from '../Tds/TodayTd';
import moment from 'moment';

const MakeTd = ({ setDate, setPop, schedule, nowDate, today, week }) => {
  return (
    <tr className={styles.num} key={week}>
      {Array(7)
        .fill(0)
        .map((data, index) => {
          let days = today
            .clone()
            .startOf('year')
            .week(week)
            .startOf('week')
            .add(index, 'day');
          if (moment().format('YYYYMMDD') === days.format('YYYYMMDD')) {
            return (
              <TodayTd
                key={index}
                index={index}
                days={days}
                schedule={schedule}
                nowDate={nowDate}
                setPop={setPop}
                setDate={setDate}
              />
            );
          } else if (days.format('MM') !== today.format('MM')) {
            return (
              <OtherDays
                key={index}
                setPop={setPop}
                index={index}
                days={days}
                schedule={schedule}
                setDate={setDate}
              />
            );
          } else {
            return (
              <MonthDays
                key={index}
                setPop={setPop}
                index={index}
                schedule={schedule}
                days={days}
                setDate={setDate}
              />
            );
          }
        })}
    </tr>
  );
};

export default MakeTd;
