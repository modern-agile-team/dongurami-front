import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import styles from '../../../styles/Club/Home/Manager/ManagerHeader.module.scss';

const ManagerHeader = ({ toClubHome }) => {
  return (
    <div className={styles.header}>
      <AiOutlineHome size={30} onClick={toClubHome} />
    </div>
  );
};

export default ManagerHeader;
