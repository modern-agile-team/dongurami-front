import { useState } from 'react';
import styles from '../../styles/Board/Promotion/Promotion.module.scss';


const Promotion = ({ img, username, setOpenModal, setValue}) => {
    return (
        <div className={styles.promotion} >
                  <div className={styles.img}>
                    <img src={ img } alt="poster" />
                    <div className={styles.creationInfo} onClick={(e) => {
                        setValue(e.target.parentNode.childNodes[0].getAttribute('src')), setOpenModal(true)}}>
                        <div className={styles.writerInfo} onClick={(e) => {e.stopPropagation()}} >
                            <div className={styles.writer} >최두리</div>
                            <div className={styles.writer}>우아한애자일</div>
                        </div>
                        <div className={styles.date} onClick={(e) => {e.stopPropagation()}}>21-08-21</div>
                    </div>
                </div>
                    <div className={styles.promotionInfo}>
                       <p className={styles.description}>{username}</p>
                       <p className={styles.hashtag}>#IT</p>
                       <p className={styles.time}>2일전</p>
                    </div>
                </div>
    )
}

export default Promotion;

