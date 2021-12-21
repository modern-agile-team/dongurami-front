import React from 'react';
import styles from 'styles/Club/Home/Schedule/Calendar.module.scss';
import Table from './Table';
import Control from './Control';

const RightContainer = ({
  setMoment,
  momentTime,
  today,
  setPop,
  calendarArr,
  weekDays
}) => {
  return (
    <div className={styles.right}>
      <Control
        setMoment={setMoment}
        momentTime={momentTime}
        today={today}
        setPop={setPop}
      />
      <Table calendarArr={calendarArr} weekDays={weekDays} />
    </div>
  );
};

export default RightContainer;
