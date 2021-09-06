import React from "react";
import styles from "../../../styles/Club/Home/Activities/Modal.module.scss";

const ModalHeader = ({ desc }) => {
  return (
    <div className={styles.header}>
      <span>{desc}</span>
    </div>
  );
};

export default ModalHeader;
