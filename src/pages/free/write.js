import Write from 'components/Write/Write';
import Head from 'next/head';

function write() {
  return (
    <>
      <Head>
        <title>동그라미 | 게시글 작성</title>
      </Head>
      <Write category="free" />
    </>
  );
}

export default write;
