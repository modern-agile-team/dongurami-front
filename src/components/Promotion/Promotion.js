import React from 'react';
import styles from '../../styles/Board/Promotion/Promotion.module.scss';
import { useRouter } from 'next/router';
import { AiFillHeart } from 'react-icons/ai';

const PromotionItem = ({ setPostId, displayedAt, post }) => {
  const router = useRouter();
  return (
    <div className={styles.promotion}>
      <div
        className={styles.img}
        onClick={() => {
          setPostId(post.id);

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
        {!post.url ? (
          <img
            src="https://i.pinimg.com/236x/df/ef/48/dfef48b50816f9d55767a0260798f0d2.jpg"
            alt="poster"
          />
        ) : (
          <img src={post.url} alt="poster" />
        )}
        <div
          className={styles.creationInfo}
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
          <div className={styles.writerInfo}>
            <p className={styles.writer}>{post.studentName}</p>

            <p className={styles.writer}>{post.clubName}</p>
          </div>
          <div className={styles.date}>
            <p>{post?.inDate?.slice(2, -9)}</p>{' '}
            <div className={styles.like}>
              <AiFillHeart size={13} />
              <span>&nbsp;{post.emotionCount}</span>
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
          {post.title.length > 15
            ? `${post.title.substr(0, 15)}...`
            : post.title}
        </span>
        <div className={styles.extraInfo}>
          <span className={styles.none}></span>
          <span className={styles.hashtag}>#{post.category}</span>
          <span className={styles.time}>{displayedAt(post.date)}</span>
        </div>
      </div>
    </div>
  );
};

export default PromotionItem;
