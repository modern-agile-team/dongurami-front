import React from "react";
import styles from "../../../styles/Club/Home/Review/Review.module.scss";
import MyPage from "../myPage/myPage";
import { useState } from "react";

export const Review = () => {
  const [MPOPen, setMPOpen] = useState(false);

  const openPopup = () => {
    setMPOpen(true);
  };
  const closePopup = () => {
    setMPOpen(false);
  };

  return (
    <div className={styles.container}>
      <MyPage open={MPOPen} close={closePopup} />
    </div>
  );
};

export default Review;
