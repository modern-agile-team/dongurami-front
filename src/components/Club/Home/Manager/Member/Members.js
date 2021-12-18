import React from 'react';
import styles from 'styles/Club/Home/Manager/Members.module.scss';
import MembersList from './MembersList';
import MembersPreface from './MembersPreface';
import { AiOutlineHome } from 'react-icons/ai';
import { DonguramiOutlineButton } from 'components/Common/DonguramiButton';

export const Members = ({
  members,
  leader,
  onLeaderChange,
  onApplyAuthClick,
  onBoardAuth,
  refArr,
  changeMembersAuth,
  exileMember,
  toClubHome
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.headers}>
        <AiOutlineHome size={35} onClick={toClubHome} />
        <h1>동아리원 관리</h1>
      </div>
      <MembersPreface members={members.length} />
      <div className={styles.body}>
        {members.map((member, index) => {
          return (
            <MembersList
              key={index}
              memberInfo={member}
              leader={leader}
              onLeaderChange={() => onLeaderChange(index)}
              onApplyAuthClick={onApplyAuthClick}
              onBoardAuth={onBoardAuth}
              boardAuth={(element) => (refArr[1].current[index] = element)}
              applyAuth={(element) => (refArr[0].current[index] = element)}
              changeLeader={(element) => (refArr[2].current[index] = element)}
              exileMember={() => exileMember(index)}
            />
          );
        })}
      </div>
      <div className={styles.addBtn}>
        <DonguramiOutlineButton onClick={changeMembersAuth}>
          ✏️ 권한 수정
        </DonguramiOutlineButton>
      </div>
    </div>
  );
};

export default Members;
