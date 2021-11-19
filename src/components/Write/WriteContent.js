import styles from "../../styles/Board/Write/WriteContent.module.scss";
import ReactQuillContainer from "./ReactQuillContainer";

function Write({ category, title, description, isAnon, setTitle, setDescription, setIsAnon, onSubmit }) {
  return (
    <div className={styles.container}>
      <input type="text" placeholder="제목을 입력하세요..." value={title} onChange={(e) => setTitle(e.target.value)} />
      <hr />
      <ReactQuillContainer description={description} setDescription={setDescription} />
      <div>
        {(category !== 'promotion') && (<label>
          익명여부:
          <input type="checkbox" value={isAnon} onChange={(e) => setIsAnon(e.target.value)} />
        </label>)}
        <button onClick={onSubmit}>등록</button>
      </div>
    </div>
  );
}

export default Write;
