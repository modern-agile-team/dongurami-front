import React, { useState } from 'react';
import styles from '../../styles/Club/Lists/ClubListContainer.module.scss';

const ClubListContainer = ({img, categories, title}) => {   
    return (
        <div className={styles.container}>
           <img src={img} />
           <div>
             <p id={styles.desc}>{title}</p>
             <p>{categories}</p>
           </div>
        </div>
    )
}

export default ClubListContainer;