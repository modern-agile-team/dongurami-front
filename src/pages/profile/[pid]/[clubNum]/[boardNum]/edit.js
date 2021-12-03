import Header from 'components/Common/Header/Header';
import Footer from 'components/Common/Footer';
import Edit from 'components/Profile/ScrapPosts/Edit';
import Head from 'next/head';

const edit = () => {
  return (
    <>
      <Head>
        <title>동그라미 | 동아리 공지 수정</title>
      </Head>
      <Header />
      <Edit />
      <Footer />
    </>
  );
};

export default edit;
