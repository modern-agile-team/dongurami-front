import ClubLists from 'components/ClubLists';
import Head from 'next/head';

function clublists() {
  return (
    <>
      <Head>
        <title>동그라미 | 동아리 목록</title>
      </Head>
      <ClubLists />
    </>
  );
}

export default clublists;
