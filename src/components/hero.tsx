import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import CarouselComp from "./carousel";
import Navbar from "./navbar";
import { SignedIn, SignedOut } from "@clerk/nextjs";

const Hero = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 -z-10"></div>
      <div className="absolute inset-0 bg-[url(/grid.svg)] bg-center -z-10"></div>
      <section className="relative h-[90vh] flex justify-center items-center">
        <div className="container grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="flex flex-col justify-center gap-4 animate-fade-in-up">
            <h2 className="text-4xl max-w-sm lg:max-w-lg lg:text-5xl font-bold">
              Unlock Your Potential, One Skill at a Time
            </h2>
            <p className="text-sm max-w-sm lg:max-w-lg">
              My Skill Learning is your personalized pathway to career growth
              and success. Enhance your skills with our self-assessment tools,
              quizzes, and certificate programs. Join our community today and
              start achieving your goals!
            </p>
            <div className="mt-6 flex space-x-4">
              <SignedOut>
                <Button asChild className="bg-blue-800 hover:bg-blue-900">
                  <Link href="/sign-up">Get Started</Link>
                </Button>
              </SignedOut>
              <SignedIn>
                <Button asChild className="bg-blue-800 hover:bg-blue-900">
                  <Link href="/dashboard">Dashboard</Link>
                </Button>
              </SignedIn>
            </div>
          </div>
          <div className="hidden md:flex justify-center items-center">
            <div className="relative h-[400px] w-[400px] lg:h-[400px] lg:w-[400px]">
              <Image
                src={
                  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt="hero image"
                className="object-cover rounded-md"
                fill
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
