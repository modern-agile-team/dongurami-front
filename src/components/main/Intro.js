import styles from '../../styles/Main/Intro.module.scss';
import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Intro = () => {
  return (
    <div className={styles.wrap}>
      <Fade triggerOnce direction={'up'}>
        <h1>이런 서비스를 제공해요</h1>
        <div className={styles.imgs}>
          <div className={styles.list}>
            <img src="https://lovelyoch.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F95826df6-71b6-4f00-ac6e-3e2b59754928%2F%EB%AA%A9%EB%A1%9D.jpg?table=block&id=d6bbfbbb-f5a1-46f4-9c07-8db9ef414ab2&spaceId=69eb8ea8-3d04-47ec-8bb7-004e8aa31f9e&width=1810&userId=&cache=v2" />
            <span>
              인덕대학교의 모든 중앙/창업 동아리를
              <br />한 눈에 볼 수 있어요
            </span>
          </div>
          <div className={styles.promotion}>
            <img src="https://lovelyoch.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fae76f429-31ce-412e-8731-da34dd1785f2%2F%ED%99%8D%EB%B3%B4.jpg?table=block&id=10cdd19e-5c54-4d1c-9e77-3931b8968465&spaceId=69eb8ea8-3d04-47ec-8bb7-004e8aa31f9e&width=1810&userId=&cache=v2" />
            <span>
              관심있는 동아리들의 모집시기를 확인하고 <br />
              지원할 수 있어요
            </span>
          </div>
          <div className={styles.home}>
            <img src="https://lovelyoch.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3abc6cfe-4357-4542-9dec-1a425e9baf6c%2F%ED%99%88.jpg?table=block&id=876b06d9-a073-4172-9428-2c3db88850e6&spaceId=69eb8ea8-3d04-47ec-8bb7-004e8aa31f9e&width=1840&userId=&cache=v2" />
            <span>
              동아리에 대한 더 많은 정보가 필요하다면 <br />각 동아리 홈을
              이용해보세요
            </span>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Intro;
