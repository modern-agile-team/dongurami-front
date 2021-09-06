import Header from "../Common/Header";
import styles from "../../styles/Board/Write/Write.module.scss";
import ReactQuillContainer from "./ReactQuillContainer";

function Write() {
  return (
    <div className={styles.container}>
      <Header />
      <h1>자유게시판 글쓰기</h1>
      <div>
        <input type="text" placeholder="제목을 입력하세요..." />
        <hr />
        <div></div>
        <ReactQuillContainer />
        <div>
          <button>등록</button>
        </div>
      </div>
    </div>
  );
}

export default Write;
