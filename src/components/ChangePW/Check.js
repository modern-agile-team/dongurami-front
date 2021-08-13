import React from "react";
import styles from "./Check.module.sass";

function Check({ onClick }) {
  return (
    <div className={styles.wrap}>
      <h2>비밀번호 변경</h2>
      <div className={styles.container}>
        <input type="text" placeholder="ID" />
        <input type="password" placeholder="PW" />
        <button onClick={onClick}>확인</button>
      </div>
    </div>
  );
}

export default Check;
