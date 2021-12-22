import Board from 'components/Board';
import Head from 'next/head';

function Notice() {
  return (
    <>
      <Head>
        <title>동그라미 | 공지 게시판</title>
      </Head>
      <Board category="notice" />
    </>
  );
}

export default Notice;
