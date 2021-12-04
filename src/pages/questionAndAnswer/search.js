import Board from 'components/Board/Board';
import Head from 'next/head';

function search() {
  return (
    <>
      <Head>
        <title>동그라미 | 게시글 검색</title>
      </Head>
      <Board category="questionAndAnswer" />
    </>
  );
}

export default search;
