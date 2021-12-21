import WriteScraps from 'components/User/Profile/Scraps/WriteScraps/WriteScraps';
import Head from 'next/head';

const writescraps = () => {
  return (
    <>
      <Head>
        <title>동그라미 | 스크랩 작성</title>
      </Head>
      <WriteScraps />
    </>
  );
};

export default writescraps;
