import React from "react";
import styles from "../../../styles/Club/Home/Manager/ManagerMember.module.scss";

const status = ["회장", "부회장", "동아리원"];

const MembersMember = ({ name, stat }) => {
  return (
    <div className={styles.member}>
      <div>
        <select defaultValue={stat}>
          <option value={status[0]} key={0}>
            {status[0]}
          </option>
          <option value={status[1]} key={1}>
            {status[1]}
          </option>
          <option value={status[2]} key={2}>
            {status[2]}
          </option>
        </select>
      </div>
      <div>
        <span>{name}</span>
      </div>
      <div>
        <input type="checkBox" className={styles.appManage} />
      </div>
      <div>
        <input type="checkBox" className={styles.boardManage} />
      </div>
    </div>
  );
};

export default MembersMember;
