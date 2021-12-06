import { getS3PresignedURL, uploadImage } from 'apis/image';
import { useState, useEffect } from 'react';
import styles from '../../../styles/Board/Promotion/ImageEdit.module.scss';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { BsImage } from 'react-icons/bs';

function ImageEdit({ images, onEditImages, setImages }) {
  const [displayImage, setDisplayImage] = useState(images[0]);
  const [index, setIndex] = useState(0);
  let deleteImage = [];

  useEffect(() => {
    setDisplayImage(images[index]);
  }, [index]);

  const nextSlide = () => {
    let idx = index;

    if (idx !== images.length - 1) {
      idx += 1;
    } else if (idx === images.length - 1) {
      idx = 0;
    }

    setIndex(idx);
  };

  const prevSlide = () => {
    let idx = index;

    if (idx === 0) idx = images.length - 1;
    else idx -= 1;
    setIndex(idx);
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
  console.log(images);
  console.log(index);
  console.log(displayImage);
  const onDelete = () => {
    deleteImage = [];

    images.forEach((el) => {
      if (el !== displayImage) deleteImage.push(el);
    });
    setImages(deleteImage);
    setDisplayImage(images[0]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        {images.length > 1 && (
          <IoIosArrowBack size={70} onClick={() => prevSlide()} />
        )}
        {images.length > 0 ? (
          <img src={displayImage} alt="poster" />
        ) : (
          <BsImage />
        )}

        {images.length > 1 && (
          <IoIosArrowForward size={70} onClick={() => nextSlide()} />
        )}
      </div>
      <div className={styles.btnWrap}>
        <div className={styles.btns}>
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
            <label onClick={() => onDelete()}>삭제</label>
          </div>
          <label onClick={() => onEditImages(images)}>등록</label>
        </div>
      </div>
    </div>
  );
}

export default ImageEdit;
