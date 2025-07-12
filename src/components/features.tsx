import { Briefcase, Zap, ShieldCheck, BarChart, Users } from "lucide-react";

const features = [
  {
    title: "Tailored Job Matching",
    desc: "Our advanced algorithms match your skills and experience with the best job opportunities in the renewable and pharmaceutical industries.",
    icon: <Briefcase />,
  },
  {
    title: "Seamless Application Process",
    desc: "Upload your resume, build a strong profile, and apply to your dream job with just a few clicks.",
    icon: <Zap />,
  },
  {
    title: "Industry Connections",
    desc: "Join a network of leading companies dedicated to innovation and sustainability in the renewable and pharmaceutical sectors.",
    icon: <Users />,
  },
  {
    title: "Personalized Career Guidance",
    desc: " Receive tailored advice and resources to help you navigate your career path and achieve your goals.",
    icon: <BarChart />,
  },
  {
    title: "Secure & Confidential",
    desc: "Your data is safe with us. We prioritize your privacy and ensure a secure experience throughout your job search.",
    icon: <ShieldCheck />,
  },
];

const Features = () => {
  return (
    <section className="py-20 lg:py-24 bg-slate-50">
      <div className="container mx-auto">
        <h2 className="text-3xl lg:text-4xl text-center font-bold mb-12">
          Why Choose My Skill Learning?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-lg border shadow-lg transform hover:scale-105 transition-transform duration-300 bg-white"
            >
              <div className="text-blue-800 mb-4">{item.icon}</div>
              <h3 className="font-bold text-xl mb-2">{item.title}</h3>
              <p className="text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
