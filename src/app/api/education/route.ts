import prisma from "@/utils/prismadb";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { userId } = await auth();
    const educations = await prisma.profile
      .findUnique({
        where: {
          userId: userId!,
        },
      })
      .educations();
    console.log(educations);
    return NextResponse.json(educations);
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal server error");
  }
}
