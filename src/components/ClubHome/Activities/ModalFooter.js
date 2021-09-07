import React from "react";
import styles from "../../../styles/Club/Home/Activities/Modal.module.scss";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { MdRemoveCircleOutline } from "react-icons/md";

const ModalFooter = ({ date }) => {
  const iconSize = 25;
  return (
    <div className={styles.footer}>
      <span>{date}</span>
      <HiOutlinePencilAlt id={styles.update} size={iconSize} />
      <MdRemoveCircleOutline id={styles.delete} size={iconSize} />
    </div>
  );
};

export default ModalFooter;
