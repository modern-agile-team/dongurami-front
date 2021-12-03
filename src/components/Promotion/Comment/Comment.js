import { useRef, useState } from 'react';
import {
  AiOutlineCheck,
  AiOutlineDelete,
  AiOutlineEdit,
  AiFillHeart
} from 'react-icons/ai';
import api from 'apis/post';
import styles from '../../../styles/Board/Promotion/Comment.module.scss';
import moment from 'moment';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { deleteComment, editComment } from 'apis/promotion';
import { getPost } from 'redux/slices/post';
import { useRouter } from 'next/router';

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
  const router = useRouter();
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

  const onClickLike = async () => {
    if (!user) return;
    if (comment.likedFlag) {
      await api.unLikeComment({ commentID: comment.no, parentCommentID });
    } else {
      await api.likeComment({
        commentID: comment.no,
        parentCommentID,
        url: router.asPath
      });
    }
    dispatch(getPost({ category, pid: post.no }));
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
            {Boolean(post.isWriter) && <p>작성자</p>}
            {Boolean(comment.isWriter) && (
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
            {user && user.id !== comment.studentId && (
              <p className={styles.reply} onClick={() => sendMessage(comment)}>
                쪽지
              </p>
            )}
            <button
              className={`${styles.likeButton} ${
                comment.likedFlag && styles.like
              }`}
              onClick={onClickLike}
            >
              <AiFillHeart />
              <span>{comment.emotionCount}</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comment;
