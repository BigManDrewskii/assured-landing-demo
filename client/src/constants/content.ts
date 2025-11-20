/**
 * Content constants for Assured Landing
 * Extracted from page components for easier content management
 */

import type {
  ArticleItem,
  CertificationBadge,
  CompanyInfo,
  ContactInfo,
  FooterLinks,
  LinkItem,
  MenuSection,
  PillarItem,
  SocialLinks,
  StatItem,
} from "@/types";

// ==================== Navigation ====================

export const MENU_SECTIONS: MenuSection[] = [
  {
    title: "SERVICES",
    items: [
      {
        href: "/what-we-do",
        label: "WHAT WE DO",
        description: "Cyber insurance expertise and specialized solutions"
      },
      {
        href: "/how-we-work",
        label: "HOW WE WORK",
        description: "Our consultancy-led approach to protection"
      },
      {
        href: "#cyber-risk",
        label: "CYBER RISK",
        description: "Understanding and managing cyber threats"
      },
      {
        href: "#advisory",
        label: "ADVISORY",
        description: "Strategic guidance for cyber resilience"
      },
    ]
  },
  {
    title: "RESOURCES",
    items: [
      {
        href: "/intelligence",
        label: "INTELLIGENCE",
        description: "Latest insights, analysis and industry updates"
      },
      {
        href: "/branding",
        label: "BRANDING",
        description: "Brand guidelines and asset downloads"
      },
    ]
  },
  {
    title: "COMPANY",
    items: [
      {
        href: "#about",
        label: "ABOUT",
        description: "Raising the bar in cyber insurance"
      },
      {
        href: "#careers",
        label: "CAREERS",
        description: "Join our specialist team"
      },
      {
        href: "#contact",
        label: "CONTACT",
        description: "Get in touch with our experts"
      },
    ]
  }
];

// Legacy flat navigation links for backward compatibility
export const NAVIGATION_LINKS: LinkItem[] = MENU_SECTIONS.flatMap(section => section.items);

// ==================== Hero Section ====================

export const HERO_CONTENT = {
  headline: "Raising the bar in\ncyber insurance",
  subheadline: "Specialist expertise, consultancy-led approach, and unmatched industry knowledge.",
  ctaText: "Get Protected",
  animationPath: "/home-hero-animation.json",
};

// ==================== Intro Section (Logo + Tagline) ====================

export const INTRO_CONTENT = {
  logoSrc: "/assured-logo-white-new.svg",
  logoAlt: "Assured",
  description:
    "Cyber is a risk like no other and it requires the attention of a specialist. We provide exceptional planning, solid policies and security progression to protect businesses before, during and after a cyber incident.",
};

// ==================== Three Pillars ====================

export const THREE_PILLARS: [PillarItem, PillarItem, PillarItem] = [
  {
    title: "Planning",
    description:
      "Understand the business model. Understand the security posture. Understand the risk.",
  },
  {
    title: "Policies",
    description:
      "Unrivalled access to the global cyber insurance market. We work with all of them.",
  },
  {
    title: "Progression",
    description:
      "We sit at the heart of the cyber industry. We are plugged into the ecosystem.",
  },
];

export const THREE_PILLARS_ANIMATION_PATH = "/bg-animation-simple.json";

// ==================== What We Do Section ====================

export const WHAT_WE_DO_CONTENT = {
  label: "WHAT WE DO",
  headline: "Revolutionising\ncyber insurance",
  description:
    "Assured is the UK's only insurance broker dedicated solely to cyber. General brokers, burdened with multiple insurance lines, lack bandwidth for a risk this complex. Cyber threats evolve faster than any other exposure for technology-reliant businesses, so cyber insurance cannot function as a one-off, box-ticking exercise that delivers little value.",
  quote: "Assured turns 'I think I'm covered' into 'I know I'm covered.'",
  ctaText: "What We Do",
  animationPath: "/what-we-do-section-animation.json",
};

// ==================== Partnership Section ====================

