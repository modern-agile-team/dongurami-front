import Link from "next/link";
import ClubNoticeTable from "./ClubNoticeTable";
import ClubNoticeSearch from "./ClubNoticeSearch";
import ClubNoticePagination from "./ClubNoticePagination";
import styles from "../../styles/Club/Notice/ClubNotice.module.sass";

function ClubNotice() {
  return (
    <div>
      <div className={styles.container}>
        <ClubNoticeTable />
        <div>
          <ClubNoticeSearch />
          <Link href="/write" passHref>
            <button>✏️ 글쓰기</button>
          </Link>
        </div>
        <ClubNoticePagination />
        <ClubNoticeSearch />
      </div>
    </div>
  );
}

export default ClubNotice;
