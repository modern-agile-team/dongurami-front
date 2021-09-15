import React from "react";
import styles from "../../../styles/Club/Home/Activities/ModalImg.module.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const ModalImg = ({ onClose, imgURL, back, foward, iconSize }) => {
  return (
    <div className={styles.img}>
      {/* <IoIosArrowBack size={iconSize} onClick={back} id={styles.back} /> */}
      <img alt={imgURL} src={imgURL} onClick={onClose} />
      {/* <IoIosArrowForward size={iconSize} onClick={foward} id={styles.foward} /> */}
    </div>
  );
};

export default ModalImg;