export const PARTNERSHIP_CONTENT = {
  headline: "More than just a transaction",
  description:
    "Our high-touch, consultancy-led approach goes well beyond policy creation. Clients gain access to deep cyber expertise from the outset. Positioned at the centre of the cyber industry, we work with multiple high-profile partners.",
  features: [
    {
      title: "Real-time Security Feedback",
      description:
        "Continuous monitoring and insights into your security posture, helping you stay ahead of emerging threats.",
    },
    {
      title: "Incident Planning",
      description:
        "Comprehensive response strategies developed before incidents occur, ensuring you're never caught off guard.",
    },
    {
      title: "Resilience Enhancements",
      description:
        "Ongoing improvements to your cyber defences, building a stronger security foundation over time.",
    },
  ] as const,
  highlightText:
    "Together, we're perfectly placed to ensure you're ready to hit the ground running whenever the situation arises.",
  ctaText: "How We Work",
};

// ==================== Comparison Section ====================

export const COMPARISON_CONTENT = {
  title: "Specialists, not generalists.",
  pullQuote: "Cyber risk can't be treated like everything else.",
  blocks: [
    {
      label: "The Problem",
      text: "Cyber risk must be kept separate from the generalist pot. This is a unique exposure that demands focused expertise, not divided attention. To date, cyber insurance policies have been sold by generalist brokers lacking a singular focus on cyber risk. The result? Volatile prices, ambiguous cover, and inadequate support when incidents occur.",
    },
    {
      label: "Our Role",
      text: "We exist to be better than those that came before us. We're committed to ensuring no cyber stone goes unturned, and no details are excluded. An insurance policy will only comprehensively match and support an organisation's cyber risk if a specialist has curated it. Hello, nice to meet you; we are that specialist.",
    },
  ],
  ctaText: "More about Assured",
  animationPath: "/comparison-section-animation.json",
};

// ==================== Statistics Section ====================

export const STATISTICS_CONTENT = {
  title: "You do the maths",
  subtitle: "The numbers tell the story of our expertise",
};

export const STATISTICS: StatItem[] = [
  {
    value: "10,000",
    label: "HOURS TO EXPERTISE",
    description:
      "According to Malcolm Gladwell, it takes 10,000 hours to become an expert. Experts become outliers. Outliers are the best.",
    highlighted: false,
  },
  {
    value: "33",
    label: "YEARS FOR GENERALISTS",
    description:
      "A general broker spends approximately 300 hours a year on cyber. It would take them 33 years to reach 10,000 hours.",
    highlighted: false,
  },
  {
    value: "6,570",
    label: "HOURS/YEAR",
    description:
      "We only do cyber. We spend 6,570 hours a year. In less than 2 years, we are the outliers.",
    highlighted: true,
  },
];

// ==================== Intelligence Section ====================

export const INTELLIGENCE_CONTENT = {
  title: "Assured Intelligence",
  subtitle: "Interviews, features and insights. Actionable content, worthy of your attention.",
  ctaText: "View more articles",
  animationPath: "/bg-animation-simple.json",
};

export const ARTICLES: ArticleItem[] = [
  {
    id: "1",
    date: "02.10.2025",
    title:
      "AI Autopsy: How a Supply Chain Attack Hobbled Some of Europe's Busiest Airports",
    link: "#",
    imageUrl: "/assured-article-banners/article-supply-chain-airports.jpeg",
  },
  {
    id: "2",
    date: "30.09.2025",
    title: "Gone Vishing: How to Tackle a Rise in Helpdesk Attacks",
    link: "#",
    imageUrl: "/assured-article-banners/article-vishing-helpdesk.jpeg",
  },
  {
    id: "3",
    date: "10.07.2025",
    title: "CISO 'How to' Without the Bull: Credential Stuffing Response",
    link: "#",
    imageUrl: "/assured-article-banners/article-ciso-credential-management.jpeg",
  },
];

// ==================== Contact Section ====================

export const CONTACT_INFO: ContactInfo = {
  phone: "+44 (0)20 3854 4270",
  phoneHref: "tel:+442038544270",
  email: "hello@assured.co.uk",
  emailHref: "mailto:hello@assured.co.uk",
};

