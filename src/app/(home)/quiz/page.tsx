import { getAttempt } from "@/app/actions/quiz";
import Quiz from "@/components/quiz";
import QuizHeader from "@/components/quizHeader";
import quiz from "@/data/quiz_data.json";
import { currentUser } from "@clerk/nextjs/server";

const page = async () => {
  const user = await currentUser();
  const attemptCount = await getAttempt({
    quizId: quiz.quizId,
    userId: user?.id!,
  });

  return (
    <div>
      <QuizHeader
        quizTitle={quiz.quizTitle}
        quizId={quiz.quizId}
        quizTopic={quiz.quizTopic}
        totalQuestions={quiz.questions.length}
        userFullname={user?.fullName! ?? "Guest"}
        attempt={attemptCount + 1}
      />
      {attemptCount + 1 > quiz.maxAttempts ? (
        <p className="text-center py-6">
          Sorry, you have reached the maximum number of attempts (
          {quiz.maxAttempts}) for this quiz.
        </p>
      ) : (
        <Quiz quizId={quiz.quizId} questions={quiz.questions} />
      )}
    </div>
  );
};

export default page;
