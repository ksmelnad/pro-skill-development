import prisma from "@/utils/prismadb";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ threadId: string }> }
) {
  const { threadId } = await params;
  console.log(threadId);

  try {
    const thread = await prisma.forumThread.findUnique({
      where: {
        slug: threadId,
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
        posts: true,
      },
    });
    console.log(thread);

    if (!thread) {
      return new Response("Thread not found", { status: 404 });
    }

    return NextResponse.json(thread);
  } catch (error) {
    console.log(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
