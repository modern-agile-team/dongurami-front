import React, { useEffect } from 'react';
import styles from 'styles/Club/Home/Review/ReviewFilter.module.scss';
import { RiArrowDownSLine } from 'react-icons/ri';

const Sorting = ({
  openSelect,
  standard,
  openSelectBox,
  changeStandard,
  handleClickOutside,
  sortRef
}) => {
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className={styles.container}>
      <div className={styles.filter} ref={sortRef}>
        <button onClick={openSelectBox}>{standard}</button>
        <ul className={openSelect ? styles.select : styles.hide} name="filter">
          <li onClick={changeStandard} value={0}>
            오래된 순
          </li>
          <li onClick={changeStandard} value={1}>
            최신순
          </li>
          <li onClick={changeStandard} value={2}>
            별점 높은 순
          </li>
          <li onClick={changeStandard} value={3}>
            별점 낮은 순
          </li>
        </ul>
        <span className={styles.arrow} onClick={openSelectBox}>
          <RiArrowDownSLine id={openSelect ? styles.up : styles.down} />
        </span>
      </div>
    </div>
  );
};

export default Sorting;
