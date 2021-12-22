import React from 'react';
import Link from 'next/link';
import styles from 'styles/User/Find/FindID/Container/FindPwRoute.module.scss';

export const FindPwRoute = () => {
  return (
    <div className={styles.findPW}>
      <Link href="/findPW" passHref>
        <span>비밀번호 찾기</span>
      </Link>
    </div>
  );
};
