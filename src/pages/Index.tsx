import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import ServicesSection from "@/components/ServicesSection";
import AIToolsSection from "@/components/AIToolsSection";
import ProblemsSection from "@/components/ProblemsSection";
import ResultsSection from "@/components/ResultsSection";
import ProcessSection from "@/components/ProcessSection";
import PortfolioSection from "@/components/PortfolioSection";
import PricingSection from "@/components/PricingSection";
import StartSimpleSection from "@/components/StartSimpleSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ProblemsSection />
      <ServicesSection />
      <AIToolsSection />
      <ResultsSection />
      <TrustSection />
      <ProcessSection />
      <PortfolioSection />
      <PricingSection />
      <StartSimpleSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
