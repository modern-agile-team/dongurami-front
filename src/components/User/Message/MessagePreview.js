import styles from 'styles/Message/MessagePreview.module.scss';
import { useRouter } from 'next/router';

const MessagePreview = ({ message, onClickInquiry }) => {
  const router = useRouter();

  return (
    <div
      className={
        router.query.id == message.groupNo
          ? styles.clickedcontainer
          : styles.container
      }
      onClick={() => onClickInquiry(message.groupNo)}
    >
      <div className={styles.info}>
        <span className={styles.name}>{message.name}</span>
        <p className={styles.indate}>{message.inDate}</p>
      </div>

      <span className={styles.description}>
        {message.description.length > 20
          ? message.description.substr(0, 20) + '.....'
          : message.description}
      </span>
    </div>
  );
};

export default MessagePreview;
