import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface DemoFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DemoFormDialog = ({ open, onOpenChange }: DemoFormDialogProps) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    schoolName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.schoolName.trim() || !form.phone.trim()) {
      toast({
        title: "Please fill required fields",
        description: "Name, school name, and phone number are required.",
        variant: "destructive",
      });
      return;
    }
    setLoading(true);
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Request received!",
        description: "We'll get back to you within 24 hours.",
      });
      setForm({ name: "", schoolName: "", phone: "", email: "", message: "" });
      onOpenChange(false);
    }, 1000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-heading text-xl">Book a Free Demo</DialogTitle>
          <DialogDescription>
            Fill in your details and we'll call you back to schedule a 15-minute demo.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">
              Your Name <span className="text-destructive">*</span>
            </label>
            <Input
              placeholder="e.g. Ramesh Kumar"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              maxLength={100}
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">
              School Name <span className="text-destructive">*</span>
            </label>
            <Input
              placeholder="e.g. Sunrise Public School"
              value={form.schoolName}
              onChange={(e) => setForm({ ...form, schoolName: e.target.value })}
              maxLength={150}
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">
              Phone Number <span className="text-destructive">*</span>
            </label>
            <Input
              placeholder="e.g. 98765 43210"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              maxLength={15}
              type="tel"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">
              Email (optional)
            </label>
            <Input
              placeholder="e.g. admin@school.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              maxLength={255}
              type="email"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">
              Anything specific you need? (optional)
            </label>
            <Textarea
              placeholder="e.g. We need help with admission enquiries..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              maxLength={500}
              rows={3}
            />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Submitting..." : "Submit Request"}
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            We'll get back to you within 24 hours. No spam, promise.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DemoFormDialog;
