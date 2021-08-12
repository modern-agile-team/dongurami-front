import ClubNoticeTable from "./ClubNoticeTable";
import ClubNoticeSearch from "./ClubNoticeSearch";
import ClubNoticePagination from "./ClubNoticePagination";
import styles from "./ClubNotice.module.sass";

function ClubNotice() {
  return (
    <div>
      <div className={styles.container}>
        <ClubNoticeTable />
        <div>
          <ClubNoticeSearch />
          <button>✏️ 글쓰기</button>
        </div>
        <ClubNoticePagination />
        <ClubNoticeSearch />
      </div>
    </div>
  );
}

export default ClubNotice