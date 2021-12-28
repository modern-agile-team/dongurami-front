import Post from 'components/Post/Post';
import { useEffect } from 'react';
import styles from 'styles/Club/Home/Activities/ActivityPost.module.scss';
import { useSelector } from 'react-redux';
import api from 'apis/post';
import { useDispatch } from 'react-redux';
import { getPost } from 'redux/slices/post';
import { getBoardPosts } from 'redux/slices/board';
import { useRouter } from 'next/router';

function ActivityPost({ pid, closeModal, setOpenMessage }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);

  const clubNum = Number(router.query.id);

  useEffect(() => {
    dispatch(getPost({ category: 'clubActivity', pid }));
  }, [pid, dispatch]);

  const onDelete = async () => {
    await api.deletePost('clubActivity', post.no, router.query.id);
    dispatch(
      getBoardPosts({
        category: 'clubActivity',
        sort: 'inDate',
        order: 'DESC',
        clubNum
      })
    );
    closeModal();
  };

  if (!post?.description) return null;

  return (
    <div className={styles.container}>
      <Post
        category="clubActivity"
        post={post}
        optionalEditHref={{
          pathname: `${router.pathname}/edit-activity`,
          query: { pid, ...router.query }
        }}
        optionalOnDelete={onDelete}
        setOpenMessage={setOpenMessage}
      />
    </div>
  );
}

export default ActivityPost;
