import React from 'react';
import styles from 'styles/User/ChangePassword/Container/ChangePwInput.module.scss';

export const ChangePwInput = ({
  password,
  newPassword,
  checkNewPassword,
  onChange,
  onKeyPress
}) => {
  return (
    <div className={styles.wrap}>
      <input
        type="password"
        placeholder="기존 비밀번호"
        name="password"
        value={password}
        onChange={(e) => onChange(e)}
      />
      <input
        type="password"
        placeholder="변경할 비밀번호"
        name="newPassword"
        value={newPassword}
        onChange={(e) => onChange(e)}
      />
      <input
        type="password"
        placeholder="변경할 비밀번호 확인"
        name="checkNewPassword"
        value={checkNewPassword}
        onChange={(e) => onChange(e)}
        onKeyPress={(e) => onKeyPress(e)}
      />
    </div>
  );
};
