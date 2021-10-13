import React from 'react';
import ApproveInfo from './ApproveInfo';

const ApproveList = ({ onApplyAccept, onApplyReject, applicantInfo }) => {
  return (
    <>
      {applicantInfo.map((info, index) => {
        return (
          <ApproveInfo
            key={info.id}
            info={info}
            index={index}
            onApplyAccept={onApplyAccept}
            onApplyReject={onApplyReject}
          />
        );
      })}
    </>
  );
};

export default ApproveList;
