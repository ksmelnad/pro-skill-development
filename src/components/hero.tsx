import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-slate-200 h-[60vh] ">
      <div className="container mx-auto py-8 grid grid-cols-1 md:grid-cols-2 items-center h-full">
        <div className="flex flex-col justify-center gap-4 ">
          <h2 className="text-4xl max-w-sm lg:max-w-lg lg:text-5xl font-bold">
            Unlock Your Potential in Renewable & Pharmaceutical Industries
          </h2>
          <p className="text-sm max-w-sm lg:max-w-lg">
            Connect with top companies, explore exciting job opportunities, and
            upskill with industry-leading courses.
          </p>
          <div className="mt-6 flex space-x-4">
            <Button className="bg-blue-800 hover:bg-blue-900">
              Get Started
            </Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </div>
        <div className="hidden md:flex justify-center items-center ">
          <div className="relative h-[400px] w-[400px] lg:h-[400px] lg:w-[400px]">
            <Image
              src={
                "https://plus.unsplash.com/premium_photo-1661475855862-3f61f5b580e6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="hero image"
              className="object-cover"
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
