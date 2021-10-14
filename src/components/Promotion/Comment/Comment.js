import { useRef, useState } from 'react';
import { AiOutlineCheck, AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import styles from '../../../styles/Board/Promotion/Comment.module.scss';
import ReplyCommentContainer from './ReplyCommentContainer';
import ReplyAddComment from './ReplyAddComment';
import {
  deleteComment,
  editComment,
  editReplyComment,
  deleteReplyComment
} from 'apis/promotion';
import getToken from 'utils/getToken';

const Comment = ({ comment, postId, getData }) => {
  const [replyComment, setReplyComment] = useState(false);
  const [isContentEditable, setIsContentEditable] = useState(false);
  const descriptionDiv = useRef();
  const onClick = () => {
    setReplyComment(!replyComment);
  };

  const onEdit = async () => {
    if (isContentEditable) {
      if (comment.groupNo !== comment.no) {
        await editReplyComment(
          postId,
          comment.groupNo,
          comment.no,
          descriptionDiv.current.textContent
        ).then((response) => {
          if (response.data.success) getData();
          else alert(response.data.msg);
        });
      } else {
        await editComment(
          postId,
          comment.no,
          descriptionDiv.current.textContent
        ).then((response) => {
          if (response.data.success) getData();
          else alert(response.data.msg);
        });
      }
    }
    setIsContentEditable(!isContentEditable);
    console.log(descriptionDiv.current.textContent);
  };

  const onDelete = async () => {
    if (comment.groupNo !== comment.no) {
      await deleteReplyComment(postId, comment.groupNo, comment.no).then(
        (response) => {
          if (response.data.success) getData();
          else alert(response.data.msg);
        }
      );
    } else {
      await deleteComment(postId, comment.no).then((response) => {
        if (response.data.success) getData();
        else alert(response.data.msg);
      });
    }
  };

  return (
    <>
      <div className={styles.comment}>
        <img src="https://picsum.photos/500" alt="profile" />
        <div>
          <div>
            <p>{comment.studentName}</p>
            <p>작성자</p>
            <div>
              <button onClick={onEdit} className={styles['action-button']}>
                {isContentEditable ? <AiOutlineCheck /> : <AiOutlineEdit />}
              </button>
              <button onClick={onDelete} className={styles['action-button']}>
                <AiOutlineDelete />
              </button>
            </div>
          </div>
          <div ref={descriptionDiv} contentEditable={isContentEditable}>
            {comment.description}
          </div>
          <div>
            <p>{comment.inDate}</p>
            {comment.no === comment.groupNo && (
              <p onClick={onClick}>답글 쓰기</p>
            )}
          </div>
        </div>
      </div>
      {replyComment && (
        <ReplyCommentContainer>
          <ReplyAddComment
            parentCommentId={comment.groupNo}
            postId={postId}
            getData={getData}
            setReplyComment={setReplyComment}
          />
        </ReplyCommentContainer>
      )}
    </>
  );
};

export default Comment;
