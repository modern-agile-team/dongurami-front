import Board from '../../components/Board/Board';
import Head from 'next/head';

function free() {
  return (
    <>
      <Head>
        <title>동그라미 | 자유 게시판</title>
      </Head>
      <Board category="free" />
    </>
  );
}

export default free;
