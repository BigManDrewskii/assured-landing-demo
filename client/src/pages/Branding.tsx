import { Helmet } from "react-helmet-async";
import { GridContainer } from "@/components/layout/GridContainer";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import UnicornAnimation from "@/components/UnicornAnimation";
import {
  MENU_SECTIONS,
  FOOTER_LINKS,
  CONTACT_INFO,
  COMPANY_INFO,
  SOCIAL_LINKS,
  CERTIFICATIONS,
  FOOTER_ANIMATION_PATH,
} from "@/constants/content";
import { useState } from "react";
import { Check, X } from "lucide-react";

const COLORS = [
  {
    name: "BLACK",
    hex: "#1a1a19",
    usage: "Backgrounds, cards, borders, dividers. Complete dark spectrum.",
    shades: ["#1a1a19", "#171717", "#151514", "#121212", "#10100f", "#0d0d0d", "#0a0a0a", "#080807", "#050505", "#030302", "#000000"],
    tints: ["#1a1a19", "#313130", "#484847", "#5f5f5e", "#767675", "#8d8d8c", "#a3a3a3", "#bababa", "#d1d1d1", "#e8e8e8", "#ffffff"],
  },
  {
    name: "OFF-WHITE",
    hex: "#f7f7f7",
    usage: "Text on dark backgrounds, light section backgrounds",
    shades: ["#f7f7f7", "#dedede", "#c6c6c6", "#adadad", "#949494", "#7c7c7c", "#636363", "#4a4a4a", "#313131", "#191919", "#000000"],
    tints: ["#f7f7f7", "#f8f8f8", "#f9f9f9", "#f9f9f9", "#fafafa", "#fbfbfb", "#fcfcfc", "#fdfdfd", "#fdfdfd", "#fefefe", "#ffffff"],
  },
  {
    name: "ASSURED PURPLE",
    hex: "#8363e9",
    usage: "Buttons, links, accents. Not backgrounds.",
    shades: ["#8363e9", "#7659d2", "#694fba", "#5c45a3", "#4f3b8c", "#423275", "#34285d", "#271e46", "#1a142f", "#0d0a17", "#000000"],
    tints: ["#8363e9", "#8f73eb", "#9c82ed", "#a892f0", "#b5a1f2", "#c1b1f4", "#cdc1f6", "#dad0f8", "#e6e0fb", "#f3effd", "#ffffff"],
  },
];

const FONTS = [
  {
    name: "Inter",
    usage: "Body text, descriptions, most written content",
    why: "It's readable. That's the whole point of body text.",
    weights: "Regular (400), Medium (500), Semibold (600)",
    family: "Inter",
  },
  {
    name: "Stack Sans",
    usage: "Headlines, section titles, anything that needs presence",
    why: "It's geometric and strong without being aggressive.",
    weights: "Regular (400), Medium (500), Bold (700)",
    family: "Stack Sans Headline",
  },
  {
    name: "Stack Sans Notch",
    usage: "Labels, tags, small caps text",
    why: "The notched letterforms add texture. Use it in ALL CAPS with wide letter spacing.",
    weights: "Regular (400)",
    family: "Stack Sans Notch",
  },
];

const GUIDELINES = {
  design: {
    dos: [
      "Use provided logo files (white on dark, black on light)",
      "Maintain clear space around logos",
      "Stick to the 5-color palette",
      "Use purple for accents only (buttons, links, highlights)",
      "Check contrast for readability",
    ],
    donts: [
      "Change logo colors or add effects",
      "Stretch, rotate, or modify logo proportions",
      "Use purple as a background color",
      "Add gradients or mix in random colors",
      "Place logos on busy backgrounds",
    ],
  },
  content: {
    dos: [
      "Use Inter for body text (16px minimum)",
      "Use Stack Sans for headlines",
      "Keep line lengths readable (60-80 characters)",
      "Use dark, industrial imagery with high contrast",
      "Desaturate photos to monochrome + purple accents",
    ],
    donts: [
      "Use decorative or custom fonts",
      "Set body text smaller than 16px",
      "Use all caps for paragraphs",
      "Use bright, cheerful stock photos",
      "Use cliché security imagery (padlocks, handshakes)",
    ],
  },
};

