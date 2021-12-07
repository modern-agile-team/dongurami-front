import styles from 'styles/Common/Badge.module.scss';

const Badge = ({ count }) => {
  return (
    <div className={styles.badge}>
      {count <= 99 ? <span>{count}</span> : <span>99+</span>}
    </div>
  );
};

export default Badge;
