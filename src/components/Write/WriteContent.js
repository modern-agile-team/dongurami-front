import styles from "../../styles/Board/Write/WriteContent.module.scss";
import ReactQuillContainer from "./ReactQuillContainer";

function Write({ category, title, description, isAnon, setTitle, setDescription, setIsAnon, onSubmit }) {
  console.log(category);
  return (
    <div className={styles.container}>
      <input type="text" placeholder="제목을 입력하세요..." value={title} onChange={(e) => setTitle(e.target.value)} />
      <hr />
      <ReactQuillContainer description={description} setDescription={setDescription} />
      <div>
        {(category !== 'promotion' && category !== 'notice' && category !== 'clubNotice' && category !== 'clubActivity') && (<label>
          익명여부:
          <input type="checkbox" checked={isAnon} onChange={() => setIsAnon(!isAnon)} />
        </label>)}
        <button onClick={onSubmit}>등록</button>
      </div>
    </div>
  );
}

export default Write;
