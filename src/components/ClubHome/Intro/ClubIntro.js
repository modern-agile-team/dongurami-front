import styles from "../../../styles/Club/Home/Intro/ClubIntro.module.scss";
import ClubInfo from "./ClubInfo";
import Desc from "./Desc";
import React, { useEffect, useState } from "react";

const ClubIntro = () => {
  const [info, setInfo] = useState([]);
  const [descUpdate, setDescUpdate] = useState(false);
  const [introDesc, setIntroDesc] = useState("");

  const onDescUpdate = () => {
    setDescUpdate(!descUpdate);
  };

  const onDescChange = (e) => {
    setIntroDesc(e.target.value);
  };

  const onDescSubnmit = () => {
    fetch("http://3.36.72.145:8080/api/club/home/1", {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=utf-8",
        "x-auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InRlc3QxIiwibmFtZSI6InRlc3QxIiwiY2x1Yk51bSI6IlsxXSJ9.1u6k5cJuaUlZj14CJJZiI8guHnlZXf1uuU6vZjl9jNk",
      },
      body: JSON.stringify({
        logoUrl: info[0].logoUrl,
        fileId: info[0].fileId,
        introduce: introDesc,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    setDescUpdate(!descUpdate);
  };

  const getClubData = async () => {
    await fetch("http://3.36.72.145:8080/api/club/home/1", {
      headers: {
        "Content-type": "application/json; charset=utf-8",
        "x-auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InRlc3QxIiwibmFtZSI6InRlc3QxIiwiY2x1Yk51bSI6IlsxXSJ9.1u6k5cJuaUlZj14CJJZiI8guHnlZXf1uuU6vZjl9jNk",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setInfo(data.result);
        setIntroDesc(data.result[0].introduce);
      });
  };
  useEffect(() => {
    getClubData();
  }, []);

  return (
    <div className={styles.container}>
      <ClubInfo
        name={info[0] ? info[0].name : 0}
        logoUrl={info[0] ? info[0].logoUrl : 0}
        fileId={info[0] ? info[0].fileId : 0}
        genderMan={info[0] ? info[0].genderMan : 0}
        genderWomen={info[0] ? info[0].genderWomen : 0}
      />
      <Desc
        onDescSubnmit={onDescSubnmit}
        onDescChange={onDescChange}
        introDesc={introDesc}
        onDescUpdate={onDescUpdate}
        descUpdate={descUpdate}
      />
    </div>
  );
};

export default ClubIntro;
