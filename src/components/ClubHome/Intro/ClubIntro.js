import styles from "../../../styles/Club/Home/Intro/ClubIntro.module.scss";
import ClubInfo from "./ClubInfo";
import Desc from "./Desc";
import React, { useEffect, useState } from "react";
import axios from "axios";

const ClubIntro = () => {
  const [info, setInfo] = useState([]);
  const [descUpdate, setDescUpdate] = useState(false);
  const [introDesc, setIntroDesc] = useState("");
  const [leader, setLeader] = useState("");

  let jwtTocken = "";

  if (typeof window !== "undefined") {
    jwtTocken = localStorage.getItem("jwt");
  }

  const onDescUpdate = () => {
    setDescUpdate(!descUpdate);
  };

  const onDescChange = (e) => {
    setIntroDesc(e.target.value);
  };

  const onDescSubnmit = async () => {
    const options = {
      method: "PATCH",
      headers: {
        "Content-type": "application/json; charset=utf-8",
        "x-auth-token": jwtTocken,
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
        "x-auth-token": jwtTocken,
      },
    };
    await axios
      .get("http://3.36.72.145:8080/api/club/home/1", options)
      .then((res) => {
        setLeader(res.data.result[0].leader);
        setInfo(res.data.result);
        setIntroDesc(res.data.result[0].introduce);
      })
      .catch((err) => alert(err.response.data.msg));
  };

  const onClubLogoChange = (e) => {
    const img = e.target.files[0];
    const formData = new FormData();
    formData.append("file", img);
    for (const keyValue of formData) {
      console.log(keyValue);
    }
  };

  useEffect(() => {
    getClubData();
  }, []);

  return (
    <div className={styles.container}>
      <ClubInfo
        name={info[0] ? info[0].name : null}
        logoUrl={info[0] ? info[0].logoUrl : null}
        fileId={info[0] ? info[0].fileId : null}
        genderMan={info[0] ? info[0].genderMan : null}
        genderWomen={info[0] ? info[0].genderWomen : null}
      />
      <Desc
        onDescSubnmit={onDescSubnmit}
        onDescChange={onDescChange}
        introDesc={introDesc}
        onDescUpdate={onDescUpdate}
        descUpdate={descUpdate}
        onClubLogoChange={onClubLogoChange}
        leader={leader}
      />
    </div>
  );
};

export default ClubIntro;
