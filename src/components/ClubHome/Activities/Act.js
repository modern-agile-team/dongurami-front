import React from 'react';
import styles from '../../../styles/Club/Home/Activities/Act.module.scss';
import { FaHeart } from 'react-icons/fa';

const Act = ({ post, onClick }) => {
  return (
    <div className={styles.container} onClick={() => onClick(post.no)}>
      <img
        src={
          post.url ??
          'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e74c8ff8-e378-44ef-8d24-a3454caed2ea/no_image-02.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211210T065845Z&X-Amz-Expires=86400&X-Amz-Signature=dc2d1160848671b6c7ce9a7347bddcce5f46da0fc384bbf5d4e80653737c7fad&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22no%2520image-02.jpg%22&x-id=GetObject'
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
