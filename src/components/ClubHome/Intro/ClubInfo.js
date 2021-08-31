import styles from "../../../styles/Club/Home/Intro/ClubInfo.module.scss";
import { AiOutlineMan, AiOutlineWoman } from "react-icons/ai";

const ClubInfo = () => {
  const iconSize = 40;
  return (
    <div className={styles.info}>
      <div id={styles.logo}>
        <img
          src="https://lovelyoch.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F65bcaa80-1b5b-4662-82c2-41d689605df2%2F%EC%9A%B0%EC%95%84%ED%95%9C_%EC%95%A0%EC%9E%90%EC%9D%BC_%EB%A1%9C%EA%B3%A0.png?table=block&id=c6f4102e-005c-45a7-bc48-27ecaacc7a0d&spaceId=69eb8ea8-3d04-47ec-8bb7-004e8aa31f9e&width=250&userId=&cache=v2"
          alt="우아한 애자일"
        />
      </div>
      <div className={styles.club}>
        <div>
          <p id={styles.clubName}>우아한 애자일</p>
          <p id={styles.categori}>IT 동아리</p>
        </div>
        <div className={styles.sex}>
          <div>
            <AiOutlineMan size={iconSize} />
            <span>6</span>
          </div>
          <div>
            <AiOutlineWoman size={iconSize} />
            <span>3</span>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ClubInfo;
