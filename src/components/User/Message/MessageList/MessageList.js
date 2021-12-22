import MobileEntireMessage from './MobileEntireMessage';
import styles from 'styles/Message/MessageList.module.scss';

import Spinner from './Spiner';
import DetailMessageListContainer from './DetailMessageListContainer';
import EntireMessageList from './EntireMessageList';
import MobileDetailMessage from './MobileDetailMessage';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import SendMessageContainer from '../SendMessage';

const MessageList = ({
  messages,
  recipientId,
  detailMessage,
  recipient,
  isLoading,
  openModal,
  inquiryMessage,
  onClickInquiry,
  onDelete,
  setOpenModal
}) => {
  const router = useRouter();
  const user = useSelector((state) => state.user);

  return (
    <div className={styles.container}>
      <div className={styles.entireMessage}>
        <EntireMessageList
          messages={messages}
          onClickInquiry={onClickInquiry}
        />
      </div>
      <div className={styles.detailMessage}>
        {isLoading ? (
          <div className={styles.loadingcontainer}>
            <Spinner />
          </div>
        ) : (
          <DetailMessageListContainer
            detailMessage={detailMessage}
            recipient={recipient}
            inquiryMessage={inquiryMessage}
            setOpenModal={setOpenModal}
            onDelete={onDelete}
            messages={messages}
          />
        )}
      </div>
      {router.query.id ? (
        <MobileDetailMessage
          detailMessage={detailMessage}
          recipient={recipient}
          inquiryMessage={inquiryMessage}
          setOpenModal={setOpenModal}
          onDelete={onDelete}
          messages={messages}
          isLoading={isLoading}
        />
      ) : (
        <MobileEntireMessage
          messages={messages}
          onClickInquiry={onClickInquiry}
        />
      )}
      <SendMessageContainer
        show={openModal}
        onClose={() => setOpenModal(false)}
        detailMessage={detailMessage[0]}
        letterNo={router.query.id}
        inquiryMessage={inquiryMessage}
        otherId={recipientId}
        user={user}
      />
    </div>
  );
};

export default MessageList;
