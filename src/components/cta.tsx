import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Button } from "./ui/button";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold">
          Ready to Boost Your Career?
        </h2>
        <p className="mt-4 text-lg max-w-xl mx-auto">
          Join My Skill Learning today and take the next step towards achieving
          your professional goals.
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <SignedOut>
            <Button asChild className="bg-white text-blue-800 hover:bg-slate-100">
              <Link href="/sign-up">Get Started for Free</Link>
            </Button>
          </SignedOut>
          <SignedIn>
            <Button asChild className="bg-white text-blue-800 hover:bg-slate-100">
              <Link href="/dashboard">Go to Dashboard</Link>
            </Button>
          </SignedIn>
        </div>
      </div>
    </section>
  );
};

export default CTA;
