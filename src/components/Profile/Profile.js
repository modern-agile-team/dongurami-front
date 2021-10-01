import { useEffect, useState } from "react";
import Scrabs from "./Scrabs";
import styles from "../../styles/Profile/Profile.module.scss";
import UserInfo from "./UserInfo";

function Profile() {
  const [comp, setComp] = useState("프로필");
  const [token, setToken] = useState("");

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
      club: ["우아한 애자일", "안 우아한 애자일"],
      grade: 2,
      gender: 1,
      phoneNumber: "01091693840",
      fileId: null,
    },
  };

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
      <UserInfo
        logout={logout}
        baseImg={baseImg}
        data={data}
        comp={comp}
        setComp={setComp}
      />
      <Scrabs comp={comp} setComp={setComp} />
    </div>
  );
}

export default Profile;
