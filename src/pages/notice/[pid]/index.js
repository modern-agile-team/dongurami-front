import PostContainer from 'components/Post/PostContainer';
import Head from 'next/head';

function NoticePost() {
  return (
    <>
      <Head>
        <title>동그라미 | 공지 게시판</title>
      </Head>
      <PostContainer category="notice" />
    </>
  );
}

export default NoticePost;
