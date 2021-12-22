import React from 'react';
import styles from 'styles/User/Find/FindID/Container/FindIdInput.module.scss';

export const FindIdInput = ({ name, email, onChange, onKeyPress }) => {
  return (
    <div className={styles.wrap}>
      <input
        className={styles.name}
        type="text"
        placeholder="이름"
        name="name"
        value={name}
        onChange={(e) => onChange(e)}
      />
      <input
        className={styles.email}
        type="text"
        placeholder="이메일"
        name="email"
        value={email}
        onChange={(e) => onChange(e)}
        onKeyPress={(e) => onKeyPress(e)}
      />
    </div>
  );
};
