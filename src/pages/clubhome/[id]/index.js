import Frame from 'components/ClubHome/common/frame';
import Footer from 'components/Common/Footer';
import Header from 'components/Common/Header/Header';
import Head from 'next/head';

const ClubHome = () => {
  return (
    <>
      <Head>
        <title>동그라미 | 동아리 홈</title>
      </Head>
      <Header />
      <Frame />
      <Footer />
    </>
  );
};

export default ClubHome;
