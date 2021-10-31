import React from 'react';
import styles from '../../../styles/Club/Home/Schedule/Table.module.scss';

const TodayTd = ({ setDate, setPop, nowDate, index, days, schedule }) => {
  return (
    <td
      className={styles.dayblock}
      key={index}
      ref={nowDate}
      id={days.format('YYYY-MM-DD')}
    >
      <div
        className={styles.tdBlock}
        onClick={() => {
          setPop('DailyControl');
          setDate(days.format('YYYY-MM-DD'));
        }}
      >
        <div className={styles.date}>
          <span className={styles.today}>{days.format('D')}</span>
        </div>
        <div className={styles.scheduleTitle}>
          {schedule.map((el, index) => {
            return (
              Date.parse(el.startDate) <=
                Date.parse(days.format('YYYY-MM-DD')) &&
              Date.parse(days.format('YYYY-MM-DD')) <=
                Date.parse(el.endDate) && (
                <span
                  className={styles.scheduleSpan}
                  style={{ background: `${el.colorCode}` }}
                  key={index}
                >
                  {el.title.split(' ').join('').length < 9
                    ? el.title
                    : el.title.slice(0, 8) + '..'}
                </span>
              )
            );
          })}
        </div>
      </div>
    </td>
  );
};

export default TodayTd;
