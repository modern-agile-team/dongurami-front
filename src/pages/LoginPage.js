import Login from "../components/login/Login";
import Header from "../components/Common/Header/Header";
import Footer from "../components/Common/Footer";
import Head from "next/head";

export const LoginPage = () => {
  return (
    <>
      <Head>
        <script
          defer
          type="text/javascript"
          src="https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js"
          charset="utf-8"
        ></script>
      </Head>
      <Header />
      <Login />
      <Footer />
    </>
  );
};

export default LoginPage;
