import Link from "next/link";
import React from "react";

const navItems = [
  {
    title: "Job Seekers",
    href: "#",
  },
  {
    title: "Employers",
    href: "#",
  },
  {
    title: "Courses",
    href: "#",
  },
  {
    title: "Blog",
    href: "#",
  },
];

const otherLinks = [
  {
    title: "About Us",
    href: "#",
  },
  {
    title: "Contact",
    href: "#",
  },
  {
    title: "Terms and Conditions",
    href: "#",
  },
  {
    title: "Privacy Policy",
    href: "#",
  },
];

const Footer = () => {
  return (
    <section className="bg-slate-700 py-6 md:py-8 text-white">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <h3 className="font-bold">Proskill Development</h3>
        </div>
        <ul className="text-sm text-slate-200 space-y-2">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link href={item.href}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <ul className="text-sm text-slate-200 space-y-2">
          {otherLinks.map((item, index) => (
            <li key={index}>
              <Link href={item.href}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Footer;
