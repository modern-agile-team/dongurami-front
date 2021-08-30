import styles from "../../styles/Club/Home/Intro/ClubIntro.module.scss";

const ClubIntro = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <img
          src="https://lovelyoch.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F65bcaa80-1b5b-4662-82c2-41d689605df2%2F%EC%9A%B0%EC%95%84%ED%95%9C_%EC%95%A0%EC%9E%90%EC%9D%BC_%EB%A1%9C%EA%B3%A0.png?table=block&id=c6f4102e-005c-45a7-bc48-27ecaacc7a0d&spaceId=69eb8ea8-3d04-47ec-8bb7-004e8aa31f9e&width=250&userId=&cache=v2"
          alt="우아한 애자일"
        />
      </div>
      <div className={styles.intro}>
        <span>동아리 소개</span>
      </div>
    </div>
  );
};

export default ClubIntro;
