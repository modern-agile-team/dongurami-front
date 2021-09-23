import React from "react";
import styles from "../../../styles/Club/Home/Apply/ApplySubmit.module.scss";
import { IoIosAddCircleOutline, IoIosCheckmark } from "react-icons/io";
import { clubInfo } from "./Apply";

const token = {
  studentID: 20170051,
};

const ApplySubmit = ({
  newQuestionInput,
  handleChange,
  onQuestionAdd,
  iconSize,
  onResumeSubmit,
}) => {
  return (
    <>
      {token.studentID === clubInfo.ownerID ? (
        <div className={styles.leader}>
          <span>새로운 질문</span>
          <input ref={newQuestionInput} type="text" onChange={handleChange} />
          <IoIosAddCircleOutline onClick={onQuestionAdd} size={iconSize} />
        </div>
      ) : (
        <div className={styles.submit}>
          <IoIosCheckmark size={iconSize} onClick={onResumeSubmit} />
        </div>
      )}
    </>
  );
};

export default ApplySubmit;
