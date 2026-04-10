import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center bg-card rounded-xl border border-border p-8 md:p-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            Make Your School Work Easier
          </h2>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Start with a simple website and grow step by step. No rush, no pressure. We'll guide you through everything.
          </p>
          <Button size="lg" className="gap-2">
            Book a Free Demo <ArrowRight className="w-4 h-4" />
          </Button>
          <p className="text-xs text-muted-foreground mt-3">
            We'll call you and show everything in 15 minutes
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
