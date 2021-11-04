import Footer from 'components/Common/Footer';
import { SelectSignUp } from 'components/SignUp/SelectSignUp';
import Header from '../components/Common/Header/Header';
import Head from 'next/head';

function selectSignUp() {
  return (
    <>
      <Head>
        <script
          defer
          type="text/javascript"
          src="https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js"
          charset="utf-8"
        />
        <title>동그라미 | 회원가입</title>
      </Head>
      <Header />
      <SelectSignUp />
      <Footer />
    </>
  );
}

export default selectSignUp;
