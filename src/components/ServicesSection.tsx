import { Globe, Smartphone, Image as ImageIcon, FileText } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "School Website",
    desc: "Clean, mobile-friendly, and easy to update. All your school info in one place — admissions, fees, gallery, contact details.",
  },
  {
    icon: Smartphone,
    title: "Mobile-Friendly Design",
    desc: "Most parents check school websites on their phone. We make sure everything looks neat and loads fast on mobile too.",
  },
  {
    icon: ImageIcon,
    title: "Photo Gallery & Updates",
    desc: "Easily share school events, classroom activities, and announcements. Parents stay informed without much effort from your side.",
  },
  {
    icon: FileText,
    title: "Admission Inquiry Form",
    desc: "Simple online form so parents can reach out. You get their details directly — no missed inquiries.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold tracking-wider uppercase text-primary mb-3">
            What we do
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
            Built Keeping School Staff in Mind
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Simple to use, no training needed. Everything in one place.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <div
              key={i}
              className="group relative bg-card rounded-2xl border border-border p-6 shadow-soft hover:shadow-card hover:-translate-y-1 transition-smooth"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-soft flex items-center justify-center mb-4 group-hover:bg-primary-gradient transition-smooth">
                <s.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-smooth" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
