import Board from '../../components/Board/Board';
import Footer from '../../components/Common/Footer';
import Header from '../../components/Common/Header/Header';
import Head from 'next/head';

function Notice() {
  return (
    <>
      <Head>
        <title>동그라미 | 공지 게시판</title>
      </Head>
      <Header />
      <Board category="notice" />
      <Footer />
    </>
  );
}

export default Notice;
