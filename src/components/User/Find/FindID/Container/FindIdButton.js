import React from 'react';
import styles from 'styles/User/Find/FindID/Container/FindIdButton.module.scss';

export const FindIdButton = ({ onSubmit }) => {
  return (
    <div className={styles.btnWrap}>
      <button onClick={() => onSubmit()}>아이디 찾기</button>
    </div>
  );
};
