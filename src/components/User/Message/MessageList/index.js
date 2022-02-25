import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { getMessages, getDetailMessages, deleteMessage } from 'apis/message';
import MessageList from './MessageList';
import getToken from 'utils/getToken';

const MessageListContainer = () => {
  const [messages, setMessages] = useState([]);
  const [recipientId, setRecipientId] = useState('');
  const [detailMessage, setDetailMessage] = useState([]);
  const [recipient, setRecipient] = useState('');
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
        }
      });
    }
  };
  const inquiryMessage = async (letterNo) => {
    setLoading(true);
    if (user) {
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
        if (response.data.letters[0].otherHiddenFlag) setRecipient('익명');
        else setRecipient(response.data.letters[0].name);
        setLoading(false);
      });
    }
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
    if (confirm('대화내용을 전부 삭제하시겠습니까?') === true) {
      await deleteMessage(recipientId, id).then((response) => {
        alert(response.data.msg);
        router.replace(`message`);
      });
    } else return;
  };

  useEffect(() => {
    if (!getToken()) {
      alert('로그인 후 이용해주세요');
      router.back();
    }
    getLetterDatas();
  }, [user]);

  useEffect(() => {
    if (router?.query.id && user?.id) inquiryMessage(router.query.id);
    else getLetterDatas();
  }, [user, router]);

  return (
    <MessageList
      messages={messages}
      recipientId={recipientId}
      detailMessage={detailMessage}
      recipient={recipient}
      isLoading={isLoading}
      openModal={openModal}
      setOpenModal={setOpenModal}
      inquiryMessage={inquiryMessage}
      onClickInquiry={onClickInquiry}
      onDelete={onDelete}
    />
  );
};

export default MessageListContainer;
