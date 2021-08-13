import React from "react";
import styles from "./ChangePW.module.sass";

function ChangePW() {
  return (
    <div className={styles.wrap}>
      <h2>비밀번호 변경</h2>
      <div className={styles.container}>
        <input type="text" placeholder="ID" />
        <input type="password" placeholder="PW" />
        <button>확인</button>
      </div>
    </div>
  );
}

export default ChangePW;
