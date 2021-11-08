import moment from 'moment';
import React, { useCallback } from 'react';
import styles from 'styles/Club/Home/Schedule/Table.module.scss';
import MonthDays from './MonthDays';

const MakeTd = ({ setDate, setPop, schedule, today, week }) => {
  const checkFlag = useCallback(
    (days) => {
      if (moment().format('YYYYMMDD') === days.format('YYYYMMDD')) {
        return 'today';
      } else if (days.format('MM') !== today.format('MM')) {
        return 'other';
      }
      return 'month';
    },
    [today]
  );

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
            />
          );
        })}
    </tr>
  );
};

export default MakeTd;
