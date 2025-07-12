import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Newsletter = () => {
  return (
    <section className="bg-slate-50 py-8 md:py-12 h-[300px] flex flex-col justify-center items-center">
      <div className="container mx-auto px-4">
        <h3 className="text-xl lg:text-3xl text-center font-bold mb-4">
          Stay Updated with Industry Trends
        </h3>
        <p className="text-sm text-center">
          Subscribe to our newsletter for the latest job openings, career tips,
          and insights from industry experts.
        </p>
        <div className="mt-14 flex space-x-4 justify-center">
          <Input
            className="max-w-sm bg-white"
            type="email"
            placeholder="Enter your email address"
          ></Input>
          <Button className="bg-blue-800 hover:bg-blue-900">Subscribe</Button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
