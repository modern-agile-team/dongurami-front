import React from "react";
import styles from "../../../styles/Club/Home/Activities/Act.module.scss";

const Act = ({ img, title, onClick, no }) => {
  return (
    <div className={styles.container}>
      {img && <img src={img} onClick={() => onClick(no)} alt="test" />}
      <div>
        <p id={styles.desc}>{title}</p>
      </div>
    </div>
  );
};

export default Act;
