import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "hero-image.jpg";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("/hero-image.jpg")` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-secondary/80 to-primary/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Unlock Your
            <span className="block bg-gradient-to-r from-learning-orange to-learning-green bg-clip-text text-transparent">
              Career Potential
            </span>
          </h1>

          <p
            className="text-xl md:text-2xl text-primary-foreground/90 mb-8 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Master new skills, take assessments, earn certificates, and connect
            with a community of learners. Your journey to career success starts
            here.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <Button variant="hero" size="lg" className="group" asChild>
              <Link href="/sign-up">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="bg-background/10 border-primary-foreground/20 text-primary-foreground hover:bg-background/20 backdrop-blur-sm"
              asChild
            >
              <Link href="#features">
                <Play className="mr-2 h-5 w-5" />
                Know more
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="bg-background/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
              <div className="text-3xl font-bold text-primary-foreground mb-2">
                10K+
              </div>
              <div className="text-primary-foreground/80">Active Learners</div>
            </div>
            <div className="bg-background/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
              <div className="text-3xl font-bold text-primary-foreground mb-2">
                500+
              </div>
              <div className="text-primary-foreground/80">
                Skill Assessments
              </div>
            </div>
            <div className="bg-background/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
              <div className="text-3xl font-bold text-primary-foreground mb-2">
                95%
              </div>
              <div className="text-primary-foreground/80">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div
        className="absolute top-20 left-10 w-20 h-20 bg-learning-blue/20 rounded-full animate-float"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="absolute top-40 right-20 w-16 h-16 bg-learning-purple/20 rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-40 left-20 w-12 h-12 bg-learning-green/20 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-20 right-10 w-24 h-24 bg-learning-orange/20 rounded-full animate-float"
        style={{ animationDelay: "1.5s" }}
      />
    </section>
  );
};
