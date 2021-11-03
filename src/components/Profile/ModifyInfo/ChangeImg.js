import styles from '../../../styles/Profile/ModifyInfo.module.scss';
import { MdClose } from 'react-icons/md';

const ChangeImg = ({ baseImg, setImgUrl, setIsOpen, isOpen, onChangeImg }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.imgComp}>
      <div className={styles.spanDiv}>
        <label htmlFor="inputFile">
          <span>기기에서 이미지 선택</span>
        </label>
        <span onClick={() => setImgUrl(baseImg)}>기본 이미지로 변경</span>
        <input
          onChange={onChangeImg}
          type="file"
          id="inputFile"
          style={{ display: 'none' }}
          name="profileImg"
          accept="image/jpg, image/png, image/jpeg"
        />
      </div>
      <div className={styles.svgDiv}>
        <MdClose onClick={() => setIsOpen(!isOpen)} />
      </div>
    </div>
  );
};

export default ChangeImg;
