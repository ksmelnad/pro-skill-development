import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Software Developer",
    company: "TechCorp",
    content:
      "MySkillLearning transformed my career. The assessments helped identify my skill gaps, and the structured learning paths got me promoted within 6 months.",
    rating: 5,
    avatar: "SJ",
  },
  {
    name: "Michael Chen",
    role: "Product Manager",
    company: "Innovation Labs",
    content:
      "The community aspect is incredible. I've connected with mentors and peers who've been instrumental in my transition to product management.",
    rating: 5,
    avatar: "MC",
  },
  {
    name: "Emily Rodriguez",
    role: "Data Scientist",
    company: "DataFlow Inc",
    content:
      "The certificates I earned here are recognized by employers. It gave me the credibility I needed to land my dream job in data science.",
    rating: 5,
    avatar: "ER",
  },
  {
    name: "David Kim",
    role: "UX Designer",
    company: "Creative Studio",
    content:
      "The skill assessments are thorough and practical. They don't just test theoretical knowledge but real-world application. Highly recommend!",
    rating: 5,
    avatar: "DK",
  },
  {
    name: "Lisa Thompson",
    role: "Marketing Manager",
    company: "Growth Co",
    content:
      "From beginner to expert, the learning paths are well-structured. The forum discussions add so much value to the learning experience.",
    rating: 5,
    avatar: "LT",
  },
  {
    name: "James Wilson",
    role: "DevOps Engineer",
    company: "Cloud Systems",
    content:
      "The platform keeps evolving with industry trends. The content is always current and relevant to what's happening in the tech world.",
    rating: 5,
    avatar: "JW",
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Trusted by
            <span className="block bg-gradient-hero bg-clip-text text-transparent">
              Thousands of Professionals
            </span>
          </h2>
          <p
            className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            See how MySkillLearning has helped professionals across industries
            advance their careers and achieve their goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-learning-orange text-learning-orange"
                    />
                  ))}
                </div>

                <div className="relative mb-6">
                  <Quote className="absolute top-0 left-0 h-8 w-8 text-primary/20 -translate-x-2 -translate-y-2" />
                  <p className="text-muted-foreground italic leading-relaxed pl-6">
                    &quot;{testimonial.content}&quot;
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div
          className="text-center mt-16 animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          <div className="bg-gradient-card border border-border/50 rounded-2xl p-8 max-w-2xl mx-auto shadow-soft">
            <div className="text-3xl font-bold mb-2 bg-gradient-hero bg-clip-text text-transparent">
              Join 10,000+ Professionals
            </div>
            <p className="text-muted-foreground mb-6">
              Who have advanced their careers with MySkillLearning
            </p>
            <div className="flex items-center justify-center gap-1">
              <div className="flex -space-x-2">
                {testimonials.slice(0, 5).map((testimonial, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground text-sm font-semibold border-2 border-background"
                  >
                    {testimonial.avatar}
                  </div>
                ))}
              </div>
              <span className="text-sm text-muted-foreground ml-4">
                and many more...
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
