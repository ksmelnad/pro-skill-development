"use server";

import prisma from "@/utils/prismadb";
import { createClerkClient } from "@clerk/backend";

const clerkClient = createClerkClient({
  secretKey: process.env.CLERK_SECRET_KEY,
});

export async function getClerkUserList() {
  try {
    const { data, totalCount } = await clerkClient.users.getUserList({
      orderBy: "-created_at",
      limit: 50,
    });

    console.log(data);
    console.log(totalCount);
  } catch (error) {
    console.log(error);
  }
}

export async function syncClerkUsersToDB() {
  try {
    console.log("Starting Clerk User Sync");

    const allClerkUsers = await clerkClient.users.getUserList({
      orderBy: "-created_at",
      limit: 50,
    });

    allClerkUsers.data.forEach((user) => {
      console.log(user.fullName, user.emailAddresses[0].emailAddress);
    });

    let upsertedCount = 0;

    for (const clerkUser of allClerkUsers.data) {
      const { id: clerkId, fullName, emailAddresses, imageUrl } = clerkUser;

      const primaryEmail = emailAddresses[0].emailAddress;

      // Data for Prisma upser
      const userData = {
        clerkId,
        name: fullName,
        email: primaryEmail,
        image: imageUrl,
      };

      await prisma.user.upsert({
        where: { clerkId },
        update: userData,
        create: userData,
      });

      upsertedCount++;
    }

    console.log("Clerk User Sync Complete");
    return {
      sucess: true,
      totalFetched: allClerkUsers.totalCount,
      totalUpserted: upsertedCount,
    };
  } catch (error) {
    console.error("Error syncing Clerk users:", error);
    // Consider more specific error handling or logging
    if (error instanceof Error) {
      console.error("Error message:", error.message);
      if ("data" in error) {
        // Clerk API errors often have a 'data' property with more details
        console.error("Clerk error data:", (error as any).data);
      }
    }
    throw error; // Re-throw for the caller to handle
  }
}