export const CONTACT_CONTENT = {
  title: "Get in touch",
  subtitle:
    "We will not talk cyber or insurance until we have a good grasp of the business model.",
};

// ==================== Final CTA Section ====================

export const FINAL_CTA_CONTENT = {
  title: "Ready to raise the bar?",
  subtitle: "Start getting comprehensive cyber insurance coverage today.",
  primaryCta: "Get Started",
  secondaryCta: "See our plans",
  animationPath: "/cta-section-animation.json",
};

// ==================== Closing Section ====================

export const CLOSING_CONTENT = {
  animationPath: "/closing-section-animation.json",
};

// ==================== Footer ====================

export const FOOTER_LINKS: FooterLinks = {
  resources: [
    { href: "#", label: "What is Cyber Insurance?" },
    { href: "#", label: "Intelligence" },
    { href: "#", label: "FAQs" },
    { href: "#", label: "Certifications" },
  ],
  company: [
    { href: "#", label: "About" },
    { href: "#", label: "Careers" },
    { href: "#", label: "Partnerships" },
    { href: "#", label: "Credits" },
  ],
  legal: [
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Cookies Policy" },
    { href: "#", label: "LinkedIn" },
    { href: "#", label: "Facebook" },
  ],
};

export const COMPANY_INFO: CompanyInfo = {
  description:
    "Assured are the UK's first (and best) cyber insurance specialists for SMEs. We provide cyber insurance, cyber security and cyber incident response services.",
  registrationDetails:
    "Registered in England and Wales. Company Number: 9938376. Copthall House, 14 Copthall Avenue, London, EC2R 7DJ, United Kingdom.",
  fcaNumber: "FCA Firm Reference Number 968819",
  copyright: "© 2025 Assured Cyber Ltd. All rights reserved.",
};

export const FOOTER_ANIMATION_PATH = "";

// ==================== Social Media Links ====================

export const SOCIAL_LINKS: SocialLinks = {
  linkedin: "https://www.linkedin.com/company/assuredcyberinsurance/",
  twitter: "https://x.com/Assured_Intel",
  facebook: "https://www.facebook.com/AssuredIntelligence",
  email: "hello@assured.co.uk",
};

// ==================== Certification Badges ====================

export const CERTIFICATIONS: CertificationBadge[] = [
  {
    src: "/lloyds-broker-logo.svg",
    alt: "Lloyd's Broker",
    height: 40,
  },
  {
    src: "/cyber-essentials-certified-plus.png",
    alt: "Cyber Essentials Plus Certified",
    height: 50,
  },
  {
    src: "/iso27001.png",
    alt: "ISO 27001 Certified",
    height: 50,
  },
];

// ==================== WHAT WE DO PAGE ====================

export const WHAT_WE_DO_PAGE_HERO = {
  headline: "We are redefining and revolutionising cyber insurance.",
  subheadline:
    "We exclusively execute cyber insurance, and we do it with passion, care and unbeatable attention to detail. Cyber doesn't fit the traditional insurance model, it isn't a conventional risk, so it shouldn't be treated like one.",
  animationPath: "/home-hero-animation.json",
};

export const WHAT_WE_DO_PAGE_CHALLENGE = {
  title: "Challenging the status quo.",
  content: [
    "We take pride in getting to know our clients and their businesses. We ask the right questions to match them to the perfect policy—one that will actually pay out when it matters most. But that's just the beginning.",
    "We consult with our clients to arm them with the knowledge and expertise they need to exude cyber confidence in the Boardroom. We're always in their corner, ready to respond on what could well be the worst professional day of their life.",
    "Superficially, it might seem like none of this is rocket science. And yet, to date, it is basically unheard of in the industry.",
  ],
  ctaText: "Ready to talk?",
};

