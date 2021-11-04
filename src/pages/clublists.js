import ClubListContainer from '../components/ClubLists/ClubListContainer';
import Footer from '../components/Common/Footer';
import Head from 'next/head';

function clublists() {
  return (
    <>
      <Head>
        <title>동그라미 | 동아리 목록</title>
      </Head>
      <ClubListContainer />
      <Footer />
    </>
  );
}

export default clublists;
