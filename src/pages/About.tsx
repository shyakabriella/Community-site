import Navbar from "@/components/Navbar";
import HeroSection from "@/components/About/HeroSectionAbout";
import ContentSection from "@/components/About/ContentSection";
import FocalAreasSection from "@/components/About/FocalAreasSection";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ContentSection />
      <FocalAreasSection />
      <Footer />
    </div>
  );
};

export default About;
