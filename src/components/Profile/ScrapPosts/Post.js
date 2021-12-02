import CommentContainer from 'components/Common/Comment/CommentContainer';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from 'styles/Board/Post/PostContent.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setCategory } from 'redux/slices/post';
import moment from 'moment';
import {
  DonguramiFillButton,
  DonguramiOutlineButton
} from 'components/Common/DonguramiButton';

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
        <div className={styles.boardLinkContainer}>
          <Link href={`/profile/${post.studentId}`} passHref>
            <a>스크랩</a>
          </Link>
          <Link href={`/profile/${post.studentId}`} passHref>
            <button>목록</button>
          </Link>
        </div>
        <h1>{post.title}</h1>

        <div className={styles.postHeader}>
          <div className={styles.profileContainer}>
            <Link href={`/profile/${post.studentId}`} passHref>
              <img
                className={styles.profileImage}
                src={`${
                  post.profileImageUrl ??
                  'https://d19lmxaqvbojzg.cloudfront.net/c1f0ad3f1f_test.jpeg'
                }?w=30`}
                alt="profileImage"
              />
            </Link>
            <Link href={`/profile/${post.studentId}`} passHref>
              <div className={styles.profileLink}>{post.name}</div>
            </Link>
          </div>
          <div>
            {user?.id === post.studentId && (
              <>
                <Link href={editLink} passHref>
                  <DonguramiFillButton>수정하기</DonguramiFillButton>
                </Link>
                <DonguramiFillButton onClick={onDelete}>
                  삭제하기
                </DonguramiFillButton>
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
