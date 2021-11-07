import Footer from 'components/Common/Footer';
import Header from 'components/Common/Header/Header';
import PostContainer from 'components/Profile/PostContainer';
import Head from 'next/head';

const mypost = () => {
  return (
    <>
      <Head>
        <title>동그라미 | 스크랩</title>
      </Head>
      <Header />
      <PostContainer />
      <Footer />
    </>
  );
};

export default mypost;
