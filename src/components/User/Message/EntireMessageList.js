import styles from 'styles/Message/MessageList.module.scss';
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
        {!messages && (
          <div className={styles.emptylettercontainer}>
            <span className={styles.emptyletter}>쪽지가 존재하지 않습니다</span>
          </div>
        )}
      </div>
    </>
  );
};

export default EntireMessageList;
