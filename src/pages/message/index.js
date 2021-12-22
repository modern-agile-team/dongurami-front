import MessageListContainer from 'components/User/Message/MessageList';
import Head from 'next/head';

function message() {
  return (
    <>
      <Head>
        <title>동그라미 | 쪽지함</title>
      </Head>
      <MessageListContainer />
    </>
  );
}

export default message;
