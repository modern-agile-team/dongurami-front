import React from "react";
import styles from "../../styles/Board/Free/FreeBoardSearch.module.sass";
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
