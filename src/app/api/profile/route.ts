import prisma from "@/utils/prismadb";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

export async function GET() {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
    const profile = await prisma.profile.findUnique({
      where: {
        userId,
      },
      include: {
        educations: true,
        experiences: true,
      },
    });

    if (!profile) {
      return NextResponse.json(
        { message: "Profile not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(profile, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const { profile } = await request.json();
    // console.log("Profile: ", profile);
    const { userId } = await auth();

    const profileWrite = await prisma.jobSeeker.create({
      data: {
        user: {
          connect: {
            userId,
          },
        },
        ...profile,
      },
    });
    console.log(profileWrite);
    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
