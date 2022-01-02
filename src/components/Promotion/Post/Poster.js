import styles from 'styles/Board/Promotion/Post/Poster.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Spinner } from 'components/Common/Spinner';

const Poster = ({ images }) => {
  return (
    <div className={styles.image} onClick={(e) => e.stopPropagation()}>
      {images.length ? (
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
      ) : (
        <Spinner />
      )}
    </div>
  );
};
export default Poster;
