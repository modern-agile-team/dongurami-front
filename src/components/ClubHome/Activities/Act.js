import React from "react";
import styles from "../../../styles/Club/Home/Activities/Act.module.scss";

const Act = ({ post, onClick }) => {
  return (
    <div className={styles.container}>
      <img src={`https://picsum.photos/500?random=${post.no}`} onClick={() => onClick(post.no)} alt="test" />
      <div>
        <p className={styles.title}>{post.title}</p>
        <p className={styles.name}>{post.studentName}</p>
      </div>
    </div>
  );
};

export default Act;
