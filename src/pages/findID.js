import FindID from 'components/User/Find/FindID';
import Head from 'next/head';

export const findID = () => {
  return (
    <>
      <Head>
        <title>동그라미 | 아이디 찾기</title>
      </Head>
      <FindID />
    </>
  );
};

export default findID;
