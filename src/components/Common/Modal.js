import { useRef } from 'react';
import { MdClose } from 'react-icons/md';
import styles from 'styles/Common/Modal.module.scss';

function Modal({ children, show, onClose }) {
  const modalContainer = useRef();

  const onClick = (e) => {
    if (e.target !== modalContainer.current) return;
    onClose();
  }

  return (
    <div className={(show) ? styles.open : styles.close} ref={modalContainer} onClick={onClick}>
      <button onClick={onClose}>
        <MdClose />
      </button>
      <div>
        {children}
      </div>
    </div>
  );
}

export default Modal;
