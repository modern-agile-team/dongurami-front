import React, {useState} from 'react';
import styles from '../../styles/Club/Lists/ClubListContainer.module.scss';

const ClubListContainer = ({list}) => {
    const {title, categories} = list
    
    return (
        <div className={styles.container}>
            <div className={styles.img}>s이미지</div>
            <div className={styles.clubdata}>
                <h2 className="clubtitle">{title}</h2>
                <h4 className="clubcategories">{categories}</h4>
            </div>
        </div>
    )
}

export default ClubListContainer;