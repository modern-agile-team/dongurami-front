import Footer from 'components/Common/Footer';
import Header from 'components/Common/Header/Header';
import PostContainer from 'components/Post/PostContainer';
import Head from 'next/head';

function NoticePost() {
  return (
    <>
      <Head>
        <title>동그라미 | 공지 게시판</title>
      </Head>
      <Header />
      <PostContainer category="notice" />
      <Footer />
    </>
  );
}

export default NoticePost;
