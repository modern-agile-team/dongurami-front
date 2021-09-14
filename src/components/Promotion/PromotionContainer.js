import { useEffect, useState } from 'react';
import styles from '../../styles/Board/Promotion/PromotionContainer.module.scss';
import Header from '../Common/Header';
import TypeSearch from './TypeSearch';
import { BsPencil } from 'react-icons/bs';
import Modal from './Modal';
import Promotion from './Promotion';
import Link from 'next/dist/client/link';
import axios from 'axios';

const PromotionContainer = () => {
    const [openModal, setOpenModal] = useState(false);
    const [value, setValue] = useState('');
    const [boarddata, setBoardData ] = useState([]);
    const img = 'https://i.pinimg.com/236x/df/ef/48/dfef48b50816f9d55767a0260798f0d2.jpg'
    
    let preitem = 0;
    let item = 8;
    
    useEffect(() => {
       const fetchData = async() => {
            
            try {
                await axios.get('http://3.36.72.145:8080/api/board/wholeNotice/inDate/DESC')
                .then((response) => {
                    let result = response.data.boards.slice(preitem, item)
                    console.log(result);
                })
            } catch(e) {
                console.log(e);
            }
        } 
        fetchData();
    },[]);
      
    


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
            {boarddata.map(el => (
                <Promotion key={el.no} date={el.inDate} clubName={el.clubName} img={img} setOpenModal={setOpenModal} setValue={ setValue } />
            ))}
           
        </div>
        {openModal && <Modal value={value} setOpenModal={setOpenModal} />}
    </>  
    )
}

export default PromotionContainer;
