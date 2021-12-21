import styles from 'styles/Club/Home/Schedule/Schedule.module.scss';

const ScheduleBox = ({ eachSchedule }) => {
  return (
    <div className={styles.inSchedule}>
      <span>{eachSchedule.title}</span>
      <br />
      <span className={styles.date}>
        {eachSchedule.startDate} ~ {eachSchedule.endDate}
      </span>
    </div>
  );
};

export default ScheduleBox;
