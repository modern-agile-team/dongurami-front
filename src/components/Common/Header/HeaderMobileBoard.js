import React from 'react';
import styles from '../../../styles/Common/Header/HeaderMobileBoard.module.scss';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export const HeaderMobileBoard = () => {
  const [nowPath, setNowPath] = useState('');

  const router = useRouter();

  //현재경로 표시
  useEffect(() => {
    setNowPath(window.location.pathname);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('nowPath', nowPath);
  }, [nowPath]);

  return (
    <div className={styles.container}>
      <ul className={styles.mobile}>
        <li
          className={styles.notice}
          id={nowPath === '/notice' ? styles.now : undefined}
          onClick={() => {
            router.push('/notice');
          }}
        >
          공지게시판
        </li>
        <li
          className={styles.free}
          id={nowPath === '/free' ? styles.now : undefined}
          onClick={() => {
            router.push('/free');
          }}
        >
          자유게시판
        </li>
      </ul>
    </div>
  );
};

export default HeaderMobileBoard;
