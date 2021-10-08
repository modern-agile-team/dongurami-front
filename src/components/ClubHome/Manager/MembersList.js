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
  memberInfo
}) => {
  return (
    <div className={styles.member}>
      <div className={styles.name}>
        <div id={styles.crown}>
          {memberInfo[0] === leader ? (
            <RiVipCrownFill />
          ) : (
            <RiVipCrownLine onClick={onLeaderChange} id={styles.changeLeader} />
          )}
        </div>
        <div id={styles.name}>
          <span>{memberInfo[0]}</span>
        </div>
      </div>
      <div>
        <span ref={changeLeader} id={memberInfo[1]}>
          {memberInfo[1]}
        </span>
      </div>
      <div>
        <input
          type="checkBox"
          defaultChecked={memberInfo[2] ? true : false}
          disabled={memberInfo[0] === leader ? true : false}
          ref={applyAuth}
          onClick={onApplyAuthClick}
        />
      </div>
      <div>
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
