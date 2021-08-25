import React from "react";
import styles from "../../styles/User/PasswordChange/Change.module.scss";
function Change({ onClick }) {
  return (
    <div className={styles.wrap}>
      <h2>비밀번호 변경</h2>
      <div className={styles.container}>
        <input type="password" placeholder="변경할 비밀번호 입력" />
        <input type="password" placeholder="변경할 비밀번호 입력 확인" />
        <button onClick={onClick}>확인</button>
      </div>
    </div>
  );
}

export default Change;
