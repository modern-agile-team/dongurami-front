import styles from '../../styles/Message/MessageList.module.scss';
import MessagePreview from './MessagePreview';

const EntireMessageList = ({ messages, onClickInquiry }) => {
  return (
    <>
      <div className={styles.header}>
        <p>📮 쪽지함</p>
      </div>
      <div className={styles.body}>
        {messages &&
          messages.map((message) => {
            return (
              <MessagePreview
                key={message.no}
                num={message.no}
                message={message}
                onClickInquiry={onClickInquiry}
              />
            );
          })}
      </div>
    </>
  );
};

export default EntireMessageList;
