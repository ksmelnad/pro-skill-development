import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div className="relative min-h-screen w-full flex flex-col justify-center md:grid md:grid-cols-2 gap-4 items-center">
      <section className="relative min-h-screen hidden md:flex items-center justify-center overflow-hidden pt-16">
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
            <div className="flex justify-center items-center h-20 ">
              <div className="flex gap-3 items-center ">
                <Image src="/logo.svg" width={60} height={60} alt="logo" />
                <Link href="/">
                  <p className="text-2xl lg:text-4xl font-bold text-white">
                    My Skill Learning
                  </p>
                </Link>
              </div>
            </div>
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
              Master new skills, take assessments, earn certificates, and
              connect with a community of learners. Your journey to career
              success starts here.
            </p>

            {/* Stats */}
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="bg-background/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
                <div className="text-3xl font-bold text-primary-foreground mb-2">
                  10K+
                </div>
                <div className="text-primary-foreground/80">
                  Active Learners
                </div>
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
      <div className="mt-4 md:hidden flex gap-3 items-center ">
        <Image src="/logo.svg" width={60} height={60} alt="logo" />
        <Link href="/">
          <p className="text-2xl lg:text-4xl font-bold ">My Skill Learning</p>
        </Link>
      </div>
      <div className="h-full w-full flex justify-center items-center p-4">
        <SignIn />
      </div>
    </div>
  );
}
