import React from "react";
import styles from "../../../styles/Club/Home/Review/ReviewMine.module.scss";
import { AiFillStar } from "react-icons/ai";
import { HiPencil } from "react-icons/hi";
import { FaTrashAlt } from "react-icons/fa";

const ReviewMine = ({ description, score, inDate }) => {
  const stars = new Array(score).fill(score);
  return (
    <div className={styles.mine}>
      <div className={styles.header}>
        <div className={styles.club}>
          <img
            src="https://lovelyoch.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F65bcaa80-1b5b-4662-82c2-41d689605df2%2F%EC%9A%B0%EC%95%84%ED%95%9C_%EC%95%A0%EC%9E%90%EC%9D%BC_%EB%A1%9C%EA%B3%A0.png?table=block&id=c6f4102e-005c-45a7-bc48-27ecaacc7a0d&spaceId=69eb8ea8-3d04-47ec-8bb7-004e8aa31f9e&width=250&userId=&cache=v2"
            alt="우아한 애자일"
          />
          <div id={styles.date}>
            <span>내가 작성한 후기</span>
            <p>{inDate}</p>
          </div>
        </div>
        <div className={styles.star}>
          {stars.map((el, i) => {
            return <AiFillStar key={i} />;
          })}
          <div className={styles.update}>
            <HiPencil />
            <FaTrashAlt />
          </div>
        </div>
      </div>
      <div className={styles.review}>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ReviewMine;
