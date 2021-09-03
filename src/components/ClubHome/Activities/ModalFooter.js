import React from "react";
import styles from "../../../styles/Club/Home/Activities/Modal.module.scss";

const ModalFooter = ({ date }) => {
  return (
    <div className={styles.footer}>
      <span>{date}</span>
      <button>수정</button>
      <button>삭제</button>
    </div>
  );
};

export default ModalFooter;
