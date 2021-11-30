import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { getMessages, getDetailMessages, deleteMessage } from 'apis/message';
import styles from '../../styles/Message/MessageList.module.scss';
import MessagePreview from './MessagePreview';
import DetailMessageList from './DetailMessageList';
import SendMessage from './SendMessage';
import Spinner from './Spiner';
import { IoPaperPlaneOutline } from 'react-icons/io5';
import { FiRefreshCcw } from 'react-icons/fi';
import { BsTrash } from 'react-icons/bs';

const MessageList = () => {
  const [openModal, setOpenModal] = useState(false);
  const [messages, setMessages] = useState([]);
  const [recipientId, setRecipientId] = useState('');
  const [detailMessage, setDetailMessage] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const user = useSelector((state) => state.user);
  const router = useRouter();

  const getLetterDatas = async () => {
    if (user) {
      await getMessages(user.id).then((response) => {
        if (response.data.success) {
          setMessages(response.data.letters);
        } else return;
      });
    }
  };
  const inquiryMessage = async (letterNo) => {
    setLoading(true);
    await getDetailMessages(user.id, letterNo).then((response) => {
      setDetailMessage(response.data.letters);
      setRecipientId(
        response.data.letters.find((el) => el.senderId !== user.id).senderId
      );
      setLoading(false);
    });
  };

  const onClickInquiry = (no) => {
    router.push(
      {
        pathname: router.pathname,
        query: { id: no }
      },
      undefined,
      { shallow: true }
    );
  };

  /*const onDelete = async () => {
    await deleteMessage().then(response => {
        
    }
  }
  */

  useEffect(() => {
    getLetterDatas();
  }, [user]);

  useEffect(() => {
    if (router.query.id && user?.id) inquiryMessage(router.query.id);
  }, [user, router]);

  return (
    <div className={styles.container}>
      <div className={styles.entireMessage}>
        <div className={styles.header}>
          <h2>쪽지함</h2>
        </div>
        {messages.map((message) => {
          return (
            <MessagePreview
              key={message.no}
              num={message.no}
              message={message}
              onClickInquiry={onClickInquiry}
              routerId={router.query.id}
            />
          );
        })}
      </div>
      <div className={styles.detailMessage}>
        {isLoading ? (
          <div className={styles.loadingcontainer}>
            <Spinner />
          </div>
        ) : (
          <>
            <div className={styles.header}>
              {router?.query.id && (
                <div className={styles.contain}>
                  <h3>익명</h3>
                  <div className={styles.option}>
                    <IoPaperPlaneOutline
                      size={20}
                      onClick={() => setOpenModal(true)}
                    />
                    <FiRefreshCcw
                      size={20}
                      onClick={() => inquiryMessage(router.query.id)}
                    />
                    <BsTrash size={20} />
                  </div>
                </div>
              )}
            </div>
            {router?.query.id &&
              detailMessage.map((message, idx) => {
                return <DetailMessageList key={idx} message={message} />;
              })}
          </>
        )}
      </div>
      <SendMessage
        show={openModal}
        onClose={() => setOpenModal(false)}
        detailMessage={detailMessage[0]}
        letterNo={router.query.id}
        inquiryMessage={inquiryMessage}
        otherId={recipientId}
      />
    </div>
  );
};

export default MessageList;
