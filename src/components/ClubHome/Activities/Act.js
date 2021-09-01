import React from "react";
import styles from "../../../styles/Club/Home/Activities/Act.module.scss";

const Act = ({ img, desc, date, onClick, alt }) => {
  return (
    <div className={styles.container}>
      <img src={img} onClick={onClick} alt={alt} />
      <div>
        <p id={styles.desc}>{desc}</p>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default Act;