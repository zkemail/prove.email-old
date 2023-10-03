import ApplicationSection from "@/components/ApplicationSection";
import HeroSection from "@/components/HeroSection";
import Technology from "@/components/Technology";

const HomePage = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <ApplicationSection />
      <Technology />
    </div>
  );
};

export default HomePage;
