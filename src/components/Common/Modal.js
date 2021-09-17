import styles from 'styles/Common/Modal.module.scss';

function Modal({ children, show }) {
  return (
    <div className={(show) ? styles.open : styles.close}>
      <div>
        {children}
      </div>
    </div>
  );
}

export default Modal;
