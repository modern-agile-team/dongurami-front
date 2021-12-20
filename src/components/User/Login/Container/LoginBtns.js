import OAuth from 'components/User/SignUp/OAuth';
import React from 'react';
import styles from 'styles/User/Login/Container/LoginBtns.module.scss';

export const LoginBtns = ({ onSubmit }) => {
  return (
    <>
      <button className={styles.loginBtn} onClick={() => onSubmit()}>
        로그인
      </button>
      <OAuth />
    </>
  );
};
