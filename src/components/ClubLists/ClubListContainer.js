import Link from 'next/link';
import React from "react";
import styles from "./ClubListContainer.module.sass";
import wooae from "./wooae.jpeg";
import Image from "next/image";

const ClubListContainer = ({ list }) => {
  const { title, categories } = list;
  return (
    <Link href="/ClubHome" passHref>
      <div className={styles.container}>
        <Image src={wooae} alt="" className={styles.img} />
        <div className={styles.clubdata}>
          <h4>{title}</h4>
          <h4>{categories}</h4>
        </div>
      </div>
    </Link>
  );
};

export default ClubListContainer;
