import Header from '../components/Common/Header/Header';
import Main from '../components/main/Main';
import Footer from '../components/Common/Footer';
import Head from 'next/head';

function Home() {
  return (
    <>
      <Head>
        <title>동그라미</title>
      </Head>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
