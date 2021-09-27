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
      })
      .catch((err) => console.log(err.response.data.clientMsg));
  };

  useEffect(() => {
    getMembersData();
  }, []);
  return (
    <div className={styles.container}>
      <Members members={members} leader={leader} />
      <Approve applicantInfo={applicantInfo} applicantQNA={applicantQNA} />
    </div>
  );
};

export default Manager;
