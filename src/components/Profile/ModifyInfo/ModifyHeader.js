import styles from '../../../styles/Profile/ModifyInfo.module.scss';
import { FaCamera } from 'react-icons/fa';

const ModifyHeader = ({ userInfo, setComp, baseImg }) => {
  return (
    <div className={styles.divImg}>
      <img
        className={styles.profileImg}
        src={userInfo.profileImageUrl ?? baseImg}
      />
      <FaCamera onClick={() => setComp('이미지수정')} />
      <hr />
    </div>
  );
};

export default ModifyHeader;
