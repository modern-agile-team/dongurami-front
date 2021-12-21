import React from 'react';
import styles from 'styles/User/Find/ResetPW/Container/ResetPwButton.module.scss';

export const ResetPwButton = ({ onSubmit }) => {
  return (
    <div className={styles.btnWrap}>
      <button type="submit" onClick={(e) => onSubmit(e)}>
        변경하기
      </button>
    </div>
  );
};
