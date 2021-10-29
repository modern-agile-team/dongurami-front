import React from 'react';
import styles from '../../../styles/Club/Home/Review/ReviewList.module.scss';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BsImage } from 'react-icons/bs';

const ReviewList = ({ rate, desc, date, clubInfo }) => {
  const stars = new Array(rate).fill(rate);
  const notStars = new Array(5 - rate).fill(rate);

  return (
    <div className={styles.list}>
      <div className={styles.header}>
        <div className={styles.club}>
          {clubInfo.logoUrl === null ? (
            <BsImage />
          ) : (
            <img src={clubInfo.logoUrl} alt="동아리 로고" />
          )}
          <div id={styles.date}>
            <span>{clubInfo.name}</span>
            <p>{date}</p>
          </div>
        </div>
        <div className={styles.star}>
          {notStars.map((el, i) => {
            return <AiOutlineStar key={5 - i} />;
          })}
          {stars.map((el, i) => {
            return <AiFillStar key={i} />;
          })}
        </div>
      </div>
      <div className={styles.review}>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default ReviewList;