export const WHAT_WE_DO_PAGE_SERVICES = {
  title: "What you can expect from us.",
  services: [
    {
      title: "Analysis",
      description:
        "We conduct in-depth conversations and analysis of an organisation's cyber risk. We identify their 'crown jewels' and work out what level of cover is appropriate, tailored to the needs of each individual client.",
    },
    {
      title: "Communication",
      description:
        "Cyber is a consistently evolving space and we need to keep our clients at the forefront of the industry—which is exactly where we sit. Our skill lies in aligning an organisation's changing business with the changing cyber landscape and the changing demands of underwriters.",
    },
    {
      title: "Price",
      description:
        "There are three key routes to a competitive price in cyber: never rush the renewal; only buy the elements of cover that are required; and ensure the technical submission is as thorough as possible. These three elements are fundamental to our broking process.",
    },
    {
      title: "Comprehension",
      description:
        "For a cyber policy to be relied upon, it has to be understood. We break down the policy into its key coverage areas, translating cyber and legal jargon into plain English, and ensuring that each component is relevant and needed.",
    },
    {
      title: "Planning",
      description:
        "The key to successful incident response is to plan ahead. We consider the 'before' and 'after' parts of incident response crucial and give the forethought and planning the time and resources it deserves.",
    },
    {
      title: "Appraisal",
      description:
        "In order to achieve cover, organisations will need to submit the blueprint of their IT estate. We are perfectly placed to offer guidance on areas of particular underwriter focus, ensuring premiums are not unnecessarily raised or that cover limits are reduced.",
    },
  ],
};

export const WHAT_WE_DO_PAGE_DIFFERENT = {
  title: "Different, but not just for the sake of it.",
  content: [
    "The role of the broker hasn't changed for years. The broker relays the perceived risk of the client to the underwriter, the underwriter comes back with prices, and the broker relays the prices back to the client. Rinse and repeat.",
    "Assured acts as more of a consultancy than a brokerage. Although we earn our fee through the traditional method of broking, we deliver our long-term value through the work we deliver during the tenure of the policy.",
    "Our process is designed to ensure that the policy is the right one for their business, actually covers what they need, and ensures they are properly prepared for if—and when—any incident arises.",
  ],
  quote:
    "An insurance policy will only comprehensively match and support an organisation's cyber risk if a specialist has curated it. Hello, nice to meet you; we are that specialist.",
  attribution: "Henry Green, Founder",
};

export const WHAT_WE_DO_PAGE_FAQ = {
  title: "Frequently asked questions",
  items: [
    {
      question: "We invest a lot in cybersecurity. So why do we need cyber insurance?",
      answer: "Even with robust cybersecurity measures, no organisation is completely immune to cyber threats. Cyber insurance provides financial protection and expert incident response support when prevention measures fail, covering costs like business interruption, data recovery, legal fees, and regulatory fines.",
    },
    {
      question: "How do I know if my organisation needs cyber insurance?",
      answer: "If your organisation handles customer data, relies on digital systems for operations, or faces regulatory compliance requirements (like GDPR), cyber insurance is essential. The question isn't whether you need it, but rather ensuring you have the right coverage tailored to your specific risk profile.",
    },
    {
      question: "Why would I choose Assured over the more established brokers?",
      answer: "Established brokers spread their expertise across multiple insurance lines, spending approximately 300 hours per year on cyber. We spend 6,570 hours annually focused exclusively on cyber insurance. This singular focus means deeper expertise, better market access, and policies actually designed for the complexity of cyber risk.",
    },
    {
      question: "Does cyber insurance cover ransomware?",
      answer: "Most comprehensive cyber insurance policies include ransomware coverage, but the specifics vary significantly between insurers and policy structures. We ensure your policy explicitly covers ransomware payments, incident response costs, business interruption, and data recovery—with clear, unambiguous language.",
    },
    {
      question: "Is there an additional risk in introducing another broker?",
      answer: "We don't replace your existing broker relationships—we complement them. Cyber insurance requires specialist knowledge that generalist brokers simply can't provide while managing dozens of other insurance lines. We work alongside your existing advisors, focusing solely on getting your cyber coverage right.",
    },
    {
      question:
        "Do I get a better price from the underwriter by keeping all insurance lines together?",
      answer: "This is a common misconception. Underwriters price cyber insurance based on your specific cyber risk profile, security posture, and incident history—not on whether you bundle it with other policies. In fact, specialist brokers often secure better pricing through deeper underwriter relationships and technical submission quality.",
    },
  ],
  ctaText: "Still got questions?",
  ctaLink: "#contact",
};

