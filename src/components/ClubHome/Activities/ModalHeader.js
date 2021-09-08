import React from "react";
import styles from "../../../styles/Club/Home/Activities/ModalHeader.module.scss";

const ModalHeader = ({ desc }) => {
  return (
    <div className={styles.header}>
      <span>{desc}</span>
    </div>
  );
};

export default ModalHeader;
