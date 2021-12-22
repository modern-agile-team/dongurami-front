import ChangePassword from 'components/User/ChangePassword';
import Head from 'next/head';

export default function test() {
  return (
    <>
      <Head>
        <title>동그라미 | 비밀번호 변경</title>
      </Head>
      <ChangePassword />
    </>
  );
}
