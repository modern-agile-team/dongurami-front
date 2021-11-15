import React from 'react';
import { BsToggleOn, BsToggleOff } from 'react-icons/bs';
import styles from 'styles/Club/Home/Manager/ApproveHeader.module.scss';

const ApproveHeader = ({ applicantInfo, onClick, listOpen }) => {
  const iconSize = 33;
  const cursor = 'pointer';
  return (
    <div className={styles.container}>
      <h1>가입 승인 대기</h1>
      <div>
        <h3>{applicantInfo.length}명</h3>
        {listOpen ? (
          <BsToggleOn cursor={cursor} onClick={onClick} size={iconSize} />
        ) : (
          <BsToggleOff cursor={cursor} onClick={onClick} size={iconSize} />
        )}
      </div>
    </div>
  );
};

export default ApproveHeader;
