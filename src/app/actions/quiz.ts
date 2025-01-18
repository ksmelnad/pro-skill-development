"use server";
import prisma from "@/utils/prismadb";
import { auth, currentUser } from "@clerk/nextjs/server";
import quiz from "@/data/quiz_data.json";

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
  const user = await currentUser();

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
        select: {
          attempt: true,
        },
      });

    const grade = calculateQuizScore(quizAnswers).grade;
    const attempt = quizResultExists ? quizResultExists.attempt + 1 : 1;
    // console.log("Quiz Title", quiz.quizTitle);

    // const payload = {
    //   userId,
    //   profileId: userId,
    //   userName: user?.fullName!,
    //   course: quizId,
    //   attempt,
    //   grade,
    // };
    // console.log("Payload", payload);

    const quizWrite = await prisma.quizResult.create({
      data: {
        quizId: quizId,
        userId,
        quizTitle: quiz.quizTitle,
        attempt,
        score: calculateQuizScore(quizAnswers).score,
        percent: calculateQuizScore(quizAnswers).percent,
        grade,
        quizAnswers: quizAnswers,
      },
    });
    // console.log("Quiz Write", quizWrite);

    if (!quizWrite) {
      throw new Error("Failed to create quiz result");
    }

    // console.log("userId", userId);

    // console.log("userName", user?.fullName);
    // console.log("course", quizId);
    // console.log("grade", grade);
    // console.log("attempt", attempt);

    // const certificateGenerate = await createCertificate({
    //   userId,
    //   profileId: userId,
    //   userName: user?.fullName!,
    //   course: quizId,
    //   attempt,
    //   grade,
    // });
    // console.log("Certificate Generate", certificateGenerate);

    // if (!certificateGenerate) {
    //   throw new Error("Failed to generate certificate");
    // }

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

function calculateQuizScore(quizAnswers: QuizAnswer[]) {
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
