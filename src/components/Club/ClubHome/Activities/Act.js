import React from 'react';
import styles from 'styles/Club/Home/Activities/Act.module.scss';
import { FaHeart } from 'react-icons/fa';

const Act = ({ post, onClick }) => {
  return (
    <div className={styles.container} onClick={() => onClick(post.no)}>
      <img
        src={
          post.url ??
          'https://lovelyoch.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F4e46483e-8f9e-492d-a669-98f94bd535b0%2Fno_image-02.jpg?table=block&id=743ff147-0df9-4565-8666-ae99f522159a&spaceId=69eb8ea8-3d04-47ec-8bb7-004e8aa31f9e&width=1670&userId=&cache=v2'
        }
        alt="thumbnail"
      />
      <div>
        <p className={styles.title}>{post.title}</p>
        <span className={styles.name}>{post.studentName}</span>
        <span className={styles.emotion}>
          <FaHeart /> {post.emotionCount}
        </span>
      </div>
    </div>
  );
};

export default Act;
