import Footer from 'components/Common/Footer';
import Header from 'components/Common/Header/Header';
import Write from '../../components/Write/Write';
import Head from 'next/head';

function write() {
  return (
    <>
      <Head>
        <title>동그라미 | 게시글 작성</title>
      </Head>
      <Header />
      <Write category="free" />
      <Footer />
    </>
  );
}

export default write;
