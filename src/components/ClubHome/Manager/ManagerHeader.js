import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import styles from '../../../styles/Club/Home/Manager/ManagerHeader.module.scss';

const ManagerHeader = ({ toClubHome, clubName }) => {
  return (
    <div className={styles.header}>
      <AiOutlineHome size={30} onClick={toClubHome} />
      <h1 onClick={toClubHome}>{unescape(clubName)}</h1>
    </div>
  );
};

export default ManagerHeader;
