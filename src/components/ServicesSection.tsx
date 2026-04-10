import { Globe, MessageSquare, PhoneCall, Mail } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "School Website Development",
    desc: "Simple, clean, mobile-friendly websites with all your school details — admissions, fee structure, gallery, contact info. Nothing fancy, just what parents need.",
  },
  {
    icon: MessageSquare,
    title: "Admission Enquiry System",
    desc: "Online forms that capture parent inquiries and send them straight to your WhatsApp. No more missed calls or lost paper forms.",
  },
  {
    icon: PhoneCall,
    title: "AI Calling & Chat Support",
    desc: "Automate basic admission calls and answer common questions like fees, timings, and available seats — even after office hours.",
  },
  {
    icon: Mail,
    title: "Follow-up & Email Automation",
    desc: "Automatically send reminders and updates to parents who enquired. You don't have to remember to follow up manually.",
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
