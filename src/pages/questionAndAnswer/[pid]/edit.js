import Edit from '../../../components/Write/Edit';
import Head from 'next/head';

function Write() {
  return (
    <>
      <Head>
        <title>동그라미 | Q&A 수정</title>
      </Head>
      <Edit category="questionAndAnswer" />
    </>
  );
}

export default Write;
