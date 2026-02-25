import HeroSection from "@/components/HeroSection";
import EmotionalSection from "@/components/EmotionalSection";
import GallerySection from "@/components/GallerySection";
import PackagesSection from "@/components/PackagesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FaqSection from "@/components/FaqSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import FooterSection from "@/components/FooterSection";
import AboutSection from "@/components/AboutSection";
import StickyBottomBar from "@/components/StickyBottomBar";
import SocialProofPopup from "@/components/SocialProofPopup";

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
      <AboutSection />
      <FooterSection />
      <StickyBottomBar />
      <SocialProofPopup />
    </main>
  );
};

export default Index;
