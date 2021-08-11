import ClubBanner from "../components/Main/ClubBanner";
import Intro from "../components/Main/intro";
import ServiceLogo from "../components/Main/ServiceLogo";
import Header from "../components/Common/Header";

function Home() {
  return (
    <>
      <Header />
      <ServiceLogo />
      <ClubBanner />
      <Intro />
    </>
  );
}

export default Home;
