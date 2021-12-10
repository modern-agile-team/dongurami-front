import { useEffect, useRef, useState } from 'react';
import { AiOutlineCheck, AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import api from 'apis/post';
import styles from '../../../styles/Common/Comment/Comment.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from 'redux/slices/post';
import { useRouter } from 'next/router';
import moment from 'moment';
import Link from 'next/link';
import { AiFillHeart } from 'react-icons/ai';
import Option from '../letter/Option';

// https://newbedev.com/how-to-move-cursor-to-end-of-contenteditable-entity
function setEndOfContenteditable(contentEditableElement) {
  let range, selection;
  range = document.createRange(); //Create a range (a range is a like the selection but invisible)
  range.selectNodeContents(contentEditableElement); //Select the entire contents of the element with the range
  range.collapse(false); //collapse the range to the end point. false means collapse to end rather than the start
  selection = window.getSelection(); //get the selection object (allows you to change selection)
  selection.removeAllRanges(); //remove any selections already made
  selection.addRange(range); //make the range you have just created the visible selection
}

function Comment({
  comment,
  parentCommentID,
  setParentCommentID,
  sendLetter,
  setIsComment,
  openOptions,
  setOpenOptions
}) {
  const dispatch = useDispatch();
  const router = useRouter();
  const post = useSelector((state) => state.post);
  const user = useSelector((state) => state.user);
  const descriptionDiv = useRef();
  const [isContentEditable, setIsContentEditable] = useState(false);
  const [optionComment, setOptionComment] = useState(0);

  useEffect(() => {
    if (!isContentEditable) return;
    descriptionDiv.current.focus();
  }, [isContentEditable]);

  useEffect(() => {
    if (openOptions === false) setOptionComment(0);
  }, [openOptions]);

  const onEdit = async () => {
    if (isContentEditable) {
      if (descriptionDiv.current.textContent.length === 0) {
        descriptionDiv.current.focus();
        return;
      }
      if (descriptionDiv.current.textContent.length > 255) {
        alert('댓글을 255자 이하로 작성해 주세요!');
        descriptionDiv.current.focus();
        return;
      }
      await api.putComment({
        category: post.category,
        pid: post.no,
        commentID: comment.no,
        description: descriptionDiv.current.textContent,
        parentCommentID,
        clubNum: router.query.id
      });
      dispatch(getPost());
    }
    setIsContentEditable(!isContentEditable);
    setEndOfContenteditable(descriptionDiv.current);
  };
  const onDelete = async () => {
    await api.deleteComment({
      category: post.category,
      pid: post.no,
      commentID: comment.no,
      parentCommentID,
      clubNum: router.query.id
    });
    dispatch(getPost());
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
    dispatch(getPost());
  };

  const profileImage = (
    <img
      src={
        comment.profileImageUrl ??
        'https://blog.kakaocdn.net/dn/c3vWTf/btqUuNfnDsf/VQMbJlQW4ywjeI8cUE91OK/img.jpg'
      }
      alt="profile"
    />
  );

  const WithProfileLink = ({ children }) =>
    comment.writerHiddenFlag ? (
      children
    ) : (
      <Link href={`/profile/${comment.studentId}`} passHref>
        {children}
      </Link>
    );

  return (
    <div className={styles.comment}>
      <div className={styles.profile}>
        <img
          src={
            comment.profileImageUrl ??
            'https://blog.kakaocdn.net/dn/c3vWTf/btqUuNfnDsf/VQMbJlQW4ywjeI8cUE91OK/img.jpg'
          }
          alt="profile"
          onClick={() => {
            setOptionComment(comment.no);
            setIsComment(true);
            setOpenOptions(!openOptions);
          }}
        />
        {openOptions && comment.no === optionComment && (
          <Option
            setOpenOptions={setOpenOptions}
            comment={comment}
            sendMessage={sendLetter}
            routePath={`/profile/${comment.studentId}`}
            setOptionComment={setOptionComment}
            setIsComment={setIsComment}
          />
        )}
      </div>

      <div>
        <div>
          <p className={styles.profileImage}>{comment.studentName}</p>

          {post.studentId === comment.studentId && <p>작성자</p>}
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
          className={styles.commentText}
        >
          {comment.description}
        </div>
        <div>
          <p>{moment(comment.inDate).format('YYYY-MM-DD')}</p>
          {user && comment.no === comment.groupNo && (
            <p
              className={styles.reply}
              onClick={() => {
                setParentCommentID(comment.no);
              }}
            >
              답글 쓰기
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
  );
}

export default Comment;
