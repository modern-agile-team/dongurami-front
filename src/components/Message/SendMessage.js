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
  inquiryMessage,
  otherId,
  letterNo,
  user
}) {
  const [description, setDescription] = useState('');
  const [isCheck, setIsCheck] = useState(false);
  const post = useSelector((state) => state.post);
  const clubLeader = useSelector((state) => state.clubhome.info?.leaderInfo);
  const clubLeaderIsWriter = useSelector(
    (state) => state.clubhome.info?.clientInfo.leader
  );
  const userId = user?.id;

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

  const submitCheck = () => {
    if (!description.length) {
      alert('내용을 작성해주세요');
      return 0;
    } else if (description.length > 255) {
      alert('255자 이하로 작성해주세요');
      return 0;
    } else if (
      post?.isWriter === 1 ||
      clubLeaderIsWriter === 1 ||
      letter?.isWriter === 1
    ) {
      alert('자신에게는 보낼 수 없습니다');
      return 0;
    }
    return 1;
  };

  const onSubmit = async () => {
    let boardFlag = 0;
    let writerHiddenFlag = 0;
    let recipientId = '';
    let commentNo = '';
    let boardNo = 0;

    if (letter) console.log(letter);

    if (!submitCheck()) {
      return;
    }

    if (isCheck) writerHiddenFlag = 1;
    if (!detailMessage && !letter) {
      if (!Number(post?.studentId) && !clubLeader) recipientId = '';
      else if (!post?.length && clubLeader) recipientId = clubLeader[0].id;
      else recipientId = post?.studentId;
      boardNo = post?.length ? post.no : '';
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
      if (!Number(otherId)) recipientId = '';
      else recipientId = otherId;
      boardFlag = detailMessage.boardFlag;
      boardNo = detailMessage.boardNo;
      await replyLetter(
        recipientId,
        description,
        writerHiddenFlag,
        letterNo,
        userId
      ).then((response) => {
        if (response.data.success) {
          alert('쪽지가 전송되었습니다');
          onClose();
          inquiryMessage(router.query.id);
          setDescription('');
        }
      });
    } else if (letter) {
      if (!Number(letter.studentId)) recipientId = '';
      else recipientId = letter.studentId;
      commentNo = letter.no;
      boardNo = post.no;
      boardFlag = 0;
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
