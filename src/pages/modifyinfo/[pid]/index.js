import ModifyInfo from 'components/Profile/ModifyInfo/ModifyInfo';
import Footer from '../../../components/Common/Footer';
import Header from '../../../components/Common/Header/Header';
import Head from 'next/head';

const modifyinfo = () => {
  return (
    <>
      <Head>
        <title>동그라미 | 개인 정보 수정</title>
      </Head>
      <Header />
      <ModifyInfo />
      <Footer />
    </>
  );
};

export default modifyinfo;
