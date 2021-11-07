import WriteScraps from 'components/Profile/WriteScraps';
import Footer from 'components/Common/Footer';
import Header from 'components/Common/Header/Header';
import Head from 'next/head';

const writescraps = () => {
  return (
    <>
      <Head>
        <title>동그라미 | 스크랩 작성</title>
      </Head>
      <Header />
      <WriteScraps />
      <Footer />
    </>
  );
};

export default writescraps;
