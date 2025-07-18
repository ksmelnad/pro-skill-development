import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/prismadb";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ userId: string }> }
) {
  const { userId } = await params;

  try {
    const profile = await prisma.profile.findUnique({
      where: { userId },
      include: {
        educations: true,
        experiences: true,
        certificates: true,
      },
    });

    if (!profile) {
      return new NextResponse("Profile not found", { status: 404 });
    }

    return NextResponse.json(profile);
  } catch (error) {
    console.error("Failed to fetch profile:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
