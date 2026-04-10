import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <p className="font-heading font-bold text-lg mb-3">
              School<span className="opacity-70">Stack</span>
            </p>
            <p className="text-sm opacity-70 leading-relaxed">
              Simple websites and smart tools for schools in Bangalore. We keep things practical.
            </p>
          </div>

          <div>
            <p className="font-heading font-semibold mb-3">Services</p>
            <ul className="space-y-2 text-sm opacity-70">
              <li>School Websites</li>
              <li>Admission Enquiry System</li>
              <li>AI Calling & Chat</li>
              <li>Email Automation</li>
            </ul>
          </div>

          <div>
            <p className="font-heading font-semibold mb-3">Quick Links</p>
            <ul className="space-y-2 text-sm opacity-70">
              <li><a href="#services" className="hover:opacity-100">Services</a></li>
              <li><a href="#pricing" className="hover:opacity-100">Pricing</a></li>
              <li><a href="#testimonials" className="hover:opacity-100">Testimonials</a></li>
            </ul>
          </div>

          <div>
            <p className="font-heading font-semibold mb-3">Contact Us</p>
            <ul className="space-y-2 text-sm opacity-70">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> +91 98765 43210
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" /> hello@schoolstack.in
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" /> Koramangala, Bangalore
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-center text-xs opacity-50">
          © 2024 SchoolStack. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
