import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: "₹15,000",
    period: "one-time",
    desc: "Good for schools that just need a basic website to start.",
    features: [
      "5-page school website",
      "Mobile-friendly design",
      "Admission enquiry form",
      "Contact page with map",
      "1 year free hosting",
    ],
    popular: false,
  },
  {
    name: "Standard",
    price: "₹30,000",
    period: "one-time + ₹2,000/mo",
    desc: "For schools that want to capture and manage admission inquiries properly.",
    features: [
      "Everything in Starter",
      "WhatsApp integration",
      "Auto-reply to enquiries",
      "Parent follow-up emails",
      "Enquiry tracking dashboard",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Advanced",
    price: "₹50,000",
    period: "one-time + ₹5,000/mo",
    desc: "Full system with AI calling, chatbot, and complete automation.",
    features: [
      "Everything in Standard",
      "AI calling for enquiries",
      "Website chatbot",
      "SMS & email automation",
      "Detailed analytics",
      "Dedicated account manager",
    ],
    popular: false,
  },
];

interface PricingSectionProps {
  onDemoClick: () => void;
}

const PricingSection = ({ onDemoClick }: PricingSectionProps) => {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-surface">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            Simple, Honest Pricing
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            No hidden charges. Start small and upgrade when you're ready. We're flexible with payments too.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`bg-card rounded-lg border p-6 flex flex-col ${
                plan.popular ? "border-primary shadow-md ring-1 ring-primary/20" : "border-border"
              }`}
            >
              {plan.popular && (
                <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full self-start mb-3">
                  Most Popular
                </span>
              )}
              <h3 className="font-heading font-bold text-lg text-foreground">{plan.name}</h3>
              <div className="mt-2 mb-1">
                <span className="font-heading text-3xl font-bold text-foreground">{plan.price}</span>
              </div>
              <p className="text-xs text-muted-foreground mb-3">{plan.period}</p>
              <p className="text-sm text-muted-foreground mb-5">{plan.desc}</p>

              <ul className="space-y-2.5 mb-6 flex-1">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <Button variant={plan.popular ? "default" : "outline"} className="w-full" onClick={onDemoClick}>
                Get Started
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-6">
          All prices are negotiable. We understand school budgets. Let's talk.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
