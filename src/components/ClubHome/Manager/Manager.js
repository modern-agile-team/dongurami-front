import React from "react";
import styles from "../../../styles/Club/Home/Manager/Manager.module.scss";
import Approve from "./Approve";
import Members from "./Members";

export const Manager = () => {
  return (
    <div className={styles.container}>
      <Members />
      <Approve />
    </div>
  );
};

export default Manager;
