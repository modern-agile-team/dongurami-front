import { MdClose } from 'react-icons/md';
import styles from 'styles/Message/SendMessage.module.scss';

function SendMessage({
  show,
  onClose,
  onClick,
  onChange,
  isCheck,
  checkHandler,
  onSubmit,
  modalContainer,
  description
}) {
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
          <input type="checkbox" checked={isCheck} onChange={checkHandler} />
          익명
        </div>
        <div className={styles.text}>
          <form>
            <textarea
              placeholder="내용을 입력해주세요"
              value={description}
              onChange={onChange}
            />
          </form>
        </div>
        <div className={styles.btn}>
          <button onClick={onSubmit}>전송</button>
        </div>
      </div>
    </div>
  );
}

export default SendMessage;
