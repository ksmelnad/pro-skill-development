import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button, buttonVariants } from "./ui/button";
import Image from "next/image";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Dropdown } from "react-day-picker";

const navItems = [
  {
    title: "Quiz",
    href: "/quiz",
  },

  {
    title: "Courses",
    href: "#",
  },
  {
    title: "Blog",
    href: "#",
  },
  {
    title: "Contact",
    href: "#",
  },
];

export default function Navbar() {
  return (
    <header className="py-4 bg-slate-200">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <Image src="/logo.svg" width={42} height={42} alt="logo" />
          <Link href="/">
            <p className="text-xl lg:text-2xl font-bold text-blue-800">
              Proskill{" "}
            </p>
            <p>Development</p>
          </Link>
        </div>
        <ul className="hidden md:flex items-center space-x-4 text-sm">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                className={buttonVariants({ variant: "link" })}
                href={item.href}
              >
                {item.title}
              </Link>
            </li>
          ))}
          <li>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <div className="flex items-center gap-2">
                <Link
                  href="/dashboard"
                  className={buttonVariants({ variant: "link" })}
                >
                  Dashboard
                </Link>
                <UserButton />
              </div>
            </SignedIn>
          </li>
        </ul>
      </nav>
    </header>
  );
}
