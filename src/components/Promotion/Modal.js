import { useState, useEffect } from 'react';
import styles from '../../styles/Board/Promotion/Modal.module.scss';
import Post from './Post';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import ZoomImg from './ZoomImg';
import { getBoardPost } from 'apis/promotion';
import { useSelector, useDispatch } from 'react-redux';
import { getPost } from 'redux/slices/post';

const Modal = ({ setOpenModal, postId }) => {
  const [index, setIndex] = useState(0);
  const [zoom, setZoom] = useState(false);
  const [imgUrl, setImgUrl] = useState('');
  const [images, setImages] = useState([]);
  const category = 'promotion';
  const pid = postId;
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);

  const nextSlide = () => {
    let idx = index;

    if (idx !== images.length - 1) {
      idx += 1;
    } else if (idx === images.length - 1) {
      idx = 0;
    }

    setIndex(idx);
    setImgUrl(images[index].imgPath);
  };

  const prevSlide = () => {
    let idx = index;

    if (idx === 0) idx = images.length - 1;
    else idx -= 1;
    setIndex(idx);
    setImgUrl(images[index].imgPath);
  };

  useEffect(async () => {
    dispatch(getPost({ category, pid }));
    await getBoardPost(pid).then((res) => {
      setImages(res.data.images);
      setImgUrl(res.data.images[index].imgPath);
    });
  }, [dispatch]);

  return (
    <div className={styles.background} onClick={() => setOpenModal(false)}>
      {zoom && (
        <ZoomImg
          imgUrl={imgUrl}
          setZoom={setZoom}
          onClick={(e) => e.stopPropagation()}
        />
      )}
      {!zoom && (
        <>
          <div className={styles.image}>
            <div onClick={(e) => e.stopPropagation()}>
              <IoIosArrowBack onClick={() => prevSlide()} size={70} />
            </div>

            {images.length ? (
              <div
                className={styles.imgContainer}
                onClick={(e) => e.stopPropagation()}
              >
                <img src={imgUrl} onClick={() => setZoom(true)} />
              </div>
            ) : (
              <img src="https://i.pinimg.com/236x/df/ef/48/dfef48b50816f9d55767a0260798f0d2.jpg" />
            )}
            <div onClick={(e) => e.stopPropagation()}>
              <IoIosArrowForward onClick={() => prevSlide()} size={70} />
            </div>
          </div>
          <Post postId={postId} post={post} />
        </>
      )}
    </div>
  );
};

export default Modal;
