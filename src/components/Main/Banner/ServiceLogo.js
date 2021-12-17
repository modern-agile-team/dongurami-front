import React from 'react';
import styles from '../../../styles/Main/ServiceLogo.module.scss';
import Reveal from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -120px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

function ServiceLogo() {
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <div className={styles.des}>
          <h1>
            <div className={styles.title}>
              <p className={styles.logo}>동그라미</p>에서 <br />
            </div>
            원하는 <br />
            동아리를 <br />
            찾아보세요 :)
          </h1>
          <span>인덕대학교의 모든 동아리들을 동그라미에서 만나보세요</span>
        </div>
        <div className={styles.image}>
          <Reveal triggerOnce keyframes={customAnimation}>
            <img
              alt="동그라미 메인 이미지"
              src="https://cdn.pixabay.com/photo/2021/02/08/16/45/stick-kids-5995514_1280.png"
            />
          </Reveal>
        </div>
      </div>
    </div>
  );
}

export default ServiceLogo;
