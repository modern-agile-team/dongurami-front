import React, { useState, useCallback } from 'react';
import styles from '../../../styles/Club/Home/Review/ReviewWrite.module.scss';
import { AiFillStar } from 'react-icons/ai';
import { DonguramiOutlineButton } from 'components/Common/DonguramiButton';

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
  const [index, setIndex] = useState(null);
  const iconClassName = useCallback(
    (state, i) => {
      if (state) return styles.able;
      else {
        if (index !== null) {
          if (i <= index) return styles.able;
          return styles.disable;
        }
      }
    },
    [index]
  );
  return (
    <div className={styles.write}>
      <div className={styles.star} onMouseOut={() => setIndex(null)}>
        {starState.map((state, i) => {
          const classStyle = iconClassName(state, i);
          return state ? (
            <AiFillStar
              className={classStyle}
              onMouseOver={() => setIndex(i)}
              key={i}
              onClick={() => onStarHandleFalse(i)}
            />
          ) : (
            <AiFillStar
              className={classStyle}
              onMouseOver={() => setIndex(i)}
              key={i}
              onClick={() => onStarHandleTrue(i)}
            />
          );
        })}
      </div>
      <div className={styles.comment}>
        <input ref={inputRef} onChange={onReviewInput} />
        {isReviewMine ? (
          <DonguramiOutlineButton onClick={onReviewUpdate}>
            ✏️ 수정
          </DonguramiOutlineButton>
        ) : (
          <DonguramiOutlineButton onClick={onReviewSubmit}>
            ✏️ 등록
          </DonguramiOutlineButton>
        )}
      </div>
    </div>
  );
};

export default ReviewWrite;
