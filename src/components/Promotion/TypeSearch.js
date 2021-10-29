import React, { useState } from 'react';
import styles from '../../styles/Board/Promotion/typeSearch.module.scss';
import { FaSearch } from 'react-icons/fa';
import Link from 'next/link';
import { BsPencil } from 'react-icons/bs';

const TypeSearch = ({
  setSearchItem,
  setSearchKeyword,
  type,
  searchKeyword,
  setType,
  onSearch,
  categorySearch
}) => {
  const onChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  const onTypeChange = (e) => {
    setType(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <div className={styles.container}>
      <ul className={styles.tagList} onClick={(event) => categorySearch(event)}>
        <li name="whole">#전체</li>
        <li name="IT">#IT</li>
        <li name="음악">#음악</li>
        <li name="친목">#친목</li>
        <li name="게임">#게임</li>
        <li name="운동">#운동</li>
      </ul>
      <div className={styles.body}>
        <select value={type} onChange={onTypeChange}>
          <option value="title">제목</option>
          <option value="clubName">동아리명</option>
        </select>
        <div className={styles.searchContainer}>
          <form className={styles.searchElement} onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="search"
              value={searchKeyword}
              onChange={onChange}
            />
            <FaSearch />
          </form>
        </div>
        <Link href={`/promotion/write`} passHref>
          <button className={styles.writeBtn}>
            ✏️ <span>글쓰기</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TypeSearch;
