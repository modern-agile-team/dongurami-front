import ClubBanner from "../components/Home/ClubBanner";
import Intro from "../components/Home/Intro";
import ServiceLogo from "../components/Home/ServiceLogo";
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