function ColorSwatch({ color }: { color: typeof COLORS[0] }) {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 1500);
  };

  return (
    <div className="border border-border p-4 md:p-6">
      <div className="mb-4 md:mb-6">
        <h3 className="font-notch uppercase text-sm mb-2">{color.name}</h3>
        <p className="text-xs text-muted-foreground mb-1">
          <span className="font-medium">Primary:</span> {color.hex}
        </p>
        <p className="text-xs text-muted-foreground/70">{color.usage}</p>
      </div>

      {/* Shades (Darker) */}
      <div className="mb-3">
        <p className="text-[10px] font-notch uppercase text-muted-foreground/60 mb-2">Shades</p>
        <div className="flex gap-1 overflow-x-auto scrollbar-hide">
          {color.shades.map((shade, i) => (
            <button
              key={i}
              onClick={() => copyToClipboard(shade)}
              className="relative flex-shrink-0 w-12 md:flex-1 h-12 md:h-16 border border-border hover:border-primary/50 transition-all group cursor-pointer"
              style={{ backgroundColor: shade }}
              title={`Click to copy: ${shade}`}
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                {copiedColor === shade && (
                  <span className="text-[10px] text-white bg-black/80 px-2 py-1 rounded">
                    ✓
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Tints (Lighter) */}
      <div>
        <p className="text-[10px] font-notch uppercase text-muted-foreground/60 mb-2">Tints</p>
        <div className="flex gap-1 overflow-x-auto scrollbar-hide">
          {color.tints.map((tint, i) => (
            <button
              key={i}
              onClick={() => copyToClipboard(tint)}
              className="relative flex-shrink-0 w-12 md:flex-1 h-12 md:h-16 border border-border hover:border-primary/50 transition-all group cursor-pointer"
              style={{ backgroundColor: tint }}
              title={`Click to copy: ${tint}`}
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                {copiedColor === tint && (
                  <span className="text-[10px] text-white bg-black/80 px-2 py-1 rounded">
                    ✓
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function LogoDisplay() {
  return (
    <div className="space-y-8 md:space-y-12">
      {/* White Logos */}
      <div>
        <h3 className="font-notch uppercase text-sm mb-4 md:mb-6 text-muted-foreground/60">
          White Logos (For Dark Backgrounds)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Primary White Logo */}
          <div className="border border-border p-6 md:p-10">
            <div className="bg-black p-8 md:p-12 mb-4 md:mb-6 flex items-center justify-center min-h-[150px] md:min-h-[200px]">
              <img
                src="/assured-logo-white-new.svg"
                alt="Assured Primary Logo White"
                className="h-12"
              />
            </div>
            <h4 className="font-notch uppercase text-sm mb-2">
              PRIMARY LOGO - WHITE
            </h4>
            <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
              The full white wordmark. Use on dark backgrounds.
            </p>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" className="text-xs min-h-[44px]">
                SVG
              </Button>
              <Button size="sm" variant="outline" className="text-xs min-h-[44px]">
                PNG
              </Button>
            </div>
          </div>

          {/* Icon White */}
          <div className="border border-border p-6 md:p-10">
            <div className="bg-black p-8 md:p-12 mb-4 md:mb-6 flex items-center justify-center min-h-[150px] md:min-h-[200px]">
              <img
                src="/assured-icon-white-new.svg"
                alt="Assured Icon White"
                className="h-24 w-24"
              />
            </div>
            <h4 className="font-notch uppercase text-sm mb-2">ICON - WHITE</h4>
            <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
              Icon mark for dark backgrounds and small spaces.
            </p>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" className="text-xs min-h-[44px]">
                SVG
              </Button>
              <Button size="sm" variant="outline" className="text-xs min-h-[44px]">
                PNG
              </Button>
            </div>
          </div>

          {/* Framed White Logo */}
          <div className="border border-border p-6 md:p-10">
            <div className="bg-black p-8 md:p-12 mb-4 md:mb-6 flex items-center justify-center min-h-[150px] md:min-h-[200px]">
              <img
                src="/assured-official-logo-pack/assured-logo-white/black.svg"
                alt="Assured Framed Logo"
                className="h-16"
              />
            </div>
            <h4 className="font-notch uppercase text-sm mb-2">
              FRAMED LOGO - WHITE
            </h4>
            <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
              Logo with frame. Use for special contexts like footer.
            </p>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" className="text-xs min-h-[44px]">
                SVG
              </Button>
              <Button size="sm" variant="outline" className="text-xs min-h-[44px]">
                PNG
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Black Logos */}
      <div>
        <h3 className="font-notch uppercase text-sm mb-4 md:mb-6 text-muted-foreground/60">
          Black Logos (For Light Backgrounds)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Primary Black Logo */}
          <div className="border border-border p-6 md:p-10">
            <div className="bg-white p-8 md:p-12 mb-4 md:mb-6 flex items-center justify-center min-h-[150px] md:min-h-[200px]">
              <img
                src="/assured-official-logo-pack/assured-logo-black.svg"
                alt="Assured Primary Logo Black"
                className="h-12"
              />
            </div>
            <h4 className="font-notch uppercase text-sm mb-2">
              PRIMARY LOGO - BLACK
            </h4>
            <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
              The full black wordmark. Use on light backgrounds.
            </p>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" className="text-xs min-h-[44px]">
                SVG
              </Button>
              <Button size="sm" variant="outline" className="text-xs min-h-[44px]">
                PNG
              </Button>
            </div>
          </div>

          {/* Icon Black */}
          <div className="border border-border p-6 md:p-10">
            <div className="bg-white p-8 md:p-12 mb-4 md:mb-6 flex items-center justify-center min-h-[150px] md:min-h-[200px]">
              <img
                src="/assured-official-logo-pack/assured-icon-black/white.svg"
                alt="Assured Icon Black"
                className="h-24 w-24"
              />
            </div>
            <h4 className="font-notch uppercase text-sm mb-2">ICON - BLACK</h4>
            <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
              Icon mark for light backgrounds and small spaces.
            </p>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" className="text-xs min-h-[44px]">
                SVG
              </Button>
              <Button size="sm" variant="outline" className="text-xs min-h-[44px]">
                PNG
              </Button>
            </div>
          </div>

          {/* Framed Black Logo */}
          <div className="border border-border p-6 md:p-10">
            <div className="bg-white p-8 md:p-12 mb-4 md:mb-6 flex items-center justify-center min-h-[150px] md:min-h-[200px]">
              <img
                src="/assured-official-logo-pack/assured-logo-black/white.svg"
                alt="Assured Framed Logo Black"
                className="h-16"
              />
            </div>
            <h4 className="font-notch uppercase text-sm mb-2">
              FRAMED LOGO - BLACK
            </h4>
            <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
              Logo with frame for light backgrounds.
            </p>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" className="text-xs min-h-[44px]">
                SVG
              </Button>
              <Button size="sm" variant="outline" className="text-xs min-h-[44px]">
                PNG
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Usage Guidelines */}
      <div className="border border-border p-6 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div>
            <h3 className="font-notch uppercase text-sm mb-3">CLEAR SPACE</h3>
            <p className="text-sm text-muted-foreground">
              Give the logo room to breathe. Maintain space around it equal to
              the height of the lowercase 'a' in 'assured'.
            </p>
          </div>
          <div>
            <h3 className="font-notch uppercase text-sm mb-3">MINIMUM SIZE</h3>
            <p className="text-sm text-muted-foreground">
              Don't go smaller than 120px wide for the horizontal logo or 60px
              wide for the icon. If you need it smaller, you probably need a
              different solution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function GuidelineCard({
  title,
  dos,
  donts,
}: {
  title: string;
  dos: string[];
  donts: string[];
}) {
  return (
    <div className="border border-border p-6 md:p-10">
      <h3 className="font-notch uppercase text-sm mb-6 md:mb-8">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        {/* Dos */}
        <div>
          <h4 className="flex items-center gap-2 text-sm font-medium mb-6" style={{ color: '#22c55e' }}>
            <Check size={18} />
            Do
          </h4>
          <ul className="space-y-3">
            {dos.map((item, i) => (
              <li key={i} className="text-sm text-muted-foreground pl-1">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Don'ts */}
        <div>
          <h4 className="flex items-center gap-2 text-sm font-medium mb-6" style={{ color: '#ef4444' }}>
            <X size={18} />
            Don't
          </h4>
          <ul className="space-y-3">
            {donts.map((item, i) => (
              <li key={i} className="text-sm text-muted-foreground pl-1">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Branding() {
  return (
    <GridContainer>
      <Helmet>
        <title>Brand Guidelines | Logos, Colors & Typography | Assured</title>
        <meta name="description" content="Official Assured brand guidelines. Download logos, view color palettes with tints and shades, typography specifications, and usage guidelines for representing our brand." />
        <link rel="canonical" href="https://assured.co.uk/branding" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Assured" />
        <meta property="og:title" content="Brand Guidelines | Assured" />
        <meta property="og:description" content="Official brand guidelines with logos, colors, typography, and usage guidelines." />
        <meta property="og:image" content="/assured-og.png" />
        <meta property="og:locale" content="en_GB" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Brand Guidelines | Assured" />
        <meta name="twitter:description" content="Official brand guidelines with logos, colors, typography, and usage guidelines." />
        <meta name="twitter:image" content="/assured-og.png" />
      </Helmet>

      <Navigation sections={MENU_SECTIONS} />

      {/* Hero / Title */}
      <Section showPatterns={false}>
        <div className="relative mx-auto px-4 md:px-10 max-w-[1112px] min-h-[500px] md:min-h-[700px] flex items-end pb-12 md:pb-20">
          {/* Branding Hero Background Animation */}
          <div className="absolute inset-0 opacity-72 pointer-events-none">
            <UnicornAnimation
              jsonFilePath="/asrd-visuals-knight-painting-easel.json"
              className="w-full h-full"
            />
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6">Brand Guidelines</h1>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
              Everything you need to represent Assured correctly.
              <br className="hidden sm:inline"/>Logos, colors, typography, and usage guidelines.
            </p>
          </div>
        </div>
      </Section>

      {/* 01 - The Aesthetic */}
      <Section showPatterns={false} number="01">
        <div className="mx-auto px-4 md:px-10 py-12 md:py-20 max-w-[1112px]">
          {/* Centered Header and Intro */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-headline text-3xl md:text-4xl mb-3 md:mb-4">The Aesthetic</h2>
            <p className="font-notch text-lg md:text-xl text-foreground pt-6 pb-6 md:pt-8 md:pb-8 leading-relaxed max-w-3xl mx-auto">
              Cyber risk is industrial. Technical. Unforgiving. So we don't
              dress it up in friendly colours or soft edges. We show it as it
              is.
            </p>
          </div>

          {/* Simple Stacked Aesthetic Elements */}
          <div className="space-y-6 md:space-y-8 mb-8 md:mb-10 max-w-3xl mx-auto">
            <div>
              <h3 className="font-notch uppercase text-sm md:text-md text-primary mb-2 md:mb-3">
                Chainmail and Chrome
              </h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Medieval armour protected knights. We protect businesses. The
                chainmail texture and chrome chains are a visual reminder that
                protection has always required specialisation, strength, and
                attention to detail.
              </p>
            </div>

            <div>
              <h3 className="font-notch uppercase text-sm md:text-md text-primary mb-2 md:mb-3">
                Black Backgrounds, White Text
              </h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                No distractions. The content matters, not the decoration.
              </p>
            </div>

            <div>
              <h3 className="font-notch uppercase text-sm md:text-md text-primary mb-2 md:mb-3">
                Purple Accents
              </h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                A single accent colour. Used sparingly for buttons, links, and
                highlights. Purple sits between the warmth of red and the cold
                of blue. Technical but human.
              </p>
            </div>

            <div>
              <h3 className="font-notch uppercase text-sm md:text-md text-primary mb-2 md:mb-3">
                Dithered/Glitch Effects
              </h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Cyber threats are disruptive. The subtle glitch and distortion
                effects on imagery reflect that reality without being dramatic
                about it.
              </p>
            </div>

            <div>
              <h3 className="font-notch uppercase text-sm md:text-md text-primary mb-2 md:mb-3">
                Industrial Textures
              </h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Mesh, metal, chains. They are more than just metaphors. They're materials
                that do a job. Like we do.
              </p>
            </div>
          </div>

          {/* Closing Statement */}
          <div className="text-center">
            <p className="font-notch text-lg md:text-xl text-foreground pt-8 md:pt-12 leading-relaxed max-w-3xl mx-auto">
              This aesthetic wants to be honest about what cyber insurance actually is: serious, technical,
              and necessary.
            </p>
          </div>
        </div>
      </Section>

      {/* 02 - Visual Gallery */}
      <Section showPatterns="both" number="02">
        <div className="mx-auto px-4 md:px-10 py-12 md:py-20 max-w-[1112px]">
          <h2 className="font-headline text-3xl md:text-4xl mb-6 md:mb-10">Visual Gallery</h2>
          <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8">
            Visual examples showcasing the Assured aesthetic.
          </p>
          <div className="space-y-4 md:space-y-8">
            {/* Helmet Visor Detail Animation */}
            <div className="border border-border overflow-hidden">
              <div className="relative w-full aspect-video bg-black">
                <UnicornAnimation
                  jsonFilePath="/asrd-visuals-helmet-visor-detail.json"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>

            {/* Gauntlet Gripping Sword Animation */}
            <div className="border border-border overflow-hidden">
              <div className="relative w-full aspect-video bg-black">
                <UnicornAnimation
                  jsonFilePath="/asrd-visuals-gauntlet-gripping-sword.json"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>

            {/* Arrow Flight Action Animation */}
            <div className="border border-border overflow-hidden">
              <div className="relative w-full aspect-video bg-black">
                <UnicornAnimation
                  jsonFilePath="/asrd-visuals-arrow-flight-action.json"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>

            {/* Shield Animation */}
            <div className="border border-border overflow-hidden">
              <div className="relative w-full aspect-video bg-black">
                <UnicornAnimation
                  jsonFilePath="/asrd-visuals-shield.json"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 03 - Logos */}
      <Section showPatterns={false} number="03">
        <div className="mx-auto px-4 md:px-10 py-12 md:py-20 max-w-[1112px]">
          <h2 className="font-headline text-3xl md:text-4xl mb-6 md:mb-10">Logos</h2>
          <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8">
            Three versions. Use the right one for the context.
          </p>
          <LogoDisplay />
        </div>
      </Section>

      {/* 04 - Colors */}
      <Section showPatterns="both" number="04">
        <div className="mx-auto px-4 md:px-10 py-12 md:py-20 max-w-[1112px]">
          <h2 className="font-headline text-3xl md:text-4xl mb-6 md:mb-10">Colors</h2>
          <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8">
            Three colours with complete shade and tint spectrums. One black, one white, one accent. Click any swatch to copy its hex value.
          </p>
          <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
            {COLORS.map((color) => (
              <ColorSwatch key={color.hex} color={color} />
            ))}
          </div>
          <div className="border border-border p-6 bg-muted/5">
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">One rule:</span>{" "}
              Always check contrast. If text isn't readable, change the
              background or the text colour. Not both.
            </p>
          </div>
        </div>
      </Section>

      {/* 05 - Typography */}
      <Section showPatterns={false} number="05">
        <div className="mx-auto px-4 md:px-10 py-12 md:py-20 max-w-[1112px]">
          <h2 className="font-headline text-3xl md:text-4xl mb-6 md:mb-10">Typography</h2>
          <p className="text-sm md:text-base text-muted-foreground mb-8 md:mb-12">
            Three fonts. Each has a specific purpose.
          </p>

          {/* Font List */}
          <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
            {FONTS.map((font) => (
              <div key={font.name} className="border border-border p-6 md:p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="font-notch uppercase text-sm text-primary mb-2">{font.name}</h3>
                    <p className="text-sm text-muted-foreground mb-1">{font.usage}</p>
                    <p className="text-xs text-muted-foreground/70">Weights: {font.weights}</p>
                  </div>
                  <a
                    href={`https://fonts.google.com/specimen/${font.name.replace(' ', '+')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-primary hover:underline whitespace-nowrap"
                  >
                    View on Google Fonts →
                  </a>
                </div>

                {/* Font Sample */}
                <div className="border-t border-border pt-4 md:pt-6" style={{ fontFamily: font.family }}>
                  <p className="text-xl md:text-2xl mb-2">
                    {font.name === "Stack Sans Notch" ? "THE QUICK BROWN FOX JUMPS" : "The quick brown fox jumps over the lazy dog"}
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    ABCDEFGHIJKLMNOPQRSTUVWXYZ • abcdefghijklmnopqrstuvwxyz • 0123456789
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Typography Hierarchy Example */}
          <div>
            <p className="text-xs md:text-sm font-notch uppercase text-muted-foreground/60 mb-3 md:mb-4">Hierarchy Example</p>
            <div className="border border-border p-8 md:p-12 bg-black">
              <div className="space-y-2">
                <div className="font-notch uppercase text-[10px] tracking-widest text-primary">
                  SECTION 01
                </div>
                <h2 className="font-headline text-4xl md:text-5xl leading-tight">
                  Cyber insurance for the modern business
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed pt-2">
                  Protection that understands the technical reality of cyber risk. No nonsense, no compromises.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 06 - Dos and Don'ts */}
      <Section showPatterns="both" number="06">
        <div className="mx-auto px-4 md:px-10 py-12 md:py-20 max-w-[1112px]">
          <h2 className="font-headline text-3xl md:text-4xl mb-6 md:mb-10">Dos and Don'ts</h2>
          <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8">
            What to do. What not to do.
          </p>
          <div className="space-y-6 md:space-y-8">
            <GuidelineCard
              title="Design Guidelines"
              dos={GUIDELINES.design.dos}
              donts={GUIDELINES.design.donts}
            />
            <GuidelineCard
              title="Content Guidelines"
              dos={GUIDELINES.content.dos}
              donts={GUIDELINES.content.donts}
            />
          </div>
        </div>
      </Section>

      {/* 07 - Download Assets */}
      <Section showPatterns={false} number="07">
        <div className="mx-auto px-4 md:px-10 py-12 md:py-20 max-w-[1112px]">
          <h2 className="font-headline text-3xl md:text-4xl mb-6 md:mb-10">Download Assets</h2>
          <p className="text-sm md:text-base text-muted-foreground mb-8 md:mb-12">
            Everything you need to represent Assured correctly.
          </p>

          {/* Complete Brand Kit */}
          <div className="border border-border p-6 md:p-8 mb-6 md:mb-8">
            <div className="mb-6 md:mb-8">
              <h3 className="font-notch uppercase text-sm text-primary mb-2 md:mb-3">
                COMPLETE BRAND KIT
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                All logos, colors, fonts, and guidelines in one comprehensive download.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-2 md:gap-y-3 mb-6 md:mb-8 pb-6 md:pb-8 border-b border-border">
              <div className="text-sm text-muted-foreground">
                All logo versions (SVG, PNG, EPS)
              </div>
              <div className="text-sm text-muted-foreground">
                Brand guidelines (PDF)
              </div>
              <div className="text-sm text-muted-foreground">
                Color swatches (ASE, CSS)
              </div>
              <div className="text-sm text-muted-foreground">
                Usage examples
              </div>
              <div className="text-sm text-muted-foreground">
                Typography files (WOFF, TTF)
              </div>
              <div className="text-sm text-muted-foreground">
                Asset templates
              </div>
            </div>

            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-5 text-sm md:text-base font-medium min-h-[44px]">
              Download Complete Brand Kit (3.8 MB)
            </Button>
          </div>

          {/* Additional Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="border border-border p-6 md:p-8">
              <h3 className="font-notch uppercase text-sm text-primary mb-4">LICENSE</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                These assets are for representing Assured in partnership
                materials, media coverage, and approved contexts. If you're not
                sure whether your use case is approved, contact us at{" "}
                <a href="mailto:hello@assured.co.uk" className="text-primary hover:underline">
                  hello@assured.co.uk
                </a>
              </p>
            </div>

            <div className="border border-border p-6 md:p-8">
              <h3 className="font-notch uppercase text-sm text-primary mb-3 md:mb-4">QUESTIONS</h3>
              <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4 leading-relaxed">
                Need something that's not here? Have questions about usage?
              </p>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-muted-foreground">General:</span>{" "}
                  <a href="mailto:hello@assured.co.uk" className="text-primary hover:underline">
                    hello@assured.co.uk
                  </a>
                </div>
                <div>
                  <span className="text-muted-foreground">Media:</span>{" "}
                  <a href="mailto:press@assured.co.uk" className="text-primary hover:underline">
                    press@assured.co.uk
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Footer
        contactInfo={CONTACT_INFO}
        links={FOOTER_LINKS}
        companyInfo={COMPANY_INFO}
        socialLinks={SOCIAL_LINKS}
        certifications={CERTIFICATIONS}
        animationPath={FOOTER_ANIMATION_PATH}
      />
    </GridContainer>
  );
}
