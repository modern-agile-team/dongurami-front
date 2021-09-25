import React, { useState } from "react";
import styles from "../../styles/Board/Promotion/typeSearch.module.scss";
import { FaSearch } from "react-icons/fa";

const TypeSearch = ({ setSearchItem, getData }) => {
  return (
    <div className={styles.container}>
      <ul
        className={styles.tagList}
        onClick={(event) => setSearchItem(event.target.getAttribute("name"))}
      >
        <li name="IT">#IT</li>
        <li name="음악">#음악</li>
        <li name="친목">#친목</li>
        <li name="게임">#게임</li>
        <li name="운동">#운동</li>
      </ul>

      <div className={styles.searchContainer}>
        <form className={styles.searchElement}>
          <input type="text" placeholder="동아리명을 검색해주세요" />
          <FaSearch />
        </form>
      </div>
    </div>
  );
};

export default TypeSearch;
