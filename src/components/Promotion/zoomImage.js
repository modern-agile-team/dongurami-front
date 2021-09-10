import { useState } from 'react';
import styles from '../../styles/Board/Promotion/zoomImage.module.scss';
const ZoomImage = ({imgUrl}) => {
    return (
      <div className={styles.container}>
        <div className={styles.image}>
            <img src={imgUrl}/>
        </div>
      </div>
    )
}

export default ZoomImage;