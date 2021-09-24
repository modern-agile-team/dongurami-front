import React, { useState, useEffect } from "react";
import styles from "../../../styles/Club/Home/Manager/Manager.module.scss";
import Approve from "./Approve";
import Members from "./Members";
import axios from "axios";

export const Manager = () => {
  const [members, setMembers] = useState([]);
  const [leader, setLeader] = useState("");
  let jwtTocken = "";

  if (typeof window !== "undefined") {
    jwtTocken = localStorage.getItem("jwt");
  }

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
        console.log(res.data.applicant);
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
      <Approve />
    </div>
  );
};

export default Manager;
