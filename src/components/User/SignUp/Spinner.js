import React from 'react';
import styles from 'styles/User/SignUp/Spinner.module.scss';

export const Spinner = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.spinner}></div>
    </div>
  );
};
