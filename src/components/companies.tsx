import React from "react";

const companies = [
  {
    name: "EcoTech Innovations",
    description:
      "A leading renewable energy company focused on sustainable technology solutions for a greener future.",
  },
  {
    name: "PharmaHealth Corp",
    description:
      "A top pharmaceutical company specializing in cutting-edge drug development and healthcare solutions.",
  },
  {
    name: "GreenEnergy Solutions",
    description:
      "Pioneers in wind and solar energy, committed to driving the world towards cleaner and more sustainable power sources.",
  },
  {
    name: "BioLife Pharmaceuticals",
    description:
      "Experts in biotechnology and pharmaceutical research, offering innovative treatments and therapies.",
  },
  {
    name: "SunPower Industries",
    description:
      "A renewable energy giant dedicated to harnessing the power of the sun for large-scale energy projects.",
  },
  {
    name: "MediGenix",
    description:
      "An industry leader in pharmaceutical manufacturing and distribution, delivering quality healthcare products globally.",
  },
];

const Companies = () => {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto">
        <h2 className="text-xl lg:text-3xl text-center font-bold mb-4">
          Trusted by Industry Leaders
        </h2>
        <p className="text-sm text-center">
          Join the ranks of top companies that are eager to hire the best talent
          in the industry.
        </p>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {companies.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center px-4 md:px-6 py-6 md:py-8 rounded-sm border shadow-xs"
            >
              <p className="font-bold">{item.name}</p>
              <p className="text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;
