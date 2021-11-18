import { useState } from 'react';
import styles from '../../styles/Message/MessageList.module.scss';
import MessagePreview from './MessagePreview';
import DetailMessageList from './DetailMessageList';
import SendMessage from './SendMessage';
import { IoPaperPlaneOutline } from 'react-icons/io5';
import { FiRefreshCcw } from 'react-icons/fi';
import { BsTrash } from 'react-icons/bs';
const MessageList = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.entireMessage}>
        <div className={styles.header}>
          <h2>쪽지함</h2>
        </div>
        <MessagePreview />
      </div>
      <div className={styles.detailMessage}>
        <div className={styles.header}>
          <h3>익명</h3>
          <div className={styles.option}>
            <IoPaperPlaneOutline size={20} onClick={() => setOpenModal(true)} />
            <FiRefreshCcw size={20} />
            <BsTrash size={20} />
          </div>
        </div>
        <DetailMessageList />
      </div>
      <SendMessage show={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
};

export default MessageList;
