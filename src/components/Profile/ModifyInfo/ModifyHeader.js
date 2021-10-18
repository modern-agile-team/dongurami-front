import styles from '../../../styles/Profile/ModifyInfo.module.scss';
import { FaCamera } from 'react-icons/fa';

const ModifyHeader = ({ onChangeImg, baseImg, imgUrl }) => {
  return (
    <div className={styles.header}>
      <img
        className={styles.profileImg}
        src={imgUrl ?? baseImg}
        // src='https://d19lmxaqvbojzg.cloudfront.net/5591779b23_Wlogo.jpg'
      />

      <div>
        <label htmlFor='inputFile' className={styles.imgBtn}>
          <FaCamera />
        </label>
        <input 
          onChange={onChangeImg}
          type="file" 
          id='inputFile' 
          style={{display:"none"}} 
          name="profileImg"
          accept="image/jpg, image/png, image/jpeg"
          />
      </div>

    </div>
  );
};

export default ModifyHeader;
