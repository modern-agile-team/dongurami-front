import React from 'react';
import styles from '../../../styles/Club/Home/Schedule/Table.module.scss';
const yoil = ['일', '월', '화', '수', '목', '금', '토'];
const Table = ({ calendarArr }) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.yoil}>
        {yoil.map((el, index) => {
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
