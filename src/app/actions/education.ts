"use server";

import prisma from "@/utils/prismadb";
import { auth, currentUser } from "@clerk/nextjs/server";
import { Education } from "@prisma/client";
import { EducationData } from "@/components/userDashboard/educationForm";
import { revalidatePath } from "next/cache";

export async function createEducation({
  educationData,
}: {
  educationData: EducationData;
}) {
  try {
    const { userId } = await auth();

    if (!userId) {
      throw new Error("User not found");
    }

    console.log("Edu Data:", educationData);

    const existingProfile = await prisma.profile.findFirst({
      where: {
        userId: userId as string,
      },
    });

    console.log("Existing profile", existingProfile);

    const existingEducation = await prisma.education.findUnique({
      where: {
        profileId: existingProfile?.id!,
      },
    });

    if (existingEducation) {
      const updatedEducation = await prisma.education.update({
        where: {
          id: existingEducation.id,
        },
        data: {
          educationLevels: {
            push: educationData,
          },
        },
      });
      console.log("Education Update", updatedEducation);
      return updatedEducation;
    } else {
      const educationRecord = await prisma.education.create({
        data: {
          userId: userId as string,
          profileId: existingProfile?.id!,
          educationLevels: educationData,
        },
      });
      console.log("Education Write", educationRecord);
      return educationRecord;
    }

    revalidatePath("dashboard/profile");
  } catch (error) {
    // console.log(error);
  }
}

export async function getEducation() {
  try {
    const { userId } = await auth();

    if (!userId) {
      throw new Error("User not found");
    }

    const education = await prisma.education.findFirst({
      where: {
        userId: userId as string,
      },
    });

    return education;
  } catch (error) {
    console.log(error);
  }
}
