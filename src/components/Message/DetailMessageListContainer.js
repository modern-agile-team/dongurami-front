import styles from '../../styles/Message/MessageList.module.scss';
import { IoPaperPlaneOutline } from 'react-icons/io5';
import { FiRefreshCcw } from 'react-icons/fi';
import { BsTrash } from 'react-icons/bs';
import DetailMessageList from './DetailMessageList';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';

const DetailMessageListContainer = ({
  detailMessage,
  recipient,
  inquiryMessage,
  setOpenModal,
  onDelete
}) => {
  const router = useRouter();
  return (
    <>
      <div className={styles.header}>
        {router?.query.id && (
          <div className={styles.contain}>
            <h3>{recipient}</h3>
            <div className={styles.option}>
              <IoPaperPlaneOutline
                size={20}
                onClick={() => setOpenModal(true)}
              />
              <FiRefreshCcw
                size={20}
                onClick={() => inquiryMessage(router.query.id)}
              />
              <BsTrash size={20} onClick={() => onDelete(router.query.id)} />
            </div>
          </div>
        )}
      </div>
      {router?.query.id &&
        detailMessage &&
        detailMessage.map((message, idx) => {
          return <DetailMessageList key={idx} message={message} />;
        })}
    </>
  );
};

export default DetailMessageListContainer;
