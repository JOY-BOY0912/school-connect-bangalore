import { Layers } from "lucide-react";

const StartSimpleSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
            <Layers className="w-6 h-6 text-primary" />
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            Start Simple, Add More Later
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed">
            You don't need everything at once. Start with a website, then add automation as your school grows. We'll help you decide what makes sense at each step.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StartSimpleSection;
