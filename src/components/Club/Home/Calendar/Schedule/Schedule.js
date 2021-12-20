import styles from 'styles/Club/Home/Schedule/Schedule.module.scss';
import ScheduleBox from './ScheduleBox';

const Schedule = ({ inDate, todayData, schedule, nowDay }) => {
  return (
    <div className={styles.container}>
      <div className={styles.importantSchedule}>
        <h3>✔ 이달의 일정</h3>
        <div className={styles.scheduleWrap}>
          {schedule.map((eachSchedule) => {
            return (
              eachSchedule.important === 1 && (
                <ScheduleBox
                  key={eachSchedule.no}
                  eachSchedule={eachSchedule}
                />
              )
            );
          })}
        </div>
      </div>
      <div className={styles.todaySchedule}>
        <h3>✔ 오늘의 일정</h3>
        <div className={styles.scheduleWrap}>
          {todayData.result.map((eachSchedule) => {
            return (
              inDate(eachSchedule.startDate, nowDay, eachSchedule.endDate) && (
                <ScheduleBox
                  key={eachSchedule.no}
                  eachSchedule={eachSchedule}
                />
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
