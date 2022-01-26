import styles from 'styles/Board/Promotion/Post/Poster.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

const Poster = ({ images }) => {
  return (
    <div className={styles.image} onClick={(e) => e.stopPropagation()}>
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
    </div>
  );
};
export default Poster;
