import React, { useState } from "react";
import styles from "../../../styles/Club/Home/Activities/Activities.module.scss";

import Act from "./Act";
import { IoIosAddCircleOutline } from "react-icons/io";

const actData = [
  {
    img: "https://wooahan-agile.s3.ap-northeast-2.amazonaws.com/HomePage/circles.jpg",
    date: "2021-08-31",
    desc: "개발하기",
  },
  {
    img: "https://wooahan-agile.s3.ap-northeast-2.amazonaws.com/HomePage/circles.jpg",
    date: "2021-08-31",
    desc: "개발하기",
  },
  {
    img: "https://wooahan-agile.s3.ap-northeast-2.amazonaws.com/HomePage/circles.jpg",
    date: "2021-08-31",
    desc: "개발하기",
  },
  {
    img: "https://wooahan-agile.s3.ap-northeast-2.amazonaws.com/HomePage/circles.jpg",
    date: "2021-08-31",
    desc: "개발하기",
  },
];

export const Activities = ({ onClick }) => {
  return (
    <div className={styles.container}>
      <div id={styles.clubName}>
        <p>우아한 애자일의 활동</p>
      </div>
      <div id={styles.add}>
        <IoIosAddCircleOutline />
      </div>
      <div className={styles.activities}>
        {actData.map((el) => {
          return (
            <Act
              img={el.img}
              desc={actData[0].desc}
              date={actData[0].date}
              onClick={onClick}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Activities;
