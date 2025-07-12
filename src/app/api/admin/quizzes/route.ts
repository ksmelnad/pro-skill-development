import prisma from "@/utils/prismadb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const quizzes = await prisma.quiz.findMany();
    return NextResponse.json(quizzes);
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal server error");
  }
}
