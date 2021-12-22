import React from 'react';
import Link from 'next/link';
import styles from 'styles/User/Find/FindPW/Container/FindIdRoute.module.scss';

export const FindIdRoute = () => {
  return (
    <div className={styles.findID}>
      <Link href="/findID" passHref>
        <span>아이디 찾기</span>
      </Link>
    </div>
  );
};
