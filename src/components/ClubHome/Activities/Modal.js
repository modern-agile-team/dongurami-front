import React from "react";
import styles from "../../../styles/Club/Home/Activities/Modal.module.scss";
import { MdClose } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Modal = ({ onClose }) => {
  const iconSize = 50;
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>개발하기</span>
        <MdClose onClick={onClose} size={iconSize} />
      </div>
      <div className={styles.img}>
        <IoIosArrowBack size={iconSize} />
        <img
          src="https://wooahan-agile.s3.ap-northeast-2.amazonaws.com/HomePage/circles.jpg"
          alt="사진"
        />
        <IoIosArrowForward size={iconSize} />
      </div>
      <div className={styles.footer}>
        <span>2021-08-31</span>
        <button>수정</button>
        <button>삭제</button>
      </div>
    </div>
  );
};

export default Modal;
