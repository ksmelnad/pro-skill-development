import { Facebook, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const navItems = [
  {
    title: "Features",
    href: "#features",
  },
  {
    title: "Pricing",
    href: "#pricing",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold">My Skill Learning</h3>
          <p className="mt-2">Unlock your potential, one skill at a time.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link href={item.href} className="hover:text-gray-400">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <Link href="#" className="hover:text-gray-400">
              <Twitter />
            </Link>
            <Link href="#" className="hover:text-gray-400">
              <Linkedin />
            </Link>
            <Link href="#" className="hover:text-gray-400">
              <Facebook />
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center mt-8">
        <p>&copy; 2025 My Skill Learning. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
