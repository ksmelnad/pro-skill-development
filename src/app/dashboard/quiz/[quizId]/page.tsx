import prisma from "@/utils/prismadb";
import { currentUser } from "@clerk/nextjs/server";
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

  if (!quiz) {
    return <div className="text-center text-red-500 p-4">Quiz not found.</div>;
  }

  const user = await currentUser();
  if (!user) {
    // Handle case where user is not authenticated or not found
    // This might redirect to login or show an error
    return (
      <div className="text-center text-red-500 p-4">
        User not authenticated.
      </div>
    );
  }

  const attemptCount = await getAttempt({
    quizId: quiz.quizId,
    userId: user.id,
  });
  return (
    <div className="container mx-auto p-4 space-y-4 ">
      {attemptCount + 1 > quiz?.maxAttempts! ? (
        <p className="text-center py-6">
          Sorry, you have reached the maximum number of attempts (
          {quiz?.maxAttempts}) for this quiz.
        </p>
      ) : (
        <Quiz quiz={quiz!} attemptCount={attemptCount} />
      )}
    </div>
  );
}
