import React from 'react';
import styles from '../../styles/Board/Promotion/zoomImage.module.scss';
const ZoomImg = ({ imgUrl, setZoom }) => {
    return (
      <div className={styles.container} onClick={() => setZoom(false)}>
        <div className={styles.image}>
            <img src={imgUrl}/>
        </div>
      </div>
    )
}

export default ZoomImg;