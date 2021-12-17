import Login from 'components/User/Login/Login';
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
        <title>동그라미 | 로그인</title>
      </Head>
      <Login />
    </>
  );
};

export default LoginPage;
