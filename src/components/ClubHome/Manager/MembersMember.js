import React, { useRef } from "react";
import styles from "../../../styles/Club/Home/Manager/ManagerMember.module.scss";
import { RiVipCrownFill, RiVipCrownLine } from "react-icons/ri";

const MembersMember = ({ name, leader, auth1, auth2 }) => {
  const applyAuth = useRef();
  const boardAuth = useRef();
  const changeLeader = useRef();

  const onApplyAuthClick = () => {
    console.log(applyAuth.current.checked);
  };
  const onBoardAuth = () => {
    console.log(boardAuth.current.checked);
  };
  const onLeaderChange = () => {
    console.log(changeLeader.current.id);
  };

  return (
    <div className={styles.member}>
      <div>
        {name === leader ? (
          <RiVipCrownFill />
        ) : (
          <RiVipCrownLine onClick={onLeaderChange} id={styles.changeLeader} />
        )}
        <span ref={changeLeader} id={name}>
          {name}
        </span>
      </div>
      <div>
        <input
          type="checkBox"
          className={styles.appManage}
          defaultChecked={auth1 ? true : false}
          disabled={name === leader ? true : false}
          ref={applyAuth}
          onClick={onApplyAuthClick}
        />
      </div>
      <div>
        <input
          type="checkBox"
          className={styles.appManage}
          defaultChecked={auth2 ? true : false}
          disabled={name === leader ? true : false}
          ref={boardAuth}
          onClick={onBoardAuth}
        />
      </div>
    </div>
  );
};

export default MembersMember;
