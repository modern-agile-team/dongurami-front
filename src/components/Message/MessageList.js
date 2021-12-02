import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { getMessages, getDetailMessages, deleteMessage } from 'apis/message';
import MobileEntireMessage from './MobileEntireMessage';
import styles from '../../styles/Message/MessageList.module.scss';
import SendMessage from './SendMessage';
import Spinner from './Spiner';
import DetailMessageListContainer from './DetailMessageListContainer';
import EntireMessageList from './EntireMessageList';
import MobileDetailMessage from './MobileDetailMessage';

const MessageList = () => {
  const [messages, setMessages] = useState([]);
  const [recipientId, setRecipientId] = useState('');
  const [detailMessage, setDetailMessage] = useState([]);
  const [recipient, setRecipient] = useState('');
  const [groupNo, setGroupNo] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const user = useSelector((state) => state.user);
  const router = useRouter();

  let isRecipientId = '';

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
      isRecipientId = response.data.letters.find(
        (el) => el.senderId !== user.id
      );

      if (isRecipientId) {
        setRecipientId(isRecipientId.senderId);
      } else {
        setRecipientId(response.data.letters[0].recipientId);
      }

      setGroupNo(response.data.letters[0].groupNo);
      setRecipient(response.data.letters[0].name);
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

  const onDelete = async (id) => {
    alert('대화내용을 전부 삭제하시겠습니까?');
    await deleteMessage(recipientId, id, groupNo).then((response) => {
      alert(response.data.msg);
      router.replace(`message`);
    });
  };

  useEffect(() => {
    getLetterDatas();
  }, [user]);

  useEffect(() => {
    if (router.query.id && user?.id) inquiryMessage(router.query.id);
    else getLetterDatas();
  }, [user, router]);
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
      <SendMessage
        show={openModal}
        onClose={() => setOpenModal(false)}
        detailMessage={detailMessage[0]}
        letterNo={router.query.id}
        inquiryMessage={inquiryMessage}
        otherId={recipientId}
        userId={user.id}
      />
    </div>
  );
};

export default MessageList;
