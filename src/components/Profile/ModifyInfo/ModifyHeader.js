import styles from 'styles/Profile/ModifyInfo.module.scss';
import ChangeImg from './ChangeImg';
import { FaCamera } from 'react-icons/fa';

const ModifyHeader = ({
  setImgUrl,
  isOpen,
  setIsOpen,
  baseImg,
  imgUrl,
  onChangeImg
}) => {
  return (
    <div className={styles.header}>
      <img
        src={imgUrl ?? baseImg}
        alt="profileImg"
        className={styles.profileImg}
      />
      <div>
        <FaCamera
          className={styles.cameraBtn}
          onClick={() => setIsOpen(!isOpen)}
        />
        <ChangeImg
          baseImg={baseImg}
          setImgUrl={setImgUrl}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          onChangeImg={onChangeImg}
        />
      </div>
    </div>
  );
};

export default ModifyHeader;
