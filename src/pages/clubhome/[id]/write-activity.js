import Footer from 'components/Common/Footer';
import Header from 'components/Common/Header/Header';
import Write from 'components/Write/Write';
import Head from 'next/head';

function WriteActivity() {
  return (
    <>
      <Head>
        <title>동그라미 | 활동 내용 작성</title>
      </Head>
      <Header />
      <Write category="clubActivity" />
      <Footer />
    </>
  );
}

export default WriteActivity;
