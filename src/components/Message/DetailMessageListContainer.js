import styles from '../../styles/Message/MessageList.module.scss';
import { IoPaperPlaneOutline } from 'react-icons/io5';
import { FiRefreshCcw } from 'react-icons/fi';
import { BsTrash } from 'react-icons/bs';
import DetailMessageList from './DetailMessageList';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import ReactTooltip from 'react-tooltip';

const DetailMessageListContainer = ({
  detailMessage,
  recipient,
  inquiryMessage,
  setOpenModal,
  onDelete
}) => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {router?.query.id && (
          <div className={styles.contain}>
            <h3>
              {recipient}
              {detailMessage[0].myHiddenFlag === 0 ? '(익명)' : ''}
            </h3>
            <div className={styles.option}>
              {isMounted && <ReactTooltip effect="solid" />}
              <IoPaperPlaneOutline
                size={20}
                onClick={() => setOpenModal(true)}
                data-tip={'답장 보내기'}
                data-type={'light'}
                data-border={'true'}
                data-border-color={'#bbbbbb'}
              />
              <FiRefreshCcw
                size={20}
                onClick={() => inquiryMessage(router.query.id)}
                data-tip={'새로고침'}
                data-type={'light'}
                data-border={'true'}
                data-border-color={'#bbbbbb'}
              />
              <BsTrash
                size={20}
                onClick={() => onDelete(router.query.id)}
                data-tip={'대화 전체 삭제'}
                data-type={'light'}
                data-border={'true'}
                data-border-color={'#bbbbbb'}
              />
            </div>
          </div>
        )}
      </div>
      <div className={styles.body}>
        {router?.query.id &&
          detailMessage &&
          detailMessage.map((message, idx) => {
            return <DetailMessageList key={idx} message={message} />;
          })}
      </div>
    </div>
  );
};

export default DetailMessageListContainer;
