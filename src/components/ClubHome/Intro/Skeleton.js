import React from 'react';
import styles from '../../../styles/Club/Home/Intro/Skeleton.module.scss';

const Skeleton = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.desc}>
          <div className={styles.thumbnail}>
            <h1>동아리명</h1>
          </div>
          <div className={styles.categori}>
            <p>동아리원</p>
          </div>
          <div className={styles.population}>
            <span>동아리원</span>
            <span>남자</span>
            <span>여자</span>
          </div>
        </div>
        <div className={styles.imgContainer}></div>
      </div>
      <div className={styles.intro}>
        <span>동아리 소개</span>
        <div>
          <p id={styles.desc}></p>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
