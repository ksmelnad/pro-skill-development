"use client";

import { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ColumnDef, RowData } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import CertificateDownloadBtn from "./certificateDownloadBtn";
import ViewQuizDetails from "./viewQuizDetails";
import { Download, Eye } from "lucide-react";
import { DataTable } from "./data-table";

declare module "@tanstack/react-table" {
  interface TableMeta<TData extends RowData> {
    setSelectedQuizId: (id: string | null) => void;
    setSelectedAttempt: (attempt: number | null) => void;
    selectedQuizId: string | null;
    selectedAttempt: number | null;
  }
}
// Define the type for a single quiz result item
interface QuizResultItem {
  id: string;
  quizTitle: string;
  attempt: number;
  createdAt: Date; // Assuming this is a Date object
  grade: string;
  quizId: string;
  score: number;
  // Add other properties if needed by ViewQuizDetails or CertificateDownloadBtn
}

interface ResultsTableClientProps {
  quizResults: QuizResultItem[];
}

export const columns: ColumnDef<QuizResultItem>[] = [
  {
    accessorKey: "quizTitle",
    header: "Quiz",
  },
  {
    accessorKey: "attempt",
    header: "Attempt",
  },
  {
    accessorKey: "grade",
    header: "Grade",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
    cell: (info) => {
      return new Date(info.row.original.createdAt).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
    },
  },
  {
    accessorKey: "view",
    header: "View",
    cell: ({ row, table }) => {
      const quiz = row.original;
      const isSelected =
        table.options.meta?.selectedQuizId === quiz.quizId &&
        table.options.meta?.selectedAttempt === quiz.attempt;

      return (
        <Button
          variant={isSelected ? "default" : "ghost"}
          size={"icon"}
          onClick={() => {
            console.log(
              "Eye button clicked for quiz:",
              quiz.quizId,
              quiz.attempt
            );
            if (isSelected) {
              table.options.meta?.setSelectedQuizId(null);
              table.options.meta?.setSelectedAttempt(null);
            } else {
              // Ensure the values are correctly passed and state is updated
              table.options.meta?.setSelectedQuizId(quiz.quizId);
              table.options.meta?.setSelectedAttempt(quiz.attempt);
            }
          }}
        >
          <Eye size={16} />
        </Button>
      );
    },
  },
  {
    accessorKey: "certificate",
    header: "Certificate",
    cell: ({ row }) => {
      const quiz = row.original;
      return (
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost" size={"icon"}>
              <Download size={16} />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Download</DialogTitle>
              <DialogDescription>Download your certificate</DialogDescription>
            </DialogHeader>
            <CertificateDownloadBtn
              courseId={quiz.quizId}
              courseTitle={quiz.quizTitle}
              attempt={quiz.attempt}
              date={new Date(quiz.createdAt)}
            />
          </DialogContent>
        </Dialog>
      );
    },
  },
];

export default function ResultsTableClient({
  quizResults,
}: ResultsTableClientProps) {
  const [selectedQuizId, setSelectedQuizId] = useState<string | null>(null);
  const [selectedAttempt, setSelectedAttempt] = useState<number | null>(null);
  // console.log(selectedAttempt, selectedQuizId);
  return (
    <div>
      <div className="">
        <DataTable
          columns={columns}
          data={quizResults}
          meta={{
            setSelectedQuizId,
            setSelectedAttempt,
            selectedQuizId,
            selectedAttempt,
          }}
        />
      </div>
      {selectedQuizId && selectedAttempt !== null && (
        <div className="mt-8 border-t pt-8">
          <ViewQuizDetails quizId={selectedQuizId} attempt={selectedAttempt} />
        </div>
      )}
    </div>
  );
}
