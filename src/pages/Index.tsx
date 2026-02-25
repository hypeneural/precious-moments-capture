import HeroSection from "@/components/HeroSection";
import EmotionalSection from "@/components/EmotionalSection";
import GallerySection from "@/components/GallerySection";
import PackagesSection from "@/components/PackagesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FaqSection from "@/components/FaqSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import FooterSection from "@/components/FooterSection";
import StickyBottomBar from "@/components/StickyBottomBar";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <EmotionalSection />
      <GallerySection />
      <PackagesSection />
      <HowItWorksSection />
      <FaqSection />
      <FinalCtaSection />
      <FooterSection />
      <StickyBottomBar />
    </main>
  );
};

export default Index;
