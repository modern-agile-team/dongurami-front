import SignUpForm from 'components/User/SignUp/SignUpForm';
import Head from 'next/head';

function signup() {
  return (
    <>
      <Head>
        <title>동그라미 | 회원가입</title>
      </Head>
      <SignUpForm />
    </>
  );
}

export default signup;
