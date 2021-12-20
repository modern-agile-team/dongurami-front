import React from 'react';
import styles from 'styles/Club/Home/Schedule/Table.module.scss';

const Table = ({ calendarArr, weekDays }) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.weekDays}>
        {weekDays.map((el, index) => {
          return <span key={index}>{el}</span>;
        })}
      </div>
      <table className={styles.calendar}>
        <tbody>{calendarArr()}</tbody>
      </table>
    </div>
  );
};

export default Table;
