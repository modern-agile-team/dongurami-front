import React from "react";
import styles from "../../../styles/Club/Home/Intro/LogoUpdate.module.scss";

const LogoUpdate = ({ onClubLogoChange }) => {
  return (
    <div className={styles.container}>
      <input
        type="file"
        id="clubLogo"
        name="clubLogo_img"
        accept="image/jpg, image/png, image/jpeg"
        onChange={onClubLogoChange}
      />
      <button>로고 수정</button>
    </div>
  );
};

export default LogoUpdate;
