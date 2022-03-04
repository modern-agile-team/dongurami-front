import styles from 'styles/User/Find/FindPW/FindPW.module.scss';
import { useState, useEffect } from 'react';
import { postFindPW } from 'apis/user';
import { FindPwInput } from './Container/FindPwInput';
import { FindIdRoute } from './Container/FindIdRoute';
import { FindPwButton } from './Container/FindPwButton';

export const FindPW = () => {
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [findToken, setFindToken] = useState('');

  const onChange = (e) => {
    const { name, value } = e.target;
    name === 'id' ? setId(value) : setEmail(value);
  };

  const onSubmit = () => {
    if (id === '') {
      alert('학번을 입력해 주세요.');
    } else if (id.length !== 9) {
      alert('학번은 9자이어야 합니다.');
    } else if (email === '') {
      alert('이메일을 입력해 주세요.');
    } else {
      postFindPW({
        id,
        email
      })
        .then((res) => {
          if (res.data.success === true) {
            alert(
              '가입하신 이메일로 메일이 발송되었습니다.\n본인의 메일을 확인해 주세요.'
            );
            setFindToken(res.data.token);
          }
        })
        .catch((err) => alert(err.response.data.msg));
    }
  };

  useEffect(() => {
    window.localStorage.setItem('user_token', findToken);
  }, [findToken]);

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.find}>
        <div className={styles.body}>
          <h1>비밀번호 찾기</h1>
          <FindPwInput
            id={id}
            email={email}
            onChange={onChange}
            onKeyPress={onKeyPress}
          />
        </div>
        <FindIdRoute />
        <FindPwButton onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default FindPW;
