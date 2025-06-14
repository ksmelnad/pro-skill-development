"use server";

import { auth } from "@clerk/nextjs/server";
import prisma from "@/utils/prismadb";
import { revalidatePath } from "next/cache";
import { Experience, ExperienceDetails } from "@prisma/client"; // Import ExperienceDetail

// Type for the data needed to create an ExperienceDetail
export type ExperienceDetailCreateInput = Omit<
  ExperienceDetails,
  "id" | "experienceId" | "createdAt" | "updatedAt"
>;

// The action now upserts details within a single Experience container
export async function upsertExperienceDetailsAction(
  experienceDetails: ExperienceDetails[]
): Promise<{
  success: boolean;
  message?: string;
  error?: string;
  experiences?: Experience & { experienceDetails: ExperienceDetails[] }; // Return the container with its details
}> {
  const { userId } = await auth();
  if (!userId) {
    return { success: false, error: "User not authenticated" };
  }

  try {
    const profile = await prisma.profile.findUnique({
      where: { userId },
      select: { id: true },
    });

    if (!profile) {
      return { success: false, error: "Profile not found" };
    }

    const updatedOrCreatedExperience = await prisma.experience.upsert({
      where: { profileId: profile.id },
      update: {
        experienceDetails: experienceDetails,
      },
      create: {
        userId: userId,
        profileId: profile.id,
        experienceDetails: experienceDetails,
      },
    });

    revalidatePath("/dashboard/profile");
    // revalidatePath("/api/experience"); // Revalidate API route if SWR uses it

    return {
      success: true,
      message: "Experience details updated successfully.",
      experiences: updatedOrCreatedExperience,
    };
  } catch (error) {
    console.error("Error upserting experience details:", error);
    const errorMessage =
      error instanceof Error
        ? error.message
        : "Failed to update experience details.";
    return { success: false, error: errorMessage };
  }
}
