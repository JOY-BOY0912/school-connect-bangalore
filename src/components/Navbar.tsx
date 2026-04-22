import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  onDemoClick: () => void;
}

const Navbar = ({ onDemoClick }: NavbarProps) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-surface/80 backdrop-blur-md border-b border-border/60">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 font-heading font-bold text-xl text-foreground">
          <span className="w-8 h-8 rounded-lg bg-primary-gradient flex items-center justify-center text-primary-foreground text-sm shadow-glow">
            I
          </span>
          <span className="text-primary">Ishyukt</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#services" className="hover:text-foreground transition-colors">Services</a>
          <a href="#results" className="hover:text-foreground transition-colors">Results</a>
          <a href="#portfolio" className="hover:text-foreground transition-colors">Our Work</a>
          <a href="#testimonials" className="hover:text-foreground transition-colors">Testimonials</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button size="sm" onClick={onDemoClick}>Get Free Demo</Button>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-surface p-4 space-y-3">
          <a href="#services" className="block text-sm py-2" onClick={() => setOpen(false)}>Services</a>
          <a href="#results" className="block text-sm py-2" onClick={() => setOpen(false)}>Results</a>
          <a href="#portfolio" className="block text-sm py-2" onClick={() => setOpen(false)}>Our Work</a>
          <a href="#testimonials" className="block text-sm py-2" onClick={() => setOpen(false)}>Testimonials</a>
          <Button className="w-full" size="sm" onClick={() => { setOpen(false); onDemoClick(); }}>Get Free Demo</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
