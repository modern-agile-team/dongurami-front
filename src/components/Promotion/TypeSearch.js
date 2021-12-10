import React, { useState } from 'react';
import styles from '../../styles/Board/Promotion/typeSearch.module.scss';
import { FaSearch } from 'react-icons/fa';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import CategoriTags from 'components/Common/CategoriTags';

const TypeSearch = ({
  type,
  searchKeyword,
  setSearchKeyword,
  setType,
  onSearch,
  categorySearch
}) => {
  const [selected, setSelected] = useState([true]);

  const user = useSelector((state) => state.user);
  const onChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  const onTypeChange = (e) => {
    setType(e.target.value);
  };

  const onSubmit = (e) => {
    setSelected([true]);
    e.preventDefault();
    onSearch();
  };

  return (
    <div className={styles.container}>
      <CategoriTags
        onCategorySearch={categorySearch}
        selected={selected}
        setSelected={setSelected}
      />
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
            <FaSearch onClick={onSubmit} />
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
