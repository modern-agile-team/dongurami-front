import styles from "../../styles/User/Find/FindPW.module.scss";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";

export const FindPW = () => {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [findToken, setFindToken] = useState("");
  const [emailCheck, setEmailCheck] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    name === "id" ? setId(value) : setEmail(value);
  };

  const checkEmail = (e) => {
    const regExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    let result = regExp.test(e.target.value);
    setEmailCheck(result);
  };

  const onSubmit = () => {
    if (id === "") {
      alert("학번을 입력해 주세요.");
    } else if (id.length !== 9) {
      alert("학번은 9자이어야 합니다.");
    } else if (email === "") {
      alert("이메일을 입력해 주세요.");
    } else if (emailCheck === false) {
      alert("이메일 형식을 맞춰 입력해 주세요.");
    } else {
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
          setFindToken(res.data.token);
        })
        .catch((err) => alert(err.response.data.msg));
    }
  };

  console.log("token:", findToken);

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
            onBlur={checkEmail}
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
