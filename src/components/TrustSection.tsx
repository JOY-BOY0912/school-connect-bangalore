import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Parents can now find information easily on their phones. Earlier we used to get many repeated calls asking for fee structure and timings.",
    name: "Mrs. Lakshmi R.",
    role: "Admin Staff",
    school: "Vijaya High School",
  },
  {
    quote: "The enquiry form on our website has been really helpful. We don't miss any admission leads now. Before this, we were noting everything in a register.",
    name: "Fr. Joseph D'Souza",
    role: "Principal",
    school: "St Xaviers High School",
  },
  {
    quote: "Our old website was not opening properly on mobile. This new one works well and parents have started filling admission forms online.",
    name: "Sunitha K.",
    role: "Admissions Incharge",
    school: "Maria Niketan High School",
  },
  {
    quote: "We started using the call follow-up system, and it helped us handle admission inquiries better without extra staff.",
    name: "Meera Bhat",
    role: "Office Coordinator",
    school: "Mahila Seva Samaja High School",
  },
  {
    quote: "They understood what a school needs. No complicated features — just simple things that actually help our office work.",
    name: "Rajesh Kumar M.",
    role: "Principal",
    school: "Mother Teresa Public School, Jalahalli",
  },
  {
    quote: "The automated follow-up messages save us a lot of time. Parents get admission updates without us having to call each one separately.",
    name: "Anitha S.",
    role: "Admin Staff",
    school: "Cambridge School, KR Puram",
  },
];

const TrustSection = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-surface">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            Schools in Bangalore Are Already Using This
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Here's what school staff are saying after using our website and tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-card rounded-lg border border-border p-6 flex flex-col"
            >
              <Quote className="w-5 h-5 text-primary/40 mb-3" />
              <p className="text-sm text-foreground leading-relaxed flex-1 mb-4">
                "{t.quote}"
              </p>
              <div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">
                  {t.role}, {t.school}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
