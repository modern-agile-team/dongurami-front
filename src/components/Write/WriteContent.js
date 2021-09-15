import styles from "../../styles/Board/Write/WriteContent.module.scss";
import ReactQuillContainer from "./ReactQuillContainer";

function Write({ title, body, setTitle, setBody, onSubmit }) {
  return (
    <div className={styles.container}>
      <input type="text" placeholder="제목을 입력하세요..." value={title} onChange={(e) => setTitle(e.target.value)} />
      <hr />
      <div></div>
      <ReactQuillContainer body={body} setBody={setBody} />
      <div>
        <button onClick={onSubmit}>등록</button>
      </div>
    </div>
  );
}

export default Write;
