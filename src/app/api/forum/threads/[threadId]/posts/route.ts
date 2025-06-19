import { NextResponse, type NextRequest } from "next/server";
import prisma from "@/utils/prismadb";
import type { ForumPostInList, PaginatedResponse } from "@/types";

export const dynamic = "force-dynamic";

const DEFAULT_PAGE_SIZE = 10;

interface Params {
  threadId: string;
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ threadId: string }> }
) {
  const { threadId } = await params;
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1", 10);
  const pageSize = parseInt(
    searchParams.get("pageSize") || String(DEFAULT_PAGE_SIZE),
    10
  );

  if (!threadId) {
    return NextResponse.json(
      { error: "Thread ID is required." },
      { status: 400 }
    );
  }
  if (isNaN(page) || page < 1 || isNaN(pageSize) || pageSize < 1) {
    return NextResponse.json(
      { error: "Invalid pagination parameters." },
      { status: 400 }
    );
  }

  const skip = (page - 1) * pageSize;

  try {
    const [posts, totalPosts] = await prisma.$transaction([
      prisma.forumPost.findMany({
        where: { threadId },
        skip: skip,
        take: pageSize,
        orderBy: {
          createdAt: "asc", // Show posts in chronological order
        },
        include: {
          author: {
            select: { id: true, name: true, image: true },
          },
          _count: {
            select: { comments: true },
          },
        },
      }),
      prisma.forumPost.count({ where: { threadId } }),
    ]);

    const totalPages = Math.ceil(totalPosts / pageSize);

    const response: PaginatedResponse<ForumPostInList> = {
      data: posts,
      totalItems: totalPosts,
      totalPages,
      currentPage: page,
      pageSize,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error(`Error fetching posts for thread ${threadId}:`, error);
    return NextResponse.json(
      { error: "Failed to fetch posts." },
      { status: 500 }
    );
  }
}
