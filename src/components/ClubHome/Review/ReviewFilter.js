import React from "react";
import styles from "../../../styles/Club/Home/Review/ReviewFilter.module.scss";

const ReviewFilter = ({ onFilterChange }) => {
  return (
    <div className={styles.filter}>
      <select onChange={onFilterChange} name="filter">
        <option value={1}>최신순</option>
        <option value={0}>별점 높은순</option>
      </select>
    </div>
  );
};

export default ReviewFilter;
