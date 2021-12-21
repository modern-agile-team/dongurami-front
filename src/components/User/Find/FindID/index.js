import styles from 'styles/User/Find/FindID/FindID.module.scss';
import { useState } from 'react';
import { postFindID } from 'apis/user';
import { FindIdInput } from 'components/User/Find/FindID/Container/FindIdInput';
import { FindPwRoute } from 'components/User/Find/FindID/Container/FindPwRoute';
import { FindIdButton } from 'components/User/Find/FindID/Container/FindIdButton';

export const FindID = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const onChange = (e) => {
    const { name, value } = e.target;
    name === 'name' ? setName(value) : setEmail(value);
  };

  const onSubmit = () => {
    postFindID({
      name,
      email
    })
      .then((res) => {
        alert(`${name}님의 아이디는 ${res.data.id}입니다.`);
      })
      .catch((err) => alert(err.response.data.msg));
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.find}>
        <div className={styles.body}>
          <h1>아이디 찾기</h1>
          <FindIdInput
            name={name}
            email={email}
            onChange={onChange}
            onKeyPress={onKeyPress}
          />
        </div>
        <FindPwRoute />
        <FindIdButton onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default FindID;
