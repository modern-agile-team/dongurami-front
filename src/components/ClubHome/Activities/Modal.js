import React from "react";
import styles from "../../../styles/Club/Home/Activities/Modal.module.scss";
import { actData } from "./Activities";
import ModalHeader from "./ModalHeader";
import ModalImg from "./ModalImg";

const Modal = ({ onClose, imgURL, setImgURL }) => {
  const iconSize = 20;

  const date = actData.filter((el) => el.img === imgURL)[0].date;
  const desc = actData.filter((el) => el.img === imgURL)[0].desc;
  const title = actData.filter((el) => el.img === imgURL)[0].title;

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
    <div className={styles.container} onClick={onClose}>
      <div
        className={styles.box}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={styles.contents}>
          <ModalHeader title={title} desc={desc} date={date} />
          <ModalImg
            onClose={onClose}
            imgURL={imgURL}
            back={back}
            foward={foward}
            iconSize={iconSize}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
