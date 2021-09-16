import React, { useState } from "react";
import styles from "../../styles/Board/Promotion/Promotion.module.scss";

function displayedAt(createdAt) {
  const time = new Date(createdAt);
  const milliSeconds = new Date() - time;
  const seconds = milliSeconds / 1000;

  if (seconds < 60) return `방금 전`;
  const minutes = seconds / 60;
  if (minutes < 60) return `${Math.floor(minutes)}분 전`;
  const hours = minutes / 60;
  if (hours < 24) return `${Math.floor(hours)}시간 전`;
  const days = hours / 24;
  if (days < 7) return `${Math.floor(days)}일 전`;
  const weeks = days / 7;
  if (weeks < 5) return `${Math.floor(weeks)}주 전`;
  const months = days / 30;
  if (months < 12) return `${Math.floor(months)}개월 전`;
  const years = days / 365;
  return `${Math.floor(years)}년 전`;
}

const Promotion = ({ img, clubName, setOpenModal, date, pId, setPostId }) => {
  return (
    <div className={styles.promotion}>
      <div className={styles.img}>
        <img src={img} alt="poster" />
        <div
          className={styles.creationInfo}
          onClick={(e) => {
            setPostId(pId);
            setOpenModal(true);
          }}
        >
          <div
            className={styles.writerInfo}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className={styles.writer}>최두리</div>
            <div className={styles.writer}>우아한애자일</div>
          </div>
          <div
            className={styles.date}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {date.slice(2, -9)}
          </div>
        </div>
      </div>
      <div className={styles.promotionInfo}>
        <p className={styles.description}>{clubName}</p>
        <p className={styles.hashtag}>#IT</p>
        <p className={styles.time}>{displayedAt(date)}</p>
      </div>
    </div>
  );
};

export default Promotion;
