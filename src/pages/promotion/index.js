import PromotionContainer from '../../components/Promotion/PromotionContainer';
import Footer from '../../components/Common/Footer';
import Head from 'next/head';

function promotion() {
  return (
    <>
      <Head>
        <title>동그라미 | 홍보 게시판</title>
      </Head>
      <PromotionContainer />
      <Footer />
    </>
  );
}

export default promotion;
