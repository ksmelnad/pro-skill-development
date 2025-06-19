"use client";

import type { ForumCommentType } from "@/types";
import Image from "next/image";
import { format } from "date-fns";

interface ForumCommentItemProps {
  comment: ForumCommentType;
}

export function ForumCommentItem({ comment }: ForumCommentItemProps) {
  return (
    <div className="flex items-start space-x-2.5 p-3 bg-background rounded-md shadow-xs border">
      <Image
        src={comment.author.image || "user-128.svg"}
        alt={comment.author.name || "Author"}
        width={28}
        height={28}
        className="rounded-full mt-0.5"
        data-ai-hint="person avatar"
      />
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <p className="text-xs font-medium text-foreground">
            {comment.author.name || "Anonymous"}
          </p>
          <p className="text-xs text-muted-foreground">
            {format(new Date(comment.createdAt), "MMM d, h:mm a")}
          </p>
        </div>
        <p className="text-sm text-foreground/90 mt-0.5 whitespace-pre-wrap">
          {comment.content}
        </p>
      </div>
    </div>
  );
}
