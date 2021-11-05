import React from 'react';
import styles from '../../../styles/Club/Home/Manager/MembersList.module.scss';
import { RiVipCrownFill, RiVipCrownLine } from 'react-icons/ri';

const MembersList = ({
  leader,
  onLeaderChange,
  applyAuth,
  boardAuth,
  changeLeader,
  onBoardAuth,
  onApplyAuthClick,
  memberInfo,
  exileMember
}) => {
  return (
    <div className={styles.member}>
      <div id={styles.crown}>
        {memberInfo[0] === leader ? (
          <RiVipCrownFill />
        ) : (
          <RiVipCrownLine onClick={onLeaderChange} id={styles.changeLeader} />
        )}
      </div>
      <div className={styles.name}>
        <span onClick={memberInfo[0] !== leader ? exileMember : null}>
          {memberInfo[0]}
        </span>
      </div>
      <div>
        <span ref={changeLeader} id={memberInfo[1]}>
          {memberInfo[1]}
        </span>
      </div>
      <div className={styles.input}>
        <input
          type="checkBox"
          defaultChecked={memberInfo[2] ? true : false}
          disabled={memberInfo[0] === leader ? true : false}
          ref={applyAuth}
          onClick={onApplyAuthClick}
        />
      </div>
      <div className={styles.input}>
        <input
          type="checkBox"
          defaultChecked={memberInfo[3] ? true : false}
          disabled={memberInfo[0] === leader ? true : false}
          ref={boardAuth}
          onClick={onBoardAuth}
        />
      </div>
    </div>
  );
};

export default MembersList;
