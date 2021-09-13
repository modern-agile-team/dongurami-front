import styles from '../../../styles/Common/Comment/Comment.module.scss';

function Comment({ comment, index, setAddReplyIndex }) {
  return (
    <div className={styles.comment}>
      <img src="https://picsum.photos/500" alt="profile" />
      <div>
        <div>
          <p>{comment.studentName}</p>
          <p>작성자</p>
        </div>
        <div>{comment.description}</div>
        <div>
          <p>{comment.inDate}</p>
          <p onClick={() => { setAddReplyIndex(index); }}>답글 쓰기</p>
        </div>
      </div>
    </div>
  );
}

export default Comment;
