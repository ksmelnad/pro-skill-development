import Link from "next/link";
import { auth, signIn, signOut } from "@/auth";
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

function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button type="submit">Sign out</button>
    </form>
  );
}

export default async function Navbar() {
  const session = await auth();
  console.log("Session in Navbar", session);

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
            {session?.user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar>
                    <AvatarImage src={session.user.image!} />
                    {/* <AvatarFallback>CN</AvatarFallback> */}
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {/* <DropdownMenuLabel>Dashboard</DropdownMenuLabel> */}
                  {/* <DropdownMenuSeparator /> */}
                  {/* <DropdownMenuItem>Dashboard</DropdownMenuItem> */}
                  {/* <DropdownMenuSeparator /> */}
                  <DropdownMenuItem>
                    <SignOut />
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/profile">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/self-assessment">Self Assessment</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/admin">Admin</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <form
                action={async () => {
                  "use server";
                  await signIn();
                }}
              >
                <Button variant="link" type="submit">
                  Sign in
                </Button>
              </form>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