// ==================== INTELLIGENCE PAGE ====================

export const INTELLIGENCE_PAGE_HERO = {
  title: "Assured Intelligence",
  subtitle: "Interviews, features, and insights",
};

// Extended article data for Intelligence page
export const ALL_ARTICLES: ArticleItem[] = [
  // Features / AI Autopsy
  {
    id: "1",
    date: "02.10.2025",
    title: "AI Autopsy: How a Supply Chain Attack Hobbled Some of Europe's Busiest Airports",
    excerpt: "A deep dive into the supply chain attack that disrupted major European airports, examining the attack vectors, impact, and lessons learned.",
    link: "#",
    imageUrl: "/assured-article-banners/article-supply-chain-airports.jpeg",
    category: "features",
    tags: ["Supply Chain Risk", "Aviation", "AI Autopsy", "Incident Response"],
    featured: true,
  },
  {
    id: "14",
    date: "15.09.2025",
    title: "AI Autopsy: Why the F5 Breach Has Put the Internet on High Alert",
    excerpt: "Analyzing the critical F5 vulnerability and its widespread implications for internet infrastructure security.",
    link: "#",
    imageUrl: "/assured-article-banners/article-f5-breach-internet.jpeg",
    category: "features",
    tags: ["Zero-day", "Network Security", "AI Autopsy", "Threat Intelligence"],
    featured: false,
  },
  {
    id: "15",
    date: "28.08.2025",
    title: "AI Autopsy: Ransomware Attack on Clinical Diagnostics NMDL Exposes Cancer Screen Patients' Data",
    excerpt: "Examining the healthcare sector ransomware attack that exposed sensitive patient data and disrupted critical diagnostic services.",
    link: "#",
    imageUrl: "/assured-article-banners/article-ransomware-nmdl-cancer.jpeg",
    category: "features",
    tags: ["Ransomware", "Data Breaches", "AI Autopsy", "Public Sector"],
    featured: false,
  },

  // Assured Reacts
  {
    id: "16",
    date: "18.11.2025",
    title: "Assured Reacts: UK Cyber Insurance Claims Tripled in 2024 According to the ABI",
    excerpt: "Our take on the ABI's latest report showing a dramatic rise in cyber insurance claims and what it means for the market.",
    link: "#",
    imageUrl: "/assured-article-banners/article-insurance-claims-tripled.jpeg",
    category: "assured-reacts",
    tags: ["Cyber Insurance", "Legislation & Regulation"],
    featured: true,
    trending: true,
  },
  {
    id: "17",
    date: "12.11.2025",
    title: "UK's Cyber Security and Resilience Bill Enters Parliament",
    excerpt: "Breaking down the new legislation and its implications for UK businesses and cyber insurance requirements.",
    link: "#",
    imageUrl: "/assured-article-banners/article-cyber-resilience-bill.jpeg",
    category: "assured-reacts",
    tags: ["Legislation", "Regulation", "Government"],
    featured: false,
  },
  {
    id: "18",
    date: "05.11.2025",
    title: "Assured Reacts: JLR Didn't Have Cyber Insurance",
    excerpt: "Examining the shocking revelation that Jaguar Land Rover operated without cyber insurance and the costly consequences.",
    link: "#",
    imageUrl: "/assured-article-banners/article-jlr-no-insurance.jpeg",
    category: "assured-reacts",
    tags: ["Cyber Insurance", "Business Risk", "CNI"],
    featured: false,
  },

  // Weekly Cyber Briefing
  {
    id: "19",
    date: "17.11.2025",
    title: "Weekly Cyber Briefing: 17 November 2025",
    excerpt: "This week's top cyber stories: Major healthcare breach, new ransomware variant, and regulatory updates.",
    link: "#",
    imageUrl: "/assured-article-banners/article-weekly-briefing.jpeg",
    category: "weekly-briefing",
    tags: ["Cyber Attacks", "Ransomware", "Legislation"],
    featured: false,
  },
  {
    id: "20",
    date: "10.11.2025",
    title: "Weekly Cyber Briefing: 10 November 2025",
    excerpt: "Your weekly roundup of critical cybersecurity news, incidents, and industry developments.",
    link: "#",
    imageUrl: "/assured-article-banners/article-weekly-briefing.jpeg",
    category: "weekly-briefing",
    tags: ["Cyber Crime", "Data Breaches", "Threat Intelligence"],
    featured: false,
  },
  {
    id: "21",
    date: "03.11.2025",
    title: "Weekly Cyber Briefing: 03 November 2025",
    excerpt: "Top stories from the past week including supply chain attacks and new security frameworks.",
    link: "#",
    imageUrl: "/assured-article-banners/article-weekly-briefing.jpeg",
    category: "weekly-briefing",
    tags: ["Supply Chain Risk", "Compliance"],
    featured: false,
  },

  // Interviews
  {
    id: "22",
    date: "25.10.2025",
    title: "Five Minutes With: A Cybersecurity Professor",
    excerpt: "In conversation with leading academic researchers about the future of cybersecurity education and emerging threats.",
    link: "#",
    imageUrl: "/assured-article-banners/article-interview-professor.jpeg",
    category: "interviews",
    tags: ["Leadership", "Training & Awareness"],
    featured: false,
  },
  {
    id: "23",
    date: "18.10.2025",
    title: "Five Minutes With: A Field CTO",
    excerpt: "Discussing the intersection of technology leadership and cybersecurity strategy with a Fortune 500 CTO.",
    link: "#",
    imageUrl: "/assured-article-banners/article-interview-cto.jpeg",
    category: "interviews",
    tags: ["CISO", "Leadership", "Cloud"],
    featured: false,
  },
  {
    id: "24",
    date: "11.10.2025",
    title: "Five Minutes With: A Head of Geopolitical Risk",
    excerpt: "Exploring how geopolitical tensions shape cyber threat landscapes and insurance considerations.",
    link: "#",
    imageUrl: "/assured-article-banners/article-interview-geopolitical.jpeg",
    category: "interviews",
    tags: ["Cyber Risk", "Threat Intelligence"],
    featured: false,
  },

  // Blogs & Opinions
  {
    id: "3",
    date: "10.07.2025",
    title: "CISO 'How to' Without the Bull: Credential Stuffing Response",
    excerpt: "Practical, no-nonsense guidance for CISOs on detecting, responding to, and preventing credential stuffing attacks.",
    link: "#",
    imageUrl: "/assured-article-banners/article-ciso-credential-management.jpeg",
    category: "blogs-opinions",
    tags: ["CISO", "Incident Response", "Authentication"],
    featured: false,
  },
  {
    id: "25",
    date: "22.10.2025",
    title: "You Might Be Ready for AI, but Is Your Security?",
    excerpt: "As organizations rush to adopt AI, we examine the critical security implications often overlooked in the excitement.",
    link: "#",
    imageUrl: "/assured-article-banners/article-ai-security-ready.jpeg",
    category: "blogs-opinions",
    tags: ["AI", "Cyber Risk", "CISO"],
    featured: true,
    trending: true,
  },
  {
    id: "26",
    date: "15.10.2025",
    title: "CISO 'How to' Without the Bull: Mastering Threat Intelligence",
    excerpt: "Cut through the noise and learn how to actually use threat intelligence to protect your organization.",
    link: "#",
    imageUrl: "/assured-article-banners/article-ciso-threat-intelligence.jpeg",
    category: "blogs-opinions",
    tags: ["Threat Intelligence", "CISO"],
    featured: false,
  },

  // Vishing / Phishing
  {
    id: "2",
    date: "30.09.2025",
    title: "Gone Vishing: How to Tackle a Rise in Helpdesk Attacks",
    excerpt: "Voice phishing attacks are surging. Here's how to protect your organization from this evolving social engineering threat.",
    link: "#",
    imageUrl: "/assured-article-banners/article-vishing-helpdesk.jpeg",
    category: "features",
    tags: ["Phishing", "Human Factor Risk", "Training & Awareness"],
    featured: false,
    trending: true,
  },

  // Podcasts
  {
    id: "27",
    date: "01.11.2025",
    title: "Grab The Mic: Cyber Stories – Danni Brooke",
    excerpt: "Join us for an intimate conversation with industry veteran Danni Brooke about her journey in cybersecurity.",
    link: "#",
    imageUrl: "/assured-article-banners/article-interview-professor.jpeg",
    category: "podcasts",
    tags: ["Leadership", "Diversity"],
    featured: false,
  },
  {
    id: "28",
    date: "15.10.2025",
    title: "Grab The Mic: Cyber Stories – Jon Staniforth",
    excerpt: "Exploring the intersection of cyber insurance and incident response with seasoned professional Jon Staniforth.",
    link: "#",
    imageUrl: "/assured-article-banners/article-interview-cto.jpeg",
    category: "podcasts",
    tags: ["Cyber Insurance", "Incident Response"],
    featured: false,
  },
];

