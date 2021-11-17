import { useState, useEffect } from 'react';
import styles from '../../styles/Board/Promotion/Modal.module.scss';
import Post from './Post';

import { useSelector, useDispatch } from 'react-redux';
import { getPost } from 'redux/slices/post';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper';
import { MdClose } from 'react-icons/md';
import { useRouter } from 'next/router';

SwiperCore.use([Navigation, Pagination, Scrollbar]);

const Modal = ({ postId, sendMessage }) => {
  const [images, setImages] = useState([]);
  const category = 'promotion';
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);
  const router = useRouter();
  let pid = postId;

  useEffect(async () => {
    if (postId) {
      dispatch(getPost({ category, pid })).then((response) => {
        setImages(response.payload.images);
      });
    } else {
      pid = router.query.id;
      dispatch(getPost({ category, pid })).then((response) => {
        setImages(response.payload.images);
      });
    }
  }, [dispatch]);

  return (
    <div
      className={styles.background}
      onClick={() => {
        router.replace(`promotion`);
      }}
    >
      <button className={styles.closeBtn}>
        <MdClose />
      </button>
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

      <Post postId={postId} post={post} sendMessage={sendMessage} />
    </div>
  );
};

export default Modal;
