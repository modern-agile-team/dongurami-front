import React from 'react';
import styles from 'styles/Club/Home/Review/ReviewList.module.scss';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';

const ReviewList = ({ rate, desc, date, index }) => {
  const stars = new Array(rate).fill(rate);
  const notStars = new Array(5 - rate).fill(rate);

  return (
    <div className={styles.list}>
      <div className={styles.header}>
        <div className={styles.club}>
          <FaUserCircle />
          <div id={styles.date}>
            <span>익명 {index + 1}</span>
            <p>{date}</p>
          </div>
        </div>
        <div className={styles.star}>
          {notStars.map((__, i) => {
            return <AiOutlineStar key={5 - i} />;
          })}
          {stars.map((__, i) => {
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
