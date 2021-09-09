import React, { useState } from "react";
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

const Review = () => {
  const [reviewInput, setReviewInput] = useState("");
  const [reviewList, setReviewList] = useState(reviewData);
  const [reviewRate, setReviewRate] = useState(0);
  const [starState, setStarState] = useState(new Array(5).fill(false));

  const onStarHandleFalse = (index) => {
    const newStarState = [...starState];
    for (let i = index + 1; i <= 4; i++) {
      newStarState[i] = false;
    }
    const rate = newStarState.filter((el) => el === true).length;
    setReviewRate(rate);
    setStarState(newStarState);
  };

  const onStarHandleTrue = (index) => {
    const newStarState = [...starState];
    for (let i = 0; i <= index; i++) {
      newStarState[i] = true;
    }
    const rate = newStarState.filter((el) => el === true).length;
    setReviewRate(rate);
    setStarState(newStarState);
  };

  const onReviewInput = (e) => {
    setReviewInput(e.target.value);
  };

  const onReviewSubmit = () => {
    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    const date = new Date().getDate();
    const today = `${year}-${month}-${date}`;

    const newReviewList = [
      ...reviewList,
      {
        rate: reviewRate,
        desc: reviewInput,
        date: today,
      },
    ];

    setReviewList(newReviewList);
  };
  return (
    <div className={styles.container}>
      <ReviewHeader />
      <ReviewWrite
        starState={starState}
        onStarHandleFalse={onStarHandleFalse}
        onStarHandleTrue={onStarHandleTrue}
        onReviewInput={onReviewInput}
        onReviewSubmit={onReviewSubmit}
      />
      <ReviewFilter />
      <ReviewMine />
      {reviewList.map((el) => {
        return (
          <ReviewList
            key={reviewList.indexOf(el)}
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
