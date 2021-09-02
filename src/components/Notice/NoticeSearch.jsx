import styles from "../../styles/Board/Notice/NoticeSearch.module.scss";

function NoticeSearch() {
  return (
    <div className={styles.container}>
      <select>
        <option>제목</option>
        <option>내용</option>
        <option>댓글</option>
      </select>
      <input />
      <button>?</button>
    </div>
  );
}

export default NoticeSearch;
