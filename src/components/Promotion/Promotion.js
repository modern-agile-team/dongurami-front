import React from 'react';
import styles from '../../styles/Board/Promotion/Promotion.module.scss';
import moment from 'moment';
import { useRouter } from 'next/router';
import { AiFillHeart } from 'react-icons/ai';

function displayedAt(createdAt) {
  const time = moment(createdAt);
  const milliSeconds = moment() - time;
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

const Promotion = ({
  img,
  name,
  clubName,
  date,
  pId,
  setPostId,
  category,
  title,
  emotionCount
}) => {
  const router = useRouter();
  return (
    <div className={styles.promotion}>
      <div
        className={styles.img}
        onClick={() => {
          setPostId(pId);

          router.push(
            {
              pathname: router.pathname,
              query: { id: pId }
            },
            undefined,
            { scroll: false }
          );
        }}
      >
        {!img ? (
          <img
            src="https://i.pinimg.com/236x/df/ef/48/dfef48b50816f9d55767a0260798f0d2.jpg"
            alt="poster"
          />
        ) : (
          <img src={img} alt="poster" />
        )}
        <div
          className={styles.creationInfo}
          onClick={(e) => {
            setPostId(pId);

            router.push(
              {
                pathname: router.pathname,
                query: { id: pId }
              },
              undefined,
              { scroll: false }
            );
          }}
        >
          <div className={styles.writerInfo}>
            <p className={styles.writer}>{name}</p>

            <p className={styles.writer}>{clubName}</p>
          </div>
          <div className={styles.date}>
            <p>{date.slice(2, -9)}</p>{' '}
            <div className={styles.like}>
              <AiFillHeart size={13} />
              <span>&nbsp;{emotionCount}</span>
            </div>
          </div>
        </div>
      </div>
      <div
        className={styles.promotionInfo}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <span className={styles.title}>
          {title.length > 15 ? `${title.substr(0, 15)}...` : title}
        </span>
        <div className={styles.extraInfo}>
          <span className={styles.none}></span>
          <span className={styles.hashtag}>#{category}</span>
          <span className={styles.time}>{displayedAt(date)}</span>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
