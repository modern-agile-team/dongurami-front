import Edit from '../../../components/Write/Edit';
import Footer from 'components/Common/Footer';
import Header from 'components/Common/Header/Header';
import Head from 'next/head';

function Write() {
  return (
    <>
      <Head>
        <title>동그라미 | Q&A 수정</title>
      </Head>
      <Header />
      <Edit category="questionAndAnswer" />
      <Footer />
    </>
  );
}

export default Write;
