import styles from '../../../styles/Common/Comment/Comment.module.scss';

function Comment({ index, body, setAddReplyIndex }) {
  return (
    <div className={styles.comment}>
      <img src="https://picsum.photos/500" alt="profile" />
      <div>
        <div>
          <p>닉네임</p>
          <p>작성자</p>
        </div>
        <div>{body}</div>
        <div>
          <p>2021-08-27</p>
          <p onClick={() => { setAddReplyIndex(index); }}>답글 쓰기</p>
        </div>
      </div>
    </div>
  );
}

export default Comment;
