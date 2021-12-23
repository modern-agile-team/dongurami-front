import React from 'react';
import styles from '../../../styles/Common/Header/HeaderBoard.module.scss';

export const HeaderBoard = ({ nowPath, router }) => {
  return (
    <div className={styles.container}>
      <ul>
        <li className={styles.dropdown}>
          게시판
          <ul className={styles.dropdownMenu}>
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
            <li
              className={styles.QnA}
              id={nowPath === '/questionAndAnswer' ? styles.now : undefined}
              onClick={() => {
                router.push('/questionAndAnswer');
              }}
            >
              Q&#38;A
            </li>
          </ul>
        </li>
        <li
          className={styles.clublist}
          id={
            nowPath === '/clublists' || nowPath.includes('/clubhome')
              ? styles.now
              : undefined
          }
          onClick={() => {
            router.push('/clublists');
          }}
        >
          동아리 목록
        </li>
        <li
          className={styles.promotion}
          id={nowPath === '/promotion' ? styles.now : undefined}
          onClick={() => {
            router.push('/promotion');
          }}
        >
          동아리 홍보
        </li>
      </ul>
    </div>
  );
};

export default HeaderBoard;
