import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import ServicesSection from "@/components/ServicesSection";
import ProblemsSection from "@/components/ProblemsSection";
import ResultsSection from "@/components/ResultsSection";
import ProcessSection from "@/components/ProcessSection";
import PortfolioSection from "@/components/PortfolioSection";
import PricingSection from "@/components/PricingSection";
import StartSimpleSection from "@/components/StartSimpleSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import DemoFormDialog from "@/components/DemoFormDialog";

const Index = () => {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar onDemoClick={() => setDemoOpen(true)} />
      <Hero onDemoClick={() => setDemoOpen(true)} />
      <ProblemsSection />
        <ServicesSection />
        <ResultsSection />
      <TrustSection />
      <ProcessSection />
      <PortfolioSection />
      <PricingSection onDemoClick={() => setDemoOpen(true)} />
      <StartSimpleSection />
      <FinalCTA onDemoClick={() => setDemoOpen(true)} />
      <Footer />
      <DemoFormDialog open={demoOpen} onOpenChange={setDemoOpen} />
    </div>
  );
};

export default Index;
