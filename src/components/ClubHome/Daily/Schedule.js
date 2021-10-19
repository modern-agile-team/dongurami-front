import styles from '../../../styles/Club/Home/Schedule/Schedule.module.scss';
import Link from 'next/link';

const Schedule = ({ schedule, nowDay }) => {
  return (
    <div className={styles.container}>
      <div className={styles.importantSchedule}>
        <h3>✔ 주요 일정</h3>
        {/* <hr /> */}
        <div className={styles.scheduleWrap}>
        {schedule.map((el) => {
          return el.important === 1 ? (
            <div key={el.no} className={styles.inSchedule}>
              <span>{el.title}</span>
              <br />
              <span className={styles.date}>
                {el.startDate} ~ {el.endDate}
              </span>
            </div>
          ) : null;
        })}
        </div>
      </div>
      <div className={styles.todaySchedule}>
        <h3>✔ 오늘의 일정</h3>
        {/* <hr /> */}
        <div className={styles.scheduleWrap}>
        {schedule.map((el) => {
          return Date.parse(el.startDate) <= Date.parse(nowDay) &&
            Date.parse(nowDay) <= Date.parse(el.endDate) ? (
            <div key={el.no} className={styles.inSchedule}>
              <span>{el.title}</span>
              <br />
              <span className={styles.date}>
                {el.startDate} ~ {el.endDate}
              </span>
            </div>
          ) : null;
        })}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
