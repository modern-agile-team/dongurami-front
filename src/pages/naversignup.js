import Header from '../components/Common/Header/Header';
import Footer from 'components/Common/Footer';
import Head from 'next/head';
import { NaverSignUp } from 'components/SignUp/NaverSignUp';

function signup() {
  return (
    <>
      <Head>
        <title>동그라미 | 회원가입</title>
      </Head>
      <Header />
      <NaverSignUp />
      <Footer />
    </>
  );
}

export default signup;
