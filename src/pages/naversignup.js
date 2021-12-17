import Head from 'next/head';
import { NaverSignUp } from 'components/User/SignUp/NaverSignUp';

function signup() {
  return (
    <>
      <Head>
        <title>동그라미 | 회원가입</title>
      </Head>
      <NaverSignUp />
    </>
  );
}

export default signup;
