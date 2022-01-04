import React from "react";
import styles from "../../styles/Board/FreeBoard/FreeBoardSearch.module.scss";
import { FiSearch } from "react-icons/fi";

function FreeBoardSearch() {
  return (
    <div className={styles.inputForm}>
      <input type="text" className={styles.input} />
      <FiSearch className={styles.FiSearch} />
    </div>
  );
}
export default FreeBoardSearch;