export const INTELLIGENCE_PAGE_NEWSLETTER = {
  title: "Be an insider. Sign up now!",
  subtitle: "Get weekly cyber intelligence delivered straight to your inbox. No spam, just insights.",
  privacyNote: "We respect your privacy. Unsubscribe anytime.",
  submitText: "Subscribe",
};

// ==================== HOW WE WORK PAGE ====================

export const HOW_WE_WORK_PAGE_HERO = {
  label: "HOW WE WORK",
  headline: "Our value goes above and beyond the right policy.",
  subheadline:
    "We're a cyber insurance broker where the curation of a cyber insurance policy is only part of the value we provide.",
};

export const HOW_WE_WORK_PAGE_INTRO = {
  content:
    "We're a cyber insurance broker where the curation of a cyber insurance policy is only part of the value we provide. Of course, we could wax lyrical about all the value we deliver in an indulgent ramble, but we prefer to keep it simple. Don't mistake simple for simplistic, though. We extensively serve clients in three ways: policy, preparation and progression.",
};

export const HOW_WE_WORK_POLICY = {
  number: "1",
  title: "Policy",
  problem:
    "We live in the small print of a policy so that our clients don't have to. We recognise that insurance policies are complex and that ambiguity and a lack of standardisation in cyber insurance have, to date, haunted the market. We exist to match clients with the right policy.",
  context:
    "A lack of agreed wording in cyber insurance means that every underwriter has different provisions and exclusions, and the breadth of coverage ranges significantly between them. Moreover, as the threat landscape evolves—which it does at an alarming rate in cyber—underwriters consistently review and change their coverage, adding further complication to an already chaotic web of complexity.",
  processTitle: "How we curate a policy:",
  steps: [
    {
      icon: "network" as const,
      title: "Analysis",
      description:
        "The first step in policy curation is understanding an organisation's commercial risks from a cyber perspective. The threat landscape evolves fast, and we're dedicated to combining our cyber risk knowledge with our understanding of the client's commercial risk to form an extensive business risk analysis.",
    },
    {
      icon: "eye" as const,
      title: "Exploration",
      description:
        "Next, we do a thorough exploration of a business' current coverage or risk position. This is the part that starts to get technical. To put it simply, we trawl through any existing policies with a fine-tooth comb to expose any holes in the cover. We have a complete understanding of every cyber policy on the market, so we can clearly articulate the pros and cons.",
    },
    {
      icon: "target" as const,
      title: "Submission",
      description:
        "With the detailed analysis and technical picture gleaned from the first two steps, we are able to communicate a client's cyber risk with underwriters. We build context around the client's submission forms, ensuring that underwriter appetite is maximised. This allows us to marry our clients with the perfect policies that they know and understand inside out.",
    },
  ],
};

