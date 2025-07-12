import { TrendingUp, Users, Award, BookOpen } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "10,000+",
    label: "Active Learners",
    description: "Growing community of professionals",
    color: "learning-blue",
  },
  {
    icon: BookOpen,
    value: "500+",
    label: "Skill Assessments",
    description: "Comprehensive tests across industries",
    color: "learning-purple",
  },
  {
    icon: Award,
    value: "15,000+",
    label: "Certificates Issued",
    description: "Industry-recognized achievements",
    color: "learning-green",
  },
  {
    icon: TrendingUp,
    value: "95%",
    label: "Career Advancement",
    description: "Users report career growth",
    color: "learning-orange",
  },
];

export const StatsSection = () => {
  return (
    <section className="py-16 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center text-primary-foreground animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-primary-foreground/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <stat.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-xl font-semibold mb-1">{stat.label}</div>
              <div className="text-primary-foreground/80 text-sm">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
