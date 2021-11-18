import styles from '../../styles/Message/MessagePreview.module.scss';
import { IoPaperPlaneOutline } from 'react-icons/io5';
import { FiRefreshCcw } from 'react-icons/fi';
import { BsTrash } from 'react-icons/bs';

const MessagePreview = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h4 className={styles.name}>익명</h4>
        <p className={styles.indate}>2021-11-18</p>
      </div>

      <span className={styles.description}>앗 반가워요 뭐가 힘드신가요?</span>
    </div>
  );
};

export default MessagePreview;
