import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/prismadb";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const topic = searchParams.get("topic");

    if (topic) {
      const titles = await prisma.quiz.findMany({
        where: { quizTopic: topic },
        select: {
          quizTitle: true,
        },
        distinct: ["quizTitle"],
      });
      return NextResponse.json({ titles: titles.map((t) => t.quizTitle) });
    }

    const topics = await prisma.quiz.findMany({
      select: {
        quizTopic: true,
      },
      distinct: ["quizTopic"],
    });

    return NextResponse.json({ topics: topics.map((t) => t.quizTopic) });
  } catch (error) {
    console.error("Failed to fetch quiz filters:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
