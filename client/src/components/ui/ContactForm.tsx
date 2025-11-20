import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import type { ContactFormData } from "@/types";

interface ContactFormProps {
  onSubmit: (data: ContactFormData) => void | Promise<void>;
  isLoading?: boolean;
}

/**
 * ContactForm - Minimal contact form
 *
 * Clean form with:
 * - Name, Email, Company (optional), and Message fields
 * - Simple borders matching site aesthetic
 * - Clean focus states
 *
 * @param onSubmit - Form submission handler (receives form data)
 * @param isLoading - If true, disables form during submission
 */
export function ContactForm({ onSubmit, isLoading = false }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const inputStyles = "w-full px-3 md:px-4 py-2.5 bg-transparent border border-border focus:outline-none focus:border-primary transition-colors disabled:opacity-50 text-sm md:text-base";

  return (
    <form className="space-y-4 md:space-y-5" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="block text-[10px] md:text-xs mb-2 text-muted-foreground/60 uppercase tracking-wider" style={{ fontFamily: '"Stack Sans Notch", sans-serif' }}>
          Name *
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={handleChange}
          disabled={isLoading}
          className={inputStyles}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-[10px] md:text-xs mb-2 text-muted-foreground/60 uppercase tracking-wider" style={{ fontFamily: '"Stack Sans Notch", sans-serif' }}>
          Email *
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={handleChange}
          disabled={isLoading}
          className={inputStyles}
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-[10px] md:text-xs mb-2 text-muted-foreground/60 uppercase tracking-wider" style={{ fontFamily: '"Stack Sans Notch", sans-serif' }}>
          Company
        </label>
        <input
          type="text"
          id="company"
          value={formData.company}
          onChange={handleChange}
          disabled={isLoading}
          className={inputStyles}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-[10px] md:text-xs mb-2 text-muted-foreground/60 uppercase tracking-wider" style={{ fontFamily: '"Stack Sans Notch", sans-serif' }}>
          Message *
        </label>
        <textarea
          id="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          disabled={isLoading}
          className={`${inputStyles} resize-none`}
        />
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium h-11 shadow-purple-glow text-sm md:text-base"
      >
        {isLoading ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
