import React, { useState } from 'react';
import styles from '../../styles/Club/Lists/TypeSearch.module.scss';
import { FaSearch } from 'react-icons/fa';
import CategoriTags from 'components/Common/CategoriTags';

const TypeSearch = ({ onCategorySearch, onSearch }) => {
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState([true]);

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onSearch(search);
    setSearch('');
  };

  return (
    <div className={styles.container}>
      <CategoriTags
        onCategorySearch={onCategorySearch}
        selected={selected}
        setSelected={setSelected}
      />
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
