import { useState } from 'react';
import styles from '../../styles/Board/Promotion/PromotionContainer.module.scss';
import { data } from './data';
import Link from 'next/link';
import Header from '../Common/Header';
import TypeSearch from './TypeSearch';
import { BsPencil } from 'react-icons/bs';
import Modal from './Modal';
const PromotionContainer = () => {
    const [openModal, setOpenModal] = useState(false);
    const [value, setValue] = useState('');
    
    return (
     <>
    {openModal && <Modal value={value} setOpenModal={setOpenModal} />}
        <Header />
        <TypeSearch />
        <Link href="/write" passHref>
            <button className={styles.writeBtn}>
                <BsPencil />
                글쓰기
            </button>
        </Link>
       <div className={styles.section}>
            {data.map(el => (
                <div className={styles.promotion} key={el.key} >
                  <div className={styles.img}>
                    <img src={el.img} alt="poster" />
                    <div className={styles.creationInfo} onClick={(e) => {
                    setOpenModal(true),
                    setValue(e.target.parentNode.childNodes[0].getAttribute('src'))}}>
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
