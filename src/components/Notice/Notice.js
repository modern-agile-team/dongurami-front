import Link from 'next/link';
import Header from "../Common/Header";
import NoticeTable from "./NoticeTable";
import NoticeSearch from "./NoticeSearch";
import NoticePagination from "./NoticePagination";
import styles from "./Notice.module.sass";

function Notice() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <NoticeTable />
        <div>
          <NoticeSearch />
          <Link href="/write" passHref>
            <button>✏️ 글쓰기</button>
          </Link>
        </div>
        <NoticePagination />
        <NoticeSearch />
      </div>
    </div>
  );
}

export default Notice;
