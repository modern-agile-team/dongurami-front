import React from 'react';
import styles from 'styles/User/Find/FindPW/Container/FindPwButton.module.scss';

export const FindPwButton = ({ onSubmit }) => {
  return (
    <div className={styles.btnWrap}>
      <button onClick={() => onSubmit()}>비밀번호 찾기</button>
    </div>
  );
};
