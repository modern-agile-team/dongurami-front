import React from 'react';
import styles from 'styles/User/Login/Container/SignUpRoute.module.scss';
import Link from 'next/link';

export const SignUpRoute = () => {
  return (
    <div className={styles.signup}>
      <span>아직 계정이 없으신가요?</span>
      <br />
      <Link href="/selectSignUp" passHref>
        <span className={styles.signupBtn}>회원가입</span>
      </Link>
    </div>
  );
};
