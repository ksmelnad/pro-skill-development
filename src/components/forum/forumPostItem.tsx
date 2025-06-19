"use client";

import type { ForumPostInList, ForumCommentWithAuthor } from "@/types/index";
import { useState } from "react";
import useSWR from "swr";
import Image from "next/image";
import { format } from "date-fns";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MessageSquare,
  CornerDownRight,
  Loader2,
  AlertTriangle,
} from "lucide-react";
import { CreateCommentForm } from "./createCommentForm";
import { ForumCommentItem } from "./forumCommentItem";
import { createForumComment } from "@/app/actions/forum"; // Mutation action
import type { CreateCommentFormValues } from "@/lib/zodSchemas";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription as AlertDesc } from "@/components/ui/alert"; // Updated CardTitle to AlertTitle for semantic correctness

// SWR fetcher for API routes
const apiFetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");

    throw error;
  }
  return res.json();
};

interface ForumPostItemProps {
  post: ForumPostInList;
}

export function ForumPostItem({ post }: ForumPostItemProps) {
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const { toast } = useToast();

  const {
    data: comments,
    error: commentsError,
    isLoading: commentsLoading,
    mutate: mutateComments,
  } = useSWR<ForumCommentWithAuthor[]>(
    showComments && post.id ? `/api/forum/posts/${post.id}/comments` : null,
    apiFetcher,
    { revalidateOnFocus: false }
  );

  const handleCreateComment = async (
    values: Omit<CreateCommentFormValues, "postId">
  ) => {
    const result = await createForumComment({ ...values, postId: post.id });
    if (result.success) {
      toast({ title: "Comment Posted!" });
      mutateComments(); // Revalidate comments
      setShowCommentForm(false);
      setShowComments(true);
      return true;
    } else {
      toast({
        title: "Error",
        description: result.error || "Failed to post comment.",
        variant: "destructive",
      });
      return false;
    }
  };

  const toggleCommentsVisibility = () => {
    setShowComments((prev) => !prev);
  };

  return (
    <Card className="bg-card/80 shadow-sm">
      <CardHeader className="pb-3">
        <div className="flex items-center space-x-3">
          <Image
            src={post.author.image || "https://placehold.co/40x40.png"}
            alt={post.author.name || "Author"}
            width={32}
            height={32}
            className="rounded-full"
            data-ai-hint="person avatar"
          />
          <div>
            <p className="text-sm font-semibold text-foreground">
              {post.author.name || "Anonymous"}
            </p>
            <p className="text-xs text-muted-foreground">
              {format(new Date(post.createdAt), "MMM d, yyyy h:mm a")}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-3">
        {/* Ensure whitespace-pre-wrap is applied to respect newlines from DB */}
        <div className="prose prose-sm dark:prose-invert max-w-none whitespace-pre-wrap">
          {post.content}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center pt-2 pb-3 px-4 border-t">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowCommentForm((prev) => !prev)}
          className="text-xs"
        >
          <CornerDownRight className="mr-1 h-3.5 w-3.5" />
          {showCommentForm ? "Cancel" : "Comment"}
        </Button>
        <div className="flex items-center gap-3">
          {(post._count?.comments ?? 0) > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleCommentsVisibility}
              className="text-xs"
            >
              <MessageSquare className="mr-1 h-3.5 w-3.5" />
              {showComments ? "Hide" : "Show"} {post._count?.comments} Comment
              {(post._count?.comments ?? 0) !== 1 ? "s" : ""}
            </Button>
          )}
        </div>
      </CardFooter>

      {showCommentForm && (
        <div className="p-4 border-t">
          <CreateCommentForm postId={post.id} onSubmit={handleCreateComment} />
        </div>
      )}

      {showComments && (
        <div className="p-4 border-t bg-muted/30">
          {commentsLoading && (
            <div className="flex items-center justify-center py-4">
              <Loader2 className="w-5 h-5 animate-spin text-primary" />
              <p className="ml-2 text-sm text-muted-foreground">
                Loading comments...
              </p>
            </div>
          )}
          {commentsError && (
            <Alert variant="destructive" className="my-2">
              <AlertTriangle className="h-4 w-4" />
              <CardTitle className="text-sm">
                Error Loading Comments
              </CardTitle>{" "}
              {/* Use AlertTitle from Shadcn for semantics */}
              <AlertDesc>
                {commentsError.info?.error || commentsError.message}
              </AlertDesc>
            </Alert>
          )}
          {comments && comments.length > 0 && (
            <div className="space-y-3">
              {comments.map((comment) => (
                <ForumCommentItem key={comment.id} comment={comment} />
              ))}
            </div>
          )}
          {comments &&
            comments.length === 0 &&
            !commentsLoading &&
            !commentsError && (
              <p className="text-xs text-muted-foreground italic text-center py-2">
                No comments yet.
              </p>
            )}
        </div>
      )}
    </Card>
  );
}
