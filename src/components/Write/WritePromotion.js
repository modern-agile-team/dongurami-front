import { postPost } from 'apis/board';
import { getS3PresignedURL, uploadImage } from 'apis/image';
import { useRouter } from 'next/router';
import { useState } from "react";
import { useSelector } from 'react-redux';
import styles from "../../styles/Board/Write/WritePromotionContent.module.scss";

function WritePromition({ title, description }) {
  const router = useRouter();
  const user = useSelector((state) => state.user);
  const [images, setImage] = useState([]);
  const [clubNo, setClubNo] = useState("0");

  const onChange = async (e) => {
    const imagesURL = await Promise.all([...e.target.files].map(async (file) => {
      const { preSignedPutUrl: presignedURL, readObjectUrl: imageURL } = (await getS3PresignedURL(file.name)).data;
      await uploadImage(presignedURL, file);
      return imageURL;
    }));
    setImage(imagesURL);
  }
  const onSubmit = () => {
    if (clubNo === '0') {
      alert('동아리를 선택해 주세요');
      return;
    }
    postPost('promotion', { title, description, images }, clubNo);
    router.push('/promotion');
  };
  const onClubNoChange = (e) => {
    setClubNo(e.target.value);
  };

  return (
    <div className={styles.container}>
      <label htmlFor="imageInput">
        {(images.length === 0) ? (
          <img src="https://www.pngfind.com/pngs/m/66-661092_png-file-upload-image-icon-png-transparent-png.png" alt="preview" />
        ) :
        images.map((image, index) => (
          <img key={index} src={image} alt="preview" />
        ))}
        <p>사진 업로드</p>
      </label>
      <input id="imageInput" type="file" accept="image/*" onChange={onChange} multiple />
      <div className={styles.selectContainer}>
        <select value={clubNo} onChange={onClubNoChange}>
          <option value="0">동아리 선택</option>
          {(user?.club) && (user.club.map((club) => (
            <option key={club.no} value={club.no}>{club.name}</option>
          )))}
        </select>
      </div>
      <button onClick={onSubmit}>등록</button>
    </div>
  );
}

export default WritePromition;
