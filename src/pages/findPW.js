import FindPW from 'components/User/Find/FindPW';
import Head from 'next/head';

export const findPW = () => {
  return (
    <>
      <Head>
        <title>동그라미 | 비밀번호 찾기</title>
      </Head>
      <FindPW />
    </>
  );
};

export default findPW;
