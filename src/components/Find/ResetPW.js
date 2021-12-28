import { useState, useEffect } from 'react';
import styles from '../../styles/User/Find/ResetPW.module.scss';
import { patchResetPW } from 'apis/user';
import { useRouter } from 'next/router';

function ResetPW() {
  const [id, setId] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [checkNewPassword, setCheckNewPassword] = useState('');
  const [userToken, setUserToken] = useState();

  const onChange = (e) => {
    const { name, value } = e.target;

    if (name === 'id') setId(value);
    if (name === 'newPassword') setNewPassword(value);
    if (name === 'checkNewPassword') setCheckNewPassword(value);
  };

  useEffect(() => {
    setUserToken(window.localStorage.getItem('user_token'));
  }, []);

  const router = useRouter();

  const onSubmit = (e) => {
    e.preventDefault();
    patchResetPW(
      {
        id,
        newPassword,
        checkNewPassword
      },
      userToken
    )
      .then((res) => {
        alert(res.data.msg);
        router.push('/LoginPage');
      })
      .catch((err) => {
        if (err.response.data.useable === false) {
          alert(
            '학번이 일치하지 않습니다.\n자신의 학번이 맞는지 확인해 주세요.'
          );
        } else {
          alert(err.response.data.msg);
        }
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.resetPW}>
        <div className={styles.body}>
          <h1>새 비밀번호 설정</h1>
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

export default ResetPW;
