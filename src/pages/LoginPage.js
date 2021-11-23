import Login from '../components/login/Login';
import Header from '../components/Common/Header/Header';
import Footer from '../components/Common/Footer';
import Head from 'next/head';

export const LoginPage = () => {
  return (
    <>
      <Head>
        <title>동그라미 | 로그인</title>
        <script
          defer
          type="text/javascript"
          src="https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js"
          charset="utf-8"
        />
        <title>동그라미 | 회원가입</title>
      </Head>
      <Header />
      <Login />
      <Footer />
    </>
  );
};

export default LoginPage;
