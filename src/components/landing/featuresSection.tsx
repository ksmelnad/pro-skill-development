import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Award,
  Users,
  BookOpen,
  BarChart3,
  Shield,
  Zap,
  Trophy,
  MessageSquare,
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Comprehensive Learning Paths",
    description:
      "Structured courses designed by industry experts to take you from beginner to professional.",
    color: "learning-blue",
    badge: "Popular",
  },
  {
    icon: BarChart3,
    title: "Skill Assessments",
    description:
      "Test your knowledge with interactive quizzes and get detailed feedback on your progress.",
    color: "learning-purple",
    badge: "Assessment",
  },
  {
    icon: Award,
    title: "Digital Certificates",
    description:
      "Earn recognized certificates upon completion to showcase your achievements to employers.",
    color: "learning-green",
    badge: "Certified",
  },
  {
    icon: Users,
    title: "Community Forum",
    description:
      "Connect with peers, share insights, and get help from a vibrant learning community.",
    color: "learning-orange",
    badge: "Community",
  },
  {
    icon: GraduationCap,
    title: "Career Development",
    description:
      "Build a comprehensive professional profile and track your career advancement.",
    color: "primary",
    badge: "Career",
  },
  {
    icon: Shield,
    title: "Admin Dashboard",
    description:
      "Powerful tools for administrators to manage users, create content, and track progress.",
    color: "secondary",
    badge: "Admin",
  },
  {
    icon: Zap,
    title: "Real-time Progress",
    description:
      "Track your learning journey with detailed analytics and progress visualization.",
    color: "accent",
    badge: "Analytics",
  },
  {
    icon: Trophy,
    title: "Achievement System",
    description:
      "Gamified learning experience with badges, points, and leaderboards to keep you motivated.",
    color: "success",
    badge: "Gamified",
  },
  {
    icon: MessageSquare,
    title: "Interactive Discussions",
    description:
      "Engage in meaningful conversations through threaded discussions and comments.",
    color: "learning-blue",
    badge: "Social",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Everything You Need to
            <span className="block py-2 bg-gradient-hero bg-clip-text text-transparent">
              Succeed in Your Career
            </span>
          </h2>
          <p
            className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Our comprehensive platform combines learning, assessment, community,
            and career development into one powerful experience designed to
            accelerate your professional growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 animate-scale-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="relative mx-auto mb-4">
                  <div
                    className={`w-16 h-16 rounded-xl bg-${feature.color}/10 border border-${feature.color}/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className={`h-8 w-8 text-${feature.color}`} />
                  </div>
                  <Badge
                    variant="secondary"
                    className="absolute -top-2 -right-2 text-xs bg-gradient-primary text-primary-foreground border-0"
                  >
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
