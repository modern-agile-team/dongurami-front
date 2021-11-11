import styles from 'styles/Common/DonguramiButton.module.scss';

export const DonguramiFillButton = ({ disabled, children, onClick }) => {
  return (
    <button className={styles.fillButton} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export const DonguramiOutlineButton = ({ disabled, children, onClick }) => {
  return (
    <button
      className={styles.outlineButton}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
