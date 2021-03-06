import styles from 'styles/Message/MessageList.module.scss';
import MessagePreview from './MessagePreview';

const MobileEntireMessage = ({ messages, onClickInquiry }) => {
  return (
    <div className={styles.mobilecontainer}>
      <div className={styles.mobileheader}>
        <h3>๐ฎ ์ชฝ์งํจ</h3>
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
          <span>์ชฝ์ง๊ฐ ์กด์ฌํ์ง ์์ต๋๋ค</span>
        </div>
      )}
    </div>
  );
};

export default MobileEntireMessage;
