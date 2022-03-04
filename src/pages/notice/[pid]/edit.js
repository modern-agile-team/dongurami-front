import Edit from 'components/Write/Edit';
import Head from 'next/head';

function Write() {
  return (
    <>
      <Head>
        <title>동그라미 | 공지 수정</title>
      </Head>
      <Edit category="notice" />
    </>
  );
}

export default Write;
