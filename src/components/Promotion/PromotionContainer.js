import React from 'react';
import styles from '../../styles/Board/Promotion/PromotionContainer.module.scss';
import { data } from './data';
import Image from 'next/image'
import Header from '../Common/Header';
import TypeSearch from './TypeSearch';
import { BsPencil } from 'react-icons/bs';

const PromotionContainer = () => {
    return (
     <>
        <Header />
        <TypeSearch />
        <button className={styles.writeBtn}>
            <BsPencil />
            글쓰기
        </button>
        <div className={styles.section}>
            {data.map(el => (
                <div className={styles.promotion} key={el.key}>
                  <div className={styles.img} >
                    <img src={el.img} alt="poster" />
                    <div className={styles.creationInfo}>
                        <div className={styles.writerInfo}>
                            <div className={styles.writer}>최두리</div>
                            <div className={styles.writer}>우아한애자일</div>
                        </div>
                        <div className={styles.date}>21-08-21</div>
                    </div>
                </div>
                    <div className={styles.promotionInfo}>
                       <p className={styles.description}>{el.user_name}</p>
                       <p className={styles.hashtag}>#IT</p>
                       <p className={styles.time}>2일전</p>
                    </div>
                </div>
            ))}


        </div>
         
    </>   
    )
}

export default PromotionContainer;