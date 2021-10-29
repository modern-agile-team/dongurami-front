import React from 'react';
import styles from '../../../styles/Club/Home/Review/ReviewWrite.module.scss';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const ReviewWrite = ({
  onReviewInput,
  onReviewSubmit,
  onStarHandleFalse,
  onStarHandleTrue,
  starState,
  isReviewMine,
  onReviewUpdate,
  inputRef
}) => {
  return (
    <div className={styles.write}>
      <div className={styles.star}>
        {starState.map((state, i) => {
          return state ? (
            <AiFillStar key={i} onClick={() => onStarHandleFalse(i)} />
          ) : (
            <AiOutlineStar key={i} onClick={() => onStarHandleTrue(i)} />
          );
        })}
      </div>
      <div className={styles.comment}>
        <input ref={inputRef} onChange={onReviewInput} />
        {isReviewMine ? (
          <button onClick={onReviewUpdate}>✏️ 수정</button>
        ) : (
          <button onClick={onReviewSubmit}>✏️ 등록</button>
        )}
      </div>
    </div>
  );
};

export default ReviewWrite;
