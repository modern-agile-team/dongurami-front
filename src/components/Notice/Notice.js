import Link from 'next/link';
import Header from "../Common/Header";
import styles from "../../styles/Board/Notice/Notice.module.scss";
import NoticeTable from './NoticeTable';
import NoticePagination from './NoticePagination';
import NoticeSearch from './NoticeSearch';

function Notice() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.innerContainer}>
        <h1>공지 게시판</h1>
        <hr />
        <div className={styles.orderBy}>
          <Link href="/write" passHref><button>✏️ 글쓰기</button></Link>
          <select>
            <option>날짜순</option>
            <option>조회수순</option>
          </select>
        </div>
        <NoticeTable />
        <NoticePagination />
        <NoticeSearch />
      </div>
    </div>
  );
}

export default Notice;
