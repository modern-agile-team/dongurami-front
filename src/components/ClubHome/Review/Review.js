import React from "react";
import styles from "../../../styles/Club/Home/Review/Review.module.scss";
import ReviewFilter from "./ReviewFilter";
import ReviewHeader from "./ReviewHeader";
import ReviewWrite from "./ReviewWrite";
import ReviewMine from "./ReviewMine";
import ReviewList from "./ReviewList";

const reviewData = [
  {
    rate: 5,
    desc: "힘내세요 제가 도와드릴게요",
    date: "2021-08-25",
  },
  {
    rate: 3,
    desc: "힘내세요 쟤가 도와드릴게요",
    date: "2021-08-26",
  },
  {
    rate: 4,
    desc: "할 수 있습니다 여러분",
    date: "2021-08-27",
  },
];

export const Review = () => {
  return (
    <div className={styles.container}>
      <ReviewHeader />
      <ReviewWrite />
      <ReviewFilter />
      <ReviewMine />
      {reviewData.map((el) => {
        return (
          <ReviewList
            key={reviewData.indexOf(el)}
            rate={el.rate}
            desc={el.desc}
            date={el.date}
          />
        );
      })}
    </div>
  );
};

export default Review;
