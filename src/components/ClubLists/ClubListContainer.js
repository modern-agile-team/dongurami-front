import React, {useState} from 'react';
import styles from './ClubListContainer.module.sass';

const ClubListContainer = ({list}) => {
    const {title, categories} = list
    console.log(title, categories);
    return (
        <div className={styles.container}>
            <div className={styles.img}>이미지</div>
            <div className={styles.clubdata}>
                <h2 className="clubtitle">{title}</h2>
                <h4 className="clubcategories">{categories}</h4>
            </div>
        </div>
    )
}

export default ClubListContainer;