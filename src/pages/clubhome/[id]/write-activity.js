import Write from 'components/Write/Write';
import Head from 'next/head';

function WriteActivity() {
  return (
    <>
      <Head>
        <title>동그라미 | 활동 내용 작성</title>
      </Head>
      <Write category="clubActivity" />
    </>
  );
}

export default WriteActivity;
