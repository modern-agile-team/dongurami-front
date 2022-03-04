import ResetPW from 'components/User/Find/ResetPW';
import Head from 'next/head';

export const resetPW = () => {
  return (
    <>
      <Head>
        <title>동그라미 | 비밀번호 변경</title>
      </Head>
      <ResetPW />
    </>
  );
};

export default resetPW;
