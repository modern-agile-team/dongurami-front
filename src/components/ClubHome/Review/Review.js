import React, { useEffect, useState } from "react";
import styles from "../../../styles/Club/Home/Review/Review.module.scss";
import ReviewFilter from "./ReviewFilter";
import ReviewHeader from "./ReviewHeader";
import ReviewWrite from "./ReviewWrite";
import ReviewMine from "./ReviewMine";
import ReviewList from "./ReviewList";
import Router from "next/router";
import axios from "axios";

const Review = () => {
  const [reviewInput, setReviewInput] = useState(""); // 후기 글
  const [reviewList, setReviewList] = useState([]); // 후기 리스트
  const [reviewRate, setReviewRate] = useState(0); // 별점 점수
  const [starState, setStarState] = useState(new Array(5).fill(false)); // 별점 상태

  let jwtTocken = "";

  if (typeof window !== "undefined") {
    jwtTocken = localStorage.getItem("jwt");
  }

  // 별점 평균
  const reviewAvg =
    reviewList
      .map((el) => el.score)
      .reduce((sum, cur) => {
        return sum + cur;
      }, 0) / reviewList.length;

  // 후기 불러오기
  const getReviewData = async () => {
    const options = {
      headers: {
        "x-auth-token": jwtTocken,
      },
    };
    await axios("http://3.36.72.145:8080/api/club/review/1", options)
      .then((res) => {
        setReviewList(res.data.reviewList);
      })
      .catch((err) => console.log(err.response.data.msg));
  };

  // 버튼 클릭 시 페이지 리로딩
  const reloadPage = () => {
    Router.push("/ClubHome");
  };

  // 내 후기와 내 후기가 아닌 것들
  const reviewMine = reviewList.filter((el) => el.studentId === "201708051");
  const reviewNotMine = reviewList.filter((el) => el !== reviewMine[0]);

  // 내 리뷰 번호
  const myReviewNum = reviewMine.length ? reviewMine[0].no : null;

  // 별점 비우기
  const onStarHandleFalse = (index) => {
    const newStarState = [...starState];
    for (let i = index + 1; i <= 4; i++) {
      newStarState[i] = false;
    }
    const rate = newStarState.filter((el) => el === true).length;
    setReviewRate(rate);
    setStarState(newStarState);
  };

  // 별점 채우기
  const onStarHandleTrue = (index) => {
    const newStarState = [...starState];
    for (let i = 0; i <= index; i++) {
      newStarState[i] = true;
    }
    const rate = newStarState.filter((el) => el === true).length;
    setReviewRate(rate);
    setStarState(newStarState);
  };

  // 후기 글 입력
  const onReviewInput = (e) => {
    setReviewInput(e.target.value);
  };

  // 후기 + 별점 입력
  const onReviewSubmit = async () => {
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=utf-8",
        "x-auth-token": jwtTocken,
      },
      data: {
        description: reviewInput,
        score: reviewRate,
      },
    };
    await axios("http://3.36.72.145:8080/api/club/review/1", options)
      .then((res) => alert(res.data.msg))
      .catch((err) => alert(err.response.data.msg));

    reloadPage();
  };

  // 내 후기 삭제
  const onReviewDelete = async () => {
    const options = {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=utf-8",
        "x-auth-token": jwtTocken,
      },
    };
    await axios(
      `http://3.36.72.145:8080/api/club/review/1/${reviewMine[0].no}`,
      options
    )
      .then((res) => alert(res.data.msg))
      .catch((err) => alert(err.response.data.msg));
    reloadPage();
  };

  // 내 후기 수정
  const onReviewUpdate = async () => {
    const options = {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=utf-8",
        "x-auth-token": jwtTocken,
      },
      data: {
        description: reviewInput,
        score: reviewRate,
      },
    };
    await axios(
      `http://3.36.72.145:8080/api/club/review/1/${myReviewNum}`,
      options
    )
      .then((res) => alert(res.data.msg))
      .catch((err) => alert(err.response.data.msg));

    reloadPage();
  };

  // 필터링
  const onFilterChange = (e) => {
    const filter = e.target.value;
    const dateFilter = reviewList.slice(0).sort((a, b) => {
      return a.no - b.no;
    });
    const starFilter = reviewList.slice(0).sort((a, b) => {
      return b.score - a.score;
    });

    filter === "1" ? setReviewList(dateFilter) : setReviewList(starFilter);
  };

  useEffect(() => {
    getReviewData();
  }, []);

  return (
    <div className={styles.container}>
      <ReviewHeader reviewAvg={reviewAvg} />
      <ReviewWrite
        onReviewUpdate={onReviewUpdate}
        isReviewMine={reviewMine.length}
        starState={starState}
        onStarHandleFalse={onStarHandleFalse}
        onStarHandleTrue={onStarHandleTrue}
        onReviewInput={onReviewInput}
        onReviewSubmit={onReviewSubmit}
      />
      <ReviewFilter onFilterChange={onFilterChange} />
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
          />
        );
      })}
    </div>
  );
};

export default Review;
