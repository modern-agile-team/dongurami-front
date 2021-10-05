import styles from "../../../styles/Club/Home/Intro/ClubIntro.module.scss";
import ClubInfo from "./ClubInfo";
import Desc from "./Desc";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const ClubIntro = () => {
  const [info, setInfo] = useState([]);
  const [descUpdate, setDescUpdate] = useState(false);
  const [introDesc, setIntroDesc] = useState("");
  const [categori, setCategori] = useState("");
  const [leader, setLeader] = useState("");

  const toLogin = useRouter();

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

  // 동아리 소개 수정
  const onDescSubnmit = async () => {
    const options = {
      method: "PUT",
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
    await axios(`${process.env.NEXT_PUBLIC_API_URL}/api/club/home/1`, options)
      .then((res) =>
        res.data
          ? alert("글이 수정되었습니다.")
          : alert("글 수정에 실패했습니다")
      )
      .catch((err) => alert(err.response.data.msg));

    setDescUpdate(!descUpdate);
  };

  // 동아리 정보 불러오기
  const getClubData = async () => {
    const options = {
      headers: {
        "Content-type": "application/json; charset=utf-8",
        "x-auth-token": jwtTocken,
      },
    };
    await axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/club/home/1`, options)
      .then((res) => {
        setLeader(res.data.result[0].leader);
        setCategori(res.data.result[0].category);
        setInfo(res.data.result);
        setIntroDesc(res.data.result[0].introduce);
      })
      .catch((err) => {
        alert(err.response.data.msg);
        toLogin.push("/LoginPage");
      });
  };

  useEffect(() => {
    getClubData();
  }, []);

  return (
    <div className={styles.container}>
      <ClubInfo
        clubName={info[0] && info[0].name}
        logoUrl={info[0] && info[0].logoUrl}
        fileId={info[0] && info[0].fileId}
        genderMan={info[0] && info[0].genderMan}
        genderWomen={info[0] && info[0].genderWomen}
        categori={categori}
        leader={leader}
      />
      <Desc
        onDescSubnmit={onDescSubnmit}
        onDescChange={onDescChange}
        introDesc={introDesc}
        onDescUpdate={onDescUpdate}
        descUpdate={descUpdate}
        leader={leader}
      />
    </div>
  );
};

export default ClubIntro;
