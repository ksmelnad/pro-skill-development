import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, UserPlus, BookOpen, Award, Users } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    step: 1,
    icon: UserPlus,
    title: "Create Your Profile",
    description:
      "Sign up and complete your professional profile with education, experience, and career goals.",
    color: "learning-blue",
  },
  {
    step: 2,
    icon: BookOpen,
    title: "Explore & Learn",
    description:
      "Browse curated learning paths, take skill assessments, and engage with interactive content.",
    color: "learning-purple",
  },
  {
    step: 3,
    icon: Award,
    title: "Earn Certificates",
    description:
      "Complete assessments and projects to earn industry-recognized digital certificates.",
    color: "learning-green",
  },
  {
    step: 4,
    icon: Users,
    title: "Join the Community",
    description:
      "Connect with peers, share knowledge, and participate in discussions to accelerate your growth.",
    color: "learning-orange",
  },
];

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Your Learning Journey in
            <span className="block py-2 bg-gradient-hero bg-clip-text text-transparent">
              Four Simple Steps
            </span>
          </h2>
          <p
            className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            From setup to success, we&apos;ve designed a streamlined process
            that takes you from where you are to where you want to be in your
            career.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-4 gap-8 relative">
              {/* Connection lines */}
              <div className="absolute top-12 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-learning-blue via-learning-purple via-learning-green to-learning-orange" />

              {steps.map((step, index) => (
                <Card
                  key={step.step}
                  className="bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 animate-scale-in relative"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="text-center p-8">
                    <div
                      className={`w-16 h-16 rounded-full bg-${step.color}/10 border-4 border-${step.color} flex items-center justify-center mx-auto mb-6 relative z-10 bg-background`}
                    >
                      <step.icon className={`h-8 w-8 text-${step.color}`} />
                    </div>
                    <div
                      className={`text-sm font-semibold text-${step.color} mb-2`}
                    >
                      STEP {step.step}
                    </div>
                    <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className="flex gap-6 animate-slide-in-left"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div
                  className={`w-16 h-16 rounded-full bg-${step.color}/10 border-4 border-${step.color} flex items-center justify-center flex-shrink-0`}
                >
                  <step.icon className={`h-8 w-8 text-${step.color}`} />
                </div>
                <div className="flex-1">
                  <div
                    className={`text-sm font-semibold text-${step.color} mb-2`}
                  >
                    STEP {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="text-center mt-16 animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          <Button variant="hero" size="lg" className="group" asChild>
            <Link href="/sign-up">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
