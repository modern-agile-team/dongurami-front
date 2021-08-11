import styles from './AddComment.module.sass';

function AddComment() {
  return (
    <div className={styles.comment}>
      <img src="https://picsum.photos/500" alt="profile" />
      <div>
        <div>
          <p>닉네임</p>
          <p>2021.08.11 15:31</p>
        </div>
        <div>
          <textarea />
          <button>등록</button>
        </div>
      </div>
    </div>
  );
}

export default AddComment;
