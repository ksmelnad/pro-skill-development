"use client";

import * as React from "react";
import {
  BookOpenCheck,
  Calendar,
  Glasses,
  Home,
  Inbox,
  Search,
  Settings,
  ChartNoAxesCombined,
  User2,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarFooter,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

const items = [
  {
    title: "Home",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Profile",
    url: "/dashboard/profile",
    icon: User2,
  },
  {
    title: "Assessment",
    url: "/dashboard/assessment",
    icon: Glasses,
  },
  {
    title: "Quiz",
    url: "/dashboard/quiz",
    icon: BookOpenCheck,
  },
  {
    title: "Results",
    url: "/dashboard/results",
    icon: ChartNoAxesCombined,
  },
  // {
  //   title: "Settings",
  //   url: "#",
  //   icon: Settings,
  // },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { isMobile, toggleSidebar } = useSidebar();
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/">
                <Image src="/logo.svg" width={42} height={42} alt="logo" />
                <span>My Skill Learning</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.url}
                      onClick={() => isMobile && toggleSidebar()}
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <UserButton />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
