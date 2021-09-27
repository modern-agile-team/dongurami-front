import axios from "axios";
import React, { useState } from "react";
import styles from "../../../styles/Club/Home/Manager/Approve.module.scss";
import ApproveHeader from "./ApproveHeader";
import ApproveList from "./ApproveList";

const Approve = ({ applicantInfo, applicantQNA, jwtTocken }) => {
  const [listOpen, setListOpen] = useState(false);
  const mergedApplicantQNA = mergeApplicantQNA(applicantQNA);
  const mergedApplicantInfo = mergeApplicantInfo(
    applicantInfo,
    mergedApplicantQNA
  );

  const onApplyDelete = (e) => {
    alert("가입이 거절되었습니다.");
  };

  // 가입 승인
  const onApplyAccept = async (e) => {
    const index = e.target.id;
    const applicantID = mergedApplicantInfo[index].id;
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=utf-8",
        "x-auth-token": jwtTocken,
      },
      data: {
        applicant: applicantID,
      },
    };
    await axios(
      "http://3.36.72.145:8080/api/club/admin-option/1/accept-applicant",
      options
    )
      .then((res) => alert(res.data.msg))
      .catch((err) => alert(err.response.data.msg));
  };

  // 가입 거절
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

// 가입 추가 질문 데이터 가공
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

// 가입 요청 데이터 가공
const mergeApplicantInfo = (needMergeData, toMergeData) => {
  for (let i in needMergeData) {
    if (toMergeData[i].id === needMergeData[i].id) {
      needMergeData[i].answers = toMergeData[i].answers;
      needMergeData[i].questions = toMergeData[i].questions;
    }
  }
  return needMergeData;
};
