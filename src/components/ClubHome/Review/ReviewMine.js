import React from "react";
import styles from "../../../styles/Club/Home/Review/ReviewMine.module.scss";
import { AiFillStar } from "react-icons/ai";
import { HiPencil } from "react-icons/hi";
export const ReviewMine = () => {
  return (
    <div className={styles.mine}>
      <div className={styles.star}>
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
      </div>
      <div className={styles.review}>
        <p>우아한 애자일 최고! 이런점은 좋았구요 이런점도 좋았어용</p>
        <p>2021-08-30</p>
      </div>
      <div className={styles.update}>
        <HiPencil />
      </div>
    </div>
  );
};

export default ReviewMine;
