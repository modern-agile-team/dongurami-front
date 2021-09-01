import React from "react";
import styles from "../../../styles/Club/Home/Review/ReviewList.module.scss";
import { AiFillStar } from "react-icons/ai";

export const ReviewList = ({ rate, desc, date }) => {
  const stars = new Array(rate).fill(Math.random());
  console.log(stars);
  return (
    <div className={styles.list}>
      <div className={styles.star}>
        {stars.map((el) => {
          return <AiFillStar key={el[0]} />;
        })}
      </div>
      <div className={styles.review}>
        <p>{desc}</p>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default ReviewList;
