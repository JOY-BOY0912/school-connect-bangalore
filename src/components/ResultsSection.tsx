import { TrendingUp, Clock, Smartphone, MessageCircle } from "lucide-react";

const results = [
  {
    icon: TrendingUp,
    stat: "2–3x",
    label: "More admission inquiries through website",
  },
  {
    icon: Clock,
    stat: "60%",
    label: "Less time spent answering repeated questions",
  },
  {
    icon: MessageCircle,
    stat: "Faster",
    label: "Parents get responses within minutes, not hours",
  },
  {
    icon: Smartphone,
    stat: "100%",
    label: "Works well on all mobile phones",
  },
];

const ResultsSection = () => {
  return (
    <section id="results" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            What Schools Are Seeing After Using Our Tools
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            These are realistic outcomes — not big marketing numbers. Just practical improvements.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {results.map((r, i) => (
            <div key={i} className="text-center p-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <r.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="font-heading text-2xl font-bold text-foreground mb-1">{r.stat}</p>
              <p className="text-sm text-muted-foreground">{r.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
