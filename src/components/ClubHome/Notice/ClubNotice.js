import ClubNoticeTable from "./ClubNoticeTable";
import ClubNoticeSearch from "./ClubNoticeSearch";
import ClubNoticePagination from "./ClubNoticePagination";
import styles from "../../../styles/Club/Home/Notice/ClubNotice.module.scss";

function ClubNotice() {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h1>공지 게시판</h1>
        <hr />
        <div className={styles.orderBy}>
          <button>✏️ 글쓰기</button>
          <select>
            <option>날짜순</option>
            <option>조회수순</option>
          </select>
        </div>
        <ClubNoticeTable />
        <ClubNoticePagination />
        <ClubNoticeSearch />
      </div>
    </div>
  );
}

export default ClubNotice;
