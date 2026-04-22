import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface FinalCTAProps {
  onDemoClick: () => void;
}

const FinalCTA = ({ onDemoClick }: FinalCTAProps) => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="relative max-w-3xl mx-auto text-center bg-cta-gradient rounded-3xl p-10 md:p-16 overflow-hidden shadow-elevated">
          {/* Decorative blobs */}
          <div
            aria-hidden
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary-foreground/10 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-accent/20 blur-3xl"
          />

          <div className="relative">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Make Admissions Easier for Your School
            </h2>
            <p className="text-primary-foreground/85 mb-8 max-w-lg mx-auto text-base md:text-lg">
              Start with a simple system. Add more when you need it. We'll guide you through everything.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="gap-2 bg-card text-primary hover:bg-card/90 shadow-card"
              onClick={onDemoClick}
            >
              Book a Free Demo <ArrowRight className="w-4 h-4" />
            </Button>
            <p className="text-xs text-primary-foreground/70 mt-4">
              We'll show you everything in a quick 15-minute call
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
