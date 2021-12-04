import PostContainer from 'components/Post/PostContainer';
import Head from 'next/head';

function ClubNoticePost() {
  return (
    <>
      <Head>
        <title>동그라미 | 동아리 공지</title>
      </Head>
      <PostContainer category="clubNotice" />
    </>
  );
}

export default ClubNoticePost;
