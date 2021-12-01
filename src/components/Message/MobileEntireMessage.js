import styles from '../../styles/Message/MobileEntireMessage.module.scss';
import MessagePreview from './MessagePreview';
import { useRouter } from 'next/router';

const MobileEntireMessage = ({ messages, onClickInquiry }) => {
  const router = useRouter();
  return (
    <>
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
          />
        );
      })}
    </>
  );
};

export default MobileEntireMessage;