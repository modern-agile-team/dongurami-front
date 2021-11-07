import Footer from 'components/Common/Footer';
import Header from 'components/Common/Header/Header';
import Edit from '../../../components/Write/Edit';
import Head from 'next/head';

function Write() {
  return (
    <>
      <Head>
        <title>동그라미 | 게시글 수정</title>
      </Head>
      <Header />
      <Edit category="free" />
      <Footer />
    </>
  );
}

export default Write;
