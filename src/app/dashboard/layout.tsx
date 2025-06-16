import type { Metadata } from "next";
import { AppSidebar } from "@/components/userDashboard/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { UserButton } from "@clerk/nextjs";
import { cookies } from "next/headers";
import prisma from "@/utils/prismadb";
import { auth, currentUser } from "@clerk/nextjs/server";

export const metadata: Metadata = {
  title: "My Skill Learning",
  description: "My Skill Learning",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  const { userId } = await auth();
  const user = await currentUser();
  const profile = await prisma.profile.findUnique({
    where: {
      userId: userId!,
    },
  });
  if (!profile) {
    const createProfile = await prisma.profile.create({
      data: {
        userId: userId!,
      },
    });

    console.log("Profile created for ", user?.fullName);

    if (!createProfile) {
      return null;
    }
  }
  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      <div className="flex flex-col flex-1">
        <header className="bg-sidebar text-sidebar-foreground border-b shadow-xs flex justify-between items-center h-16 shrink-0 gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                {/* <BreadcrumbSeparator className="hidden md:block" /> */}
                {/* <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem> */}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="mr-2">
            <UserButton />
          </div>
        </header>
        <SidebarInset>
          <main className="md:px-12 flex-grow p-6 overflow-auto bg-gray-100">
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
