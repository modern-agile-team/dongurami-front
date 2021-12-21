import React from 'react';
import styles from 'styles/User/Find/ResetPW/Container/ResetPwInput.module.scss';

export const ResetPwInput = ({
  id,
  newPassword,
  checkNewPassword,
  onChange
}) => {
  return (
    <div className={styles.wrap}>
      <input
        type="number"
        placeholder="학번"
        name="id"
        value={id}
        onChange={(e) => onChange(e)}
      />
      <input
        type="password"
        placeholder="새로운 비밀번호"
        name="newPassword"
        value={newPassword}
        onChange={(e) => onChange(e)}
      />
      <input
        type="password"
        placeholder="새로운 비밀번호 확인"
        name="checkNewPassword"
        value={checkNewPassword}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};
