import prisma from "@/utils/prismadb";
import { currentUser } from "@clerk/nextjs/server";
import QuizHeader from "@/components/userDashboard/quizHeader";
import { getAttempt } from "@/app/actions/quiz";
import Quiz from "@/components/userDashboard/quiz";
export default async function page({
  params,
}: {
  params: Promise<{ quizId: string }>;
}) {
  const { quizId } = await params;

  const quiz = await prisma.quiz.findUnique({
    where: {
      quizId,
    },
  });

  const user = await currentUser();
  const attemptCount = await getAttempt({
    quizId: quiz?.quizId!,
    userId: user?.id!,
  });
  return (
    <div className="p-4">
      <QuizHeader
        quizTitle={quiz?.quizTitle!}
        quizId={quiz?.quizId!}
        quizTopic={quiz?.quizTopic!}
        totalQuestions={quiz?.questions.length!}
        userFullname={user?.fullName! ?? "Guest"}
        attempt={attemptCount + 1}
      />
      {attemptCount + 1 > quiz?.maxAttempts! ? (
        <p className="text-center py-6">
          Sorry, you have reached the maximum number of attempts (
          {quiz?.maxAttempts}) for this quiz.
        </p>
      ) : (
        <Quiz quiz={quiz!} />
      )}
    </div>
  );
}
