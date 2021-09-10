import React from 'react'
import Intro from "./Intro";
import ServiceLogo from "./ServiceLogo";
import ClubPromotion from "./ClubPromotion";
import OurIntro from "./OurIntro";
import styles from "../../styles/Main/Main.module.scss";

export const Main = () => {
    return (
        <div className={styles.main}>
            <ServiceLogo />
            <ClubPromotion />
            <Intro />
            <OurIntro />
        </div>
    )
}

export default Main;