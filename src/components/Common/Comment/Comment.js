import styles from "../../../styles/Common/Comment.module.sass";

function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://picsum.photos/500" alt="profile" />
      <div>
        <div>
          <p>닉네임</p>
          <p>2021.08.11 15:31</p>
        </div>
        <div>
          본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문
          <br />
          test
          <br />
          test
          <br />
          test
        </div>
      </div>
    </div>
  );
}

export default Comment;
