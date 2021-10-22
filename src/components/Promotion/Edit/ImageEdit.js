import { postPost } from 'apis/board';
import { getS3PresignedURL, uploadImage } from 'apis/image';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styles from '../../../styles/Board/Promotion/ImageEdit.module.scss';

function ImageEdit({ title, description, images }) {
  const router = useRouter();
  const [clubNo, setClubNo] = useState('0');
  const [posterImages, setPoster] = useState([]);

  const onChange = async (e) => {
    const imagesURL = await Promise.all(
      [...e.target.files].map(async (file) => {
        const { preSignedPutUrl: presignedURL, readObjectUrl: imageURL } = (
          await getS3PresignedURL(file.name)
        ).data;
        await uploadImage(presignedURL, file);
        return { path: imageURL, name: file.name };
      })
    );
    setImage(imagesURL);
  };

  /*
  const onSubmit = () => {
    postPost('promotion', { title, description, images, clubNo: Number(clubNo) });
    router.push('/promotion');
  };
  */
  const onClubNoChange = (e) => {
    setClubNo(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={images[0].imgPath} alt="poster" />
      </div>
      <div className={styles.updateBtn}>
        <label htmlFor="imageInput">수정</label>
        <input
          id="imageInput"
          type="file"
          accept="image/*"
          onChange={onChange}
          multiple
        />
        <button>삭제</button>
      </div>

      <div className={styles.selectContainer}>
        <select value={clubNo} onChange={onClubNoChange}>
          <option value="0">동아리 선택</option>
          <option value="1">우아한 애자일</option>
          <option value="2">프리버드</option>
        </select>
      </div>
      <button>등록</button>
    </div>
  );
}

export default ImageEdit;
