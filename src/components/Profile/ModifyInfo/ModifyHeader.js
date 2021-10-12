import styles from '../../../styles/Profile/ModifyInfo.module.scss';
import { FaCamera } from 'react-icons/fa';

const ModifyHeader = ({ userInfo, setComp, baseImg }) => {
  return (
    <div className={styles.header}>
      <img
        className={styles.profileImg}
        src={userInfo.profileImageUrl ?? baseImg}
      />
      <FaCamera
        className={styles.imgBtn}
        onClick={() => setComp('이미지수정')}
      />
    </div>
  );
};

export default ModifyHeader;
