import Board from 'components/Board';
import Head from 'next/head';

function QuestionAndAnswer() {
  return (
    <>
      <Head>
        <title>동그라미 | Q&A 게시판</title>
      </Head>
      <Board category="questionAndAnswer" />
    </>
  );
}

export default QuestionAndAnswer;
