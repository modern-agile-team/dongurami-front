import React from "react";
import styles from "../../styles/Board/Promotion/Post.module.scss";

const Post = () => {
  return (
    <div className={styles.post}>
      <div className={styles.container}>
        <div>
          <div>안녕</div>
          <div>친구야</div>
          <div>
            <div>내이름은</div>
            <div>
              <div>너야</div>
              <div>조회</div>
            </div>
          </div>
        </div>
        <hr />
        <div></div>
      </div>
    </div>
  );
};

export default Post;
