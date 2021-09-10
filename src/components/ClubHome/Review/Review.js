import React, { useEffect, useState } from "react";
import styles from "../../../styles/Club/Home/Review/Review.module.scss";
import ReviewFilter from "./ReviewFilter";
import ReviewHeader from "./ReviewHeader";
import ReviewWrite from "./ReviewWrite";
import ReviewMine from "./ReviewMine";
import ReviewList from "./ReviewList";

const Review = () => {
  const [reviewInput, setReviewInput] = useState(""); // 후기 글
  const [reviewList, setReviewList] = useState([]); // 후기 리스트
  const [reviewRate, setReviewRate] = useState(0); // 별점 점수
  const [starState, setStarState] = useState(new Array(5).fill(false)); // 별점 상태

  // 후기 불러오기
  useEffect(() => {
    fetch("http://3.36.72.145:8080/api/club/review/1", {
      headers: {
        "x-auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbHViTnVtIjpbMV0sImlkIjoidGVzdDEiLCJuYW1lIjoidGVzdDEiLCJlbWFpbCI6InRlc3QxQG5hdmVyY29tIiwicHJvZmlsZVBhdGgiOm51bGwsImlzQWRtaW4iOjAsImlhdCI6MTYzMTI0MjMzOSwiZXhwIjoxNjMxMzI4NzM5LCJpc3MiOiJ3b29haGFuIGFnaWxlIn0.E9ryaA_BRmkInWxSO3A3PLKb5LsRkBXjjnrflB0U3hU",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setReviewList(data.reviewList);
      });
  }, []);

  // 내 후기와 내 후기가 아닌 것들
  const reviewMine = reviewList.filter((el) => el.studentId === "test7");
  const reviewNotMine = reviewList.filter((el) => el !== reviewMine[0]);

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

  // 별점 평균
  const reviewAvg =
    reviewList
      .map((el) => el.score)
      .reduce((sum, cur) => {
        return sum + cur;
      }, 0) / reviewList.length;

  // 후기 + 별점 입력
  const onReviewSubmit = () => {
    return reviewInput === ""
      ? alert("빈 칸은 입력할 수 없습니다.")
      : fetch("http://3.36.72.145:8080/api/club/review/1", {
          method: "POST",
          headers: {
            "Content-type": "application/json; charset=utf-8",
            "x-auth-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbHViTnVtIjpbNSwxXSwiaWQiOiJ0ZXN0NyIsIm5hbWUiOiJ0ZXN0NyIsImVtYWlsIjoidGVzdDdAbmF2ZXJjb20iLCJwcm9maWxlUGF0aCI6bnVsbCwiaXNBZG1pbiI6MCwiaWF0IjoxNjMxMjQ3NDgwLCJleHAiOjE2MzEzMzM4ODAsImlzcyI6Indvb2FoYW4gYWdpbGUifQ.c17y7l8vzRZq1N3f0FE7NhPiP6YfD__Tv2gAv9sb1eI",
          },
          body: JSON.stringify({
            description: reviewInput,
            score: reviewRate,
          }),
        })
          .then((res) => res.json())
          .then((data) => alert(data.msg));
  };

  // 내 후기 삭제
  const onReviewDelete = () => {
    fetch(`http://3.36.72.145:8080/api/club/review/1/${reviewMine[0].no}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=utf-8",
        "x-auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbHViTnVtIjpbNSwxXSwiaWQiOiJ0ZXN0NyIsIm5hbWUiOiJ0ZXN0NyIsImVtYWlsIjoidGVzdDdAbmF2ZXJjb20iLCJwcm9maWxlUGF0aCI6bnVsbCwiaXNBZG1pbiI6MCwiaWF0IjoxNjMxMjQ3NDgwLCJleHAiOjE2MzEzMzM4ODAsImlzcyI6Indvb2FoYW4gYWdpbGUifQ.c17y7l8vzRZq1N3f0FE7NhPiP6YfD__Tv2gAv9sb1eI",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    alert("후기가 삭제되었습니다.");
  };

  return (
    <div className={styles.container}>
      <ReviewHeader reviewAvg={reviewAvg} />
      <ReviewWrite
        starState={starState}
        onStarHandleFalse={onStarHandleFalse}
        onStarHandleTrue={onStarHandleTrue}
        onReviewInput={onReviewInput}
        onReviewSubmit={onReviewSubmit}
      />
      <ReviewFilter />
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

      {reviewNotMine.map((el, i) => {
        return (
          <ReviewList
            key={i}
            rate={el.score}
            desc={el.description}
            date={el.inDate.substring(0, 10)}
            no={i + 1}
          />
        );
      })}
    </div>
  );
};

export default Review;
