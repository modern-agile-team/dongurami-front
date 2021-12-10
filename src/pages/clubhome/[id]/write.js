import Write from 'components/Write/Write';
import Head from 'next/head';

function write() {
  return (
    <>
      <Head>
        <title>동그라미 | 동아리 공지 작성 </title>
      </Head>
      <Write category="clubNotice" />
    </>
  );
}

export default write;
