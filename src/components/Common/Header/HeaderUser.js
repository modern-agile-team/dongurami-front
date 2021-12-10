import React from 'react';
import styles from '../../../styles/Common/Header/HeaderUser.module.scss';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export const HeaderUser = () => {
  const [nowPath, setNowPath] = useState('');

  const router = useRouter();

  //현재경로 표시
  useEffect(() => {
    setNowPath(router.pathname);
  }, [router.pathname]);

  useEffect(() => {
    window.localStorage.setItem('nowPath', nowPath);
  }, [nowPath]);

  return (
    <div className={styles.container}>
      <ul className={styles.user}>
        <li
          className={styles.login}
          id={nowPath === '/LoginPage' ? styles.now : undefined}
          onClick={() => {
            router.push('/LoginPage');
          }}
        >
          로그인
        </li>
        <li
          className={styles.signUp}
          id={nowPath === '/selectSignUp' ? styles.nowSign : undefined}
          onClick={() => {
            router.push('/selectSignUp');
          }}
        >
          회원가입
        </li>
      </ul>
    </div>
  );
};

export default HeaderUser;
