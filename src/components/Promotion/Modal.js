import React, { useState, useEffect } from 'react';
import styles from '../../styles/Board/Promotion/Modal.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getPost } from 'redux/slices/post';
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper';
import { MdClose } from 'react-icons/md';
import { useRouter } from 'next/router';
import Poster from './Post/Poster';
import Post from './Post';

SwiperCore.use([Navigation, Pagination, Scrollbar]);

const Modal = ({ postId, sendMessage, setOpenMessage }) => {
  const [images, setImages] = useState([]);
  const category = 'promotion';
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);
  const router = useRouter();
  let pid = postId;

  const getPostData = async () => {
    if (postId) {
      await dispatch(getPost({ category, pid })).then((response) => {
        setImages(response.payload.images);
      });
    } else {
      pid = router.query.id;
      await dispatch(getPost({ category, pid })).then((response) => {
        setImages(response.payload.images);
      });
    }
  };
  useEffect(() => {
    getPostData();
  }, [dispatch]);

  return (
    <div
      className={styles.background}
      onClick={() => {
        router.push('/promotion', undefined, { scroll: false });
      }}
    >
      <button className={styles.closeBtn}>
        <MdClose />
      </button>
      <Poster images={images} />
      <Post
        postId={postId}
        post={post}
        sendMessage={sendMessage}
        getPostData={getPostData}
        setOpenMessage={setOpenMessage}
      />
    </div>
  );
};

export default React.memo(Modal);
