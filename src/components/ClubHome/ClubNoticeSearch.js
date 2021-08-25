import React from "react";
import styles from "../../styles/Club/Home/Notice/ClubNoticeSearch.module.scss";
import { FiSearch } from "react-icons/fi";

function NoticeSearch() {
  return (
    <div className={styles.inputForm}>
      <input type="text" className={styles.input} />
      <FiSearch className={styles.FiSearch} />
    </div>
  );
}
export default NoticeSearch;