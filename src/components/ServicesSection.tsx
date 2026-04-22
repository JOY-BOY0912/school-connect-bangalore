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
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            What We Do for Schools
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Everything is built keeping school staff in mind. Simple to use, no training needed.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-card rounded-lg border border-border p-6 hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <s.icon className="w-5 h-5 text-primary" />
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
