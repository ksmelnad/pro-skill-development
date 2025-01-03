"use server";
import prisma from "@/utils/prismadb";
import { auth } from "@clerk/nextjs/server";
import questions from "@/data/quiz_data.json";

interface QuizResult {
  quizId: string;
  quizAnswers: QuizAnswer[];
}

interface QuizAnswer {
  questionId: number;
  optionId: number;
}
export async function createQuizResult(quizResult: QuizResult) {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("User not found");
  }
  const quiz = await prisma.quizResult.create({
    data: {
      quizId: quizResult.quizId,
      userId,
      attempt: 1,
      score: calculateQuizScore(quizResult.quizAnswers).score,
      percent: calculateQuizScore(quizResult.quizAnswers).percent,
      grade: calculateQuizScore(quizResult.quizAnswers).grade,
      quizAnswers: quizResult.quizAnswers,
    },
  });

  if (!quiz) {
    throw new Error("Failed to create quiz result");
  }
  return {
    success: true,
    message: "Quiz result created successfully",
  };
}

function calculateQuizScore(quizAnswers: QuizAnswer[]) {
  let result = {
    score: 0,
    percent: 0,
    grade: "",
  };
  const correctAnswers = quizAnswers.filter((qa) => {
    const question = questions.find((q) => q.questionId === qa.questionId);
    return question?.correctOptionId === qa.optionId;
  });
  result.score = correctAnswers.length;
  result.percent = Number(
    ((correctAnswers.length / questions.length) * 100).toFixed(2)
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
