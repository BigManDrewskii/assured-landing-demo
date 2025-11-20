import { Button } from "@/components/ui/button";
import { AlertCircle, Home } from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  const handleGoHome = () => {
    setLocation("/");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background text-foreground relative">
      {/* Vertical Grid Lines */}
      <div className="fixed inset-0 pointer-events-none z-[100]">
        <div className="max-w-[1112px] mx-auto h-full relative">
          <div
            className="absolute left-0 top-0 bottom-0 w-px bg-border"
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-px bg-border"
          />
        </div>
      </div>

      <div className="w-full max-w-[1112px] mx-8 relative z-10">
        <div className="max-w-2xl mx-auto border border-border bg-card/40 backdrop-blur-sm p-12 text-center">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <AlertCircle className="h-20 w-20 text-primary" />
            </div>
          </div>

          {/* 404 */}
          <h1 className="text-8xl font-bold text-gradient-purple mb-4">404</h1>

          {/* Title */}
          <h2 className="text-3xl font-bold mb-6">Page Not Found</h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground/80 mb-10 leading-relaxed max-w-lg mx-auto">
            Sorry, the page you are looking for doesn't exist. It may have been moved or
            deleted.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleGoHome}
              size="lg"
              className="bg-primary text-primary-foreground font-medium px-8 h-12 btn-enhanced shadow-purple-glow"
            >
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
