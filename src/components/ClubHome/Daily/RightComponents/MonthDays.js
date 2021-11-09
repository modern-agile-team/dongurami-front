import React, { useMemo } from 'react';
import styles from 'styles/Club/Home/Schedule/Table.module.scss';

const MonthDays = ({ setDate, schedule, days, flag }) => {
  const dataStructure = useMemo(() => {
    if (flag === 'other') {
      return {
        class: styles.otherday,
        styleKey: 'color'
      };
    } else {
      return {
        class: styles.monthday,
        styleKey: 'background'
      };
    }
  }, [flag]);
  return (
    <td className={styles.dayblock} id={days.format('YYYY-MM-DD')}>
      <div className={styles.tdBlock} onClick={setDate}>
        <div className={styles.date}>
          {flag === 'today' ? (
            <div className={styles.todayContainer}>
              <span className={dataStructure.class}>{days.format('D')}</span>
            </div>
          ) : (
            <span className={dataStructure.class}>{days.format('D')}</span>
          )}
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
                  style={{ [dataStructure.styleKey]: `${schedule.colorCode}` }}
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

export default MonthDays;
