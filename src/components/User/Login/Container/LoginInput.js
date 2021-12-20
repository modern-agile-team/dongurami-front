import React from 'react';
import styles from 'styles/User/Login/Container/LoginInput.module.scss';

export const LoginInput = ({ id, password, onInputChange, onKeyPress }) => {
  return (
    <div className={styles.wrap}>
      <input
        className={styles.idInput}
        type="Number"
        onKeyDown={(e) =>
          (e.key === 'e' || e.key === '.') && e.preventDefault()
        }
        placeholder="학번을 입력해 주세요."
        onChange={(e) => onInputChange(e)}
        name="id"
        value={id}
      />
      <input
        className={styles.pwInput}
        type="password"
        placeholder="비밀번호를 입력해 주세요."
        onChange={(e) => onInputChange(e)}
        name="password"
        value={password}
        onKeyPress={(e) => onKeyPress(e)}
      />
    </div>
  );
};
