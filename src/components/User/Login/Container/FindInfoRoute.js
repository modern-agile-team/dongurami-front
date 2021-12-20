import React from 'react';
import Link from 'next/link';
import styles from 'styles/User/Login/Container/FindInfoRoute.module.scss';

export const FindInfoRoute = () => {
  return (
    <div className={styles.find}>
      <Link href="/findID" passHref>
        <span className={styles.findID}>아이디 찾기</span>
      </Link>
      <Link href="/findPW" passHref>
        <span>비밀번호 찾기</span>
      </Link>
    </div>
  );
};
