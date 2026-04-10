import { Phone, MessageCircle, ClipboardList, RefreshCw } from "lucide-react";

const tools = [
  {
    icon: Phone,
    title: "AI Voice Calling",
    desc: "Automatically call parents for admission follow-ups, reminders, and basic info. No need for extra staff to do this manually.",
  },
  {
    icon: MessageCircle,
    title: "Chat Support (Website + WhatsApp)",
    desc: "Answer common parent questions instantly, anytime. Fees, timings, available seats — all handled without your staff picking up the phone.",
  },
  {
    icon: ClipboardList,
    title: "Lead Tracking",
    desc: "All inquiries in one place — no more missed admissions. You can see who enquired, when, and what happened next.",
  },
  {
    icon: RefreshCw,
    title: "Automated Follow-ups",
    desc: "Send messages or emails without doing it manually. Parents stay updated, and you don't have to remember to follow up.",
  },
];

const AIToolsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            How AI Helps Your School (Without Making Things Complicated)
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            These tools run in the background. Your staff doesn't need to learn anything new.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {tools.map((t, i) => (
            <div
              key={i}
              className="bg-card rounded-lg border border-border p-6 hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <t.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{t.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIToolsSection;
