import Link from 'next/link';
import styles from '../../styles/User/Login/Login.module.scss';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { postLogin } from 'apis/user';
import { useDispatch } from 'react-redux';
import { getUser } from 'redux/slices/user';
import OAuth from 'components/SignUp/OAuth';

export const Login = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const onChange = (e) => {
    const { name, value } = e.target;
    name === 'id' ? setId(value) : setPassword(value);
  };

  const router = useRouter();

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  const onSubmit = () => {
    postLogin({
      id,
      password
    })
      .then((res) => {
        if (res.data.jwt) {
          localStorage.setItem('jwt', res.data.jwt);
          dispatch(getUser());
        }
        router.push('/');
      })
      .catch((err) => alert(err.response.data.msg));
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
          <OAuth />
          <br />
          <div className={styles.signup}>
            <span>아직 계정이 없으신가요?</span>
            <br />
            <Link href="/selectSignUp" passHref>
              <span className={styles.signupBtn}>회원가입</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
