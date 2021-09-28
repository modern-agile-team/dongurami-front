import styles from "../../../styles/Club/Home/Schedule/Schedule.module.scss";
import Router from "next/router";

const Schedule = () => {
  const goMypage = () => {
    Router.push("/myPage");
  };

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
        <span onClick={goMypage}>박현우</span>
      </div>
    </div>
  );
};

export default Schedule;
