"use server";

import prisma from "@/utils/prismadb";
import { auth, clerkClient, currentUser } from "@clerk/nextjs/server";

export const completeOnboarding = async () => {
  const { userId } = await auth();
  const user = await currentUser();

  if (!userId) {
    return { message: "No Logged In User" };
  }

  const client = await clerkClient();

  try {
    const profileExists = await prisma.profile.findUnique({
      where: {
        userId: userId!,
      },
    });
    console.log("Profile Exists: ", profileExists);

    if (!profileExists) {
      const createProfile = await prisma.profile.create({
        data: {
          userId: userId!,
        },
      });

      console.log("Profile created for ", userId);

      if (!createProfile) {
        return { error: "There was an error creating the profile." };
      }
    }

    const userExits = await prisma.user.findUnique({
      where: {
        clerkId: userId!,
      },
    });
    console.log("User Exists: ", userExits);

    if (!userExits) {
      const createUser = await prisma.user.create({
        data: {
          clerkId: userId!,
          image: user?.imageUrl,
          name: user?.firstName + " " + user?.lastName,
          email: user?.emailAddresses[0].emailAddress,
        },
      });

      console.log("User created for ", userId);

      if (!createUser) {
        return { error: "There was an error creating the user." };
      }
    }

    await client.users.updateUser(userId, {
      publicMetadata: {
        onboardingComplete: true,
      },
    });

    return { message: "User metadata Updated" };
  } catch (err) {
    return { error: "There was an error updating the user metadata." };
  }
};
