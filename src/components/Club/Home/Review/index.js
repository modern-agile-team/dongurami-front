import React, { useCallback, useEffect, useRef, useState } from 'react';
import styles from 'styles/Club/Home/Review/Review.module.scss';
import Sorting from './List/Sorting';
import ReviewHeader from './ReviewHeader';
import ReviewWrite from './ReviewWrite';
import ReviewMine from './List/ReviewMine';
import ReviewList from './List/ReviewList';
import { getReview, postReview, deleteReview, putReview } from 'apis/clubhome';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

const Review = () => {
  const [reviewInput, setReviewInput] = useState(''); // 후기 글
  const [reviewList, setReviewList] = useState([]); // 후기 리스트
  const [reviewRate, setReviewRate] = useState(0); // 별점 점수
  const [starState, setStarState] = useState(new Array(5).fill(false)); // 별점 상태
  const [studentId, setStudentId] = useState('');
  const [openSelect, setOpenSelect] = useState(false);
  const [standard, setStandard] = useState('최신 순');

  const router = useRouter();

  const inputRef = useRef();
  const sortRef = useRef(null);

  const clubInfo = useSelector((state) => state.clubhome.info.result[0]);

  // 별점 평균
  const reviewAvg = (reviews) => {
    return (
      reviews
        .map((review) => review.score)
        .reduce((sum, cur) => {
          return sum + cur;
        }, 0) / reviews.length
    );
  };
  // 내 후기와 내 후기가 아닌 것들
  const reviewMine = reviewList.filter((el) => el.studentId === studentId);
  const reviewNotMine = reviewList.filter((el) => el !== reviewMine[0]);

  // 내 리뷰 번호
  const myReviewNum = reviewMine.length ? reviewMine[0].no : null;

  // 후기 불러오기
  const getReviewData = useCallback(() => {
    getReview(router.query.id)
      .then((res) => {
        setStudentId(res.data.studentId);
        setReviewList(res.data.reviewList);
      })
      .catch((err) => alert(err.response.data.msg));
  }, [router.query.id]);

  // 후기 작성
  const onReviewSubmit = async () => {
    if (reviewRate === 0) alert('별점을 입력해주세요.');
    else if (reviewInput === '') alert('후기를 입력해주세요.');
    else {
      await postReview(
        {
          description: reviewInput,
          score: reviewRate
        },
        router.query.id
      )
        .then((res) => alert(res.data.msg))
        .catch((err) => alert(err.response.data.msg));
      getReviewData();
      onStarHandleFalse(-1);
      inputRef.current.value = '';
    }
  };

  // 내 후기 삭제
  const onReviewDelete = async () => {
    await deleteReview(reviewMine[0].no, router.query.id)
      .then((res) => alert(res.data.msg))
      .catch((err) => alert(err.response.data.msg));
    getReviewData();
    onStarHandleFalse(-1);
    inputRef.current.value = '';
  };

  // 내 후기 수정
  const onReviewUpdate = async () => {
    if (reviewRate === 0) alert('별점을 입력해주세요.');
    else if (reviewInput === '') alert('후기를 입력해주세요.');
    else {
      await putReview(
        {
          description: reviewInput,
          score: reviewRate
        },
        myReviewNum,
        router.query.id
      )
        .then((res) => alert(res.data.msg))
        .catch((err) => alert(err.response.data.msg));
      getReviewData();
      onStarHandleFalse(-1);
      inputRef.current.value = '';
    }
  };

  // 별점 비우기
  const onStarHandleFalse = (index) => {
    const newStarState = [...starState];
    for (let i = index + 1; i <= 4; i++) {
      newStarState[i] = false;
    }
    setReviewRate(newStarState.filter((el) => el === true).length);
    setStarState(newStarState);
  };

  // 별점 채우기
  const onStarHandleTrue = (index) => {
    const newStarState = [...starState];
    for (let i = 0; i <= index; i++) {
      newStarState[i] = true;
    }
    setReviewRate(newStarState.filter((el) => el === true).length);
    setStarState(newStarState);
  };

  // 후기 글 입력
  const onReviewInput = (e) => {
    setReviewInput(e.target.value);
  };

  // 후기 정렬
  const sortReview = (e) => {
    const filter = e.target.value;
    const oldestOrder = [...reviewList].sort((a, b) => {
      if (filter === 0) return a.no - b.no;
      else if (filter === 1) return b.no - a.no;
      else if (filter === 2) return b.score - a.score;
      else return a.score - b.score;
    });
    setReviewList(oldestOrder);
  };

  const openSelectBox = () => {
    setOpenSelect(!openSelect);
  };

  const changeStandard = (e) => {
    setStandard(e.target.innerHTML);
    sortReview(e);
    setOpenSelect(!openSelect);
  };

  function handleClickOutside(event) {
    if (sortRef.current && !sortRef.current.contains(event.target)) {
      setOpenSelect(false);
    }
  }

  useEffect(() => {
    getReviewData();
  }, [getReviewData]);

  return (
    <div className={styles.container}>
      <ReviewHeader reviewAvg={reviewAvg(reviewList)} clubInfo={clubInfo} />
      <ReviewWrite
        onReviewUpdate={onReviewUpdate}
        isReviewMine={reviewMine.length}
        starState={starState}
        onStarHandleFalse={onStarHandleFalse}
        onStarHandleTrue={onStarHandleTrue}
        onReviewInput={onReviewInput}
        onReviewSubmit={onReviewSubmit}
        inputRef={inputRef}
      />
      <Sorting
        openSelect={openSelect}
        standard={standard}
        openSelectBox={openSelectBox}
        changeStandard={changeStandard}
        handleClickOutside={handleClickOutside}
        sortRef={sortRef}
      />
      {reviewMine.length ? (
        <ReviewMine
          onReviewDelete={onReviewDelete}
          score={reviewMine[0].score}
          description={reviewMine[0].description}
          inDate={reviewMine[0].inDate.substring(0, 10)}
        />
      ) : (
        <></>
      )}
      {reviewNotMine.map((review, index) => {
        return (
          <ReviewList
            key={index}
            rate={review.score}
            desc={review.description}
            date={review.inDate.substring(0, 10)}
            index={index}
          />
        );
      })}
    </div>
  );
};

export default Review;
