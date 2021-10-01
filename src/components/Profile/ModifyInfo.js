import styles from "../../styles/Profile/ModifyInfo.module.scss";

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

  return (
    <div>
      <img
        className={styles.profileImg}
        src={data.profile.profileImageUrl ?? baseImg}
      />
      {/* <select>
        <option value="">학과선택</option>
        <option value="ㅇㅇ과">ㅇㅇ과</option>
        <option value="ㅁㅁ과">ㅁㅁ과</option>
        <option value="ㄷㄷ과">ㄷㄷ과</option>
        <option value="ㄴㄴ과">ㄴㄴ과</option>
      </select> */}
    </div>
  );
};

export default ModifyInfo;
