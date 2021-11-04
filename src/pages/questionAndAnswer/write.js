import Header from 'components/Common/Header/Header';
import Write from '../../components/Write/Write';
import Footer from 'components/Common/Footer';
import Head from 'next/head';

function write() {
  return (
    <>
      <Head>
        <title>동그라미 | Q&A 작성</title>
      </Head>
      <Header />
      <Write category="questionAndAnswer" />
      <Footer />
    </>
  );
}

export default write;
