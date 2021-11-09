import styles from '../../../styles/Club/Home/Schedule/Schedule.module.scss';

const Schedule = ({ inDate, todayData, schedule, nowDay }) => {
  return (
    <div className={styles.container}>
      <div className={styles.importantSchedule}>
        <h3>✔ 이달의 일정</h3>
        <div className={styles.scheduleWrap}>
          {schedule.map((el) => {
            return (
              el.important === 1 && (
                <div key={el.no} className={styles.inSchedule}>
                  <span>{el.title}</span>
                  <br />
                  <span className={styles.date}>
                    {el.startDate} ~ {el.endDate}
                  </span>
                </div>
              )
            );
          })}
        </div>
      </div>
      <div className={styles.todaySchedule}>
        <h3>✔ 오늘의 일정</h3>
        <div className={styles.scheduleWrap}>
          {todayData.result.map((el) => {
            return (
              inDate(el.startDate, nowDay, el.endDate) && (
                <div key={el.no} className={styles.inSchedule}>
                  <span>{el.title}</span>
                  <br />
                  <span className={styles.date}>
                    {el.startDate} ~ {el.endDate}
                  </span>
                </div>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
