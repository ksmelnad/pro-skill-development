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
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

// const navItems = [
//   {
//     title: "Quiz",
//     href: "/quiz",
//   },
// ];

export default function Navbar() {
  return (
    <header className="py-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <Image src="/logo.svg" width={42} height={42} alt="logo" />
          <Link href="/">
            <p className="text-xl lg:text-2xl font-bold text-blue-800">
              My Skill{" "}
            </p>
            <p>Learning</p>
          </Link>
        </div>
        <nav className="hidden  md:flex justify-between items-center">
          <ul className="hidden md:flex items-center space-x-4 text-sm">
            {/* {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  className={buttonVariants({ variant: "link" })}
                  href={item.href}
                >
                  {item.title}
                </Link>
              </li>
            ))} */}
            <li>
              <SignedOut>
                <Button asChild variant={"outline"}>
                  <SignInButton />
                </Button>
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
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full md:hidden"
            >
              <MenuIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="md:hidden">
            <SheetTitle className="mb-6">
              <div className="flex gap-3 items-center">
                <Image src="/logo.svg" width={42} height={42} alt="logo" />
                <Link href="/">
                  <p className="text-xl lg:text-2xl font-bold text-blue-800">
                    My Skill{" "}
                  </p>
                  <p>Learning</p>
                </Link>
              </div>
            </SheetTitle>
            {/* {navItems.map((item, index) => (
              <Link key={index} href={item.href}>
                <Button variant="link" size="lg" className="w-full text-left">
                  {item.title}
                </Button>
              </Link>
            ))} */}
            <SignedOut>
              <div className="flex justify-center">
                <Button asChild variant={"outline"}>
                  <SignInButton />
                </Button>
              </div>
            </SignedOut>
            <SignedIn>
              <div className="flex flex-col gap-2 items-center">
                <Link
                  href="/dashboard"
                  className={buttonVariants({ variant: "link" })}
                >
                  Dashboard
                </Link>
                <UserButton />
              </div>
            </SignedIn>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