export const HOW_WE_WORK_PREPARATION = {
  number: "2",
  title: "Preparation",
  intro: [
    "There's nothing more important to us than delivering value. Undoubtedly, a huge part of this is ensuring all our clients are fundamentally prepared for a cyber incident, and that the response is fast, thorough and definitive.",
    "We introduce our clients to everyone they'll have in their corner should the worst happen. Financial remuneration is only one aspect of cyber insurance. Equally important is the incident response, and we marry our clients with the best.",
  ],
  questionsTitle: "Questions we ask—and resolve—before an incident occurs:",
  questions: [
    {
      question: "What are the first three steps they take following a cyber incident?",
      answer:
        "We work with clients to develop a clear incident response playbook, identifying the immediate actions to take, key stakeholders to notify, and critical systems to protect. This includes establishing communication protocols and decision-making authority.",
    },
    {
      question: "Who needs to be in the war room?",
      answer:
        "We help define the core incident response team, including IT leadership, legal counsel, PR/communications, executive leadership, and external partners like forensics firms and legal advisors. Everyone knows their role before an incident occurs.",
    },
    {
      question: "Does everybody responsible know what their roles are?",
      answer:
        "Through tabletop exercises and simulation drills, we ensure every team member understands their specific responsibilities, escalation pathways, and decision-making authority during an incident.",
    },
    {
      question:
        "Have they performed dry runs for executing the policy, given the risk scenarios highlighted?",
      answer:
        "We facilitate incident response simulations tailored to the organization's specific risk profile, testing the policy execution process and identifying gaps before a real incident occurs.",
    },
    {
      question: "How do they know when to execute the policy?",
      answer:
        "We establish clear trigger criteria and thresholds for policy activation, ensuring teams know exactly when to engage insurers and incident response partners without delay or second-guessing.",
    },
    {
      question: "When will the incident response team show up?",
      answer:
        "We pre-arrange service level agreements with incident response providers, documenting expected response times and escalation procedures. Teams know what to expect and when help will arrive.",
    },
    {
      question:
        "Where is the number for their cyber insurance broker stored? On their network, they say? The breached network that has just been held to ransom? Oh…",
      answer:
        "We ensure critical contact information is stored in multiple secure, offline locations—printed documentation, password managers, and out-of-band communication channels. The last thing you want during an incident is discovering your emergency contacts are inaccessible.",
    },
  ],
};

