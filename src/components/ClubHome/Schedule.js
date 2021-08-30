import styles from "../../styles/Club/Home/Schedule/Schedule.module.scss";

const Schedule = () => {
  return (
    <div className={styles.container}>
      <div className={styles.schedule}>주요 일정</div>
      <div className={styles.schedule}>오늘의 일정</div>
    </div>
  );
};

export default Schedule;