import Footer from '../components/Common/Footer';
import Header from '../components/Common/Header/Header';
import FindID from '../components/Find/FindID';
import Head from 'next/head';

export const findID = () => {
  return (
    <>
      <Head>
        <title>동그라미 | 아이디 찾기</title>
      </Head>
      <Header />
      <FindID />
      <Footer />
    </>
  );
};

export default findID;
