"use client";
import Link from "next/link";
import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Button, buttonVariants } from "./ui/button";
import Image from "next/image";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { useState } from "react";

// const navItems = [
//   {
//     title: "Quiz",
//     href: "/quiz",
//   },
// ];

export default function Navbar() {
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <header className="py-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/logo.svg" width={65} height={65} alt="logo" />
          <Link href="/">
            <p className="text-xl lg:text-2xl font-bold text-blue-800">
              My Skill Learning
            </p>
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
                <Button asChild variant={"ghost"}>
                  <SignInButton />
                </Button>
              </SignedOut>
              <SignedIn>
                <div className="flex items-center gap-2">
                  <Link
                    className={buttonVariants({ variant: "ghost" })}
                    href={"/forum"}
                  >
                    Community
                  </Link>
                  <Link
                    href="/dashboard"
                    className={buttonVariants({ variant: "ghost" })}
                  >
                    Dashboard
                  </Link>
                  <UserButton />
                </div>
              </SignedIn>
            </li>
          </ul>
        </nav>
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
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
          <SheetContent side="right" className="w-[400px] sm:w-[540px]">
            <SheetTitle className="my-6 flex justify-center">
              <div className="flex gap-3 items-center">
                <Image src="/logo.svg" width={65} height={65} alt="logo" />
                <Link href="/">
                  <p className="text-xl lg:text-2xl font-bold text-blue-800">
                    My Skill Learning
                  </p>
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
                <Button asChild variant={"ghost"}>
                  <SignInButton />
                </Button>
              </div>
            </SignedOut>
            <SignedIn>
              <div className="flex flex-col gap-2 ">
                <Link
                  className={buttonVariants({ variant: "ghost" })}
                  href={"/forum"}
                  onClick={() => setSheetOpen(false)}
                >
                  Community
                </Link>
                <Link
                  href="/dashboard"
                  className={buttonVariants({ variant: "ghost" })}
                >
                  Dashboard
                </Link>
                <Button
                  asChild
                  variant={"ghost"}
                  className="cursor-pointer"
                  onClick={() => setSheetOpen(false)}
                >
                  <SignOutButton />
                </Button>
              </div>
            </SignedIn>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
