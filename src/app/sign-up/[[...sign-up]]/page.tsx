import { SignUp } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div className="h-screen w-full grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
      <div className="bg-slate-200 h-full p-4 flex justify-center items-start">
        <div className="flex gap-3 items-center mt-20">
          <Image src="/logo.svg" width={42} height={42} alt="logo" />
          <Link href="/">
            <p className="text-xl lg:text-2xl font-bold text-blue-800">
              My Skill{" "}
            </p>
            <p>Learning</p>
          </Link>
        </div>
      </div>
      <div className="h-full w-full flex justify-center items-center p-4">
        <SignUp />
      </div>
    </div>
  );
}
