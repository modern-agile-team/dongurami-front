import { useRef, useState } from 'react';
import { AiOutlineCheck, AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import styles from '../../../styles/Board/Promotion/Comment.module.scss';
import moment from 'moment';
import Modal from 'components/Common/Modal';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { deleteComment, editComment } from 'apis/promotion';
import { getPost } from 'redux/slices/post';

const Comment = ({
  comment,
  setParentCommentID,
  parentCommentID,
  sendMessage
}) => {
  const [isContentEditable, setIsContentEditable] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const post = useSelector((state) => state.post);
  const descriptionDiv = useRef();
  const category = 'promotion';

  const onEdit = async () => {
    if (isContentEditable) {
      await editComment(
        comment.no,
        parentCommentID,
        descriptionDiv.current.textContent,
        post.no
      ).then((response) => {
        if (response.data.success)
          dispatch(getPost({ category, pid: post.no }));
        else alert(response.data.msg);
      });
    }
    setIsContentEditable(!isContentEditable);
  };

  const onDelete = async () => {
    await deleteComment(comment.no, parentCommentID, post.no).then(
      (response) => {
        if (response.data.success)
          dispatch(getPost({ category, pid: post.no }));
        else alert(response.data.msg);
      }
    );
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
            {user && user.id === comment.studentId && (
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
            <p>{moment(comment.inDate).format('YYYY-MM-DD')}</p>
            {user && comment.no === comment.groupNo && (
              <p
                className={styles.reply}
                onClick={() => setParentCommentID(comment.no)}
              >
                답글 쓰기
              </p>
            )}
            {user && (
              <p className={styles.reply} onClick={() => sendMessage(comment)}>
                쪽지
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Comment;
