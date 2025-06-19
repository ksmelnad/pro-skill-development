"use server";

import prisma from "@/utils/prismadb";
import type { ForumThread, ForumPost, ForumComment } from "@prisma/client";
import type {
  CreateThreadFormValues,
  CreatePostFormValues,
  CreateCommentFormValues,
} from "@/lib/zodSchemas";
import {
  createThreadSchema,
  createPostSchema,
  createCommentSchema,
} from "@/lib/zodSchemas";
import { z } from "zod";
import { auth } from "@clerk/nextjs/server";

// Mock User ID for authorship - replace with actual auth logic
const MOCK_USER_ID = "user_clxkz1x2x0000jx9z3q8y7d0g";
const MOCK_USER_EMAIL = "mock.forum.user@example.com";
const MOCK_USER_NAME = "Forum User";

// Helper to create slugs (very basic)
const slugify = (text: string): string => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/--+/g, "-"); // Replace multiple - with single -
};

// async function getOrCreatePrismaUser(
//   userId: string,
//   email: string,
//   name?: string | null,
//   image?: string | null
// ) {
//   let user = await prisma.user.findUnique({ where: { id: userId } });
//   if (!user) {
//     user = await prisma.user.findUnique({ where: { email } });
//     if (!user) {
//       user = await prisma.user.create({
//         data: { id: userId, email, name, image },
//       });
//     } else if (user.id !== userId) {
//       // This case implies an email collision with a different userId. Handle as per your app's logic.
//       // For this example, let's assume if email exists, use that user, and log a warning if IDs differ.
//       if (user.id !== userId) {
//         console.warn(
//           `User with email ${email} exists with ID ${user.id}, but trying to use/create with ID ${userId}. Using existing user.`
//         );
//       }
//     }
//   }
//   return user;
// }

interface ActionResult<T> {
  success: boolean;
  data?: T;
  error?: string;
  fieldErrors?: Record<string, string[]>;
}

// --- Thread Actions ---
export async function createForumThread(
  data: CreateThreadFormValues
): Promise<ActionResult<ForumThread>> {
  const { userId } = await auth();

  const user = await prisma.user.findUnique({
    where: {
      clerkId: userId!,
    },
  });

  if (!user) {
    return {
      success: false,
      error: "User not found.",
    };
  }

  try {
    const validatedData = createThreadSchema.parse(data);
    const slug = slugify(
      validatedData.title + "-" + Date.now().toString().slice(-5)
    ); // Ensure unique slug

    const newThread = await prisma.forumThread.create({
      data: {
        title: validatedData.title,
        content: validatedData.content,
        slug: slug,
        author: {
          connect: {
            clerkId: user.clerkId,
          },
        },
      },
    });
    console.log("Server Action: createForumThread (DB)", newThread);
    return { success: true, data: newThread };
  } catch (e: any) {
    if (e instanceof z.ZodError) {
      return {
        success: false,
        error: "Validation failed.",
        fieldErrors: e.flatten().fieldErrors as Record<string, string[]>,
      };
    }
    console.error("Error creating forum thread:", e);
    return {
      success: false,
      error: e.message || "Failed to create forum thread.",
    };
  }
}

// --- Post Actions ---
export async function createForumPost(
  data: CreatePostFormValues
): Promise<ActionResult<ForumPost>> {
  const { userId } = await auth();

  const validatedData = createPostSchema.parse(data);
  console.log("Validated data in create post", validatedData);
  try {
    const newPost = await prisma.forumPost.create({
      data: {
        content: validatedData.content,
        // threadId: validatedData.threadId,
        thread: {
          connect: {
            id: validatedData.threadId,
          },
        },
        author: {
          connect: {
            clerkId: userId!,
          },
        },
      },
    });
    console.log("Server Action: createForumPost (DB)", newPost);
    return { success: true, data: newPost };
  } catch (e: any) {
    if (e instanceof z.ZodError) {
      return {
        success: false,
        error: "Validation failed.",
        fieldErrors: e.flatten().fieldErrors as Record<string, string[]>,
      };
    }
    console.error("Error creating forum post:", e);
    return {
      success: false,
      error: e.message || "Failed to create forum post.",
    };
  }
}

// --- Comment Actions ---
export async function createForumComment(
  data: CreateCommentFormValues
): Promise<ActionResult<ForumComment>> {
  const { userId } = await auth();

  try {
    const validatedData = createCommentSchema.parse(data);

    const newComment = await prisma.forumComment.create({
      data: {
        content: validatedData.content,
        post: {
          connect: {
            id: validatedData.postId,
          },
        },
        author: {
          connect: {
            clerkId: userId!,
          },
        },
      },
    });
    console.log("Server Action: createForumComment (DB)", newComment);
    return { success: true, data: newComment };
  } catch (e: any) {
    if (e instanceof z.ZodError) {
      return {
        success: false,
        error: "Validation failed.",
        fieldErrors: e.flatten().fieldErrors as Record<string, string[]>,
      };
    }
    console.error("Error creating forum comment:", e);
    return {
      success: false,
      error: e.message || "Failed to create forum comment.",
    };
  }
}
