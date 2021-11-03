import Footer from '../../../components/Common/Footer';
import Header from '../../../components/Common/Header/Header';
import ResetPW from '../../../components/Find/ResetPW';
import Head from 'next/head';

export const resetPW = () => {
  return (
    <>
      <Head>
        <title>동그라미 | 비밀번호 변경</title>
      </Head>
      <Header />
      <ResetPW />
      <Footer />
    </>
  );
};

export default resetPW;
