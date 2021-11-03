import Profile from 'components/Profile/Profile';
import Footer from 'components/Common/Footer';
import Header from 'components/Common/Header/Header';
import Head from 'next/head';

function userinfo() {
  return (
    <>
      <Head>
        <title>동그라미 | 프로필</title>
      </Head>
      <Header />
      <Profile />
      <Footer />
    </>
  );
}

export default userinfo;
