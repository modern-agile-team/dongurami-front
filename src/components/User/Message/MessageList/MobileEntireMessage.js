import styles from 'styles/Message/MessageList.module.scss';
import MessagePreview from './MessagePreview';

const MobileEntireMessage = ({ messages, onClickInquiry }) => {
  return (
    <div className={styles.mobilecontainer}>
      <div className={styles.mobileheader}>
        <h3>📮 쪽지함</h3>
      </div>
      {messages &&
        messages.map((message) => {
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
      {!messages && (
        <div className={styles.emptylettercontainer}>
          <span>쪽지가 존재하지 않습니다</span>
        </div>
      )}
    </div>
  );
};

export default MobileEntireMessage;
