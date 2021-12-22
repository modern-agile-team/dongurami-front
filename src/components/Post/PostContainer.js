import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useState } from 'react';
import Post from 'components/Post/Post';
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from 'redux/slices/post';
import SendMessageContainer from 'components/User/Message/SendMessage';

function PostContainer({ category }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);
  const [openModal, setOpenModal] = useState(false);
  const [letter, setLetter] = useState(false);

  const sendLetter = (comment) => {
    setLetter(comment);
    setOpenModal(true);
  };

  useEffect(() => {
    if (!router.isReady) return;
    dispatch(
      getPost({ category, pid: router.query.pid, clubNum: router.query.id })
    );
  }, [category, router, dispatch]);

  if (!post?.description) return null;

  return (
    <>
      <Post
        category={category}
        post={post}
        sendLetter={sendLetter}
        setOpenMessage={setOpenModal}
      />
      {openModal && (
        <SendMessageContainer
          show={openModal}
          onClose={() => setOpenModal(false)}
          letter={letter}
        />
      )}
    </>
  );
}

export default PostContainer;
