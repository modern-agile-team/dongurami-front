import styles from '../../../styles/Profile/ModifyInfo.module.scss';
import { FaCamera } from 'react-icons/fa';

const ModifyHeader = ({ onChangeImg, baseImg, imgUrl }) => {
  return (
    <div className={styles.header}>
      <img
        src={imgUrl ?? baseImg}
        alt="profileImg"
        className={styles.profileImg}
      />
      <div>
        <label htmlFor="inputFile">
          <FaCamera />
        </label>
        <input
          onChange={onChangeImg}
          type="file"
          id="inputFile"
          style={{ display: 'none' }}
          name="profileImg"
          accept="image/jpg, image/png, image/jpeg"
        />
      </div>
    </div>
  );
};

export default ModifyHeader;
