import React from 'react';
import styles from '../../styles/Board/Promotion/Post.module.scss';
import PromotionCommentContainer from './Comment/PromotionCommentContainer';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { deletePost } from 'apis/promotion';
import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';

const ReactQuill = dynamic(import('react-quill'), {
  ssr: false
});

const Post = ({ postId, getData, post }) => {
  const { clubName, hit, title, inDate, description, studentId, clubNo } = post;
  const user = useSelector((state) => state.user);
  const router = useRouter();

  const onDelete = async () => {
    await deletePost(postId).then((res) => {
      if (res.data.success) {
        alert('글 삭제가 완료되었습니다');
        router.reload();
      }
    });
  };

  return (
    <div className={styles.container} onClick={(e) => e.stopPropagation()}>
      <div className={styles.header}>
        <div className={styles.title}>
          <h2>{title}</h2>
        </div>
        <div className={styles.clubName}>
          <Link href={{ pathname: `/clubhome/${clubNo}` }} passHref>
            <h3>{clubName}</h3>
          </Link>
        </div>
        <div className={styles.boardInfo}>
          <div className={styles.dateHit}>
            <span>{inDate}</span>
            <span>조회 {hit}</span>
          </div>
          {user.id === studentId && (
            <div className={styles.buttons}>
              <Link
                href={{
                  pathname: `${router.pathname}/${postId}/edit`,
                  query: router.query
                }}
                passHref
              >
                <button>수정하기</button>
              </Link>
              <button onClick={onDelete}>삭제하기</button>
            </div>
          )}
        </div>
      </div>
      <ReactQuill
        className={styles.description}
        value={description || ''}
        theme="bubble"
        readOnly
      />
      {post.comments && (
        <PromotionCommentContainer
          comments={post.comments}
          postId={postId}
          studentId={studentId}
          getData={getData}
        />
      )}
    </div>
  );
};

export default Post;
