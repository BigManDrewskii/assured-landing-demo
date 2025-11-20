/**
 * Shared TypeScript interfaces for Assured Landing
 */

// Navigation and Links
export interface LinkItem {
  href: string;
  label: string;
  description?: string;
  external?: boolean;
}

export interface MenuSection {
  title: string;
  items: LinkItem[];
}

// Three Pillars Section
export interface PillarItem {
  title: string;
  description: string;
  backgroundPattern?: string;
}

// Statistics Section
export interface StatItem {
  value: string | number;
  label: string;
  description: string;
  highlighted?: boolean;
}

// Intelligence Section (Articles/Blog)
export interface ArticleItem {
  id: string;
  date: string;
  title: string;
  imageUrl?: string;
  link: string;
  excerpt?: string;
  category?: "features" | "assured-reacts" | "weekly-briefing" | "interviews" | "blogs-opinions" | "podcasts";
  tags?: string[];
  featured?: boolean;
  trending?: boolean;
}

// Contact Section
export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export interface ContactInfo {
  phone: string;
  phoneHref: string;
  email: string;
  emailHref: string;
}

// Footer Section
export interface FooterLinks {
  resources: LinkItem[];
  company: LinkItem[];
  legal: LinkItem[];
}

export interface CompanyInfo {
  description: string;
  registrationDetails: string;
  fcaNumber?: string;
  copyright: string;
}

export interface SocialLinks {
  linkedin?: string;
  twitter?: string;
  facebook?: string;
  email?: string;
}

export interface CertificationBadge {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

// Comparison Section
export interface ComparisonColumn {
  title: string;
  description: string;
  highlighted?: boolean;
}
