import Navbar from "@/components/navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Skill Learning",
  description: "My Skill Learning",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-gray-100">
      <Navbar />
      {children}
    </div>
  );
}
