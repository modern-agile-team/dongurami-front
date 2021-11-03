import Board from '../../components/Board/Board';
import Footer from '../../components/Common/Footer';
import Header from '../../components/Common/Header/Header';
import Head from 'next/head';

function QuestionAndAnswer() {
  return (
    <>
      <Head>
        <title>동그라미 | Q&A 게시판</title>
      </Head>
      <Header />
      <Board category="questionAndAnswer" />
      <Footer />
    </>
  );
}

export default QuestionAndAnswer;
