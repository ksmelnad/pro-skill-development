import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { AuthProvider } from "@/components/AuthProvider";
import { auth } from "@/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Proskill Development",
  description: "Proskill Development",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider session={session}>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
