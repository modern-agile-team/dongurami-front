import styles from '../../styles/User/ChangePassword/ChangePassword.module.scss';

function ChangePW() {
  return (
    <div className={styles.container}>
      <h1>비밀번호 변경</h1>
      <form>
        <input type="password" placeholder="기존 비밀번호 입력" />
        <input type="password" placeholder="변경할 비밀번호 입력" />
        <input type="password" placeholder="변경할 비밀번호 입력 확인" />
        <button type="submit">변경하기</button>
      </form>
    </div>
  );
}

export default ChangePW;
