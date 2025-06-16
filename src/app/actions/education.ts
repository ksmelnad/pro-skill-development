"use server";

import prisma from "@/utils/prismadb";
import { auth, currentUser } from "@clerk/nextjs/server";
import { Education, EducationLevel } from "@prisma/client"; // Added EducationLevel
import { revalidatePath } from "next/cache";

export async function upsertEducationLevelsAction({
  educationLevels,
}: {
  educationLevels: EducationLevel[]; // Expecting Prisma's EducationLevel type
}): Promise<{
  success: boolean;
  message?: string;
  error?: string;
  education?: Education;
}> {
  const { userId } = await auth();
  if (!userId) {
    return { success: false, error: "User not authenticated" };
  }

  try {
    const profile = await prisma.profile.findUnique({
      where: { userId },
    });

    if (!profile) {
      return { success: false, error: "Profile not found" };
    }

    const updatedOrCreatedEducation = await prisma.education.upsert({
      where: { profileId: profile.id },
      update: {
        educationLevels: educationLevels,
      },
      create: {
        userId: userId,
        profileId: profile.id,
        educationLevels: educationLevels,
      },
    });

    revalidatePath("/dashboard/profile"); // Or specific API path if SWR revalidates based on that
    return {
      success: true,
      message: "Education history updated successfully.",
      education: updatedOrCreatedEducation,
    };
  } catch (error) {
    console.error("Error upserting education levels:", error);
    const errorMessage =
      error instanceof Error
        ? error.message
        : "Failed to update education history.";
    return { success: false, error: errorMessage };
  }
}
