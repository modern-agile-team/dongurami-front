import React from 'react';
import Slider from 'react-slick';
import styles from './ClubBanner.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ClubBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  const ClubList = [
    { img : 'logo1',
      category : '개발',
      name : '우아한 애자일' },
      { img : 'logo2',
      category : '음악',
      name : '프리버드' },
      { img : 'logo3',
      category : '게임',
      name : '겜돌사' },
      { img : 'logo4',
      category : '운동',
      name : '최민호의 유도교실' },
      { img : 'logo5',
      category : '요리',
      name : '백종원의 요리비책' },
      { img : 'logo6',
      category : '공부',
      name : '두근두근 개발일기' },
  ];

  return (
    <div className={styles.wrap}>
      <Slider className={styles.slider} {...settings}>
        {ClubList.map((k, idx) => <div key={idx}>
          <img src={k.img} className={styles.logo} /><br/>
          {k.category}<br/>
          {k.name}
        </div>)}
      </Slider>
    </div>
    );
}

export default ClubBanner;