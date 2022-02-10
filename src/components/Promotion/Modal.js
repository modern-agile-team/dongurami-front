import React, { useState, useEffect } from 'react';
import styles from '../../styles/Board/Promotion/Modal.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getPost } from 'redux/slices/post';
import { MdClose } from 'react-icons/md';
import { useRouter } from 'next/router';
import Post from './Post';

const Modal = ({ postId, sendMessage, setOpenMessage, firstGetDatas }) => {
  const [images, setImages] = useState([]);
  const [isPostLoading, setIsPostLoading] = useState(false);
  const category = 'promotion';
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);
  const router = useRouter();
  let pid = postId;

  const getPostData = async () => {
    setIsPostLoading(true);
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
    setIsPostLoading(false);
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
      <Post
        images={images}
        postId={postId}
        post={post}
        sendMessage={sendMessage}
        getPostData={getPostData}
        setOpenMessage={setOpenMessage}
        firstGetDatas={firstGetDatas}
        isPostLoading={isPostLoading}
      />
    </div>
  );
};

export default Modal;
