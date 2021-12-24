import Post from 'components/Post/Post';
import { useEffect } from 'react';
import styles from 'styles/Club/Home/Activities/ActivityPost.module.scss';
import { useDispatch } from 'react-redux';
import { getPost } from 'redux/slices/post';
import { useRouter } from 'next/router';

function ActivityPost({ pid, setOpenMessage, post, onDelete }) {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost({ category: 'clubActivity', pid }));
  }, [pid, dispatch]);

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
