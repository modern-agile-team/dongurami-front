import Edit from 'components/Write/Edit';
import Head from 'next/head';

function EditActivity() {
  return (
    <>
      <Head>
        <title>동그라미 | 활동 내용 수정</title>
      </Head>
      <Edit category="clubActivity" />
    </>
  );
}

export default EditActivity;
