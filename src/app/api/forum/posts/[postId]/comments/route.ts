import { NextResponse, type NextRequest } from "next/server";
import prisma from "@/utils/prismadb";
import type { ForumCommentWithAuthor } from "@/types";

export const dynamic = "force-dynamic";

interface Params {
  postId: string;
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ postId: string }> }
) {
  const { postId } = await params;

  if (!postId) {
    return NextResponse.json(
      { error: "Post ID is required." },
      { status: 400 }
    );
  }

  try {
    const comments = await prisma.forumComment.findMany({
      where: { postId },
      orderBy: {
        createdAt: "asc", // Show comments in chronological order
      },
      include: {
        author: {
          select: { id: true, name: true, image: true },
        },
      },
    });

    return NextResponse.json(comments as ForumCommentWithAuthor[]);
  } catch (error) {
    console.error(`Error fetching comments for post ${postId}:`, error);
    return NextResponse.json(
      { error: "Failed to fetch comments." },
      { status: 500 }
    );
  }
}
