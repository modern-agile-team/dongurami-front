import dynamic from 'next/dynamic';
import { FaHeart } from 'react-icons/fa';
import PromotionCommentContainer from '../Comment/PromotionCommentContainer';
import styles from 'styles/Board/Promotion/Post/Description.module.scss';

const ReactQuill = dynamic(import('react-quill'), {
  ssr: false
});

const Description = ({
  description,
  post,
  onClickLike,
  postId,
  studentId,
  getData,
  sendMessage,
  openOptions,
  setOpenOptions,
  setIsComment
}) => {
  return (
    <>
      <ReactQuill
        className={styles.description}
        value={description || ''}
        theme="bubble"
        readOnly
      />
      <button
        className={`${styles.likeButton} ${post.likedFlag && styles.like}`}
        onClick={onClickLike}
      >
        <FaHeart />
        <span>&nbsp;{post.emotionCount}</span>
      </button>
      {post.comments && (
        <PromotionCommentContainer
          comments={post.comments}
          postId={postId}
          studentId={studentId}
          getData={getData}
          sendMessage={sendMessage}
          openOptions={openOptions}
          setOpenOptions={setOpenOptions}
          setIsComment={setIsComment}
        />
      )}
    </>
  );
};
export default Description;
