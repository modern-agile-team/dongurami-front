import Manager from 'components/ClubHome/Manager/Manager';
import Footer from 'components/Common/Footer';
import Header from 'components/Common/Header/Header';
import Head from 'next/head';
export const manager = () => {
  return (
    <>
      <Head>
        <title>동그라미 | 동아리 관리</title>
      </Head>
      <Header />
      <Manager />
      <Footer />
    </>
  );
};

export default manager;
