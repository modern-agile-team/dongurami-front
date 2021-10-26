import { useState, useEffect, useCallback } from 'react';
import styles from '../../styles/Board/Promotion/Modal.module.scss';
import Post from './Post';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import ZoomImg from './ZoomImg';
import { getBoardPost } from 'apis/promotion';
import { useSelector, useDispatch } from 'react-redux';
import { getPost } from 'redux/slices/post';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar]); //

const Modal = ({ setOpenModal, postId }) => {
  const [index, setIndex] = useState(0);
  const [zoom, setZoom] = useState(false);
  const [imgUrl, setImgUrl] = useState('');
  const [images, setImages] = useState([]);
  const category = 'promotion';
  const pid = postId;
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);
  const testImage = [
    {
      imgPath:
        'https://i.pinimg.com/236x/c6/94/75/c6947507e7afc960c41877421a6e52b1.jpg'
    },
    {
      imgPath:
        'https://i.pinimg.com/236x/c6/94/75/c6947507e7afc960c41877421a6e52b1.jpg'
    },
    {
      imgPath:
        'https://i.pinimg.com/236x/c6/94/75/c6947507e7afc960c41877421a6e52b1.jpg'
    },
    {
      imgPath:
        'https://i.pinimg.com/236x/c6/94/75/c6947507e7afc960c41877421a6e52b1.jpg'
    },
    {
      imgPath:
        'https://i.pinimg.com/236x/c6/94/75/c6947507e7afc960c41877421a6e52b1.jpg'
    },
    {
      imgPath:
        'https://i.pinimg.com/236x/c6/94/75/c6947507e7afc960c41877421a6e52b1.jpg'
    }
  ];

  /*
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
  */
  const awaitFetchData = useCallback(async () => {
    await getBoardPost(pid).then((res) => {
      setImages(res.data.images);
      setImgUrl(res.data.images[index].imgPath);
    });
  }, [index, pid]);

  useEffect(() => {
    dispatch(getPost({ category, pid }));
    awaitFetchData();
  }, [dispatch, awaitFetchData, pid]);

  return (
    <div className={styles.background} onClick={() => setOpenModal(false)}>
      <div className={styles.image}>
        {images.length && (
          <Swiper
            className="banner"
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
          >
            {testImage.map((image, index) => {
              return (
                <SwiperSlide key={index} className={styles.slider}>
                  <img
                    src={image.imgPath}
                    alt="이미지"
                    className="detail-image"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
      </div>

      <Post postId={postId} post={post} />
    </div>
  );
};

export default Modal;
