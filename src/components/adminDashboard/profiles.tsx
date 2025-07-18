"use client";
import { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, Eye, User, UserCircle } from "lucide-react";
import { Profile } from "@prisma/client";
import { DataTable } from "../userDashboard/data-table";
import Image from "next/image";
import ProfileView from "./profile-view";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const ProfileDialog = ({ userId }: { userId: string }) => {
  const [open, setOpen] = useState(false);
  const { data: profile, error } = useSWR(
    open ? `/api/admin/profiles/${userId}` : null,
    fetcher
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <Eye className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className=" max-w-3xl max-h-[90dvh] overflow-auto">
        <DialogHeader>
          <DialogTitle>Profile Details</DialogTitle>
        </DialogHeader>
        {error && <div>Failed to load profile.</div>}
        {!profile && !error && <div>Loading...</div>}
        {profile && <ProfileView profile={profile} />}
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export const columns: ColumnDef<Profile>[] = [
  {
    accessorKey: "personalInfo.fullName",
    header: "Profile",
    cell: ({ row }) => {
      const imageUrl: string = row.original.personalInfo?.image!;
      const fullName = row.original.personalInfo?.fullName;
      return (
        <div className="flex items-center gap-2">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt="User"
              className="w-8 h-8 rounded-full"
              width={40}
              height={40}
            />
          ) : (
            <UserCircle
              className="w-8 h-8 rounded-full"
              strokeWidth="0.9"
              color="gray"
            />
          )}

          <span>{fullName}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="-mr-4"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Joined
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const date: Date = row.getValue("createdAt");
      return date.toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    },
  },
  {
    id: "view",
    header: "View",
    cell: ({ row }) => <ProfileDialog userId={row.original.userId} />,
  },
];

export default function Profiles({ profiles }: { profiles: Profile[] }) {
  return (
    <div className="px-4">
      <DataTable columns={columns} data={profiles} />
    </div>
  );
}
