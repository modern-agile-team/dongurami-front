import React from "react";
import styles from "../../../styles/Club/Home/Intro/LogoUpdate.module.scss";

const LogoUpdate = () => {
  const onChangeLogo = (e) => {
    console.log(e.target.files);
  };

  return (
    <div className={styles.container}>
      <label htmlFor="clubLogo">로고 변경</label>
      <input
        type="file"
        id="clubLogo"
        name="clubLogo_img"
        accept="image/jpg, image/png, image/jpeg"
        onChange={onChangeLogo.bind(this)}
      />
    </div>
  );
};

export default LogoUpdate;
