import { useRef, useState } from 'react';
import { AiOutlineCheck, AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import styles from '../../../styles/Board/Promotion/Comment.module.scss';
import ReplyCommentContainer from './ReplyCommentContainer';
import ReplyAddComment from './ReplyAddComment';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteComment,
  editComment,
  editReplyComment,
  deleteReplyComment
} from 'apis/promotion';
import { getPost } from 'redux/slices/post';

const Comment = ({ comment, postId, studentId }) => {
  const [replyComment, setReplyComment] = useState(false);
  const [isContentEditable, setIsContentEditable] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const post = useSelector((state) => state.post);
  const descriptionDiv = useRef();
  const category = 'promotion';
  const pid = postId;
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
          if (response.data.success) dispatch(getPost({ category, pid }));
          else alert(response.data.msg);
        });
      } else {
        await editComment(
          postId,
          comment.no,
          descriptionDiv.current.textContent
        ).then((response) => {
          if (response.data.success) dispatch(getPost({ category, pid }));
          else alert(response.data.msg);
        });
      }
    }
    setIsContentEditable(!isContentEditable);
  };

  const onDelete = async () => {
    if (comment.groupNo !== comment.no) {
      await deleteReplyComment(postId, comment.groupNo, comment.no).then(
        (response) => {
          if (response.data.success) dispatch(getPost({ category, pid }));
          else alert(response.data.msg);
        }
      );
    } else {
      await deleteComment(postId, comment.no).then((response) => {
        if (response.data.success) dispatch(getPost({ category, pid }));
        else alert(response.data.msg);
      });
    }
  };

  return (
    <>
      <div className={styles.comment}>
        <Link href={{ pathname: `profile/${comment.studentId}` }} passHref>
          <img
            src={
              comment.profileImageUrl ??
              'https://blog.kakaocdn.net/dn/c3vWTf/btqUuNfnDsf/VQMbJlQW4ywjeI8cUE91OK/img.jpg'
            }
            alt="profile"
          />
        </Link>
        <div>
          <div>
            <Link href={{ pathname: `profile/${comment.studentId}` }} passHref>
              <p>{comment.studentName}</p>
            </Link>
            {post.studentId === comment.studentId && <p>작성자</p>}
            {user.id === comment.studentId && (
              <div>
                <button onClick={onEdit} className={styles['action-button']}>
                  {isContentEditable ? <AiOutlineCheck /> : <AiOutlineEdit />}
                </button>
                <button onClick={onDelete} className={styles['action-button']}>
                  <AiOutlineDelete />
                </button>
              </div>
            )}
          </div>
          <div
            ref={descriptionDiv}
            contentEditable={isContentEditable}
            suppressContentEditableWarning={true}
          >
            {comment.description}
          </div>
          <div>
            <p>{comment.inDate}</p>
            {user && comment.no === comment.groupNo && (
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
            setReplyComment={setReplyComment}
            studentId={studentId}
          />
        </ReplyCommentContainer>
      )}
    </>
  );
};

export default Comment;
