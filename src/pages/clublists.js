import ClubListContainer from 'components/Club/ClubLists/ClubListContainer';
import Head from 'next/head';

function clublists() {
  return (
    <>
      <Head>
        <title>동그라미 | 동아리 목록</title>
      </Head>
      <ClubListContainer />
    </>
  );
}

export default clublists;
