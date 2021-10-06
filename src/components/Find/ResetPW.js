import { useState } from "react";
import styles from "../../styles/User/Find/ResetPW.module.scss";

function ResetPW() {
  const [id, setId] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [checkNewPassword, setCheckNewPassword] = useState("");

  const onChange = (e) => {
    const { name, value } = e.target;

    if (name === "id") setId(value);
    if (name === "newPassword") setNewPassword(value);
    if (name === "checkNewPassword") setCheckNewPassword(value);
  };

  console.log(id);
  console.log(newPassword);
  console.log(checkNewPassword);

  const onSubmit = () => {
    axios(`${process.env.NEXT_PUBLIC_API_URL}/api/find-password/:token`, {
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
    <div className={styles.container}>
      <h1>새 비밀번호 설정</h1>
      <form>
        <input
          type="number"
          placeholder="학번"
          name="id"
          value={id}
          onChange={onChange}
        />
        <input
          type="password"
          placeholder="새로운 비밀번호"
          name="newPassword"
          value={newPassword}
          onChange={onChange}
        />
        <input
          type="password"
          placeholder="새로운 비밀번호 확인"
          name="checkNewPassword"
          value={checkNewPassword}
          onChange={onChange}
        />
        <button type="submit">변경하기</button>
      </form>
    </div>
  );
}

export default ResetPW;
