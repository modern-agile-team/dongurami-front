import React, { useState } from 'react';
import styles from 'styles/Common/CategoriTags.module.scss';

const category = ['전체', '스터디', '음악', '취미', '게임', '운동', '종교'];

const CategoriTags = ({ onCategorySearch }) => {
  const [selected, setSelected] = useState([true]);

  const clickCategori = (el, idx) => {
    const result = category.map((_) => false);
    result[idx] = !result[idx];
    setSelected(result);
    onCategorySearch(el);
  };

  return (
    <ul className={styles.tagList}>
      {category.map((el, index) => {
        return (
          <li
            className={selected[index] && styles.selected}
            key={index}
            name={el}
            onClick={() => clickCategori(el, index)}
          >
            #{el}
          </li>
        );
      })}
    </ul>
  );
};

export default CategoriTags;
