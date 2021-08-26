import React from 'react';
import styles from '../../styles/Board/Promotion/PromotionContainer.module.scss';
import { data } from './data';
import Image from 'next/image'
import Header from '../Common/Header';

const PromotionContainer = () => {
    return (
     <>
        <Header />
        <div className={styles.hello}>
            {data.map(el => (

              <div className={styles.block} key={el.key}>
                    <img src={el.img} />
                    <h2 className={styles.description}>{el.user_name}</h2>
                </div>
            ))}


        </div>
         
    </>   
    )
}

export default PromotionContainer;