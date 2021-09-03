import styles from '../../../styles/Common/Comment/Comment.module.scss';

function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://picsum.photos/500" alt="profile" />
      <div>
        <div>
          <p>닉네임</p>
          <p>작성자</p>
        </div>
        <div>본문본문본문본문본문본문본문본문본문본문본문본문본문본문본문</div>
        <div>
          <p>2021-08-27</p>
          <p>답글 쓰기</p>
        </div>
      </div>
    </div>
  );
}

export default Comment;
