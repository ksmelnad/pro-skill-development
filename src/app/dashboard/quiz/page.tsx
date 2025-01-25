import { getQuizzes } from "@/app/actions/quiz";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const page = async () => {
  const quizzes = await getQuizzes();

  return (
    <div className="">
      <h3 className="section-title">Quizzes </h3>
      <div className="p-4 grid grid-cols-1 md:grid-cols-2  gap-4 mt-4 ">
        {quizzes.map((quiz, index) => (
          <Card key={index} className="min-w-40">
            <CardHeader>
              <CardTitle>{quiz.quizTitle}</CardTitle>
              <CardDescription>{quiz.quizTopic}</CardDescription>
            </CardHeader>
            <CardContent className="text-sm">
              <p className="flex justify-between">
                <span>QuizId:</span> <span>{quiz.quizId}</span>
              </p>
              <p className="flex justify-between">
                <span>Total Questions:</span> <span>{quiz.totalQuestions}</span>
              </p>
              <p className="flex justify-between">
                <span>Max Attempts:</span> <span>{quiz.maxAttempts}</span>
              </p>
              <p className="flex justify-between">
                <span>Created At:</span>
                <span>
                  {new Date(quiz.createdAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </p>
            </CardContent>

            <CardFooter className="flex justify-end items-center">
              <Button asChild>
                <Link href={`/dashboard/quiz/${quiz.quizId}`}>Start Quiz</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default page;
