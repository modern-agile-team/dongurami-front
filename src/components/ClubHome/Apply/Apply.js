import React from "react";
import ApplyHeader from "./ApplyHeader";
import styles from "../../../styles/Club/Home/Apply/Apply.module.scss";
import ApplyQuestions from "./ApplyQuestions";
import Additional from "./Additional";
import { IoIosAddCircleOutline, IoIosCheckmark } from "react-icons/io";

const token = {
  studentID: 201708051,
};

const clubInfo = {
  name: "우아한 애자일",
  owner: "민순기",
  ownerID: 201708051,
};

const Apply = () => {
  const iconSize = 40;
  return (
    <div className={styles.container}>
      <ApplyHeader />
      <ApplyQuestions />
      <Additional />
      <div
        className={
          token.studentID === clubInfo.ownerID ? styles.add : styles.none
        }
      >
        <IoIosAddCircleOutline size={iconSize} />
      </div>
      <div className={styles.submit}>
        <IoIosCheckmark size={iconSize} />
      </div>
    </div>
  );
};

export default Apply;
