import ChangePassword from '../components/ChangePassword/ChagePassWord';
import Footer from '../components/Common/Footer';
import Header from '../components/Common/Header/Header';
import Head from 'next/head';

export default function test() {
  return (
    <>
      <Head>
        <title>동그라미 | 비밀번호 변경</title>
      </Head>
      <Header />
      <ChangePassword />
      <Footer />
    </>
  );
}
