import React from 'react';
import styles from '../../../styles/Common/Header/HeaderMobileBoard.module.scss';

export const HeaderMobileBoard = ({ nowPath, router }) => {
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
          공지 게시판
        </li>
        <li
          className={styles.free}
          id={nowPath === '/free' ? styles.now : undefined}
          onClick={() => {
            router.push('/free');
          }}
        >
          자유 게시판
        </li>
        <li
          className={styles.QnA}
          id={nowPath === '/questionAndAnswer' ? styles.now : undefined}
          onClick={() => {
            router.push('/questionAndAnswer');
          }}
        >
          Q&#38;A 게시판
        </li>
      </ul>
    </div>
  );
};

export default HeaderMobileBoard;
