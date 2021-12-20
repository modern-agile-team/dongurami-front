import React from 'react';
import styles from 'styles/Club/Home/Schedule/Table.module.scss';
import MonthDays from './MonthDays';

const MakeTd = ({
  inDate,
  setDate,
  setPop,
  schedule,
  today,
  week,
  checkFlag
}) => {
  return (
    <tr className={styles.num} key={week}>
      {Array(7)
        .fill(0)
        .map((data, index) => {
          const days = today
            .clone()
            .startOf('year')
            .week(week)
            .startOf('week')
            .add(index, 'day');

          return (
            <MonthDays
              flag={checkFlag(days)}
              key={index}
              days={days}
              schedule={schedule}
              setDate={() => {
                setPop('DailyControl');
                setDate(days.format('YYYY-MM-DD'));
              }}
              inDate={inDate}
            />
          );
        })}
    </tr>
  );
};

export default MakeTd;
