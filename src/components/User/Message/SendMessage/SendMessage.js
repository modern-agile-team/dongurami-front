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
  description,
  isReply
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
          {isReply ? null : (
            <div className={styles.checkbox}>
              <input
                type="checkbox"
                checked={isCheck}
                onChange={checkHandler}
              />
              <span>익명</span>
            </div>
          )}
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
