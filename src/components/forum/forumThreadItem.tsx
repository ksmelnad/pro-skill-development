"use client";

import Link from "next/link";
import Image from "next/image";
import type { ForumThreadWithAuthorAndCounts } from "@/types"; // Use the specific type
import { formatDistanceToNowStrict, format } from "date-fns";
import { MessageCircle } from "lucide-react";

interface ForumThreadItemProps {
  thread: ForumThreadWithAuthorAndCounts;
}

export function ForumThreadItem({ thread }: ForumThreadItemProps) {
  const timeAgo = formatDistanceToNowStrict(new Date(thread.createdAt), {
    addSuffix: true,
  });
  // Use updatedAt for last activity, as it reflects new posts or thread edits
  const lastActivity = thread.updatedAt
    ? format(new Date(thread.updatedAt), "MMM d, yyyy, p")
    : "N/A";

  return (
    <Link
      href={`/forum/thread/${thread.slug}`}
      className="block hover:bg-muted/50 transition-colors"
    >
      <div className="p-4 md:p-6">
        <h3 className="text-lg font-semibold text-primary hover:underline mb-1 truncate">
          {thread.title}
        </h3>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground mb-2">
          <div className="flex items-center gap-1">
            <Image
              src={thread.author.image || "user-128.svg"}
              alt={thread.author.name || "Author"}
              width={16}
              height={16}
              className="rounded-full"
              data-ai-hint="person avatar"
            />
            <span>{thread.author.name || "Unknown User"}</span>
          </div>
          <span>&bull;</span>
          <span>Created {timeAgo}</span>
        </div>

        {/* Display initial content snippet if available */}
        {thread.content && (
          <p className="text-sm text-foreground/80 line-clamp-2 mb-2">
            {thread.content.substring(0, 150)}
            {thread.content.length > 150 ? "..." : ""}
          </p>
        )}

        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>{thread._count?.posts || 0} replies</span>
          </div>
          <span>Last activity: {lastActivity}</span>
        </div>
      </div>
    </Link>
  );
}
