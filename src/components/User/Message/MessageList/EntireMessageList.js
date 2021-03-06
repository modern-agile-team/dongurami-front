import styles from 'styles/Message/MessageList.module.scss';
import MessagePreview from './MessagePreview';

const EntireMessageList = ({ messages, onClickInquiry }) => {
  return (
    <>
      <div className={styles.header}>
        <p>๐ฎ ์ชฝ์งํจ</p>
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
            <span className={styles.emptyletter}>์ชฝ์ง๊ฐ ์กด์ฌํ์ง ์์ต๋๋ค</span>
          </div>
        )}
      </div>
    </>
  );
};

export default EntireMessageList;
