import React, { useState } from "react";
import styles from "../../../styles/Club/Home/Manager/Approve.module.scss";
import ApproveHeader from "./ApproveHeader";
import ApproveList from "./ApproveList";

const Approve = ({
  onApplyAccept,
  applicantInfo,
  mergedApplicantInfo,
  onApplyReject,
}) => {
  const [listOpen, setListOpen] = useState(false);

  const onApplyListOpen = () => {
    setListOpen(!listOpen);
  };

  return (
    <div className={styles.container}>
      <ApproveHeader
        listOpen={listOpen}
        onClick={onApplyListOpen}
        applicantInfo={applicantInfo}
      />
      {listOpen && (
        <ApproveList
          onApplyReject={onApplyReject}
          onApplyAccept={onApplyAccept}
          applicantInfo={mergedApplicantInfo}
        />
      )}
    </div>
  );
};
export default Approve;
