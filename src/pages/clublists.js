import ClubList from 'components/Club/ClubLists';
import Head from 'next/head';

function clublists() {
  return (
    <>
      <Head>
        <title>동그라미 | 동아리 목록</title>
      </Head>
      <ClubList />
    </>
  );
}

export default clublists;
