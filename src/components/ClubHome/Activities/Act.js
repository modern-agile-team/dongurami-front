import React from "react";
import styles from "../../../styles/Club/Home/Activities/Act.module.scss";

const Act = ({ post, onClick }) => {
  return (
    <div className={styles.container}>
      <img src={post.url ?? 'https://alisebodycare.com/wp-content/uploads/2017/05/image-placeholder-500x500.jpg'} onClick={() => onClick(post.no)} alt="test" />
      <div>
        <p className={styles.title}>{post.title}</p>
        <p className={styles.name}>{post.studentName}</p>
      </div>
    </div>
  );
};

export default Act;
