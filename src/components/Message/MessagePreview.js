import styles from '../../styles/Message/MessagePreview.module.scss';
import { IoPaperPlaneOutline } from 'react-icons/io5';
import { FiRefreshCcw } from 'react-icons/fi';
import { BsTrash } from 'react-icons/bs';

const MessagePreview = ({message}) => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h4 className={styles.name}>{message.name}</h4>
        <p className={styles.indate}>{message.inDate}</p>
      </div>

      <span className={styles.description}>{message.description}</span>
    </div>
  );
};

export default MessagePreview;
