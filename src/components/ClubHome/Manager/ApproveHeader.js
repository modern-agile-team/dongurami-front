import React from "react";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";

const ApproveHeader = ({ answers, onClick, listOpen }) => {
  const iconSize = 25;
  return (
    <div>
      <h1>가입 승인 대기</h1>
      <h3>{answers.length}명</h3>
      {listOpen ? (
        <BsToggleOn onClick={onClick} size={iconSize} />
      ) : (
        <BsToggleOff onClick={onClick} size={iconSize} />
      )}
      <hr />
    </div>
  );
};

export default ApproveHeader;
