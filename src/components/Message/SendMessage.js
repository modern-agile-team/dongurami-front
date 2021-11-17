import { useRef } from 'react';
import { MdClose } from 'react-icons/md';
import styles from '../../styles/Message/SendMessage.module.scss';

function SendMessage({ show, onClose }) {
  const modalContainer = useRef();

  const onClick = (e) => {
    if (e.target !== modalContainer.current) return;
    onClose();
  };

  return (
    <div
      className={show ? styles.open : styles.close}
      ref={modalContainer}
      onClick={onClick}
    >
      <button onClick={onClose}>
        <MdClose />
      </button>
      <div>
        <div className={styles.title}>
          <p>쪽지보내기</p>
        </div>
        <div className={styles.text}>
          <form>
            <textarea placeholder="내용을 입력해주세요" />
          </form>
        </div>
        <div className={styles.btn}>
          <button>전송</button>
        </div>
      </div>
    </div>
  );
}

export default SendMessage;
