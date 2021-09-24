import React from "react";
import styles from "../../../styles/Club/Home/Manager/Manager.module.scss";
import MembersList from "./MembersList";
import MembersHeader from "./MembersHeader";
import MembersPreface from "./MembersPreface";

export const Members = ({ members, leader }) => {
  return (
    <div>
      <MembersHeader members={members.length} />
      <MembersPreface />
      {members.map((el, i) => {
        return (
          <MembersList
            key={i}
            name={el.name}
            leader={leader}
            auth1={el.joinAdminFlag}
            auth2={el.boardAdminFlag}
          />
        );
      })}
      <hr />
      <button className={styles.addBtn}>수정</button>
    </div>
  );
};

export default Members;
