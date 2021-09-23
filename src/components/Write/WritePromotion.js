import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../../styles/Board/Write/WritePromotionContent.module.scss";

function WritePromition({ title, body }) {
  const router = useRouter();
  const [image, setImage] = useState();

  const onChange = (e) => {
    setImage(e.target.files[0]);
  }
  const onSubmit = () => {
    axios
      .post("http://3.36.72.145:8080/api/board/promotion", {
        id: "test1",
        clubNo: "1",
        title,
        description: body,
      })
      .then(() => router.push("/promotion"));
  };

  return (
    <div className={styles.container}>
      <label htmlFor="imageInput">
        <img src={(image) ? URL.createObjectURL(image) : 'https://www.pngfind.com/pngs/m/66-661092_png-file-upload-image-icon-png-transparent-png.png'} alt="preview" />
        <p>사진 업로드</p>
      </label>
      <input id="imageInput" type="file" accept="image/*" onChange={onChange} />
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
      <button onClick={onSubmit}>등록</button>
    </div>
  );
}

export default WritePromition;
