import styles from "../../styles/Board/Board/Search.module.scss";
import { BsSearch } from 'react-icons/bs';

function NoticeSearch() {
  return (
    <div className={styles.container}>
      <select>
        <option>제목</option>
        <option>내용</option>
        <option>댓글</option>
      </select>
      <input />
      <button><BsSearch /></button>
    </div>
  );
}

export default NoticeSearch;
