import CommentContainer from 'components/Common/Comment/CommentContainer';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../../styles/Board/Post/PostContent.module.scss';
import api from 'apis/post';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setCategory } from 'redux/slices/post';

const ReactQuill = dynamic(import('react-quill'), {
  ssr: false
});

function Post({ category, post, optionalOnDelete, optionalEditHref }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(setCategory(category));
  }, [category, dispatch]);

  const title = {
    notice: '공지 게시판',
    free: '자유 게시판',
    clubNotice: '동아리 공지 게시판',
    questionAndAnswer: 'Q&A 게시판',
    personal: '활동내용'
  };

  const onDelete = optionalOnDelete || (async () => {
      await api.deletePost(category, post.no);
      router.back();
    });

  const editHref = optionalEditHref || {
    pathname: `${router.pathname}/edit`,
    query: router.query
  };

  const boardURL = (category === 'clubNotice') ?
    `/clubhome/${router.query.id}` : `/${category}`

  const clubNum = Number(router.query.id);

  return (
    <div className={styles.container}>
      <div>
        <Link href={boardURL} passHref>
          <a>{title[category]}</a>
        </Link>
        <h1>{post.title}</h1>
        <div>
          <Link href={`/profile/${post.studentId}`} passHref>
            <div>{post.name}</div>
          </Link>
          <div>
            {(category === 'clubActivity' && user && user.clubNum.includes(clubNum)) && (
              <Link href={{ pathname: `/profile/${user.id}/${clubNum}/writescraps`, query: { scrapNum: post.no } }} passHref>
                <button>스크랩하기</button>
              </Link>
            )}
            {(user?.id === post.studentId) && (
              <>
                <Link href={editHref} passHref>
                  <button>수정하기</button>
                </Link>
                <button onClick={onDelete}>삭제하기</button>
              </>
            )}
            <div>{new Date(post.inDate).toLocaleDateString()}</div>
            <div>조회 {post.hit}</div>
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
