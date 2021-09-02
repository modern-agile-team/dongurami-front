import React from "react";
import styles from "../../../styles/Club/Home/Activities/Modal.module.scss";
import { MdClose } from "react-icons/md";
import { actData } from "./Activities";
import ModalHeader from "./ModalHeader";
import ModalImg from "./ModalImg";
import ModalFooter from "./ModalFooter";

const Modal = ({ onClose, imgURL, setImgURL }) => {
  const iconSize = 30;

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
      <div id={styles.close}>
        <MdClose onClick={onClose} size={iconSize} />
      </div>
      <ModalHeader desc={desc} />
      <ModalImg
        onClose={onClose}
        imgURL={imgURL}
        back={back}
        foward={foward}
        iconSize={iconSize}
      />
      <ModalFooter date={date} />
    </div>
  );
};

export default Modal;
