import Intro from "../components/main/Intro";
import ServiceLogo from "../components/main/ServiceLogo";
import Header from "../components/Common/Header";
import ClubPromotion from "../components/main/ClubPromotion";
import OurIntro from "../components/main/OurIntro";
import Footer from "../components/Common/Footer";

function Home() {
  return (
    <>
      <Header />
      <ServiceLogo />
      <ClubPromotion />
      <Intro />
      <OurIntro />
      <Footer />
    </>
  );
}

export default Home;
