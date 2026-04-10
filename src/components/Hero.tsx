import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            Based in Bangalore · Working with 30+ schools
          </div>

          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            Websites + AI Tools for Schools That Want to Work Smarter
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
            We help schools manage admissions better with simple websites, automated calls, chat support, and follow-up systems.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button size="lg" className="w-full sm:w-auto gap-2">
              Get Free Demo <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2">
              <Play className="w-4 h-4" /> See How It Works
            </Button>
          </div>

          <p className="text-xs text-muted-foreground mt-4">
            No payment needed · Takes 15 minutes · We'll show you on a call
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
