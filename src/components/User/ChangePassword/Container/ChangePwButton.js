import React from 'react';
import styles from 'styles/User/ChangePassword/Container/ChangePwButton.module.scss';

export const ChangePwButton = ({ onSubmit }) => {
  return (
    <div className={styles.btnWrap}>
      <button type="submit" onClick={() => onSubmit()}>
        변경하기
      </button>
    </div>
  );
};
