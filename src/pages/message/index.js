import Footer from '../../components/Common/Footer';
import Header from 'components/Common/Header/Header';
import MessageList from 'components/Message/MessageList';
import Head from 'next/head';

function message() {
  return (
    <>
      <Head>
        <title>동그라미 | 쪽지함</title>
      </Head>
      <Header />
      <MessageList />
      <Footer />
    </>
  );
}

export default message;
