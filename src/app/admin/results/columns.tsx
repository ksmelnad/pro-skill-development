"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "userName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Candidate" />
    ),
  },
  {
    accessorKey: "quizTitle",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Quiz Title" />
    ),
  },
  {
    accessorKey: "score",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Score" />
    ),
  },
  {
    accessorKey: "percent",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Percentage" />
    ),
    cell: ({ row }) => {
      const percent = parseFloat(row.getValue("percent"));
      return `${percent.toFixed(2)}%`;
    },
  },
  {
    accessorKey: "grade",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Grade" />
    ),
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date" />
    ),
    cell: ({ row }) => {
      const date = new Date(row.getValue("createdAt"));
      return date.toLocaleDateString();
    },
  },
];
