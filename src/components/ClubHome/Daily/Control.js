import React from 'react';
import styles from '../../../styles/Club/Home/Schedule/RightContainer.module.scss';

const Control = ({ setMoment, momentTime, today, setPop }) => {
  return (
    <div>
      <div className={styles.control}>
        <span
          className={styles.lastmonth}
          onClick={() => {
            setMoment(momentTime.clone().subtract(1, 'month'));
          }}
        >
          &lt;
        </span>
        <span className={styles.thisMonth}>{today.format('YYYY년 MM월')}</span>
        <span
          className={styles.nextmonth}
          onClick={() => {
            setMoment(momentTime.clone().add(1, 'month'));
          }}
        >
          &gt;
        </span>
      </div>
      <div className={styles.add}>
        <span className={styles.addBtn} onClick={() => setPop('DailyModal')}>
          일정 추가하기
        </span>
      </div>
    </div>
  );
};

export default Control;
