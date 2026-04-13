import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Home/HeroSection";
import MissionSection from "@/components/Home/MissionSection";
import PillarsSection from "@/components/Home/PillarsSection";
import TheorySection from "@/components/Home/TheorySection";
import ImpactStats from "@/components/Home/ImpactStats";
import LandscapesGrid from "@/components/Home/LandscapesGrid";
import RebrandSection from "@/components/Home/RebrandSection";
import ScalingSection from "@/components/Home/ScalingSection";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <MissionSection />
      <PillarsSection />
      <TheorySection />
      <ImpactStats />
      <LandscapesGrid />
      <RebrandSection />
      <ScalingSection />
      <Footer />
    </div>
  );
};

export default Home;
