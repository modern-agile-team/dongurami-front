import Login from '../components/login/Login';
import Header from '../components/Common/Header/Header';
import Footer from '../components/Common/Footer';
import Head from 'next/head';

export const LoginPage = () => {
  return (
    <>
      <Head>
        <title>동그라미 | 로그인</title>
      </Head>
      <Header />
      <Login />
      <Footer />
    </>
  );
};

export default LoginPage;
