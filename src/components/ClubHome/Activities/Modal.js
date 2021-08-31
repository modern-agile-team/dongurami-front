import React from "react";
import styles from "../../../styles/Club/Home/Activities/Modal.module.scss";
import { MdClose } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { actData } from "./Activities";

const Modal = ({ onClose, imgURL, setImgURL }) => {
  const iconSize = 50;
  const date = actData.filter((el) => el.img === imgURL)[0].date;
  const desc = actData.filter((el) => el.img === imgURL)[0].desc;
  const present = actData.filter((el) => {
    if (el.img === imgURL) {
      return el;
    }
  });
  const foward = () => {
    let index = actData.indexOf(present[0]) + 1;
    if (index === actData.length) index = 0;
    setImgURL(actData[index].img);
  };
  const back = () => {
    let index = actData.indexOf(present[0]) - 1;
    if (index === -1) index = actData.length - 1;
    setImgURL(actData[index].img);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>{desc}</span>
        <MdClose onClick={onClose} size={iconSize} />
      </div>
      <div className={styles.img}>
        <IoIosArrowBack size={iconSize} onClick={back} />
        <img src={imgURL} />
        <IoIosArrowForward size={iconSize} onClick={foward} />
      </div>
      <div className={styles.footer}>
        <span>{date}</span>
        <button>수정</button>
        <button>삭제</button>
      </div>
    </div>
  );
};

export default Modal;
