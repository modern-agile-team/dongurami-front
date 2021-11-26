import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { MdClose } from 'react-icons/md';
import { sendLetter } from 'apis/message';

import styles from '../../styles/Message/SendMessage.module.scss';

function SendMessage({ show, onClose, letter }) {
  const [description, setDescription] = useState('');
  const post = useSelector(state => state.post);
  const modalContainer = useRef();

  const onClick = (e) => {
    if (e.target !== modalContainer.current) return;
    onClose();
  };

  const onChange = (e) => {
    setDescription(e.target.value);
  }

  const onSubmit = async() => {
    const boardFlag = 0;
    const writerHiddenFlag = 1;
    await sendLetter(letter.studentId,description,post.no, letter.no, boardFlag, writerHiddenFlag).then((response) => {
        if (response.data.success) {
          alert('쪽지가 전송되었습니다');
          onClose();
        }
    })  
      
    }
  

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
            <textarea placeholder="내용을 입력해주세요" value={description} onChange={onChange}/>
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
