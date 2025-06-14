"use server";

import prisma from "@/utils/prismadb";
import { auth, currentUser } from "@clerk/nextjs/server";
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

export async function createProfile({ profile }: { profile: Profile }) {
  // console.log("Profile", profile);
  const user = await currentUser();
  const { userId } = await auth();
  // console.log("User", user);

  if (!user) {
    throw new Error("User not found");
  }

  const profileExists = await prisma.profile.findUnique({
    where: {
      userId: userId!,
    },
  });

  if (profileExists) {
    const profileUpdate = await prisma.profile.update({
      where: {
        id: profileExists.id,
      },
      data: {
        ...profile,
      },
    });
    if (!profileUpdate) {
      throw new Error("Failed to update profile");
    }

    return {
      success: true,
      message: "Profile updated successfully",
    };
  } else {
    const profileWrite = await prisma.profile.create({
      data: {
        userId: user?.id!,
        email: user?.emailAddresses[0].emailAddress!,
        image: user.hasImage ? user.imageUrl : "",
        ...profile,
      },
    });

    if (!profileWrite) {
      throw new Error("Failed to create profile");
    }
  }

  revalidatePath("/admin/profiles");
  revalidatePath("/dashboard/profile");

  return {
    success: true,
    message: "Profile created successfully",
  };
}

export async function getProfile() {
  const user = await currentUser();
  const { userId } = await auth();

  if (!user?.id || !user.emailAddresses[0].emailAddress) {
    throw new Error("User not found");
  }
  const profile = await prisma.profile.findUnique({
    where: {
      userId: userId!,
    },
    include: {
      educations: true,
      experiences: true,
    },
  });
  if (!profile) {
    return null;
  }
  return profile;
}

export async function getProfiles() {
  const profiles = await prisma.profile.findMany();
  return profiles;
}
