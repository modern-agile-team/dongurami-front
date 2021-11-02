import React from "react";
import styles from "../../../styles/Club/Home/Activities/Act.module.scss";

const Act = ({ post, onClick }) => {
  return (
    <div className={styles.container} onClick={() => onClick(post.no)}>
      <img src={post.url ?? 'https://alisebodycare.com/wp-content/uploads/2017/05/image-placeholder-500x500.jpg'} alt="thumbnail" />
      <div>
        <p className={styles.title}>{post.title}</p>
        <p className={styles.name}>{post.studentName}</p>
      </div>
    </div>
  );
};

export default Act;
