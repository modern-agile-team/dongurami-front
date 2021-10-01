import styles from "../../../styles/Profile/ModifyInfo.module.scss";
import {
  FaPhoneAlt,
  FaCamera,
  FaUserCircle,
  FaGraduationCap,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { useState } from "react";
import SetImg from "./SetImg";

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

  const gradeArr = [1, 2, 3, 4];

  return (
    <div>
      <div className={styles.divImg}>
        <img
          className={styles.profileImg}
          src={data.profile.profileImageUrl ?? baseImg}
        />
        <FaCamera onClick={() => setComp("이미지수정")} />
        <hr />
      </div>
      <div className={styles.immutable}>
        <div className={styles.name}>
          <FaUserCircle />
          <span> {data.profile.name}</span>
        </div>
        <div>
          <FaGraduationCap />
          <span>{data.profile.major}</span>
          <select
            onChange={(e) => setGrade(e.target.value)}
            defaultValue={grade}
          >
            {gradeArr.map((el, i) => {
              return (
                <option key={i} value={el}>
                  {el === 4 ? "4(졸업생)" : el}
                </option>
              );
            })}
          </select>
          <span>학년</span>
        </div>
        <p>소속 동아리</p>
        {data.profile.club.map((el, i) => {
          return <span key={i}>{el}</span>;
        })}
        <hr />
      </div>
      <div className={styles.mutable}>
        <div className={styles.email}>
          <IoIosMail />
          <input
            placeholder={data.profile.email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className={styles.phone}>
          <FaPhoneAlt />
          <input
            placeholder={data.profile.phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
      </div>
      <SetImg comp={comp} setComp={setComp} />
    </div>
  );
};

export default ModifyInfo;
