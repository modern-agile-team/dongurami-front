import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { MdClose } from 'react-icons/md';
import { sendLetter, replyLetter } from 'apis/message';

import styles from '../../styles/Message/SendMessage.module.scss';
import router from 'next/router';

function SendMessage({
  show,
  onClose,
  letter,
  detailMessage,
  letterNo,
  inquiryMessage,
  otherId,
  groupNo
}) {
  const [description, setDescription] = useState('');
  const [isCheck, setIsCheck] = useState(false);
  const post = useSelector((state) => state.post);
  const modalContainer = useRef();

  const onClick = (e) => {
    if (e.target !== modalContainer.current) return;
    onClose();
  };

  const onChange = (e) => {
    setDescription(e.target.value);
  };

  const checkHandler = (e) => {
    setIsCheck(!isCheck);
  };

  const onSubmit = async () => {
    let boardFlag = 0;
    let writerHiddenFlag = 0;
    let recipientId = '';
    let commentNo = '';
    let boardNo = 0;

    if (isCheck) writerHiddenFlag = 1;
    if (!letter && !detailMessage) {
      recipientId = post.studentId;
      boardNo = post.no;
      boardFlag = 1;
      await sendLetter(
        recipientId,
        description,
        boardNo,
        commentNo,
        boardFlag,
        writerHiddenFlag
      ).then((response) => {
        if (response.data.success) {
          alert('쪽지가 전송되었습니다');
          onClose();

          setDescription('');
        }
      });
    } else if (!letter && detailMessage) {
      recipientId = otherId;
      boardFlag = detailMessage.boardFlag;
      boardNo = detailMessage.boardNo;
      await replyLetter(
        recipientId,
        description,
        writerHiddenFlag,
        groupNo,
        router.query.id
      ).then((response) => {
        if (response.data.success) {
          alert('쪽지가 전송되었습니다');
          onClose();
          inquiryMessage(groupNo);
          setDescription('');
        }
      });
    } else if (letter) {
      if (!Number(letter.studentId)) recipientId = '';
      else recipientId = letter.studentId;
      commentNo = letter.no;
      boardNo = post.no;
      await sendLetter(
        recipientId,
        description,
        boardNo,
        commentNo,
        boardFlag,
        writerHiddenFlag
      ).then((response) => {
        if (response.data.success) {
          alert('쪽지가 전송되었습니다');
          onClose();

          setDescription('');
        }
      });
    }
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
