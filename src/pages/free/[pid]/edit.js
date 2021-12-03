import Edit from '../../../components/Write/Edit';
import Head from 'next/head';

function Write() {
  return (
    <>
      <Head>
        <title>동그라미 | 게시글 수정</title>
      </Head>
      <Edit category="free" />
    </>
  );
}

export default Write;
