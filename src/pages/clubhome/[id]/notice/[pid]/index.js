import Footer from 'components/Common/Footer';
import Header from 'components/Common/Header/Header';
import PostContainer from 'components/Post/PostContainer';
import Head from 'next/head';

function ClubNoticePost() {
  return (
    <>
      <Head>
        <title>동그라미 | 동아리 공지</title>
      </Head>
      <Header />
      <PostContainer category="clubNotice" />
      <Footer />
    </>
  );
}

export default ClubNoticePost;
