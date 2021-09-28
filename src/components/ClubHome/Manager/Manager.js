import React, { useState, useEffect, useRef } from "react";
import styles from "../../../styles/Club/Home/Manager/Manager.module.scss";
import Approve from "./Approve";
import Members from "./Members";
import axios from "axios";

export const Manager = () => {
  const [members, setMembers] = useState([]);
  const [leader, setLeader] = useState("");
  const [applicantInfo, setApplicantInfo] = useState([]);
  const [applicantQNA, setApplicantQNA] = useState([]);
  const [mergedApplicantQNA, setMergedApplicantQNA] = useState([]);
  const [mergedApplicantInfo, setMergedApplicantInfo] = useState([]);

  const changeLeader = useRef([]);

  let jwtToken = "";

  if (typeof window !== "undefined") {
    jwtToken = localStorage.getItem("jwt");
  }

  // 동아리원 정보 GET
  const getMembersData = async () => {
    const options = {
      headers: {
        "Content-type": "application/json; charset=utf-8",
        "x-auth-token": jwtToken,
      },
    };
    await axios
      .get("http://3.36.72.145:8080/api/club/admin-option/1", options)
      .then((res) => {
        setApplicantQNA(res.data.applicant.questionsAnswers);
        setApplicantInfo(res.data.applicant.applicantInfo);
        setLeader(res.data.clubAdminOption.leader);
        setMembers(res.data.clubAdminOption.memberAndAuthList);
        setMergedApplicantQNA(
          mergeApplicantQNA(res.data.applicant.applicantInfo)
        );
      })
      .catch((err) => console.log(err.response.data));
  };

  // 가입 승인
  const onApplyAccept = async (e) => {
    const index = e.target.id;
    const applicantID = mergedApplicantInfo[index].id;
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=utf-8",
        "x-auth-token": jwtToken,
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
    getMembersData();
  };

  // 가입 거절
  const onApplyDelete = async (e) => {
    const index = e.target.id;
    const applicantID = mergedApplicantInfo[index].id;
    const options = {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=utf-8",
        "x-auth-token": jwtToken,
      },
      data: {
        applicant: applicantID,
      },
    };
    await axios(
      "http://3.36.72.145:8080/api/club/admin-option/1/reject-applicant",
      options
    )
      .then((res) => alert(res.data.msg))
      .catch((err) => alert(err.response.data.msg));
    getMembersData();
  };

  // 회장 양도
  const onLeaderChange = async (memberIndex) => {
    const newLeader = changeLeader.current;
    const newLeaderId = newLeader[memberIndex].id;

    const options = {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=utf-8",
        "x-auth-token": jwtToken,
      },
      data: {
        newLeader: newLeaderId,
      },
    };
    await axios(
      "http://3.36.72.145:8080/api/club/admin-option/1/leader",
      options
    )
      .then((res) => alert(res.data.msg))
      .catch((err) => alert(err.response.data.msg));
    getMembersData();
  };

  useEffect(() => {
    if (applicantInfo.length > 0 && mergedApplicantQNA.length > 0) {
      setMergedApplicantInfo(
        mergeApplicantInfo(applicantInfo, mergedApplicantQNA)
      );
    }
  }, [applicantInfo, mergedApplicantQNA]);

  useEffect(() => {
    getMembersData();
  }, []);

  return (
    <div className={styles.container}>
      <Members
        members={members}
        leader={leader}
        changeLeader={changeLeader}
        onLeaderChange={onLeaderChange}
      />
      <Approve
        onApplyAccept={onApplyAccept}
        jwtTocken={jwtToken}
        applicantInfo={applicantInfo}
        applicantQNA={applicantQNA}
        mergedApplicantInfo={mergedApplicantInfo}
        onApplyDelete={onApplyDelete}
      />
    </div>
  );
};

export default Manager;

// 가입 추가 질문 데이터 가공
const mergeApplicantQNA = (needMergeData) => {
  const merged = [];
  for (let dataIndex in needMergeData) {
    if (
      parseInt(dataIndex) === 0 ||
      (parseInt(dataIndex) > 0 &&
        needMergeData[dataIndex - 1].id !== needMergeData[dataIndex].id)
    ) {
      const obj = {
        id: needMergeData[dataIndex].id,
        questions: [needMergeData[dataIndex].question],
        answers: [needMergeData[dataIndex].answer],
      };
      merged.push(obj);
    } else {
      for (let j of merged) {
        if (j.id === needMergeData[dataIndex].id) {
          j.questions.push(needMergeData[dataIndex].question);
          j.answers.push(needMergeData[dataIndex].answer);
        }
      }
    }
  }
  return merged;
};

// 가입 요청 데이터 가공
const mergeApplicantInfo = (needMergeData, toMergeData) => {
  for (let dataIndex in needMergeData) {
    if (toMergeData[dataIndex].id === needMergeData[dataIndex].id) {
      needMergeData[dataIndex].answers = toMergeData[dataIndex].answers;
      needMergeData[dataIndex].questions = toMergeData[dataIndex].questions;
    }
  }
  return needMergeData;
};
