import React from 'react';
import ServiceLogo from '../Main/Banner/ServiceLogo';
import ClubPromotion from '../Main/Banner/ClubPromotion';
import Intro from '../Main/Banner/Intro';
import OurIntro from '../Main/Banner/OurIntro';
import styles from 'styles/Main/Main.module.scss';

export const Main = () => {
  return (
    <div className={styles.main}>
      <ServiceLogo />
      <ClubPromotion />
      <Intro />
      <OurIntro />
    </div>
  );
};

export default Main;
