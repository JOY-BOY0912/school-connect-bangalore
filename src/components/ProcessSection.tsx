const steps = [
  {
    num: "1",
    title: "Understand Your School",
    desc: "We visit or call to understand what your school needs — admissions focus, website content, automation requirements.",
  },
  {
    num: "2",
    title: "Create Your Website",
    desc: "We build a clean, mobile-friendly website with all your school information. You review and we make changes.",
  },
  {
    num: "3",
    title: "Add Enquiry & Automation Tools",
    desc: "We set up admission forms, WhatsApp integration, and auto-replies so parents get quick responses.",
  },
  {
    num: "4",
    title: "Launch and Support",
    desc: "We launch everything and stay available for any changes or help. You can call us anytime.",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            How It Works — Very Simple
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We handle everything. Your staff doesn't need to be technical at all.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-0">
          {steps.map((s, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">
                  {s.num}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px h-full bg-border my-1" />
                )}
              </div>
              <div className="pb-8">
                <h3 className="font-heading font-semibold text-foreground mb-1">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
