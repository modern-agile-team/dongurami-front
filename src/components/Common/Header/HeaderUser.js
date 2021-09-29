import React from "react";
import styles from "../../../styles/Common/Header/HeaderUser.module.scss";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export const HeaderUser = () => {
  const [nowPath, setNowPath] = useState("");

  const router = useRouter();

  //현재경로 표시
  useEffect(() => {
    setNowPath(window.location.pathname);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("nowPath", nowPath);
  }, [nowPath]);

  return (
    <div className={styles.container}>
      <ul className={styles.user}>
        <li
          className={styles.login}
          id={nowPath === "/LoginPage" && styles.now}
          onClick={() => {
            router.push("/LoginPage");
          }}
        >
          로그인
        </li>
        <li
          className={styles.signUp}
          id={nowPath === "/signup" && styles.nowSign}
          onClick={() => {
            router.push("/signup");
          }}
        >
          회원가입
        </li>
      </ul>
    </div>
  );
};

export default HeaderUser;
