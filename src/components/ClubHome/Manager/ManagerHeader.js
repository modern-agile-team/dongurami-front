import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { useRouter } from 'next/router';
import styles from '../../../styles/Club/Home/Manager/ManagerHeader.module.scss';

const ManagerHeader = () => {
  const router = useRouter();
  return (
    <div className={styles.header}>
      <AiOutlineHome
        size={30}
        onClick={() =>
          router.push({
            pathname: '/clubhome/club',
            query: { no: router.query.no }
          })
        }
      />
      <h1 onClick={() => router.push('/clubhome')}>우아한 애자일</h1>
    </div>
  );
};

export default ManagerHeader;
