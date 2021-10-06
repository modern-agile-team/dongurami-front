import { useEffect, useState } from "react";
import Scraps from "./Scraps";
import styles from "../../styles/Profile/Profile.module.scss";
import UserInfo from "./UserInfo";
import router, { Router } from "next/router";

function Profile() {
  const [comp, setComp] = useState("프로필");
  const [token, setToken] = useState("");

  const moveWriteScraps = () => {
    router.push("/profile/writescraps");
  };

  const data = {
    info: {
      id: "test1",
      club: [1, 0],
    },
    profile: {
      id: "test1",
      name: "test1",
      email: "123@na.co",
      major: "정보통신공학과",
      profileImageUrl: null,
      club: [
        { no: 1, title: "우아한 애자일" },
        { no: 2, title: "안 우아한 애자일" },
      ],
      grade: 2,
      gender: 1,
      phoneNumber: "01091693840",
      fileId: null,
    },
  };

  let tempFileUrl = null;
  let tempFileId = null;

  const scrapData = [
    {
      no: 1,
      title: "이미지밑에 뜰 제목",
      inDate: "2021-10-01",
      modifyDate: "2021-10-02",
      fileUrl: tempFileUrl,
      fileId: tempFileId,
    },
    {
      no: 2,
      title: "제목짓",
      inDate: "2021-09-30",
      modifyDate: "2021-10-02",
      fileUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo2x09km7b35RzvH8yg_tXzVkSi_jXJnmOWA&usqp=CAU",
      fileId: "cat",
    },
    {
      no: 3,
      title: "기귀찮",
      inDate: "2021-08-02",
      modifyDate: "2021-10-02",
      fileUrl: tempFileUrl,
      fileId: tempFileId,
    },
  ];

  const logout = () => {
    console.log(1);
    // setToken("");
    // window.localStorage.setItem("jwt", token);
    // window.location.reload();
  };

  const baseImg =
    "https://blog.kakaocdn.net/dn/c3vWTf/btqUuNfnDsf/VQMbJlQW4ywjeI8cUE91OK/img.jpg";

  return (
    <div className={styles.container}>
      <div className={styles.profileHeader}>
        <button onClick={() => setComp("프로필")}>프로필</button>
        <button onClick={() => setComp("스크랩")}>스크랩</button>
      </div>
      <UserInfo
        logout={logout}
        baseImg={baseImg}
        data={data}
        comp={comp}
        setComp={setComp}
      />
      <Scraps
        moveWriteScraps={moveWriteScraps}
        data={data}
        scrapData={scrapData}
        comp={comp}
        setComp={setComp}
      />
    </div>
  );
}

export default Profile;
