import Write from '../../components/Write/Write';
import Head from 'next/head';

function write() {
  return (
    <>
      <Head>
        <title>동그라미 | Q&A 작성</title>
      </Head>
      <Write category="questionAndAnswer" />
    </>
  );
}

export default write;
