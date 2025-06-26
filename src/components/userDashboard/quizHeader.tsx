import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

interface QuizHeaderProps {
  quizTitle: string;
  quizCode: string;
  quizTopic: string;
  totalQuestions: number;
  attempt: number;
}

export default function QuizHeader({
  quizTitle,
  quizId,
  quizTopic,
  totalQuestions,
  attempt,
}: {
  quizTitle: string;
  quizId: string;
  quizTopic: string;
  totalQuestions: number;
  attempt: number;
}) {
  return (
    <Card className="bg-primary text-white">
      <CardHeader>
        <CardTitle className=" text-center text-lg md:text-2xl font-semibold">
          {quizTitle}
        </CardTitle>
        <div className="sm:flex justify-between">
          <div>
            <p>Topic: {quizTopic}</p>
            <p>Quiz code: {quizId}</p>
          </div>
          <div>
            <p>Total questions: {totalQuestions}</p>
            <p>Attempt: {attempt}</p>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}
