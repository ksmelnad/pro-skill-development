"use server";

import prisma from "@/utils/prismadb";
import { auth, currentUser } from "@clerk/nextjs/server";
import { PersonalInfo, Skill } from "@prisma/client"; // Added Skill type
// import { Profile as PrismaProfile } from "@prisma/client";
import { revalidatePath } from "next/cache";

interface Profile {
  image?: string;
  fullName: string;
  dob?: string;
  mobile?: string;
  relative?: string;
  address?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country?: string;
  hobbies?: string;
  areaImprovementCurrent?: string;
  areaImprovementFuture?: string;
}

export async function updateProfile({
  profile: profileData,
}: {
  profile: Profile;
}) {
  const { userId } = await auth();
  if (!userId) {
    return { success: false, error: "User not authenticated" };
  }

  const profileExists = await prisma.profile.findUnique({
    where: {
      userId: userId,
    },
  });

  if (profileExists) {
    try {
      await prisma.profile.update({
        where: {
          id: profileExists.id,
        },
        data: {
          ...profileData,
        },
      });
      revalidatePath("/dashboard/profile");
      revalidatePath("/admin/profiles"); // If admins view profiles
      return {
        success: true,
        message: "Profile updated successfully",
      };
    } catch (error) {
      console.error("Failed to update profile:", error);
      return { success: false, error: "Failed to update profile" };
    }
  } else {
    // If profile creation is intended here, it needs to be explicitly handled.
    // For an "update" function, not finding a profile is typically an error.
    return { success: false, error: "Profile not found for update." };
  }
}

export async function updatePersonalInfo(personalInfo: PersonalInfo) {
  const { userId } = await auth();
  if (!userId) {
    return { success: false, error: "User not authenticated" };
  }

  try {
    const updatedProfile = await prisma.profile.update({
      where: {
        userId: userId,
      },
      data: {
        personalInfo: personalInfo,
      },
    });

    if (!updatedProfile) {
      return {
        success: false,
        error:
          "Failed to update personal info (profile not found or update failed).",
      };
    }
    revalidatePath("/dashboard/profile");
    return {
      success: true,
      message: "Personal info updated successfully",
    };
  } catch (error) {
    console.error("Error updating personal info:", error);
    return { success: false, error: "Failed to update personal info." };
  }
}

export async function getProfiles() {
  try {
    const profiles = await prisma.profile.findMany();
    return profiles;
  } catch (error) {
    console.error("Error fetching profiles:", error);
    return [];
  }
}

// Server action for updating skills array in Profile
export async function upsertSkillsAction({
  skills,
}: {
  skills: Skill[]; // Expecting an array of Skill objects matching Prisma's Skill type
}): Promise<{
  success: boolean;
  message?: string;
  error?: string;
  updatedSkills?: Skill[];
}> {
  const { userId } = await auth();
  if (!userId) {
    return { success: false, error: "User not authenticated" };
  }

  try {
    const updatedProfile = await prisma.profile.update({
      where: { userId },
      data: {
        skills: skills, // Directly set the skills array on the Profile model
      },
      select: {
        skills: true, // Select back the updated skills array
      },
    });

    revalidatePath("/dashboard/profile");
    return {
      success: true,
      message: "Skills updated successfully.",
      updatedSkills: updatedProfile.skills,
    };
  } catch (error) {
    console.error("Error upserting skills:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Failed to update skills.";
    return { success: false, error: errorMessage };
  }
}
