import { postPost } from 'apis/board';
import { getS3PresignedURL, uploadImage } from 'apis/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from '../../../styles/Board/Promotion/ImageEdit.module.scss';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

function ImageEdit({ title, description, posterImages, onSubmit }) {
  const router = useRouter();
  const [clubNo, setClubNo] = useState('0');
  const [index, setIndex] = useState(0);
  const [displayImage, setDisplayImage] = useState([posterImages[0].imgPath]);
  let images = [];

  posterImages.forEach((el) => {
    images.push(el.imgPath);
  });

  const nextSlide = () => {
    let idx = index;

    if (idx !== posterImages.length - 1) {
      idx += 1;
    } else if (idx === posterImages.length - 1) {
      idx = 0;
    }
    setIndex(idx);
    setDisplayImage(images[index]);
  };

  const prevSlide = () => {
    const idx = index;

    if (idx === 0) idx = posterImages.length - 1;
    else idx -= 1;
    setIndex(idx);
    setDisplayImage(images[index]);
  };

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

    images[index] = imagesURL[0].path;
    console.log(images);
    setDisplayImage(images[index]);
  };

  const onDelete = (index) => {
    const result = images.filter((el) => {
      el !== images[index];
    });
    images = result;
    setDisplayImage(images[index]);
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
        <IoIosArrowBack size={70} />
        <img src={displayImage} alt="poster" />
        <IoIosArrowForward size={70} onClick={() => nextSlide()} />
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
        <button onClick={() => onDelete(index)}>삭제</button>
      </div>

      <div className={styles.selectContainer}>
        <select value={clubNo}>
          <option value="0">동아리 선택</option>
          <option value="1">우아한 애자일</option>
          <option value="2">프리버드</option>
        </select>
      </div>
      <button onClick={() => onSubmit(images)}>등록</button>
    </div>
  );
}

export default ImageEdit;
