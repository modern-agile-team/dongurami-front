import Manager from 'components/Club/ClubHome/Manager';
import Head from 'next/head';
export const manager = () => {
  return (
    <>
      <Head>
        <title>동그라미 | 동아리 관리</title>
      </Head>
      <Manager />
    </>
  );
};

export default manager;
