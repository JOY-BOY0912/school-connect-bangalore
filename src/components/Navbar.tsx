import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-surface/90 backdrop-blur border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <div className="font-heading font-bold text-xl text-foreground">
          School<span className="text-primary">Stack</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#services" className="hover:text-foreground transition-colors">Services</a>
          <a href="#results" className="hover:text-foreground transition-colors">Results</a>
          <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
          <a href="#testimonials" className="hover:text-foreground transition-colors">Testimonials</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+919876543210" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
            <Phone className="w-4 h-4" />
            +91 98765 43210
          </a>
          <Button size="sm">Get Free Demo</Button>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-surface p-4 space-y-3">
          <a href="#services" className="block text-sm py-2" onClick={() => setOpen(false)}>Services</a>
          <a href="#results" className="block text-sm py-2" onClick={() => setOpen(false)}>Results</a>
          <a href="#pricing" className="block text-sm py-2" onClick={() => setOpen(false)}>Pricing</a>
          <a href="#testimonials" className="block text-sm py-2" onClick={() => setOpen(false)}>Testimonials</a>
          <Button className="w-full" size="sm">Get Free Demo</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
