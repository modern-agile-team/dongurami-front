import React from 'react';
import styles from 'styles/Club/Home/Schedule/Table.module.scss';

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
          <div className={styles.todayContainer}>
            <span className={styles.today}>{days.format('D')}</span>
          </div>
        </div>
        <div className={styles.scheduleTitle}>
          {schedule.map((schedule, index) => {
            return (
              Date.parse(schedule.startDate) <=
                Date.parse(days.format('YYYY-MM-DD')) &&
              Date.parse(days.format('YYYY-MM-DD')) <=
                Date.parse(schedule.endDate) && (
                <span
                  className={styles.scheduleSpan}
                  style={{ background: `${schedule.colorCode}` }}
                  key={index}
                >
                  {schedule.title.split(' ').join('').length < 9
                    ? schedule.title
                    : schedule.title.slice(0, 8) + '..'}
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
