import { SelectSignUp } from 'components/SignUp/SelectSignUp';
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
      <SelectSignUp />
    </>
  );
}

export default selectSignUp;
