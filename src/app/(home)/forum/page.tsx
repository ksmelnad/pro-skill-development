import { MessageSquareText } from "lucide-react";
import prisma from "@/utils/prismadb";
import type {
  ForumThreadWithAuthorAndCounts,
  PaginatedResponse,
} from "@/types";
import { ForumClientPage } from "@/components/forum/forumClientPage"; // New client component

export const dynamic = "force-dynamic"; // Ensures fresh data on every request for Server Component

const DEFAULT_PAGE_SIZE = 10;

async function getInitialThreads(
  page: number = 1,
  pageSize: number = DEFAULT_PAGE_SIZE
): Promise<PaginatedResponse<ForumThreadWithAuthorAndCounts>> {
  const skip = (page - 1) * pageSize;
  const [threads, totalThreads] = await prisma.$transaction([
    prisma.forumThread.findMany({
      skip: skip,
      take: pageSize,
      orderBy: { updatedAt: "desc" },
      include: {
        author: { select: { id: true, name: true, image: true } },
        _count: { select: { posts: true } },
      },
    }),
    prisma.forumThread.count(),
  ]);

  // console.log("Initial Threads:", threads); // Working

  return {
    data: threads,
    totalItems: totalThreads,
    totalPages: Math.ceil(totalThreads / pageSize),
    currentPage: page,
    pageSize,
  };
}

export default async function ForumPage() {
  // Fetch initial data on the server
  const initialThreadsResponse = await getInitialThreads();

  return (
    <div className="space-y-8 p-4 md:p-6 container mx-auto bg-gray-100">
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
      <ForumClientPage initialThreadsResponse={initialThreadsResponse} />
    </div>
  );
}
