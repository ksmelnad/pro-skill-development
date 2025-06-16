"use server";

import { GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import s3Client from "@/utils/s3client";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import prisma from "@/utils/prismadb";
import { createCertificatePDF } from "@/utils/createCertificatePdf";
import { auth, currentUser } from "@clerk/nextjs/server";

export async function generateCertificate({
  courseId,
  courseTitle,
  attempt,
  date,
  isAddGrade,
}: {
  courseId: string;
  courseTitle: string;
  attempt: number;
  date: Date;
  isAddGrade?: boolean;
}) {
  const { userId } = await auth();
  const user = await currentUser();

  if (!userId) {
    throw new Error("User not found");
  }

  const profile = await prisma.profile.findFirst({
    where: {
      userId,
    },
  });

  const quizResultExists = await prisma.quizResult.findFirst({
    where: {
      quizId: courseId,
      attempt: Number(attempt),
      userId,
    },
  });

  if (!quizResultExists) {
    throw new Error("Quiz result not found");
  }

  if (!profile) {
    throw new Error("Profile not found");
  }

  const certificateGenerated = await createCertificatePDF({
    name: profile.personalInfo?.fullName ?? user?.fullName!,
    course: courseTitle,
    grade: isAddGrade ? quizResultExists.grade : undefined,
    date: date,
  });

  if (!certificateGenerated) {
    throw new Error("Failed to generate certificate");
  }

  return Buffer.from(certificateGenerated);
}
