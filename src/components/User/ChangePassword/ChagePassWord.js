import styles from 'styles/User/ChangePassword/ChangePassword.module.scss';
import { useState } from 'react';
import { patchChangePW } from 'apis/user';
import { useRouter } from 'next/router';

function ChangePW() {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [checkNewPassword, setCheckNewPassword] = useState('');

  const onChange = (e) => {
    const { name, value } = e.target;

    if (name === 'password') setPassword(value);
    if (name === 'newPassword') setNewPassword(value);
    if (name === 'checkNewPassword') setCheckNewPassword(value);
  };

  const router = useRouter();

  const onSubmit = () => {
    patchChangePW({
      password,
      newPassword,
      checkNewPassword
    })
      .then((res) => {
        alert(res.data.msg);
        router.back();
      })
      .catch((err) => alert(err.response.data.msg));
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.changePW}>
        <div className={styles.body}>
          <h1>비밀번호 변경</h1>
          <input
            type="password"
            placeholder="기존 비밀번호"
            name="password"
            value={password}
            onChange={onChange}
          />
          <input
            type="password"
            placeholder="변경할 비밀번호"
            name="newPassword"
            value={newPassword}
            onChange={onChange}
          />
          <input
            type="password"
            placeholder="변경할 비밀번호 확인"
            name="checkNewPassword"
            value={checkNewPassword}
            onChange={onChange}
            onKeyPress={onKeyPress}
          />
        </div>
        <div className={styles.btnWrap}>
          <button type="submit" onClick={onSubmit}>
            변경하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChangePW;
