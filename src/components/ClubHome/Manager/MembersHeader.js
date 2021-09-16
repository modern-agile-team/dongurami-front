import React from "react";

const MembersHeader = ({ members }) => {
  return (
    <div>
      <h1>동아리원 관리</h1>
      <h3>총 {members}명</h3>
      <hr />
    </div>
  );
};

export default MembersHeader;
