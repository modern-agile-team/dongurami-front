import React from "react";

const ApproveHeader = ({ answers }) => {
  return (
    <div>
      <h1>가입 승인 대기</h1>
      <h3>{answers.length}명</h3>
      <hr />
    </div>
  );
};

export default ApproveHeader;
