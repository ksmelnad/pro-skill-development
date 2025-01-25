import Link from "next/link";
import React from "react";

const navItems = [
  // {
  //   title: "Job Seekers",
  //   href: "#",
  // },
  // {
  //   title: "Employers",
  //   href: "#",
  // },
  {
    title: "Quiz",
    href: "/quiz",
  },
];

const otherLinks = [
  // {
  //   title: "About Us",
  //   href: "#",
  // },
  // {
  //   title: "Contact",
  //   href: "#",
  // },
  // {
  //   title: "Terms and Conditions",
  //   href: "#",
  // },
  // {
  //   title: "Privacy Policy",
  //   href: "#",
  // },
];

const Footer = () => {
  return (
    <section className="bg-slate-700 py-6 md:py-8 text-white h-[200px] flex justify-center items-center">
      <div className="container mx-auto px-4 ">
        <div>
          <h3 className="text-sm font-bold text-center">
            My Skill Learning @ 2025
          </h3>
        </div>
        {/* <ul className="text-sm text-slate-200 space-y-2">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link href={item.href}>{item.title}</Link>
            </li>
          ))}
        </ul> */}
        {/* <ul className="text-sm text-slate-200 space-y-2">
          {otherLinks.map((item, index) => (
            <li key={index}>
              <Link href={item.href}>{item.title}</Link>
            </li>
          ))}
        </ul> */}
      </div>
    </section>
  );
};

export default Footer;
