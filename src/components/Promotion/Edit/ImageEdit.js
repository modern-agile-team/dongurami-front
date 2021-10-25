import { getS3PresignedURL, uploadImage } from 'apis/image';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styles from '../../../styles/Board/Promotion/ImageEdit.module.scss';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

function ImageEdit({ posterImages, onEditImages }) {
  const router = useRouter();
  const [displayImage, setDisplayImage] = useState([posterImages[0].imgPath]);
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);
  let deleteImage = [];

  useEffect(() => {
    setImages(posterImages.map((el) => el.imgPath));
  }, []);

  const nextSlide = () => {
    let idx = index;

    if (idx !== images.length - 1) {
      idx += 1;
    } else if (idx === images.length - 1) {
      idx = 0;
    }

    setIndex(idx);
    setDisplayImage(images[index]);
  };

  const prevSlide = () => {
    let idx = index;

    if (idx === 0) idx = images.length - 1;
    else idx -= 1;
    setIndex(idx);
    setDisplayImage(images[index]);
  };

  const onChange = async (e) => {
    const id = e.target.id;
    let newImages = [];
    const imagesURL = await Promise.all(
      [...e.target.files].map(async (file) => {
        const { preSignedPutUrl: presignedURL, readObjectUrl: imageURL } = (
          await getS3PresignedURL(file.name)
        ).data;
        await uploadImage(presignedURL, file);
        return { path: imageURL, name: file.name };
      })
    );
    if (id === 'update') {
      newImages = images.map((image, i) =>
        i === index ? imagesURL[0].path : image
      );
      setImages(newImages);
      setDisplayImage(newImages[index]);
    } else {
      newImages = images.concat(imagesURL[0].path);
      setImages(newImages);
      setDisplayImage(newImages[newImages.length - 1]);
      setIndex(newImages.length - 1);
    }
  };

  const onDelete = () => {
    deleteImage = [];

    images.forEach((el) => {
      if (el !== displayImage) deleteImage.push(el);
    });
    setImages(deleteImage);
    setDisplayImage(images[index]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        {images.length > 1 && (
          <IoIosArrowBack size={70} onClick={() => prevSlide()} />
        )}
        <img src={displayImage} alt="poster" />
        {images.length > 1 && (
          <IoIosArrowForward size={70} onClick={() => nextSlide()} />
        )}
      </div>
      <div className={styles.updateBtn}>
        <label htmlFor="update">수정</label>
        <input
          id="update"
          type="file"
          accept="image/*"
          onChange={(e) => onChange(e)}
          multiple
        />
        <label htmlFor="input">추가</label>
        <input
          id="input"
          type="file"
          accept="image/*"
          onChange={(e) => onChange(e)}
          multiple
        />
        <button onClick={() => onDelete()}>삭제</button>
      </div>

      <button onClick={() => onEditImages(images)}>등록</button>
    </div>
  );
}

export default ImageEdit;
