import React from "react";
import styles from "../../styles/Board/Promotion/Post.module.scss";

const Post = ({ postData }) => {
  const { name, hit, title, inDate, description } = postData;
  return (
    <div className={styles.post}>
      <div className={styles.container}>
        <div>
          <div>홍보게시판</div>
          <div>{title}</div>
          <div>
            <div>{name}</div>
            <div>
              <div>{inDate}</div>
              <div>조회 {hit}</div>
            </div>
          </div>
        </div>
        <hr />
        <div dangerouslySetInnerHTML={{ __html: description }}></div>
      </div>
    </div>
  );
};

export default Post;
