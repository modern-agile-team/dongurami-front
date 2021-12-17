import Profile from 'components/User/Profile/Profile';
import Head from 'next/head';

function userinfo() {
  return (
    <>
      <Head>
        <title>동그라미 | 프로필</title>
      </Head>
      <Profile />
    </>
  );
}

export default userinfo;
