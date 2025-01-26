import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import CarouselComp from "./carousel";
import Navbar from "./navbar";

const Hero = () => {
  return (
    <div className="relative h-screen bg-gradient-to-tl from-blue-800 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
      <Navbar />
      <section className="relative h-[90vh] flex justify-center items-center">
        <div className="container grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="flex flex-col justify-center gap-4 ">
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
              <Button asChild className="bg-blue-800 hover:bg-blue-900">
                <Link href="/sign-up">Get Started</Link>
              </Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
          <div className="hidden md:flex justify-center items-center">
            <div className="relative h-[400px] w-[400px] lg:h-[400px] lg:w-[400px]">
              <Image
                src={
                  "https://plus.unsplash.com/premium_photo-1661475855862-3f61f5b580e6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt="hero image"
                className="object-cover rounded-md"
                fill
              />
            </div>
            {/* <CarouselComp /> */}
          </div>
        </div>
        <div className="absolute bottom-0 right-0 h-[70px] w-full flex justify-center items-center">
          <p className="text-sm ">My skill learning © 2025</p>
        </div>
      </section>
    </div>
  );
};

export default Hero;
