import React from 'react';
import ApproveInfo from './ApproveInfo';

const ApproveList = ({
  onApplyAccept,
  onApplyReject,
  applicantInfo,
  applicantQNA
}) => {
  return (
    <>
      {applicantInfo.map((info, index) => {
        return (
          <ApproveInfo
            key={index}
            index={index}
            info={info}
            QNA={applicantQNA[index]}
            onApplyAccept={onApplyAccept}
            onApplyReject={onApplyReject}
          />
        );
      })}
    </>
  );
};

export default ApproveList;
