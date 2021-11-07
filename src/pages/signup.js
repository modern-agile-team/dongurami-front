import Header from '../components/Common/Header/Header';
import SignUpForm from 'components/SignUp/SignUpForm';
import Footer from 'components/Common/Footer';
import Head from 'next/head';

function signup() {
  return (
    <>
      <Head>
        <title>동그라미 | 회원가입</title>
      </Head>
      <Header />
      <SignUpForm />
      <Footer />
    </>
  );
}

export default signup;
