import React, { useState } from 'react';
import styles from '../../styles/Board/Promotion/typeSearch.module.scss';
import { FaSearch } from 'react-icons/fa';

const TypeSearch = ({ onCategorySearch, onSearch }) => {
  const [search, setSearch] = useState('');
  const onChange = (e) => {
    setSearch(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    onSearch(search);
    setSearch('');
    console.log(e);
  };

  return (
    <div className={styles.container}>
      <ul
        className={styles.tagList}
        onClick={
          (event) =>
            console.log(
              event.target.value
            ) /*onCategorySearch(event.target.getAttribute('name'))</div>*/
        }
      >
        <li name="">#전체</li>
        <li name="IT">#IT</li>
        <li name="음악">#음악</li>
        <li name="친목">#친목</li>
        <li name="게임">#게임</li>
        <li name="운동">#운동</li>
      </ul>

      <div className={styles.searchContainer}>
        <form className={styles.searchElement} onSubmit={onSubmit}>
          <input
            type="text"
            value={search}
            onChange={onChange}
            placeholder="동아리명을 검색해주세요"
          />
          <FaSearch onClick={onSubmit} />
        </form>
      </div>
    </div>
  );
};

export default TypeSearch;
