import styles from '../../styles/Message/DetailMessageList.module.scss';
import { FaLongArrowAltRight, FaLongArrowAltLeft } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const DetailMessageList = ({ message }) => {
  const user = useSelector((state) => state.user);

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.arrow}>
          {user?.id === message.senderId ? (
            <FaLongArrowAltRight className={styles.rightArrow} size={30} />
          ) : (
            <FaLongArrowAltLeft className={styles.leftArrow} size={30} />
          )}
        </div>
        <p className={styles.indate}>{message.inDate}</p>
      </div>
      <div className={styles.message}>
        <span className={styles.description}>{message.description}</span>
      </div>
    </div>
  );
};

export default DetailMessageList;
