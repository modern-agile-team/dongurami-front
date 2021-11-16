import React from 'react';
import styles from '../../styles/Board/Promotion/typeSearch.module.scss';
import { FaSearch } from 'react-icons/fa';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const TypeSearch = ({
  type,
  searchKeyword,
  setSearchKeyword,
  setType,
  onSearch,
  categorySearch
}) => {
  const user = useSelector((state) => state.user);
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

  const category = ['전체', '스터디', '음악', '취미', '게임', '운동', '종교'];

  return (
    <div className={styles.container}>
      <ul className={styles.tagList}>
        {category.map((el, index) => {
          return (
            <li key={index} name={el} onClick={() => categorySearch(el)}>
              #{el}
            </li>
          );
        })}
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
        {user && (
          <Link href={`/promotion/write`} passHref>
            <button className={styles.writeBtn}>
              ✏️ <span>글쓰기</span>
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default TypeSearch;
