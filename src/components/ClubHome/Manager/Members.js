import React, { useEffect, useState } from "react";
import styles from "../../../styles/Club/Home/Manager/Manager.module.scss";
import MembersMeber from "./MembersMember";
import MembersHeader from "./MembersHeader";
import MembersPreface from "./MembersPreface";
import axios from "axios";

export const Members = () => {
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
        setLeader(res.data.clubAdminOption.leader);
        setMembers(res.data.clubAdminOption.memberAndAuthList);
      })
      .catch((err) => console.log(err.response.data.msg[0]));
  };

  useEffect(() => {
    getMembersData();
  }, []);

  return (
    <div>
      <MembersHeader members={members.length} />
      <MembersPreface />
      {members.map((el, i) => {
        return (
          <MembersMeber
            key={i}
            name={el.name}
            leader={leader}
            auth1={el.joinAdminFlag}
            auth2={el.boardAdminFlag}
          />
        );
      })}
      <hr />
      <button className={styles.addBtn}>수정</button>
    </div>
  );
};

export default Members;
