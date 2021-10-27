import { useState, useEffect } from 'react';
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
  const [images, setImages] = useState([]);
  const category = 'promotion';
  const pid = postId;
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);

  useEffect(async () => {
    dispatch(getPost({ category, pid }));
    await getBoardPost(pid).then((res) => {
      setImages(res.data.images);
    });
  }, [dispatch]);

  return (
    <div className={styles.background} onClick={() => setOpenModal(false)}>
      <div className={styles.image} onClick={(e) => e.stopPropagation()}>
        {images.length && (
          <Swiper
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            slidesOffsetBefore={0}
          >
            {images.map((image, index) => {
              return (
                <div key={index} className={styles.banner}>
                  <SwiperSlide className={styles.slider}>
                    <img
                      src={image.imgPath}
                      alt="이미지"
                      className="detail-image"
                    />
                  </SwiperSlide>
                </div>
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
