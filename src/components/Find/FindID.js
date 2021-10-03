import styles from "../../styles/User/Find/FindID.module.scss";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";

export const FindID = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const onChange = (e) => {
    const { name, value } = e.target;
    name === "name" ? setName(value) : setEmail(value);
  };

  const onSubmit = () => {
    axios("http://3.36.72.145:8080/api/find-id", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=utf-8",
      },
      data: {
        name,
        email,
      },
    })
      .then((res) => {
        alert(`${name}님의 아이디는 ${res.data.id}입니다.`);
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
          <h1>아이디 찾기</h1>
          <input
            className={styles.name}
            type="text"
            placeholder="이름"
            name="name"
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
        <div className={styles.findPW}>
          <Link href="/findPW" passHref>
            <span>비밀번호 찾기</span>
          </Link>
        </div>
        <div>
          <button onClick={onSubmit}>아이디 찾기</button>
        </div>
      </div>
    </div>
  );
};

export default FindID;
