import React from 'react';
import styles from 'styles/Club/Home/Manager/ManagerPreface.module.scss';

const MembersPreface = ({ members }) => {
  return (
    <>
      <ul className={styles.preface}>
        <li className={styles.members}>
          <span>{members} 명</span>
        </li>
        <li>
          <span id={styles.name}>이름</span>
        </li>
        <li className={styles.input}>
          <span>가입 관리</span>
        </li>
        <li className={styles.input}>
          <span>게시글 관리</span>
        </li>
      </ul>
    </>
  );
};

export default MembersPreface;
