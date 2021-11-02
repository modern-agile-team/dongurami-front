import React, { useState } from 'react';
import styles from '../../styles/Club/Lists/TypeSearch.module.scss';
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
  };
  const category = ['전체', 'IT', '음악', '친목', '게임', '운동'];

  return (
    <div className={styles.container}>
      <ul className={styles.tagList}>
        {category.map((el) => (
          <li
            name={el}
            onClick={(event) =>
              onCategorySearch(event.target.getAttribute('name'))
            }
          >
            #{el}
          </li>
        ))}
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
