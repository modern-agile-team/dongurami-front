import React, { useState, useEffect } from "react";
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

  let jwtTocken = "";

  if (typeof window !== "undefined") {
    jwtTocken = localStorage.getItem("jwt");
  }

  // 동아리원 정보 GET
  const getMembersData = async () => {
    const options = {
      headers: {
        "Content-type": "application/json; charset=utf-8",
        "x-auth-token": jwtTocken,
      },
    };
    await axios
      .get("http://3.36.72.145:8080/api/club/admin-option/1", options)
      .then((res) => {
        setApplicantQNA(res.data.applicant.questionAndAnswer);
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
        "x-auth-token": jwtTocken,
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
      <Members members={members} leader={leader} />
      <Approve
        onApplyAccept={onApplyAccept}
        jwtTocken={jwtTocken}
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
