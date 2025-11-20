import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  privacyNote: string;
  submitText: string;
}

/**
 * NewsletterModal - Email subscription modal (UI only)
 */
export function NewsletterModal({
  isOpen,
  onClose,
  title,
  subtitle,
  privacyNote,
  submitText,
}: NewsletterModalProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter signup API call
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
      setEmail("");
    }, 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
        </DialogHeader>

        {submitted ? (
          <div className="py-8 text-center">
            <p className="text-lg text-primary font-medium mb-2">Thanks! Check your inbox to confirm.</p>
            <p className="text-sm text-muted-foreground">{email}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <p className="text-muted-foreground/80">{subtitle}</p>

            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full px-4 py-3 bg-transparent border border-border focus:border-primary focus:outline-none transition-colors"
              />
            </div>

            <Button type="submit" className="w-full" size="lg">
              {submitText}
            </Button>

            <p className="text-xs text-muted-foreground/60 text-center">
              {privacyNote}
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
