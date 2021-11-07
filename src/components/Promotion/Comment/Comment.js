import { useRef, useState } from 'react';
import { AiOutlineCheck, AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import styles from '../../../styles/Board/Promotion/Comment.module.scss';

import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteComment,
  editComment,
  editReplyComment,
  deleteReplyComment
} from 'apis/promotion';
import { getPost } from 'redux/slices/post';

function formatDate(date) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();
  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;
  return [year, month, day].join('-');
}

const Comment = ({
  comment,
  postId,
  studentId,
  setParentCommentID,
  parentCommentID
}) => {
  const [replyComment, setReplyComment] = useState(false);
  const [isContentEditable, setIsContentEditable] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const post = useSelector((state) => state.post);
  const descriptionDiv = useRef();
  const category = 'promotion';
  const pid = postId;

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
    console.log(post.no);
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
            <p>{formatDate(comment.inDate)}</p>
            {user && comment.no === comment.groupNo && (
              <p
                className={styles.reply}
                onClick={() => setParentCommentID(comment.no)}
              >
                답글 쓰기
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Comment;
