import React from "react";
import styles from "../../../styles/Club/Home/Manager/ManagerPreface.module.scss";

const MembersPreface = () => {
  return (
    <div className={styles.preface}>
      <div>
        <span>직급</span>
      </div>
      <div>
        <span>이름</span>
      </div>
      <div>
        <span>가입 신청 관리</span>
      </div>
      <div>
        <span>게시글 편집</span>
      </div>
    </div>
  );
};

export default MembersPreface;
