import prisma from "@/utils/prismadb";
import { auth } from "@clerk/nextjs/server";

export default async function ViewQuizDetails({
  quizId,
  attempt,
}: {
  quizId: string;
  attempt: number;
}) {
  const quiz = await prisma.quiz.findUnique({
    where: {
      quizId,
    },
  });

  const { userId } = await auth();

  const quizResult = await prisma.quizResult.findUnique({
    where: {
      // Prisma auto-generates a compound field name by concatenating the field names with underscores.
      quizId_userId_attempt: {
        quizId,
        userId: userId!,
        attempt, // ensure that attempt is a number
      },
    },
  });

  return (
    <div>
      <div className="flex flex-col gap-2">
        {quiz?.questions.map((question) => {
          const userAnswer = quizResult?.quizAnswers.find(
            (answer) => answer.questionId === question.questionId
          );
          return (
            <div
              key={question.questionId}
              className="space-y-2 bg-stone-100 p-4 border rounded-sm text-sm"
            >
              <p className="font-semibold">
                {question.questionId}. {question.question}
              </p>
              <ul className="list-decimal ml-4">
                {question.options.map((option) => {
                  // Determine if this option is correct
                  const isCorrect =
                    option.optionId === question.correctOptionId;
                  // Check if the user selected this option
                  const isUserSelected =
                    userAnswer && userAnswer.optionId === option.optionId;
                  // If the user selected this option but it isn't correct, mark it as wrong
                  const isWrong = isUserSelected && !isCorrect;
                  return (
                    <li
                      key={option.optionId}
                      className={`${
                        isCorrect
                          ? "font-semibold text-green-500"
                          : isWrong
                          ? "font-semibold text-red-500"
                          : ""
                      }`}
                    >
                      {option.option}
                    </li>
                  );
                })}
              </ul>
              <p>
                Your Answer:{" "}
                <span
                  className={`${
                    userAnswer ? "font-semibold" : "text-gray-500"
                  }`}
                >
                  {userAnswer ? userAnswer.optionId : "Not Attempted"}
                </span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
