"use client";

import useSWR from "swr";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Loader2,
  AlertTriangle,
  Reply,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import type { ForumPostInList, PaginatedResponse } from "@/types";
import { createForumPost } from "@/app/actions/forum"; // Mutation action
import { ForumPostItem } from "@/components/forum/forumPostItem";
import { CreatePostForm } from "@/components/forum/createPostForm";
import type { CreatePostFormValues } from "@/lib/zodSchemas";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription as AlertDesc } from "@/components/ui/alert";

const POSTS_PAGE_SIZE = 10;

// SWR fetcher for API routes
const apiFetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
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

interface ForumThreadClientViewProps {
  threadId: string;
  initialPostsResponse: PaginatedResponse<ForumPostInList>;
}

export function ForumThreadClientView({
  threadId,
  initialPostsResponse,
}: ForumThreadClientViewProps) {
  const { toast } = useToast();
  const [currentPostPage, setCurrentPostPage] = useState(
    initialPostsResponse.currentPage
  );

  const {
    data: postsResponse,
    error: postsError,
    isLoading: postsLoading,
    mutate: mutatePosts,
  } = useSWR<PaginatedResponse<ForumPostInList>>(
    threadId
      ? `/api/forum/threads/${threadId}/posts?page=${currentPostPage}&pageSize=${POSTS_PAGE_SIZE}`
      : null,
    apiFetcher,
    {
      fallbackData: initialPostsResponse, // Use initial data from server component
      revalidateOnFocus: false,
    }
  );

  const handleCreatePost = async (
    values: Omit<CreatePostFormValues, "threadId">
  ) => {
    if (!threadId) {
      // Should not happen if component is rendered
      toast({
        title: "Error",
        description: "Thread ID is missing.",
        variant: "destructive",
      });
      return false;
    }
    const result = await createForumPost({ ...values, threadId });
    if (result.success && result.data) {
      toast({
        title: "Reply Posted!",
        description: "Your reply has been added to the thread.",
      });

      // Determine if new post is on a new page or current page
      const totalPostsBefore = postsResponse?.totalItems || 0;
      const newTotalPosts = totalPostsBefore + 1;
      const newTotalPages = Math.ceil(newTotalPosts / POSTS_PAGE_SIZE);

      if (
        newTotalPages > (postsResponse?.totalPages || 0) &&
        currentPostPage !== newTotalPages
      ) {
        // If new post creates a new page, and we are not on it, go to it.
        setCurrentPostPage(newTotalPages); // This will trigger SWR refetch for the new page
      } else {
        // Otherwise, just mutate the current page
        mutatePosts();
      }
      return true;
    } else {
      toast({
        title: "Error",
        description: result.error || "Failed to post reply.",
        variant: "destructive",
      });
      return false;
    }
  };

  const posts = postsResponse?.data || [];
  const totalPostPages = postsResponse?.totalPages || 1;
  const totalPostsCount = postsResponse?.totalItems || 0;

  return (
    <>
      <section className="space-y-6">
        <h2 className="text-xl font-semibold font-headline">
          Replies ({totalPostsCount})
        </h2>
        {postsLoading && !postsResponse?.data?.length && (
          <div className="flex items-center justify-center py-8">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
            <p className="ml-3 text-muted-foreground">Loading replies...</p>
          </div>
        )}
        {postsError && (
          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <CardTitle>Error Loading Replies</CardTitle>
            <AlertDesc>
              Could not load replies for this thread. Please try refreshing.{" "}
              {postsError.info?.error || postsError.message}
            </AlertDesc>
          </Alert>
        )}

        {/* Show a smaller loader during page transitions or revalidations if desired */}
        {postsLoading && (postsResponse?.data?.length || 0) > 0 && (
          <div className="text-center py-4">
            <Loader2 className="w-6 h-6 animate-spin text-primary mx-auto" />
          </div>
        )}

        {posts && posts.length > 0 && (
          <div className="space-y-4">
            {posts.map((post) => (
              <ForumPostItem key={post.id} post={post} />
            ))}
          </div>
        )}
        {posts && posts.length === 0 && !postsLoading && !postsError && (
          <p className="text-muted-foreground italic py-4 text-center">
            No replies yet. Be the first to respond!
          </p>
        )}

        {totalPostPages > 1 && (
          <div className="flex justify-center items-center space-x-2 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPostPage((p) => Math.max(1, p - 1))}
              disabled={currentPostPage === 1 || postsLoading}
            >
              <ChevronLeft className="mr-1 h-4 w-4" /> Previous
            </Button>
            <span className="text-sm text-muted-foreground">
              Page {currentPostPage} of {totalPostPages}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                setCurrentPostPage((p) => Math.min(totalPostPages, p + 1))
              }
              disabled={currentPostPage === totalPostPages || postsLoading}
            >
              Next <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        )}
      </section>

      <Card className="mt-8 bg-secondary/30">
        <CardHeader>
          <CardTitle className="text-xl font-headline flex items-center gap-2">
            <Reply className="w-5 h-5" />
            Post a Reply
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CreatePostForm threadId={threadId} onSubmit={handleCreatePost} />
        </CardContent>
      </Card>
    </>
  );
}
