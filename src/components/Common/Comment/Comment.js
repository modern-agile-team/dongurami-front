import { useEffect, useRef, useState } from 'react';
import styles from '../../../styles/Common/Comment/Comment.module.scss';

function Comment({ comment, index, setAddReplyIndex, putComment, deleteComment }) {
  const [isContentEditable, setIsContentEditable] = useState(false);
  const descriptionDiv = useRef();

  useEffect(() => {
    if (!isContentEditable) return;
    descriptionDiv.current.focus();
  }, [isContentEditable]);

  const onEdit = () => {
    if (isContentEditable) {
      putComment(descriptionDiv.current.textContent, comment.no);
    }
    setIsContentEditable(!isContentEditable);
  }
  const onDelete = () => {
    deleteComment(comment.no);
  }


  return (
    <div className={styles.comment}>
      <img src="https://picsum.photos/500" alt="profile" />
      <div>
        <div>
          <p>{comment.studentName}</p>
          <p>작성자</p>
          <button onClick={onEdit}>{(isContentEditable) ? '수정 완료' : '수정'}</button>
          <button onClick={onDelete}>삭제</button>
        </div>
        <div ref={descriptionDiv} contentEditable={isContentEditable} suppressContentEditableWarning={true}>{comment.description}</div>
        <div>
          <p>{comment.inDate}</p>
          <p onClick={() => { setAddReplyIndex(index); }}>답글 쓰기</p>
        </div>
      </div>
    </div>
  );
}

export default Comment;
