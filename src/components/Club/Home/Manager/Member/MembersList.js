import React, { useState } from 'react';
import styles from 'styles/Club/Home/Manager/MembersList.module.scss';
import { RiVipCrownFill, RiVipCrownLine } from 'react-icons/ri';
import MemberInfo from './MemberInfo';

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
  const [openMemberInfo, setOpenMemberInfo] = useState(false);
  const gender = memberInfo.gender === 1 ? '남' : '여';
  // ;
  return (
    <>
      <ul className={styles.member}>
        <li id={styles.crown}>
          {memberInfo.name === leader ? (
            <RiVipCrownFill />
          ) : (
            <RiVipCrownLine onClick={onLeaderChange} id={styles.changeLeader} />
          )}
        </li>
        <li className={styles.name}>
          <span
            onClick={() => setOpenMemberInfo(!openMemberInfo)}
            ref={changeLeader}
            id={memberInfo.id}
          >
            {memberInfo.name} [{gender}]
          </span>
        </li>
        <li className={styles.input}>
          <input
            type="checkBox"
            defaultChecked={memberInfo.joinAdminFlag ? true : false}
            disabled={memberInfo.name === leader ? true : false}
            ref={applyAuth}
            onClick={onApplyAuthClick}
          />
        </li>
        <li className={styles.input}>
          <input
            type="checkBox"
            defaultChecked={memberInfo.boardAdminFlag ? true : false}
            disabled={memberInfo.name === leader ? true : false}
            ref={boardAuth}
            onClick={onBoardAuth}
          />
        </li>
      </ul>
      <MemberInfo
        memberInfo={memberInfo}
        leader={leader}
        exileMember={exileMember}
        openMemberInfo={openMemberInfo}
      />
    </>
  );
};

export default MembersList;
