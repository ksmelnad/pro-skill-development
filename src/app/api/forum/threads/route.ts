import { NextResponse, type NextRequest } from "next/server";

import type {
  ForumThreadWithAuthorAndCounts,
  PaginatedResponse,
} from "@/types";
import prisma from "@/utils/prismadb";

export const dynamic = "force-dynamic"; // Ensures fresh data on every request

const DEFAULT_PAGE_SIZE = 10;

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1", 10);
  const pageSize = parseInt(
    searchParams.get("pageSize") || String(DEFAULT_PAGE_SIZE),
    10
  );

  if (isNaN(page) || page < 1 || isNaN(pageSize) || pageSize < 1) {
    return NextResponse.json(
      { error: "Invalid pagination parameters." },
      { status: 400 }
    );
  }

  const skip = (page - 1) * pageSize;

  try {
    const [threads, totalThreads] = await prisma.$transaction([
      prisma.forumThread.findMany({
        skip: skip,
        take: pageSize,
        orderBy: {
          updatedAt: "desc", // Show most recently active threads first
        },
        include: {
          author: {
            select: { id: true, name: true, image: true },
          },
          _count: {
            select: { posts: true },
          },
        },
      }),
      prisma.forumThread.count(),
    ]);

    const totalPages = Math.ceil(totalThreads / pageSize);

    const response: PaginatedResponse<ForumThreadWithAuthorAndCounts> = {
      data: threads,
      totalItems: totalThreads,
      totalPages,
      currentPage: page,
      pageSize,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("Error fetching forum threads:", error);
    return NextResponse.json(
      { error: "Failed to fetch forum threads." },
      { status: 500 }
    );
  }
}
