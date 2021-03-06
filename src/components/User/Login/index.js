import styles from 'styles/User/Login/Login.module.scss';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { postLogin } from 'apis/user';
import { useDispatch } from 'react-redux';
import { getUser } from 'redux/slices/user';
import { FindInfoRoute } from './Container/FindInfoRoute';
import { LoginBtns } from './Container/LoginBtns';
import { SignUpRoute } from './Container/SignUpRoute';
import { LoginInput } from './Container/LoginInput';

export const Login = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState();
  const [password, setPassword] = useState();

  const onInputChange = (e) => {
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
          <LoginInput
            id={id}
            password={password}
            onInputChange={onInputChange}
            onKeyPress={onKeyPress}
          />
        </div>
        <FindInfoRoute />
        <div className={styles.buttons}>
          <LoginBtns onSubmit={onSubmit} />
          <br />
          <SignUpRoute />
        </div>
      </div>
    </div>
  );
};

export default Login;
