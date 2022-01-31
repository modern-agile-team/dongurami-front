import React, { useState, useEffect } from 'react';
import styles from 'styles/Board/Promotion/Post/Post.module.scss';
import { useRouter } from 'next/router';
import { deletePost, likePostAlarm } from 'apis/promotion';
import { getPost, setCategory } from 'redux/slices/post';
import api from 'apis/post';
import { useSelector, useDispatch } from 'react-redux';
import getToken from 'utils/getToken';
import Header from './Header';
import Description from './Description';
import Poster from './Poster';

const Post = ({
  postId,
  getData,
  post,
  sendMessage,
  setOpenMessage,
  images
}) => {
  const [openOptions, setOpenOptions] = useState(false);
  const [isComment, setIsComment] = useState(false);
  const [mediaQuery, setMediaQuery] = useState(null);
  const [isLoading, setIsLoading] = useState(0);

  const { clubName, hit, title, inDate, description, studentId, clubNo, name } =
    post;
  const category = 'promotion';

  const loading = useSelector((state) => state.post.loading);
  const user = useSelector((state) => state.user);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCategory(category));
  }, [dispatch]);

  useEffect(() => {
    if (window.matchMedia('(max-width: 1024px)').matches) {
      setMediaQuery('mobile');
    } else {
      setMediaQuery('deskTop');
    }
  }, []);

  useEffect(() => {
    if (!loading) setIsLoading((prev) => prev + 1);
  }, [loading]);

  const onClick = () => {
    if (!getToken()) alert('로그인 후 이용해주세요.');
    else router.push(`/clubhome/${clubNo}`);
  };

  const onClickLike = async () => {
    if (!user) return;
    if (post.likedFlag) {
      await api.unLikePost(post.no);
    } else {
      await api.likePost({ pid: post.no, url: router.asPath }).then((res) => {
        if (res.data.success)
          likePostAlarm(postId).then((res) => console.log(res));
      });
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
      {mediaQuery === 'deskTop' && <Poster images={images} />}
      {isLoading === 1 ? (
        <></>
      ) : (
        <div className={styles.wrap}>
          {mediaQuery === 'mobile' && <Poster images={images} />}
          <Header
            title={title}
            user={user}
            studentId={studentId}
            hit={hit}
            onClick={onClick}
            clubName={clubName}
            post={post}
            openOptions={openOptions}
            inDate={inDate}
            setOpenOptions={setOpenOptions}
            isComment={isComment}
            setOpenMessage={setOpenMessage}
            name={name}
            onDelete={onDelete}
            router={router}
          />
          <Description
            description={description}
            post={post}
            postId={postId}
            studentId={studentId}
            onClickLike={onClickLike}
            getData={getData}
            sendMessage={sendMessage}
            openOptions={openOptions}
            setOpenOptions={setOpenOptions}
            setIsComment={setIsComment}
          />
        </div>
      )}
    </div>
  );
};

export default Post;
