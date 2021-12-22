import React from 'react';
import styles from 'styles/User/Find/FindPW/Container/FindPwInput.module.scss';

export const FindPwInput = ({ id, email, onChange, onKeyPress }) => {
  return (
    <div className={styles.wrap}>
      <input
        className={styles.num}
        type="number"
        placeholder="학번"
        name="id"
        value={id}
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
