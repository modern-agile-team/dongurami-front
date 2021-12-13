import React, { useState, useEffect } from 'react';
import styles from 'styles/Board/Promotion/Post/Post.module.scss';
import { useRouter } from 'next/router';
import { deletePost } from 'apis/promotion';
import { getPost, setCategory } from 'redux/slices/post';
import api from 'apis/post';
import { useSelector, useDispatch } from 'react-redux';
import getToken from 'utils/getToken';
import Header from './Header';
import Description from './Description';

const Post = ({ postId, getData, post, sendMessage, setOpenMessage }) => {
  const [openOptions, setOpenOptions] = useState(false);
  const [isComment, setIsComment] = useState(false);
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
    </div>
  );
};

export default Post;
