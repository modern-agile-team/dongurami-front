import styles from '../../styles/Message/MessageList.module.scss';
import MessagePreview from './MessagePreview';
import { useRouter } from 'next/router';

const MobileEntireMessage = ({ messages, onClickInquiry }) => {
  const router = useRouter();
  return (
    <div className={styles.mobilecontainer}>
      <div className={styles.mobileheader}>
        <h3>쪽지함</h3>
      </div>
      {messages.map((message, idx) => {
        return (
          <div className={styles.mobile} key={message.no}>
            <MessagePreview
              num={message.no}
              message={message}
              onClickInquiry={onClickInquiry}
            />
          </div>
        );
      })}
    </div>
  );
};

export default MobileEntireMessage;
