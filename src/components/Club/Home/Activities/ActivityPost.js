import Post from 'components/Post/Post';
import { useEffect } from 'react';
import styles from 'styles/Club/Home/Activities/ActivityPost.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from 'redux/slices/post';
import { useRouter } from 'next/router';
import { Spinner } from 'components/Common/Spinner';

function ActivityPost({ pid, setOpenMessage, post, onDelete }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.post.loading);

  useEffect(() => {
    dispatch(getPost({ category: 'clubActivity', pid }));
  }, [pid, dispatch]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
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
      )}
    </>
  );
}

export default ActivityPost;
