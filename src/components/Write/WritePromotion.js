import { postPost } from 'apis/board';
import { useState } from "react";
import styles from "../../styles/Board/Write/WritePromotionContent.module.scss";

function WritePromition({ title, description }) {
  const [image, setImage] = useState();

  const onChange = (e) => {
    setImage(e.target.files[0]);
  }
  const onSubmit = () => {
    postPost('promotion', { title, description })
  };

  return (
    <div className={styles.container}>
      <label htmlFor="imageInput">
        <img src={(image) ? URL.createObjectURL(image) : 'https://www.pngfind.com/pngs/m/66-661092_png-file-upload-image-icon-png-transparent-png.png'} alt="preview" />
        <p>사진 업로드</p>
      </label>
      <input id="imageInput" type="file" accept="image/*" onChange={onChange} />
      <div className={styles.selectContainer}>
        <select>
          <option>동아리 선택</option>
          <option>우아한 애자일</option>
          <option>그웨</option>
        </select>
        <select>
          <option>태그 선택</option>
          <option>개발</option>
          <option>친목</option>
        </select>
      </div>
      <button onClick={onSubmit}>등록</button>
    </div>
  );
}

export default WritePromition;
