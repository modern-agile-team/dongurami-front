import Footer from '../components/Common/Footer';
import Header from '../components/Common/Header/Header';
import FindPW from '../components/Find/FindPW';
import Head from 'next/head';

export const findPW = () => {
  return (
    <>
      <Head>
        <title>동그라미 | 비밀번호 찾기</title>
      </Head>
      <Header />
      <FindPW />
      <Footer />
    </>
  );
};

export default findPW;
