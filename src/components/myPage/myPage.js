import styles from "../../styles/User/MyPage/myPage.module.scss";
import Router from "next/router";
import { FiUser } from "react-icons/fi";

const MyPage = () => {
  const movePage = () => {
    Router.push("/clubhome");
    //history 상 이전 페이지로 이동하는 함수 작성해야됨
  };

  const moveInfo = () => {
    Router.push("/modifyInfo");
  };

  return (
    <div className={styles.back}>
      <div className={styles.container}>
        <div className={styles.myHeader}>
          <FiUser className={styles.user} />
        </div>
        <span className={styles.setting} onClick={moveInfo}>
          개인정보 수정
        </span>
        <div className={styles.wrap}>
          <h4>박현우</h4>
          <hr />
          <p>학과</p>
          <p>정보통신공학과</p>
          <p>소속 동아리</p>
          <br />
          <span onClick={movePage}>우아한 애자일</span>
        </div>
      </div>
      <button className={styles.button} onClick={movePage}>
        돌아가기
      </button>
    </div>
  );
};

export default MyPage;
