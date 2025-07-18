import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/prismadb";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const take = parseInt(searchParams.get("limit") || "10");
    const pageParam = searchParams.get("page");
    const skip = pageParam ? (parseInt(pageParam) - 1) * take : 0;
    const search = searchParams.get("search") || undefined;
    const quizTitle = searchParams.get("quizTitle") || undefined;
    const quizTopic = searchParams.get("quizTopic") || undefined;
    const startDate = searchParams.get("startDate") || undefined;
    const endDate = searchParams.get("endDate") || undefined;
    const sort = searchParams.get("sort") || "createdAt.desc";
    const [sortBy, sortOrder] = sort.split(".");

    const where: any = {};

    if (quizTitle)
      where.quizTitle = { contains: quizTitle, mode: "insensitive" };
    if (startDate)
      where.createdAt = { ...where.createdAt, gte: new Date(startDate) };
    if (endDate)
      where.createdAt = { ...where.createdAt, lte: new Date(endDate) };

    if (quizTopic) {
      const quizzes = await prisma.quiz.findMany({
        where: { quizTopic: { contains: quizTopic, mode: "insensitive" } },
        select: { quizId: true },
      });
      const quizIds = quizzes.map((q) => q.quizId);
      if (quizIds.length > 0) {
        where.quizId = { in: quizIds };
      } else {
        return NextResponse.json({ data: [], total: 0 });
      }
    }

    if (search) {
      const userQuery = {
        OR: [
          { name: { contains: search, mode: "insensitive" } },
          {
            personalInfo: {
              is: { fullName: { contains: search, mode: "insensitive" } },
            },
          },
        ],
      };
      const users = await prisma.profile.findMany({
        where: {
          personalInfo: {
            is: { fullName: { contains: search, mode: "insensitive" } },
          },
        },
        select: { userId: true },
      });
      const userIds = users.map((u) => u.userId);

      where.OR = [
        { userId: { in: userIds } },
        { quizTitle: { contains: search, mode: "insensitive" } },
      ];
    }

    const [results, total] = await prisma.$transaction([
      prisma.quizResult.findMany({
        where,
        take,
        skip,
        orderBy: { [sortBy]: sortOrder },
      }),
      prisma.quizResult.count({ where }),
    ]);

    const userIds = [...new Set(results.map((result) => result.userId))];
    const users = await prisma.profile.findMany({
      where: { userId: { in: userIds } },
      select: { userId: true, personalInfo: { select: { fullName: true } } },
    });

    const userMap = new Map(
      users.map((user) => [user.userId, user.personalInfo?.fullName || "N/A"])
    );

    const data = results.map((result) => ({
      ...result,
      userName: userMap.get(result.userId) || "N/A",
    }));

    return NextResponse.json({ data, total });
  } catch (error) {
    console.error("Failed to fetch quiz results:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
