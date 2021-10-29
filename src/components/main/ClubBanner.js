import Link from 'next/link';
import React from "react";
import Slider from "react-slick";
import styles from "../../styles/Main/ClubBanner.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  AiOutlineGithub,
  AiFillAliwangwang,
  AiFillApple,
  AiOutlineQq,
  AiOutlineTwitter,
  AiFillAndroid,
} from "react-icons/ai";

const ClubBanner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  const ClubList = [
    { icons: AiOutlineGithub, category: "개발", name: "우아한 애자일" },
    { icons: AiFillAliwangwang, category: "음악", name: "프리버드" },
    { icons: AiFillApple, category: "게임", name: "겜돌사" },
    { icons: AiOutlineQq, category: "운동", name: "최민호의 유도교실" },
    { icons: AiOutlineTwitter, category: "요리", name: "백종원의 요리비책" },
    { icons: AiFillAndroid, category: "공부", name: "두근두근 개발일기" },
  ];

  return (
    <div className={styles.wrap}>
      <Slider className={styles.slider} {...settings}>
        {ClubList.map((k, idx) => (
          <div key={idx}>
            {<k.icons cursor="pointer" size="40%" />}
            <br />
            <Link href="/ClubHome" passHref>
              <div>
                {k.category}
                <br />
                {k.name}
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ClubBanner;
