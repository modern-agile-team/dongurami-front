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
    <div className={styles.post} onClick={(e) => e.stopPropagation()}>
      <div className={styles.container}>
        <div>
          <div>홍보게시판</div>
          <div>{title}</div>
          {user.id === studentId ? (
            <div>
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
          ) : (
            <div />
          )}
          <div>
            <Link href={{ pathname: `/clubhome/${clubNo}` }} passHref>
              <div>{clubName}</div>
            </Link>
            <div>
              <div>{inDate}</div>
              <div>조회 {hit}</div>
            </div>
          </div>
        </div>
        <hr />
        <ReactQuill value={description || ''} theme="bubble" readOnly />
        {post.comments && (
          <PromotionCommentContainer
            comments={post.comments}
            postId={postId}
            studentId={studentId}
            getData={getData}
          />
        )}
      </div>
    </div>
  );
};

export default Post;
