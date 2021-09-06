import styles from '../../../styles/Common/Comment/AddComment.module.scss';

function AddComment() {
  return (
    <div className={styles.container}>
      <div>닉네임</div>
      <form>
        <input type="text" placeholder="댓글을 남겨보세요" />
        <button type="submit">등록</button>
      </form>
    </div>
  );
}

export default AddComment;
