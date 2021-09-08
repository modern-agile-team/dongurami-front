import styles from "../../styles/Main/Intro.module.scss";
import React from "react";
import Fade from "react-reveal/Fade";

const Intro = () => {
  return (
  <div className={styles.wrap}>
    <Fade bottom>
    <h1>이런 서비스를 제공해요</h1>
    <div className={styles.imgs}>
      <div className={styles.list}>
        <img src="https://lovelyoch.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd0b116d9-53ca-4376-9c80-c58b8b99fafe%2F%ED%99%94%EB%A9%B4_%EC%BA%A1%EC%B2%98_2021-09-07_145851.jpg?table=block&id=0f0a7dfe-ca14-4d72-abb8-b790e10ad552&spaceId=69eb8ea8-3d04-47ec-8bb7-004e8aa31f9e&width=3170&userId=&cache=v2"/>
        <span>인덕대학교의 모든 중앙/창업 동아리를<br/>한 눈에 볼 수 있어요</span>
      </div>
      <div className={styles.promotion}>
        <img src='https://lovelyoch.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F41c4f3a9-768f-4a9e-bc77-8e8cccec2c3b%2F%ED%99%94%EB%A9%B4_%EC%BA%A1%EC%B2%98_2021-09-07_145942.jpg?table=block&id=45d8bde7-af2e-403f-9303-44bb3c569569&spaceId=69eb8ea8-3d04-47ec-8bb7-004e8aa31f9e&width=2810&userId=&cache=v2'/>
        <span>관심있는 동아리들의 모집시기를 확인하고 <br/>지원할 수 있어요</span>
      </div>
      <div className={styles.home}>
        <img src='https://lovelyoch.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F5faea546-740f-4fdb-a7fb-c74896381a67%2F%ED%99%94%EB%A9%B4_%EC%BA%A1%EC%B2%98_2021-09-07_145814.jpg?table=block&id=4f49cc33-a0e4-420a-bc30-245baff6d17a&spaceId=69eb8ea8-3d04-47ec-8bb7-004e8aa31f9e&width=3170&userId=&cache=v2'/>
        <span>동아리에 대한 더 많은 정보가 필요하다면 <br/>각 동아리 홈을 이용해보세요</span>
      </div>
    </div>
    </Fade>
  </div>
  );
};

export default Intro;
