"use client";
import { useState, useTransition } from "react";
import {
  SortingState,
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  getSortedRowModel,
  getFilteredRowModel,
  ColumnFiltersState,
  VisibilityState,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";

import { User } from "@prisma/client";
import { getClerkUserList, syncClerkUsersToDB } from "@/app/actions/clerk";
import { toast } from "sonner";
import { DataTable } from "../userDashboard/data-table";
import Image from "next/image";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export const columns: ColumnDef<User>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "User",
    cell: ({ row }) => {
      const imageUrl: string = row.original.image!;
      const name: string = row.getValue("name");
      return (
        <div className="flex items-center gap-2">
          <Image
            src={imageUrl}
            alt="User"
            className="w-8 h-8 rounded-full"
            width={40}
            height={40}
          />
          <span>{name}</span>
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
    cell: ({ row }) => {
      const profile = row.original;
      return (
        <Dialog>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Profile</DialogTitle>
              <DialogDescription>
                Here is the profile details.
              </DialogDescription>
            </DialogHeader>

            <DialogFooter>
              <DialogClose>Close</DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      );
    },
  },
];

// export function DataTable<TData, TValue>({
//   columns,
//   data,
// }: DataTableProps<TData, TValue>) {
//   const [sorting, setSorting] = useState<SortingState>([]);
//   const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
//   const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({
//     currency: false,
//   });
//   const [rowSelection, setRowSelection] = useState({});
//   const table = useReactTable({
//     data,
//     columns,
//     getCoreRowModel: getCoreRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//     onSortingChange: setSorting,
//     getSortedRowModel: getSortedRowModel(),
//     onColumnFiltersChange: setColumnFilters,
//     getFilteredRowModel: getFilteredRowModel(),
//     onColumnVisibilityChange: setColumnVisibility,
//     onRowSelectionChange: setRowSelection,
//     state: {
//       sorting,
//       columnFilters,
//       columnVisibility,
//       rowSelection,
//     },
//   });

//   return (
//     <div className="rounded-md border">
//       <Table>
//         <TableHeader>
//           {table.getHeaderGroups().map((headerGroup) => (
//             <TableRow key={headerGroup.id}>
//               {headerGroup.headers.map((header) => {
//                 return (
//                   <TableHead key={header.id}>
//                     {header.isPlaceholder
//                       ? null
//                       : flexRender(
//                           header.column.columnDef.header,
//                           header.getContext()
//                         )}
//                   </TableHead>
//                 );
//               })}
//             </TableRow>
//           ))}
//         </TableHeader>
//         <TableBody>
//           {table.getRowModel().rows?.length ? (
//             table.getRowModel().rows.map((row) => (
//               <TableRow
//                 key={row.id}
//                 data-state={row.getIsSelected() && "selected"}
//               >
//                 {row.getVisibleCells().map((cell) => (
//                   <TableCell key={cell.id}>
//                     {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             ))
//           ) : (
//             <TableRow>
//               <TableCell colSpan={columns.length} className="h-24 text-center">
//                 No results.
//               </TableCell>
//             </TableRow>
//           )}
//         </TableBody>
//       </Table>
//     </div>
//   );
// }

const handleSyncClerkUserListToDB = async () => {
  const response = await syncClerkUsersToDB();
  console.log(response);
  toast.success("Total Users Fetched: " + response.totalFetched, {
    description: "Total Users Upserted: " + response.totalUpserted,
  });
};

export default function Profiles({ users }: { users: User[] }) {
  return (
    <div>
      <Button onClick={handleSyncClerkUserListToDB}>
        Sync Clerk User List to DB
      </Button>
      {/* <DataTable columns={columns} data={users} /> */}
      <DataTable columns={columns} data={users} />
    </div>
  );
}
