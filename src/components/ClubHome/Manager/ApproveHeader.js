import React from "react";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";

const ApproveHeader = ({ applicantInfo, onClick, listOpen }) => {
  const iconSize = 25;
  const cursor = "pointer";
  return (
    <div>
      <h1>가입 승인 대기</h1>
      <h3>{applicantInfo.length}명</h3>
      {listOpen ? (
        <BsToggleOn cursor={cursor} onClick={onClick} size={iconSize} />
      ) : (
        <BsToggleOff cursor={cursor} onClick={onClick} size={iconSize} />
      )}
      <hr />
    </div>
  );
};

export default ApproveHeader;
