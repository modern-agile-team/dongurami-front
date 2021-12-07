import React, { useState, useEffect } from 'react';
import styles from '../../styles/Board/Promotion/Post.module.scss';
import PromotionCommentContainer from './Comment/PromotionCommentContainer';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { deletePost } from 'apis/promotion';
import { getPost, setCategory } from 'redux/slices/post';
import api from 'apis/post';
import dynamic from 'next/dynamic';
import { useSelector, useDispatch } from 'react-redux';
import { IoIosArrowForward } from 'react-icons/io';
import { AiFillHeart } from 'react-icons/ai';
import getToken from 'utils/getToken';
import moment from 'moment';
import Option from 'components/Common/letter/Option';

const ReactQuill = dynamic(import('react-quill'), {
  ssr: false
});

const Post = ({
  postId,
  getData,
  post,
  sendMessage,
  getPostData,
  setOpenMessage
}) => {
  const [openOptions, setOpenOptions] = useState(false);
  const { clubName, hit, title, inDate, description, studentId, clubNo, name } =
    post;
  const category = 'promotion';

  const user = useSelector((state) => state.user);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCategory(category));
  }, [dispatch]);

  const onClick = () => {
    if (!getToken()) alert('로그인 후 이용해주세요.');
    else router.push(`/clubhome/${clubNo}`);
  };

  const onClickLike = async () => {
    if (!user) return;
    if (post.likedFlag) {
      await api.unLikePost(post.no);
    } else {
      await api.likePost({ pid: post.no, url: router.asPath });
    }
    dispatch(getPost());
  };

  const onDelete = async () => {
    await deletePost(postId).then((res) => {
      if (res.data.success) {
        alert('글 삭제가 완료되었습니다');
        router.replace(`promotion`);
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
                      pathname: `${router.pathname}/${router.query.id}/edit`
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
              <div className={styles.profile}>
                <img
                  onClick={() => setOpenOptions(!openOptions)}
                  src={
                    post.profileImageUrl ??
                    'https://blog.kakaocdn.net/dn/c3vWTf/btqUuNfnDsf/VQMbJlQW4ywjeI8cUE91OK/img.jpg'
                  }
                  alt="profile"
                />
                {openOptions && user && (
                  <Option
                    setOpenOptions={setOpenOptions}
                    setOpenMessage={setOpenMessage}
                    routePath={`/profile/${post.studentId}`}
                  />
                )}

                <span onClick={() => setOpenOptions(!openOptions)}>{name}</span>
              </div>
              <div className={styles.dateHit}>
                <span>{moment(inDate).format('YYYY-MM-DD')}</span>
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
        <button
          className={`${styles.likeButton} ${post.likedFlag && styles.like}`}
          onClick={onClickLike}
        >
          <AiFillHeart />
          <span>&nbsp;{post.emotionCount}</span>
        </button>
        {post.comments && (
          <PromotionCommentContainer
            comments={post.comments}
            postId={postId}
            studentId={studentId}
            getData={getData}
            sendMessage={sendMessage}
          />
        )}
      </div>
    </div>
  );
};

export default Post;
