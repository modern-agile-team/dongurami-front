import styles from '../../styles/Message/DetailMessageList.module.scss';
import { FaLongArrowAltRight } from 'react-icons/fa';

const DetailMessageList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.arrow}>
          <FaLongArrowAltRight size={30} />
        </div>
        <p className={styles.indate}>2021-11-18</p>
      </div>
      <div className={styles.message}>
        <span className={styles.description}>
          앗 반가워요 뭐가
          힘드신가요?ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        </span>
      </div>
    </div>
  );
};

export default DetailMessageList;
