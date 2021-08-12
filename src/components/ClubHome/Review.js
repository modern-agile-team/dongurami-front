import React from 'react';
import styles from "./Review.module.sass";

export const Review = () => {
    return (
        <div className={styles.reviewAll}>
            <header className={styles.reviewHeader}>
                <h1 className={styles.avrScore}>4.3</h1>
                <div className={styles.avrStar}>
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>☆</span>
                </div>
            </header>
            <body className={styles.reviewBody}>
                <span className={styles.reviewClub}>우아한 애자일의 후기</span>
                <button className={styles.reviewAdd}>후기 작성하기</button>
                <hr className={styles.Line}/>
                <div className={styles.reviewer}>
                    <span className={styles.reviewAuthor}>심**</span>
                        <div className={styles.authorStar}>
                            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                        </div>                
                    <span className={styles.reviewDes}>프로 개발자가 되는 지름길~</span>
                    <span className={styles.reviewDay}>2021-08-11</span>
                </div>
            </body>
        </div>
    )
}

export default Review;