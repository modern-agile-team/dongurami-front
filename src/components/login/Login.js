import Link from "next/link";
import styles from "../../styles/User/Login/Login.module.scss";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import OAuth from "./OAuth";

export const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onChange = (e) => {
    const { name, value } = e.target;
    name === "id" ? setId(value) : setPassword(value);
  };

  const router = useRouter();

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  const onSubmit = () => {
    axios("http://3.36.72.145:8080/api/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=utf-8",
      },
      data: {
        id: id,
        password: password,
      },
    })
      .then((res) => {
        if (res.data.jwt) {
          localStorage.setItem("jwt", res.data.jwt);
        }
        router.push("/");
      })
      .catch((err) => console.log(err.response));
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.login}>
        <div className={styles.body}>
          <h1>로그인</h1>
          <input
            className={styles.idInput}
            type="Number"
            placeholder="학번을 입력해 주세요."
            onChange={onChange}
            name="id"
            value={id}
          />
          <input
            className={styles.pwInput}
            type="password"
            placeholder="비밀번호를 입력해 주세요."
            onChange={onChange}
            name="password"
            value={password}
            onKeyPress={onKeyPress}
          />
        </div>
        <div className={styles.find}>
          <Link href="/findID" passHref>
            <span className={styles.findID}>아이디 찾기</span>
          </Link>
          <Link href="/findPW" passHref>
            <span className={styles.findPW}>비밀번호 찾기</span>
          </Link>
        </div>
        <div className={styles.buttons}>
          <button className={styles.loginBtn} onClick={onSubmit}>
            로그인
          </button>
          <div className={styles.naverLogin}>
            <OAuth />
            <button className={styles.signupBtn}>회원가입</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
