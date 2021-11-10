import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const naverScript = () => {
      if (!wcs_add) var wcs_add = {};
      wcs_add['wa'] = 'd0e2147f2bb310';
      if (typeof window !== 'undefined' && window.wcs) {
        wcs_do();
      }
    };

    return (
      <Html>
        <Head>
          <meta
            name="keyword"
            content="동그라미, 동아리, 인덕대학교, 우아한애자일"
          />
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
          <meta
            name="naver-site-verification"
            content="42fb378982eca00be16a13a360c4072c8c81c087"
          />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <Script type="text/javascript" src="//wcs.naver.net/wcslog.js" />
          <Script type="text/javascript">{naverScript()}</Script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
