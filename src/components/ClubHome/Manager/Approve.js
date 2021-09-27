import React, { useState } from "react";
import styles from "../../../styles/Club/Home/Manager/Approve.module.scss";
import ApproveHeader from "./ApproveHeader";
import ApproveList from "./ApproveList";

const Approve = ({ applicantInfo, applicantQNA }) => {
  const [listOpen, setListOpen] = useState(false);
  const mergedApplicantQNA = mergeApplicantQNA(applicantQNA);
  const mergedApplicantInfo = mergeApplicantInfo(
    applicantInfo,
    mergedApplicantQNA
  );

  console.log(mergedApplicantInfo);

  const onApplyDelete = (e) => {
    alert("가입이 거절되었습니다.");
  };
  const onApplyAccept = (e) => {
    alert("가입이 승인되었습니다.");
  };

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
      {listOpen ? (
        <ApproveList
          onApplyDelete={onApplyDelete}
          onApplyAccept={onApplyAccept}
          applicantInfo={mergedApplicantInfo}
        />
      ) : (
        <></>
      )}
    </div>
  );
};
export default Approve;

const mergeApplicantQNA = (needMergeData) => {
  const merged = [];
  for (let i in needMergeData) {
    if (
      parseInt(i) === 0 ||
      (parseInt(i) > 0 && needMergeData[i - 1].id !== needMergeData[i].id)
    ) {
      const obj = {
        id: needMergeData[i].id,
        questions: [needMergeData[i].question],
        answers: [needMergeData[i].answer],
      };
      merged.push(obj);
    } else {
      for (let j of merged) {
        if (j.id === needMergeData[i].id) {
          j.questions.push(needMergeData[i].question);
          j.answers.push(needMergeData[i].answer);
        }
      }
    }
  }
  return merged;
};

const mergeApplicantInfo = (needMergeData, toMergeData) => {
  for (let i in needMergeData) {
    if (toMergeData[i].id === needMergeData[i].id) {
      needMergeData[i].answers = toMergeData[i].answers;
      needMergeData[i].questions = toMergeData[i].questions;
    }
  }
  return needMergeData;
};
