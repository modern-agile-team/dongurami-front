import styles from "../../styles/User/Find/FindPW.module.scss";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";

export const FindPW = () => {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");

  const onChange = (e) => {
    const { name, value } = e.target;
    name === "id" ? setId(value) : setEmail(value);
  };

  const onSubmit = () => {
    axios("http://3.36.72.145:8080/api/forgot-password", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=utf-8",
      },
      data: {
        id,
        email,
      },
    })
      .then((res) => {
        alert(res.data.msg);
      })
      .catch((err) => alert(err.response.data.msg));
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.find}>
        <div className={styles.body}>
          <h1>비밀번호 찾기</h1>
          <input
            className={styles.num}
            type="number"
            placeholder="학번"
            name="id"
            onChange={onChange}
          />
          <input
            className={styles.email}
            type="text"
            placeholder="이메일"
            name="email"
            onChange={onChange}
            onKeyPress={onKeyPress}
          />
        </div>
        <div className={styles.findID}>
          <Link href="/findID" passHref>
            <span>아이디 찾기</span>
          </Link>
        </div>
        <div>
          <button onClick={onSubmit}>비밀번호 찾기</button>
        </div>
      </div>
    </div>
  );
};

export default FindPW;
