import React from "react";
import styles from "../../../styles/Club/Home/Manager/Manager.module.scss";
import MembersMeber from "./MembersMember";
import MembersHeader from "./MembersHeader";
import MembersPreface from "./MembersPreface";

export const members = [
  {
    name: "오창훈",
    status: "회장",
  },
  {
    name: "민순기",
    status: "부회장",
  },
  {
    name: "이석호",
    status: "동아리원",
  },
  {
    name: "박현우",
    status: "동아리원",
  },
  {
    name: "배범수",
    status: "동아리원",
  },
  {
    name: "류가희",
    status: "동아리원",
  },
  {
    name: "유준상",
    status: "동아리원",
  },
  {
    name: "심서현",
    status: "동아리원",
  },
  {
    name: "김지수",
    status: "동아리원",
  },
];

export const Members = () => {
  return (
    <div>
      <MembersHeader members={members.length} />
      <MembersPreface />
      {members.map((el, i) => {
        return (
          <MembersMeber
            stat={el.status}
            key={i}
            name={el.name}
            bool={el.status}
          />
        );
      })}
      <hr />
      <button className={styles.addBtn}>수정</button>
    </div>
  );
};

export default Members;
