import styles from "../../../styles/Club/Home/Intro/ClubIntro.module.scss";
import ClubInfo from "./ClubInfo";

const ClubIntro = () => {
  return (
    <div className={styles.container}>
      <ClubInfo />
      <div className={styles.intro}>
        <span>동아리 소개</span>
        <div id={styles.desc}>
          <p>안녕하세요 저희는 인덕대학교 개발 동아리 우아한 애자일입니다.</p>
        </div>
      </div>
    </div>
  );
};

export default ClubIntro;
