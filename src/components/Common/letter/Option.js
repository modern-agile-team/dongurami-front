import { useRef, useState } from 'react';
import styles from '../../../styles/Board/Promotion/Comment.module.scss';

const option = () => {
  return (
    <div>
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
    </div>
  );
};

export default option;
