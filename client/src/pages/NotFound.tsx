import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import UnicornAnimation from "@/components/UnicornAnimation";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  const handleGoHome = () => {
    setLocation("/");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background text-foreground relative overflow-hidden">
      <Helmet>
        <title>Page Not Found | Assured</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      {/* Background Animation */}
      <div className="absolute inset-0 opacity-100">
        <UnicornAnimation
          jsonFilePath="/bg-animation-simple.json"
          className="w-full h-full"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-8">
        <h1 className="font-headline text-[180px] md:text-[240px] leading-none mb-8 text-foreground">
          404
        </h1>

        <h2 className="font-headline text-4xl md:text-5xl mb-4">
          Wrong turn.
        </h2>

        <p className="text-xl text-muted-foreground mb-10 max-w-md mx-auto leading-relaxed">
          We looked everywhere. This page doesn't exist. Sorry about that.
        </p>

        <Button
          onClick={handleGoHome}
          size="lg"
          className="bg-primary text-primary-foreground font-medium px-8 h-12"
        >
          Back to civilization
        </Button>
      </div>
    </div>
  );
}
