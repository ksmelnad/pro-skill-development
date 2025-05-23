"use server";

import { auth, currentUser } from "@clerk/nextjs/server";
import prisma from "@/utils/prismadb";

interface ExperienceData {
  company: string;
  jobTitle: string;
  employmentType: string;
  locationType: string;
  location?: string;
  startDate: Date;
  endDate?: Date;
  current: boolean;
  description?: string;
  skills: string[];
}

export const createExperience = async ({
  experienceData,
}: {
  experienceData: ExperienceData;
}) => {
  try {
    const { userId } = await auth();

    if (!userId) {
      throw new Error("User not authenticated");
    }

    const profile = await prisma.profile.findUnique({
      where: {
        userId,
      },
    });

    if (!profile) {
      throw new Error("Profile not found");
    }

    console.log("Experience Data:", experienceData);

    await prisma.experience.create({
      data: {
        profileId: profile.id,
        userId: userId,
        ...experienceData,
      },
    });

    return {
      success: true,
      message: "Experience created successfully",
    };
  } catch (error) {
    console.error("Error creating experience:", error);
    return {
      success: false,
      message: "Could not create experience",
    };
  }
};
