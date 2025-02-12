import React from "react";

const features = [
  {
    title: "Tailored Job Matching",
    desc: "Our advanced algorithms match your skills and experience with the best job opportunities in the renewable and pharmaceutical industries.",
  },
  {
    title: "Seamless Application Process",
    desc: "Upload your resume, build a strong profile, and apply to your dream job with just a few clicks.",
  },
  {
    title: "Industry Connections",
    desc: "Join a network of leading companies dedicated to innovation and sustainability in the renewable and pharmaceutical sectors.",
  },
  {
    title: "Personalized Career Guidance",
    desc: " Receive tailored advice and resources to help you navigate your career path and achieve your goals.",
  },
  {
    title: "Secure & Confidential",
    desc: "Your data is safe with us. We prioritize your privacy and ensure a secure experience throughout your job search.",
  },
];

const Features = () => {
  return (
    <section className="py-20 lg:py-24 min-h-[700px]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center px-4 md:px-6 py-6 md:py-8 rounded-sm border shadow-xs bg-slate-100 h-[250px]"
          >
            <p className="font-semibold">{item.title}</p>
            <p className="text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
