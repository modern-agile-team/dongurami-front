import React from 'react';
import styles from '../../../styles/Club/Home/Review/ReviewMine.module.scss';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { FaTrashAlt } from 'react-icons/fa';
import { BsImage } from 'react-icons/bs';

const ReviewMine = ({
  description,
  score,
  inDate,
  onReviewDelete,
  clubInfo
}) => {
  const stars = new Array(score).fill(score);
  const notStars = new Array(5 - score).fill(score);

  return (
    <div className={styles.mine}>
      <div className={styles.header}>
        <div className={styles.club}>
          {clubInfo.logoUrl === null ? (
            <BsImage />
          ) : (
            <img src={clubInfo.logoUrl} alt="동아리 로고" />
          )}
          <div id={styles.date}>
            <span>내가 작성한 후기</span>
            <p>{inDate}</p>
          </div>
        </div>
        <div className={styles.star}>
          {notStars.map((el, i) => {
            return <AiOutlineStar key={5 - i} />;
          })}
          {stars.map((el, i) => {
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
