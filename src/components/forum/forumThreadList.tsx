"use client";

import { ForumThreadItem } from "./forumThreadItem";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import type { ForumThreadWithAuthorAndCounts } from "@/types/index";

interface ForumThreadListProps {
  threads: ForumThreadWithAuthorAndCounts[];
}

export function ForumThreadList({ threads }: ForumThreadListProps) {
  // console.log("Threads in ForumThreadList:", threads);

  if (!threads || threads.length === 0) {
    return (
      <Card className="text-center py-8">
        <CardHeader>
          <CardTitle>No Threads Yet</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Be the first to start a discussion!
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle className="font-headline text-xl">Active Threads</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="space-y-0">
          {threads.map((thread, index) => (
            <div key={thread.id}>
              <ForumThreadItem thread={thread} />
              {index < threads.length - 1 && <Separator />}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
