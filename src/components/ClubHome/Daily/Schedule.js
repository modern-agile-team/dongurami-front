import styles from '../../../styles/Club/Home/Schedule/Schedule.module.scss';
import Link from 'next/link';

const Schedule = ({ schedule, nowDay }) => {
  return (
    <div className={styles.container}>
      <div className={styles.schedule}>
        <h4>주요 일정</h4>
        <hr />
        {schedule.map((el) => {
          return el.important === 1 ? (
            <div key={el.no} className={styles.inSchedule}>
              <span style={{ color: `${el.colorCode}` }}>{el.title}</span>
              <br />
              <span>
                {el.startDate} ~ {el.endDate}
              </span>
            </div>
          ) : null;
        })}
      </div>
      <div className={styles.schedule}>
        <h4>오늘의 일정</h4>
        <hr />
        {schedule.map((el) => {
          return Date.parse(el.startDate) <= Date.parse(nowDay) &&
            Date.parse(nowDay) <= Date.parse(el.endDate) ? (
            <div key={el.no} className={styles.inSchedule}>
              <span style={{ color: `${el.colorCode}` }}>{el.title}</span>
              <br />
              <span>
                {el.startDate} ~ {el.endDate}
              </span>
            </div>
          ) : null;
        })}
        <Link href={`/profile/201816035`}>프로필</Link>
      </div>
    </div>
  );
};

export default Schedule;
