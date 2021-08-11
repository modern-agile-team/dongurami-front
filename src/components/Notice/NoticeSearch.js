import React from "react";
import { FiSearch } from "react-icons/fi";
import styles from "./NoticeSearch.module.sass";

function NoticeSearch() {
  return (
    <div className={styles.inputForm}>
      <input type="text" className={styles.input} />
      <FiSearch className={styles.FiSearch} />
    </div>
  );
}

export default NoticeSearch;
