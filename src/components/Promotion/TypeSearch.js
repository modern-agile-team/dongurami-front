import React from 'react';
import styles from '../../styles/Board/Promotion/typeSearch.module.scss';
import { FaSearch } from "react-icons/fa";
const TypeSearch = () => {
    return (
        <div className={styles.container}>
           <ul className={styles.tagList}>
               <li>#IT</li>
               <li>#음악</li>
               <li>#친목</li>
               <li>#게임</li>
               <li>#운동</li>
           </ul>
           <div className={styles.searchContainer}>
               <div className={styles.searchElement}>
                  <input type="text" placeholder="Search" />
                  <FaSearch />
                </div>
            </div>
        </div>
    )
}

export default TypeSearch;