import Header from '../Common/Header';
import NoticeTable from "./NoticeTable";
import NoticePagination from './NoticePagination';
import styles from './Notice.module.sass';

function Notice() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <NoticeTable />
        <div>
          <p>test</p>
          <button>✏️ 글쓰기</button>
        </div>
        <NoticePagination />
      </div>
    </div>
  );
}

export default Notice;
