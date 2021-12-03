import PostContainer from 'components/Profile/ScrapPosts/PostContainer';
import Head from 'next/head';

const mypost = () => {
  return (
    <>
      <Head>
        <title>동그라미 | 스크랩</title>
      </Head>
      <PostContainer />
    </>
  );
};

export default mypost;
