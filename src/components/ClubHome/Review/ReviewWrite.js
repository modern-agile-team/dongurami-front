import React from "react";
import styles from "../../../styles/Club/Home/Review/ReviewWrite.module.scss";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ReviewWrite = ({
  onReviewInput,
  onReviewSubmit,
  onStarHandleFalse,
  onStarHandleTrue,
  starState,
}) => {
  return (
    <div className={styles.write}>
      <div className={styles.star}>
        {starState.map((el, i) => {
          return el ? (
            <AiFillStar onClick={() => onStarHandleFalse(i)} />
          ) : (
            <AiOutlineStar onClick={() => onStarHandleTrue(i)} />
          );
        })}
      </div>
      <div className={styles.comment}>
        <input onChange={onReviewInput} />
        <button onClick={onReviewSubmit}>등록</button>
      </div>
    </div>
  );
};

export default ReviewWrite;
