import React from "react";
import styles from "../../../styles/Club/Home/Manager/Manager.module.scss";
import MembersList from "./MembersList";
import MembersHeader from "./MembersHeader";
import MembersPreface from "./MembersPreface";

export const Members = ({ members, leader, onLeaderChange, changeLeader }) => {
  return (
    <div>
      <MembersHeader members={members.length} />
      <MembersPreface />
      {members.map((el, index) => {
        return (
          <MembersList
            key={index}
            name={el.name}
            studentId={el.id}
            leader={leader}
            auth1={el.joinAdminFlag}
            auth2={el.boardAdminFlag}
            changeLeader={(element) => (changeLeader.current[index] = element)}
            onLeaderChange={() => onLeaderChange(index)}
          />
        );
      })}
      <hr />
      <button className={styles.addBtn}>수정</button>
    </div>
  );
};

export default Members;
