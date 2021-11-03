import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta
            name="description"
            content="인덕대학교 학생들을 위한 동아리 서비스"
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="동그라미" />
          <meta
            property="og:description"
            content="인덕대학교 학생들을 위한 동아리 서비스"
          />
          <meta
            property="og:image"
            content="https://dongurami.co.kr/favicon.ico"
          />
          <meta property="og:url" content="https://dongurami.co.kr" />
          <meta property="twitter:card" content="summary" />
          <meta property="twitter:title" content="동그라미" />
          <meta
            property="twitter:description"
            content="인덕대학교 학생들을 위한 동아리 서비스"
          />
          <meta
            property="twitter:image"
            content="https://dongurami.co.kr/favicon.ico"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
