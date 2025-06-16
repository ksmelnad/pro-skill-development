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

import { Profile as PrismaProfile } from "@prisma/client";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export const columns: ColumnDef<PrismaProfile>[] = [
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
    accessorKey: "fullName",
    header: "Profile",
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
            <div>
              <p>
                <strong>Full Name:</strong> {profile.personalInfo?.fullName}
              </p>
              <p>
                <strong>Date of Birth:</strong>{" "}
                {new Date(profile.personalInfo?.dob!).toLocaleDateString(
                  "en-US",
                  {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  }
                )}
              </p>
              <p>
                <strong>Email:</strong> {profile.personalInfo?.email}
              </p>
              {profile.personalInfo?.mobile && (
                <p>
                  <strong>Mobile:</strong> {profile.personalInfo?.mobile}
                </p>
              )}
              {profile.personalInfo?.address && (
                <p>
                  <strong>Address:</strong> {profile.personalInfo?.address}
                </p>
              )}
              {profile.personalInfo?.city && (
                <p>
                  <strong>City:</strong> {profile.personalInfo?.city}
                </p>
              )}
              {profile.personalInfo?.state && (
                <p>
                  <strong>State:</strong> {profile.personalInfo?.state}
                </p>
              )}
              {profile.personalInfo?.postalCode && (
                <p>
                  <strong>Postal Code:</strong>{" "}
                  {profile.personalInfo?.postalCode}
                </p>
              )}
              {profile.personalInfo?.country && (
                <p>
                  <strong>Country:</strong> {profile.personalInfo?.country}
                </p>
              )}
              {profile.personalInfo?.hobbies && (
                <p>
                  <strong>Hobbies:</strong> {profile.personalInfo?.hobbies}
                </p>
              )}
              {profile.personalInfo?.areaImprovementCurrent && (
                <p>
                  <strong>Current Improvement Area:</strong>{" "}
                  {profile.personalInfo?.areaImprovementCurrent}
                </p>
              )}
              {profile.personalInfo?.areaImprovementFuture && (
                <p>
                  <strong>Future Improvement Area:</strong>{" "}
                  {profile.personalInfo?.areaImprovementFuture}
                </p>
              )}
            </div>
            <DialogFooter>
              <DialogClose>Close</DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      );
    },
  },
];

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({
    currency: false,
  });
  const [rowSelection, setRowSelection] = useState({});
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default function Profiles({ profiles }: { profiles: PrismaProfile[] }) {
  return <DataTable columns={columns} data={profiles} />;
}
