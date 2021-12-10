import { useRef, useState, useEffect } from 'react';
import {
  AiOutlineCheck,
  AiOutlineDelete,
  AiOutlineEdit,
  AiFillHeart
} from 'react-icons/ai';
import api from 'apis/post';
import styles from '../../../styles/Board/Promotion/Comment.module.scss';
import moment from 'moment';
import Option from 'components/Common/letter/Option';
import { useSelector, useDispatch } from 'react-redux';
import { deleteComment, editComment } from 'apis/promotion';
import { getPost } from 'redux/slices/post';
import { useRouter } from 'next/router';

const Comment = ({
  comment,
  setParentCommentID,
  parentCommentID,
  sendMessage,
  openOptions,
  setOpenOptions,
  setIsComment
}) => {
  const [isContentEditable, setIsContentEditable] = useState(false);
  const [optionComment, setOptionComment] = useState(0);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const post = useSelector((state) => state.post);
  const router = useRouter();
  const descriptionDiv = useRef();

  useEffect(() => {
    if (!isContentEditable) return;
    descriptionDiv.current.focus();
  }, [isContentEditable]);

  useEffect(() => {
    if (openOptions === false) setOptionComment(0);
  }, [openOptions]);

  function setEndOfContenteditable(contentEditableElement) {
    let range, selection;
    range = document.createRange(); //Create a range (a range is a like the selection but invisible)
    range.selectNodeContents(contentEditableElement); //Select the entire contents of the element with the range
    range.collapse(false); //collapse the range to the end point. false means collapse to end rather than the start
    selection = window.getSelection(); //get the selection object (allows you to change selection)
    selection.removeAllRanges(); //remove any selections already made
    selection.addRange(range); //make the range you have just created the visible selection
  }

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
      await editComment(
        comment.no,
        parentCommentID,
        descriptionDiv.current.textContent,
        post.no
      ).then((response) => {
        if (response.data.success) dispatch(getPost());
        else alert(response.data.msg);
      });
    }
    setIsContentEditable(!isContentEditable);
    setEndOfContenteditable(descriptionDiv.current);
  };

  const onDelete = async () => {
    await deleteComment(comment.no, parentCommentID, post.no).then(
      (response) => {
        if (response.data.success) dispatch(getPost());
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
    dispatch(getPost());
  };

  /*const WithProfileLink = ({ children }) =>
    comment.writerHiddenFlag ? (
      children
    ) : (
      <Link href={`/profile/${comment.studentId}`} passHref>
        {children}
      </Link>
    );
    */

  return (
    <>
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
              sendMessage={sendMessage}
              routePath={`/profile/${comment.studentId}`}
              setOptionComment={setOptionComment}
              setIsComment={setIsComment}
            />
          )}
        </div>
        <div>
          <div>
            <p>{comment.studentName}</p>

            {Boolean(post.isWriter) && <p>작성자</p>}
            {Boolean(comment.isWriter) && (
              <div className={styles.button}>
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
                onClick={() => setParentCommentID(comment.no)}
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
    </>
  );
};

export default Comment;
