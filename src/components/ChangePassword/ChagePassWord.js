import styles from "../../styles/User/ChangePassword/ChangePassword.module.scss";

function ChangePW() {
  const onSubmit = () => {
    e.preventdefault();
    axios("http://3.36.72.145:8080/api/reset-password", {
      method: "PATCH",
      headers: {
        "Content-type": "application/json; charset=utf-8",
      },
      data: {
        password,
        newPassword,
        checkNewPassword,
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.container}>
      <h1>비밀번호 변경</h1>
      <form>
        <input type="password" placeholder="기존 비밀번호 입력" />
        <input type="password" placeholder="변경할 비밀번호 입력" />
        <input type="password" placeholder="변경할 비밀번호 입력 확인" />
        <button type="submit" onClick={onSubmit}>
          변경하기
        </button>
      </form>
    </div>
  );
}

export default ChangePW;
