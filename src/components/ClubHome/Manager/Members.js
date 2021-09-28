import React, { useRef } from "react";
import styles from "../../../styles/Club/Home/Manager/Manager.module.scss";
import MembersList from "./MembersList";
import MembersHeader from "./MembersHeader";
import MembersPreface from "./MembersPreface";

export const Members = ({
  members,
  leader,
  onLeaderChange,
  onApplyAuthClick,
  onBoardAuth,
  refArr,
  changeMembersAuth,
}) => {
  return (
    <div>
      <MembersHeader members={members.length} />
      <MembersPreface />
      {members.map((el, index) => {
        return (
          <MembersList
            key={index}
            memberInfo={[el.name, el.id, el.joinAdminFlag, el.boardAdminFlag]}
            leader={leader}
            onLeaderChange={() => onLeaderChange(index)}
            onApplyAuthClick={onApplyAuthClick}
            onBoardAuth={onBoardAuth}
            boardAuth={(element) => (refArr[1].current[index] = element)}
            applyAuth={(element) => (refArr[0].current[index] = element)}
            changeLeader={(element) => (refArr[2].current[index] = element)}
          />
        );
      })}
      <hr />
      <button className={styles.addBtn} onClick={changeMembersAuth}>
        수정
      </button>
    </div>
  );
};

export default Members;
