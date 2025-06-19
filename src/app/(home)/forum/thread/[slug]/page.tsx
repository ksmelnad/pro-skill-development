import Link from "next/link";
import prisma from "@/utils/prismadb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  AlertTriangle,
  MessageSquare,
  ArrowLeft,
  MessageSquareText,
} from "lucide-react";
import type {
  ForumThreadDetailed,
  ForumPostInList,
  PaginatedResponse,
} from "@/types";
import { ForumThreadClientView } from "@/components/forum/forumThreadClientView"; // New client component
import Image from "next/image";
import { format } from "date-fns";

export const dynamic = "force-dynamic";
const POSTS_PAGE_SIZE = 10;

interface ForumThreadPageProps {
  params: Promise<{ slug: string }>;
}

async function getThreadDetails(
  slug: string
): Promise<ForumThreadDetailed | null> {
  return prisma.forumThread.findUnique({
    where: { slug },
    include: {
      author: { select: { id: true, name: true, image: true } },
    },
  });
}

async function getInitialPosts(
  threadId: string,
  page: number = 1,
  pageSize: number = POSTS_PAGE_SIZE
): Promise<PaginatedResponse<ForumPostInList>> {
  const skip = (page - 1) * pageSize;
  const [posts, totalPosts] = await prisma.$transaction([
    prisma.forumPost.findMany({
      where: { threadId },
      skip: skip,
      take: pageSize,
      orderBy: { createdAt: "asc" },
      include: {
        author: { select: { id: true, name: true, image: true } },
        _count: { select: { comments: true } },
      },
    }),
    prisma.forumPost.count({ where: { threadId } }),
  ]);

  return {
    data: posts,
    totalItems: totalPosts,
    totalPages: Math.ceil(totalPosts / pageSize),
    currentPage: page,
    pageSize,
  };
}

export default async function ForumThreadPage({
  params,
}: ForumThreadPageProps) {
  const { slug } = await params;
  const thread = await getThreadDetails(slug);

  if (!thread) {
    return (
      <Card className="m-4">
        <CardHeader>
          <CardTitle className="text-primary flex items-center gap-2">
            <MessageSquare /> Thread Not Found
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            The thread you are looking for does not exist or may have been
            deleted.
          </p>
          <Button asChild variant="link" className="mt-4">
            <Link href="/forum">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Forum
            </Link>
          </Button>
        </CardContent>
      </Card>
    );
  }

  // Fetch initial posts for the thread
  const initialPostsResponse = await getInitialPosts(thread.id);

  return (
    <div className="space-y-8 p-4 md:p-6 container mx-auto">
      <header className="flex items-center justify-center gap-4 h-60 bg-linear-to-r from-blue-600 to-violet-600 rounded-md text-white p-4">
        <div className="flex flex-col items-center space-y-3 ">
          <MessageSquareText className="w-10 h-10 " />
          <h1 className="text-xl md:text-2xl lg:text-4xl font-headline font-bold">
            Welcome to MSL Community Forum!
          </h1>
          <p className="text-sm md:text-base text-center">
            A place to share your thoughts and interact with other users of this
            platform.
          </p>
        </div>
        {/* Create New Thread button will be part of ForumClientPage for interactivity */}
      </header>
      <Button asChild variant="outline" size="sm" className="mb-6">
        <Link href="/forum">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to All Threads
        </Link>
      </Button>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-headline text-primary">
            {thread.title}
          </CardTitle>
          <div className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
            <Image
              src={thread.author.image || "https://placehold.co/40x40.png"}
              alt={thread.author.name || "Author"}
              width={24}
              height={24}
              className="rounded-full"
              data-ai-hint="person avatar"
            />
            <span>By {thread.author.name || "Unknown User"}</span>
            <span>&bull;</span>
            <span>{format(new Date(thread.createdAt), "PPpp")}</span>
          </div>
        </CardHeader>
        <CardContent>
          {/* Ensure whitespace-pre-wrap is applied to respect newlines from DB */}
          <div className="prose dark:prose-invert max-w-none whitespace-pre-wrap">
            {thread.content}
          </div>
        </CardContent>
      </Card>

      <ForumThreadClientView
        threadId={thread.id}
        initialPostsResponse={initialPostsResponse}
      />
    </div>
  );
}
