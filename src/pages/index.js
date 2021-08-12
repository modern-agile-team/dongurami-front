import ClubBanner from "../components/main/ClubBanner";
import Intro from "../components/main/Intro";
import ServiceLogo from "../components/main/ServiceLogo";
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
