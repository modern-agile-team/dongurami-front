import { FaGraduationCap, FaUserCircle } from 'react-icons/fa';
import styles from 'styles/Profile/UserInfo.module.scss';

const Immutable = ({ profile }) => {
  return (
    <>
      <div className={styles.name}>
        <FaUserCircle className={styles.icon} />
        <span> {profile.name}</span>
      </div>
      <div className={styles.major}>
        <FaGraduationCap className={styles.icon} />
        <span> {profile.major}</span>
      </div>{' '}
    </>
  );
};

export default Immutable;