export const HOW_WE_WORK_PROGRESSION = {
  number: "3",
  title: "Progression",
  intro: "When a policy is triggered, value is recognised. However, we deliver value throughout the entire policy period. How do we do that?",
  subsections: [
    {
      title: "Educational Content",
      content:
        "For one, there's our educational content designed to give executives cyber confidence and position them at the sharp end of cyber. Our content mission is led by one of the most experienced cybersecurity writers in the UK and puts the knowledge needs of execs at the heart of every piece produced.",
    },
    {
      title: "Assured Family Network",
      content:
        "Our clients instantly receive Assured family status, which means entry to a network of experienced CISOs and executives, with invitations to events, roundtables and attack simulations. Via our access to underwriters, we also offer vast technical capabilities allowing us to plug directly into our clients' technical teams.",
    },
    {
      title: "Renewal Process",
      content:
        "And when it comes to renewal, we never take that for granted. Our existing clients are given the same attentive and nurturing treatment we provide to new businesses. With the blueprints for their security posture, we begin the renewals process early, understanding that both their business and, therefore, cyber risk will have evolved, and their policy will likely need to also. We understand that rushing this process would be detrimental to our clients. This thorough review ensures we never drop the ball and coverage never just auto-renews.",
    },
  ],
};

export const HOW_WE_WORK_FOUNDER_QUOTE = {
  quote:
    "We ensure all our clients are fundamentally prepared for a cyber incident and that their response is as autonomous as possible.",
  attribution: "Henry Green, Founder",
  ctaText: "Get Started",
  secondaryCtaText: "See our work",
};
