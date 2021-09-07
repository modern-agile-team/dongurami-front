import styles from "../../styles/Main/OurIntro.module.scss";
import React from "react";

const OurIntro = () => {
  return (
  <div className={styles.wrap}>
        <img src="https://lovelyoch.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd4fd10ea-d2b7-4777-a4cb-d4e5ccbf1f63%2F%EC%9A%B0%EC%95%A0_%EC%A0%84%EC%B2%B4%EC%83%B7.jpg?table=block&id=9ab79fa2-a9c5-41cc-a891-cbe204a334d2&spaceId=69eb8ea8-3d04-47ec-8bb7-004e8aa31f9e&width=2880&userId=&cache=v2"/>
        <div className={styles.text}>
        <h1>SW 개발 전문 동아리
        <br/>우아한 애자일</h1>
        <span>동그라미는 우아한 애자일에서 개발했으며
        <br/>현재도 인덕대학교 학생들을 위한 서비스를 개발중입니다.</span>
        </div>
  </div>
  );
};

export default OurIntro;
