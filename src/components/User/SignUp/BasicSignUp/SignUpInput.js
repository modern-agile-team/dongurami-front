import React from 'react';
import styles from 'styles/User/SignUp/BasicSignUp/SignUpInput.module.scss';

export const SignUpInput = ({
  names,
  email,
  id,
  password,
  repassword,
  majorNum,
  majorCategory,
  major,
  checkSignUp,
  feedbackMessage,
  checkID,
  onChange
}) => {
  return (
    <div className={styles.wrap}>
      <input
        type="text"
        placeholder="이름"
        onChange={(e) => onChange(e)}
        name="names"
        value={names}
      />
      <input
        type="email"
        placeholder="이메일"
        onChange={(e) => onChange(e)}
        name="email"
        value={email}
      />
      <input
        className={styles.inputNum}
        type="number"
        onKeyDown={(e) =>
          (e.key === 'e' || e.key === '.') && e.preventDefault()
        }
        placeholder="학번&#32;&#40;아이디로 사용됩니다.&#41;"
        onChange={(e) => onChange(e)}
        name="id"
        value={id}
        onBlur={(e) => checkID(e)}
      />
      <input
        className={styles.pwd}
        type="password"
        placeholder="비밀번호&#32;&#40;최소 8자리 이상&#41;"
        onChange={(e) => onChange(e)}
        name="password"
        value={password}
      />
      <input
        className={styles.confirmPwd}
        type="password"
        placeholder="비밀번호 확인"
        onChange={(e) => onChange(e)}
        name="repassword"
        value={repassword}
      />
      <select
        className={styles.select}
        onChange={(e) => onChange(e)}
        name="major"
        value={majorNum}
      >
        {majorCategory.map((majorCategory, index) => (
          <option id={index} key={index} value={majorCategory.value}>
            {majorCategory.label}
          </option>
        ))}
      </select>
      {major === undefined || majorNum === '' ? '' : feedbackMessage()}
      <span className={styles.notSame}>{checkSignUp}</span>
    </div>
  );
};
