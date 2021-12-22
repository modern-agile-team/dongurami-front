import React from 'react';
import Link from 'next/link';
import styles from 'styles/User/SignUp/BasicSignUp/LoginRoute.module.scss';

export const LoginRoute = () => {
  return (
    <div className={styles.login}>
      <span>계정이 있으신가요?</span>
      <br />
      <Link href="/LoginPage" passHref>
        <span className={styles.loginRouting}>로그인 하기</span>
      </Link>
    </div>
  );
};
