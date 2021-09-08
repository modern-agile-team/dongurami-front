import styles from "../../../styles/Club/Home/Schedule/Schedule.module.scss";

const Schedule = () => {
  return (
    <div className={styles.container}>
      <div className={styles.schedule}>
        <h4>주요 일정</h4>
        <div>
          <p>추석</p>
          <p>9월 20일 ~ 9월 22일</p>  
        </div>
      </div>
      <div className={styles.schedule}>
        <h4>오늘의 일정</h4>
        <p>일정이 없습니다</p>  
      </div>
    </div>
  );
};

export default Schedule;