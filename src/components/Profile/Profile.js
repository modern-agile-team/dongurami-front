import { useState } from "react";
import Scrabs from "./Scrabs";
// import FaGraduationCap from "react-icons/Fa";
import styles from "../../styles/Profile/Profile.module.scss";

function Profile() {
  const [comp, setComp] = useState("프로필");
  const data = {
    info: {
      id: "test1",
      club: [1],
    },
    profile: {
      id: "test1",
      name: "test1",
      email: "123@na.co",
      major: "정보통신공학과",
      profileImageUrl: null,
      club: ["우아한 애자일"],
    },
  };

  if (comp === "프로필")
    return (
      <div>
        <div className={styles.profileHeader}>
          {/* <FaGraduationCap /> */}
          <span>{data.profile.name}</span>
        </div>
      </div>
    );
  return <Scrabs />;
}

export default Profile;
