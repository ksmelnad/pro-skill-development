"use server";
import prisma from "@/utils/prismadb";
import { auth } from "@clerk/nextjs/server";
import { quizSchema } from "@/lib/zodSchemas";
import { revalidatePath } from "next/cache";
import { Quiz } from "@prisma/client";

interface QuizAnswer {
  questionId: number;
  optionId: number;
}
export async function createQuizResult({
  quizId,
  quizAnswers,
}: {
  quizId: string;
  quizAnswers: QuizAnswer[];
}) {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("User not found");
  }

  try {
    // console.log("Quiz Result Data", quizId, quizAnswers);
    const quizResultExists: { attempt: number } | null =
      await prisma.quizResult.findFirst({
        where: {
          quizId: quizId,
          userId,
        },
        orderBy: {
          attempt: "desc",
        },
        select: {
          attempt: true,
        },
      });

    const quiz = await prisma.quiz.findFirst({
      where: { quizId },
    });

    if (!quiz) {
      console.error(`Quiz with ID ${quizId} not found.`);
      throw new Error(`Quiz with ID ${quizId} not found.`);
    }

    const calculationResult = await calculateQuizScore(quiz!, quizAnswers);

    const attempt = quizResultExists ? quizResultExists.attempt + 1 : 1;

    // const payload = {
    //   quizId,
    //   userId,
    //   quizTitle: quiz.quizTitle,
    //   attempt,
    //   score: calculationResult.score,
    //   percent: calculationResult.percent,
    //   grade: calculationResult.grade,
    // };

    // console.log("Payload", payload);

    const quizWrite = await prisma.quizResult.create({
      data: {
        quizId: quizId,
        userId,
        quizTitle: quiz.quizTitle,
        attempt,
        score: calculationResult.score,
        percent: calculationResult.percent,
        grade: calculationResult.grade,
        quizAnswers: quizAnswers,
      },
    });
    // console.log("Quiz Write", quizWrite);

    if (!quizWrite) {
      throw new Error("Failed to create quiz result");
    }

    return {
      success: true,
      message: "Quiz result and certificate created successfully",
    };
  } catch (error) {
    console.error("Error creating quiz result:", error);
    throw new Error("Failed to create quiz result");
  }
}

export async function getAttempt({
  quizId,
  userId,
}: {
  quizId: string;
  userId: string;
}) {
  const attemptCount = await prisma.quizResult.count({
    where: {
      quizId,
      userId,
    },
  });
  return attemptCount;
}

export async function getQuizResult() {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("User not found");
  }
  const quizResult = await prisma.quizResult.findMany({
    where: {
      userId,
    },
  });

  if (!quizResult) {
    throw new Error("Failed to get quiz result");
  }
  return quizResult;
}

async function calculateQuizScore(quiz: Quiz, quizAnswers: QuizAnswer[]) {
  let result = {
    score: 0,
    percent: 0,
    grade: "",
  };

  const correctAnswers = quizAnswers.filter((qa) => {
    const question = quiz.questions.find((q) => q.questionId === qa.questionId);
    return question?.correctOptionId === qa.optionId;
  });
  result.score = correctAnswers.length;
  result.percent = Number(
    ((correctAnswers.length / quiz.questions.length) * 100).toFixed(2)
  );
  if (result.percent >= 90) {
    result.grade = "A+";
  } else if (result.percent >= 80) {
    result.grade = "A";
  } else if (result.percent >= 70) {
    result.grade = "B+";
  } else if (result.percent >= 60) {
    result.grade = "B";
  } else if (result.percent >= 50) {
    result.grade = "C+";
  } else {
    result.grade = "C";
  }
  return result;
}

export async function createQuiz(quizData: any) {
  const parsedData = quizSchema.safeParse(quizData);

  if (!parsedData.success) {
    console.log({
      error: "Invalid data format",
      details: parsedData.error.errors,
    });

    return {
      success: false,
      error: "Invalid data format",
    };
  }

  // TODO: Admin can only create a quiz

  const {
    quizId,
    quizTitle,
    quizTopic,
    totalQuestions,
    maxAttempts,
    questions,
  } = parsedData.data!;

  console.log("Quiz id", quizId, parsedData.data?.quizId);

  try {
    const quizExists = await prisma.quiz.findFirst({
      where: {
        quizId,
      },
    });

    if (quizExists) {
      return {
        success: false,
        error: "Quiz with this id already exists",
      };
    }

    const response = await prisma.quiz.create({
      data: {
        quizId,
        quizTitle,
        quizTopic,
        totalQuestions,
        maxAttempts,
        questions,
      },
    });
    if (response) {
      revalidatePath("/admin/quizzes");
      return {
        success: true,
      };
    } else {
      return {
        success: false,
        error: "Failed to create quiz",
      };
    }
  } catch (error: any) {
    console.log("Error creating quiz:", error);
    return {
      success: false,
      error: error.message || "Failed to create quiz",
    };
  }
}

export async function getQuizzes() {
  const quizzes = await prisma.quiz.findMany();
  return quizzes;
}

export async function getQuiz(quizId: string) {
  const quiz = await prisma.quiz.findUnique({
    where: {
      quizId,
    },
  });
  return quiz;
}
