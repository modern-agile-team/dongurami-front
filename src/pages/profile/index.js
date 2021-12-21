import Profile from 'components/User/Profile';
import Head from 'next/head';

function profile() {
  return (
    <>
      <Head>
        <title>동그라미 | 프로필</title>
      </Head>
      <Profile />
    </>
  );
}

export default profile;
