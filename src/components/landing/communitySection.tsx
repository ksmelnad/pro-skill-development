import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Users, Heart, ArrowRight } from "lucide-react";

const communityFeatures = [
  {
    icon: MessageSquare,
    title: "Discussion Forums",
    description:
      "Engage in meaningful conversations about industry trends, best practices, and career advice.",
    stats: "2,500+ Active Discussions",
  },
  {
    icon: Users,
    title: "Study Groups",
    description:
      "Join or create study groups with peers who share similar learning goals and interests.",
    stats: "150+ Study Groups",
  },
  {
    icon: Heart,
    title: "Mentorship Program",
    description:
      "Connect with experienced professionals who can guide your career development journey.",
    stats: "500+ Mentors Available",
  },
];

const recentActivity = [
  {
    user: "Sarah M.",
    action: "completed",
    subject: "Advanced JavaScript Assessment",
    time: "2 hours ago",
    avatar: "SM",
  },
  {
    user: "David L.",
    action: "started discussion",
    subject: "Best Practices for React Development",
    time: "4 hours ago",
    avatar: "DL",
  },
  {
    user: "Maria G.",
    action: "earned certificate",
    subject: "Digital Marketing Fundamentals",
    time: "6 hours ago",
    avatar: "MG",
  },
  {
    user: "Alex K.",
    action: "joined study group",
    subject: "Python for Data Science",
    time: "8 hours ago",
    avatar: "AK",
  },
];

export const CommunitySection = () => {
  return (
    <section id="community" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Join a Thriving
            <span className="block bg-gradient-hero bg-clip-text text-transparent">
              Learning Community
            </span>
          </h2>
          <p
            className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Connect with like-minded professionals, share knowledge, and
            accelerate your learning through collaborative experiences and peer
            support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Community Features */}
          <div className="space-y-8">
            {communityFeatures.map((feature, index) => (
              <Card
                key={feature.title}
                className="bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 animate-slide-in-left"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-semibold">
                        {feature.title}
                      </CardTitle>
                      <Badge
                        variant="secondary"
                        className="mt-1 bg-success/10 text-success border-0"
                      >
                        {feature.stats}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Recent Activity */}
          <div
            className="animate-slide-in-right"
            style={{ animationDelay: "0.4s" }}
          >
            <Card className="bg-gradient-card border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                  Live Community Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground text-sm font-semibold">
                        {activity.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm">
                          <span className="font-semibold">{activity.user}</span>
                          <span className="text-muted-foreground">
                            {" "}
                            {activity.action}{" "}
                          </span>
                          <span className="font-medium">
                            {activity.subject}
                          </span>
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div
          className="text-center animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          <Button variant="hero" size="lg" className="group">
            Join Our Community
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};
