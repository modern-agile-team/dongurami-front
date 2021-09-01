import React from "react";
import styles from "../../../styles/Club/Home/Review/ReviewFilter.module.scss";

export const ReviewFilter = () => {
  return (
    <div className={styles.filter}>
      <select name="filter">
        <option value="최신순">최신순</option>
        <option value="별점 높은순">별점 높은순</option>
      </select>
    </div>
  );
};

export default ReviewFilter;
