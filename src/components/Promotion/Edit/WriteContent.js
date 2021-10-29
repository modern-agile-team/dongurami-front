import styles from '../../../styles/Board/Promotion/EditPage.module.scss';
import ReactQuillContainer from './ReactQuilContainer';

function Write({
  title,
  description,
  setTitle,
  setDescription,
  onSubmit,
  onOpen
}) {
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="제목을 입력하세요..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <hr />
      <div></div>
      <ReactQuillContainer
        description={description}
        setDescription={setDescription}
      />
      <div>
        <button onClick={onOpen}>포스터 수정</button>
        <button onClick={onSubmit}>수정 완료</button>
      </div>
    </div>
  );
}

export default Write;
