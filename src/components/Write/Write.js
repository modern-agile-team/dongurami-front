import styles from './Write.module.sass';
import ReactQuillContainer from './ReactQuillContainer';

function Write() {
  return (
    <div className={styles.container}>
      <input placeholder="제목을 입력하세요" />
      <ReactQuillContainer />
      <button>글 작성</button>
    </div>
  );
}

export default Write;
