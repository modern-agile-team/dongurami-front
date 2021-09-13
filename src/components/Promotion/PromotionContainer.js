import { useState } from 'react';
import styles from '../../styles/Board/Promotion/PromotionContainer.module.scss';
import { data } from './data';
import Link from 'next/link';
import Header from '../Common/Header';
import TypeSearch from './TypeSearch';
import { BsPencil } from 'react-icons/bs';
import Modal from './Modal';
import Promotion from './Promotion';

const PromotionContainer = () => {
    const [openModal, setOpenModal] = useState(false);
    const [value, setValue] = useState('');
    
    return (
     <>
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
                <Promotion key={el.key} username={el.user_name} img={el.img} setOpenModal={setOpenModal} setValue={ setValue } />
            ))}
           
        </div>
        {openModal && <Modal value={value} setOpenModal={setOpenModal} />}
    </>  
    )
}

export default PromotionContainer;
