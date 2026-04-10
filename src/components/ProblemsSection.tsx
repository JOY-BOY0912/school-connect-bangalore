import { AlertTriangle } from "lucide-react";

const problems = [
  "Website is outdated or doesn't open properly on phones",
  "Parents keep calling for the same information again and again",
  "No proper system to track who enquired and when",
  "Admission leads get missed because nobody followed up",
  "Office staff is overloaded during admission season",
  "Still managing everything in registers and Excel sheets",
];

const ProblemsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
              Does This Sound Like Your School?
            </h2>
            <p className="text-muted-foreground">
              Most schools we talk to face these exact same problems. You're not alone.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {problems.map((p, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-card rounded-lg border border-border p-4"
              >
                <AlertTriangle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <p className="text-sm text-foreground">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
