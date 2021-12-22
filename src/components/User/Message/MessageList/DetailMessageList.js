import styles from 'styles/Message/DetailMessageList.module.scss';
import { useSelector } from 'react-redux';

const DetailMessageList = ({ message }) => {
  const user = useSelector((state) => state.user);

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.arrow}>
          {user?.id === message.senderId ? (
            <span className={styles.send}>
              📤 <span>보낸 쪽지</span>
            </span>
          ) : (
            <span className={styles.recieve}>
              📥 <span>받은 쪽지</span>
            </span>
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
