import CommentContainer from 'components/Common/Comment/CommentContainer';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../../styles/Board/Post/PostContent.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setCategory } from 'redux/slices/post';
import moment from 'moment';

const ReactQuill = dynamic(import('react-quill'), {
  ssr: false
});

function Post({ category, post, onDelete, editLink }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(setCategory(category));
  }, [category, router, dispatch]);

  return (
    <div className={styles.container}>
      <div>
        <a>활동내용</a>
        <Link href={`/profile/${post.studentId}`} passHref>
          <button>목록</button>
        </Link>
        <h1>{post.title}</h1>
        <div>
          <Link href={`/profile/${post.studentId}`} passHref>
            <div>{post.name}</div>
          </Link>
          <div>
            {user?.id === post.studentId && (
              <>
                <Link href={editLink} passHref>
                  <button>수정하기</button>
                </Link>
                <button onClick={onDelete}>삭제하기</button>
              </>
            )}
            <div>{moment(post.inDate).format('YYYY-MM-DD')}</div>
          </div>
        </div>
      </div>
      <hr />
      <ReactQuill value={post.description} theme="bubble" readOnly />
      {post.comments && <CommentContainer comments={post.comments} />}
    </div>
  );
}

export default Post;
