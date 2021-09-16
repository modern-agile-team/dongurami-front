import styles from "../../../styles/Club/Home/Intro/ClubIntro.module.scss";
import ClubInfo from "./ClubInfo";
import Desc from "./Desc";
import React, { useEffect, useState } from "react";
import axios from "axios";

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

  const onDescSubnmit = async () => {
    const options = {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=utf-8",
        "x-auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InRlc3QxIiwibmFtZSI6InRlc3QxIiwiY2x1Yk51bSI6IlsxXSJ9.1u6k5cJuaUlZj14CJJZiI8guHnlZXf1uuU6vZjl9jNk",
      },
      data: {
        logoUrl: info[0].logoUrl,
        fileId: info[0].fileId,
        introduce: introDesc,
      },
    };
    await axios("http://3.36.72.145:8080/api/club/home/1", options)
      .then((res) =>
        res.data
          ? alert("글이 수정되었습니다.")
          : alert("글 수정에 실패했습니다")
      )
      .catch((err) => alert(err.response.data.msg));

    setDescUpdate(!descUpdate);
  };

  const getClubData = async () => {
    const options = {
      headers: {
        "Content-type": "application/json; charset=utf-8",
        "x-auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InRlc3QxIiwibmFtZSI6InRlc3QxIiwiY2x1Yk51bSI6IlsxXSJ9.1u6k5cJuaUlZj14CJJZiI8guHnlZXf1uuU6vZjl9jNk",
      },
    };
    await axios
      .get("http://3.36.72.145:8080/api/club/home/1", options)
      .then((res) => {
        setInfo(res.data.result);
        setIntroDesc(res.data.result[0].introduce);
      })
      .catch((err) => alert(err.response.data.msg));
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
