import { NextResponse } from "next/server";
import prisma from "@/utils/prismadb";
import { auth } from "@clerk/nextjs/server";

export async function POST(request: Request) {
  try {
    const { selfAssessmentResponse } = await request.json();
    console.log("Self Assessment Response: ", selfAssessmentResponse);

    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const selfAssessmentWrite = await prisma.selfAssessment.create({
      data: {
        selfAssessmentResponse: selfAssessmentResponse,
        userId,
      },
    });
    console.log(selfAssessmentWrite);
    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
