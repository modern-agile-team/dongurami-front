import Footer from 'components/Common/Footer';
import Header from '../../components/Common/Header/Header';
import Board from '../../components/Board/Board';
import Head from 'next/head';

function free() {
  return (
    <>
      <Head>
        <title>동그라미 | 자유 게시판</title>
      </Head>
      <Header />
      <Board category="free" />
      <Footer />
    </>
  );
}

export default free;
