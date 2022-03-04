import React from 'react';
import styles from 'styles/Club/Home/Review/ReviewMine.module.scss';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { FaTrashAlt, FaUserCircle } from 'react-icons/fa';

const ReviewMine = ({ description, score, inDate, onReviewDelete }) => {
  const stars = new Array(score).fill(score);
  const notStars = new Array(5 - score).fill(score);

  return (
    <div className={styles.mine}>
      <div className={styles.header}>
        <div className={styles.club}>
          <FaUserCircle />
          <div id={styles.date}>
            <span>내가 작성한 후기</span>
            <p>{inDate}</p>
          </div>
        </div>
        <div className={styles.star}>
          {notStars.map((__, i) => {
            return <AiOutlineStar key={5 - i} />;
          })}
          {stars.map((__, i) => {
            return <AiFillStar key={i} />;
          })}
          <div className={styles.update}>
            <FaTrashAlt onClick={onReviewDelete} />
          </div>
        </div>
      </div>
      <div className={styles.review}>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ReviewMine;
