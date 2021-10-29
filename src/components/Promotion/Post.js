import React from 'react';
import styles from '../../styles/Board/Promotion/Post.module.scss';
import PromotionCommentContainer from './Comment/PromotionCommentContainer';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { deletePost } from 'apis/promotion';
import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';
import { IoIosArrowForward } from 'react-icons/io';
import getToken from 'utils/getToken';

const ReactQuill = dynamic(import('react-quill'), {
  ssr: false
});

const Post = ({ postId, getData, post }) => {
  const { clubName, hit, title, inDate, description, studentId, clubNo, name } =
    post;
  const user = useSelector((state) => state.user);
  const router = useRouter();

  const onClick = () => {
    if (getToken() === '') alert('로그인 후 이용해주세요.');
    else router.push(`/clubhome/${clubNo}`);
  };

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
      <div className={styles.wrap}>
        <div className={styles.header}>
          <div className={styles.title}>
            <h1>{title}</h1>
            <div className={styles.info}>
              {user?.id === studentId && (
                <div className={styles.buttons}>
                  <Link
                    href={{
                      pathname: `${router.pathname}/${postId}/edit`,
                      query: router.query
                    }}
                    passHref
                  >
                    <button>수정</button>
                  </Link>
                  <button onClick={onDelete}>삭제</button>
                </div>
              )}
              <span className={styles.hit}>조회 {hit}</span>
            </div>
          </div>
          <div className={styles.infoWrap}>
            <div className={styles.club} onClick={onClick}>
              {clubName}
              <span>바로가기</span>
              <IoIosArrowForward size={25} />
            </div>
            <div className={styles.boardInfo}>
              <Link href={`/profile/${post.studentId}`} passHref>
                <span>{name}</span>
              </Link>
              <div className={styles.dateHit}>
                <span>{new Date(inDate).toLocaleDateString()}</span>
              </div>
            </div>
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
    </div>
  );
};

export default Post;
