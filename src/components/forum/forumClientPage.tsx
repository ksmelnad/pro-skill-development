"use client";

import useSWR from "swr";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Loader2,
  PlusCircle,
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
  MessageSquareText,
} from "lucide-react";
import { CreateThreadForm } from "@/components/forum/createThreadForm";
import { ForumThreadList } from "@/components/forum/forumThreadList";
import type {
  ForumThreadWithAuthorAndCounts,
  PaginatedResponse,
} from "@/types";
import { createForumThread } from "@/app/actions/forum"; // Mutation action
import type { CreateThreadFormValues } from "@/lib/zodSchemas";
import { useToast } from "@/hooks/use-toast";

const THREADS_PAGE_SIZE = 10;

// SWR fetcher for API routes
const apiFetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    // Attach extra info to the error object.
    // try {
    //   error.info = await res.json();
    // } catch (e) {
    //   /* Ignore */
    // }
    // error.status = res.status;
    throw error;
  }
  return res.json();
};

interface ForumClientPageProps {
  initialThreadsResponse: PaginatedResponse<ForumThreadWithAuthorAndCounts>;
}

export function ForumClientPage({
  initialThreadsResponse,
}: ForumClientPageProps) {
  const { toast } = useToast();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(
    initialThreadsResponse.currentPage
  );

  const {
    data: threadsResponse,
    error,
    isLoading,
    mutate,
  } = useSWR<PaginatedResponse<ForumThreadWithAuthorAndCounts>>(
    `/api/forum/threads?page=${currentPage}&pageSize=${THREADS_PAGE_SIZE}`,
    apiFetcher,
    {
      fallbackData: initialThreadsResponse, // Use initial data passed from server component
      revalidateOnFocus: false, // Adjust as needed
    }
  );

  const handleCreateThread = async (values: CreateThreadFormValues) => {
    const result = await createForumThread(values);
    if (result.success && result.data) {
      toast({
        title: "Thread Created!",
        description: "Your new forum thread has been posted.",
      });
      setCurrentPage(1); // Go to first page to see new thread
      mutate(); // Revalidate the threads list (SWR will call the API)
      setIsCreateModalOpen(false);
      return true;
    } else {
      toast({
        title: "Error",
        description: result.error || "Failed to create thread.",
        variant: "destructive",
      });
      return false;
    }
  };

  const threads = threadsResponse?.data || [];
  const totalPages = threadsResponse?.totalPages || 1;

  // Show main loader only when SWR is loading and there's no data yet (initialData might cover this)
  if (
    isLoading &&
    (!threadsResponse ||
      !threadsResponse.data ||
      threadsResponse.data.length === 0)
  ) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-8">
        <Loader2 className="w-12 h-12 animate-spin text-primary mb-4" />
        <p className="text-lg text-muted-foreground">
          Loading forum threads...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <Card className="m-4">
        <CardHeader>
          <CardTitle className="text-destructive flex items-center gap-2">
            <AlertTriangle /> Error Loading Forum
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>Could not load forum threads. Please try again later.</p>
          {error.info?.error && (
            <pre className="mt-2 text-xs bg-muted p-2 rounded">
              {JSON.stringify(error.info.error)}
            </pre>
          )}
          {!error.info?.error && (
            <pre className="mt-2 text-xs bg-muted p-2 rounded">
              {error.message}
            </pre>
          )}
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      <div className="text-right mb-4">
        <Button
          onClick={() => setIsCreateModalOpen(true)}
          variant={"outline"}
          className="cursor-pointer"
        >
          <PlusCircle className="mr-2 h-5 w-5" /> Create New Thread
        </Button>
      </div>

      <CreateThreadForm
        isOpen={isCreateModalOpen}
        onOpenChange={setIsCreateModalOpen}
        onSubmit={handleCreateThread}
      />

      {/* Show a smaller loader during page transitions or revalidations if desired */}
      {isLoading &&
        threadsResponse &&
        threadsResponse.data &&
        threadsResponse.data.length > 0 && (
          <div className="text-center py-4">
            <Loader2 className="w-8 h-8 animate-spin text-primary mx-auto" />
          </div>
        )}

      {threads && threads.length > 0 ? (
        <>
          <ForumThreadList threads={threads} />
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-2 mt-8">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1 || isLoading}
              >
                <ChevronLeft className="mr-1 h-4 w-4" /> Previous
              </Button>
              <span className="text-sm text-muted-foreground">
                Page {currentPage} of {totalPages}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
                disabled={currentPage === totalPages || isLoading}
              >
                Next <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          )}
        </>
      ) : (
        !isLoading && (
          <Card className="text-center py-12">
            <CardHeader>
              <MessageSquareText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <CardTitle className="font-headline text-2xl">
                No Threads Yet
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Be the first to start a discussion!
              </p>
              <Button
                onClick={() => setIsCreateModalOpen(true)}
                variant="outline"
              >
                <PlusCircle className="mr-2 h-4 w-4" /> Create a Thread
              </Button>
            </CardContent>
          </Card>
        )
      )}
    </>
  );
}
