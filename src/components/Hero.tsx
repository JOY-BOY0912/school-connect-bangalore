import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

interface HeroProps {
  onDemoClick: () => void;
}

const Hero = ({ onDemoClick }: HeroProps) => {
  return (
    <section className="relative overflow-hidden bg-hero-gradient">
      {/* Decorative subtle grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="container relative py-20 md:py-28 lg:py-36">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-card border border-border text-foreground/80 text-xs md:text-sm font-medium px-4 py-1.5 rounded-full mb-6 shadow-soft">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            Based in Bangalore · Built for local schools
          </div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6">
            Smart websites for schools that{" "}
            <span className="relative inline-block whitespace-nowrap">
              <span
                aria-hidden
                className="absolute left-0 right-0 bottom-1 h-3 bg-accent/30 rounded -z-10"
              />
              <span className="relative text-primary">actually work</span>
            </span>
          </h1>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
            We build clean, mobile-friendly school websites that help parents find what they need — and help your office handle admissions without the daily chaos.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              size="lg"
              className="w-full sm:w-auto gap-2 shadow-glow hover:shadow-elevated transition-smooth"
              onClick={onDemoClick}
            >
              Get Free Demo <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto gap-2 bg-card/60 backdrop-blur"
              asChild
            >
              <a href="#portfolio">See Our Work</a>
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-8 text-xs md:text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-primary" /> No payment needed
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-primary" /> 15-minute call
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-primary" /> No tech jargon
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
