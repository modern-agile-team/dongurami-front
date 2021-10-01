import styles from "../../../styles/Profile/ModifyInfo.module.scss";
import { useState } from "react";
import SetImg from "./SetImg";
import ModifyHeader from "./ModifyHeader";
import ImmutableData from "./ImmutableData";
import MutableData from "./MutableData";

const ModifyInfo = () => {
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
      club: ["우아한 애자일", "안 우아한 애자일"],
      grade: 2,
      gender: 1,
      phoneNumber: "01091693840",
      fileId: null,
    },
  };
  const baseImg =
    "https://blog.kakaocdn.net/dn/c3vWTf/btqUuNfnDsf/VQMbJlQW4ywjeI8cUE91OK/img.jpg";

  const [email, setEmail] = useState(data.profile.email);
  const [phoneNumber, setPhoneNumber] = useState(data.profile.phoneNumber);
  const [grade, setGrade] = useState(data.profile.grade);
  const [comp, setComp] = useState("수정");

  return (
    <div className={styles.wrap}>
      <ModifyHeader data={data} setComp={setComp} baseImg={baseImg} />
      <ImmutableData data={data} grade={grade} setGrade={setGrade} />
      <MutableData
        data={data}
        setEmail={setEmail}
        setPhoneNumber={setPhoneNumber}
      />
      <SetImg comp={comp} setComp={setComp} />
    </div>
  );
};

export default ModifyInfo;
