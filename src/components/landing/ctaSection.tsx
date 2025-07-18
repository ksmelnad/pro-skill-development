import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export const CtaSection = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div
          className="absolute top-10 left-10 w-32 h-32 bg-primary-foreground/10 rounded-full animate-float"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute top-20 right-20 w-24 h-24 bg-primary-foreground/10 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-20 left-1/4 w-16 h-16 bg-primary-foreground/10 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-10 right-1/3 w-20 h-20 bg-primary-foreground/10 rounded-full animate-float"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6 animate-fade-in">
            <Sparkles className="h-8 w-8 text-primary-foreground" />
            <span className="text-primary-foreground/80 font-semibold">
              Ready to Transform Your Career?
            </span>
            <Sparkles className="h-8 w-8 text-primary-foreground" />
          </div>

          <h2
            className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Start Your Learning
            <span className="block bg-gradient-to-r from-learning-orange to-learning-green bg-clip-text text-transparent">
              Journey Today
            </span>
          </h2>

          <p
            className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            Join thousands of professionals who have accelerated their careers
            with our comprehensive learning platform. Your future self will
            thank you.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <Button
              variant="accent"
              size="lg"
              className="group text-lg px-8 py-6 rounded-xl"
              asChild
            >
              <Link href="/sign-up">
                Get Started for Free
                <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20 backdrop-blur-sm text-lg px-8 py-6 rounded-xl"
            >
              Schedule a Demo
            </Button>
          </div>

          {/* Trust indicators */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
              <div className="text-2xl font-bold text-primary-foreground mb-2">
                ✓ Free Trial
              </div>
              <div className="text-primary-foreground/80">
                No credit card required
              </div>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
              <div className="text-2xl font-bold text-primary-foreground mb-2">
                ✓ Expert Support
              </div>
              <div className="text-primary-foreground/80">
                24/7 learning assistance
              </div>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
              <div className="text-2xl font-bold text-primary-foreground mb-2">
                ✓ Career Growth
              </div>
              <div className="text-primary-foreground/80">
                Proven success stories
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
