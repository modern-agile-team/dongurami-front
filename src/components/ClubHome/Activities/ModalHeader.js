import React from "react";
import styles from "../../../styles/Club/Home/Activities/ModalHeader.module.scss";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { MdRemoveCircleOutline } from "react-icons/md";

const ModalHeader = ({ desc, date, title }) => {
  const iconSize = 20;
  return (
    <div className={styles.header}>
      <h2>{title}</h2>
      <span>{desc}</span>
      <span>{date}</span>
      <div>
        <HiOutlinePencilAlt id={styles.update} size={iconSize} />
        <MdRemoveCircleOutline id={styles.delete} size={iconSize} />
      </div>
    </div>
  );
};

export default ModalHeader;
