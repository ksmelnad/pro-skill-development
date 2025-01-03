"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
} from "@/components/ui/dialog";
import { MoveLeft, MoveRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { createQuizResult } from "@/app/actions/quiz";
import { useToast } from "@/hooks/use-toast";

interface QuizOption {
  optionId: number;
  text: string;
}
interface QuizQuestion {
  questionId: number;
  question: string;
  options: QuizOption[];
  correctOptionId: number;
  difficulty: number;
}

interface QuizProps {
  questions: QuizQuestion[];
}

const Quiz: React.FC<QuizProps> = ({ questions }) => {
  // Shuffle questions and options
  const [shuffledQuestions, setShuffledQuestions] = useState<QuizQuestion[]>(
    []
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number | null>>({});

  const { toast } = useToast();

  useEffect(() => {
    const shuffleArray = (array: any[]) => {
      return array.sort(() => Math.random() - 0.5);
    };

    // Shuffle questions by difficulty
    const groupedByDifficulty = questions.reduce((acc, question) => {
      acc[question.difficulty] = acc[question.difficulty] || [];
      acc[question.difficulty].push(question);
      return acc;
    }, {} as Record<number, QuizQuestion[]>);

    const shuffled = Object.values(groupedByDifficulty).flatMap(shuffleArray);

    // Shuffle options within each question
    const shuffledWithOptions = shuffled.map((q) => ({
      ...q,
      options: shuffleArray([...q.options]),
    }));
    // console.log(shuffledWithOptions);
    setShuffledQuestions(shuffledWithOptions);
  }, [questions]);

  if (shuffledQuestions.length === 0) {
    return (
      <p className="text-center py-6 animate-pulse">Loading the quiz...</p>
    );
  }

  const currentQuestion = shuffledQuestions[currentIndex];

  const handleNext = () => {
    if (currentIndex < shuffledQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleOptionSelect = (optionId: number) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion.questionId]: optionId }));
  };

  const handleClear = () => {
    setAnswers((prev) => ({ ...prev, [currentQuestion.questionId]: null }));
  };

  const handleSubmit = async () => {
    // console.log(
    //   "Submitted Answers:",
    //   Object.entries(answers).map(([questionId, optionId]) => ({
    //     questionId: Number(questionId),
    //     optionId,
    //   }))
    // );
    try {
      const response = await createQuizResult({
        quizId: "test-quiz",
        quizAnswers: Object.entries(answers)
          .filter(([, optionId]) => optionId !== null)
          .map(([questionId, optionId]) => ({
            questionId: Number(questionId),
            optionId: optionId as number,
          })),
      });

      if (response.success) {
        toast({
          title: "Success 🎉",
          description:
            "Quiz submitted successfully. Check results in your dashboard.",
        });
      } else {
        toast({
          title: "❌ Error ",
          description: "Quiz submission failed",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const totalAnswered = Object.values(answers).filter(
    (answer) => answer !== null
  ).length;

  return (
    <div className="bg-slate-100 min-h-screen">
      <div className="py-10">
        <h1 className="text-2xl font-semibold text-center">Quiz</h1>
      </div>
      <Card className="max-w-lg mx-auto">
        <CardHeader>
          <p className="text-sm text-gray-500 font-semibold text-right">
            Question {currentIndex + 1} of {shuffledQuestions.length}
          </p>
          <CardTitle className="text-gray-800 py-8 font-semibold leading-6">
            {currentQuestion.question}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            {currentQuestion.options.map((option) => (
              <button
                key={option.optionId}
                className={`block w-full py-2 px-4 mb-2 border rounded-sm text-left ${
                  answers[currentQuestion.questionId] === option.optionId
                    ? "bg-blue-800 text-white"
                    : "bg-slate-50 text-gray-800"
                } `}
                onClick={() => handleOptionSelect(option.optionId)}
              >
                {option.text}
              </button>
            ))}
          </div>
          {answers[currentQuestion.questionId] && (
            <Button onClick={handleClear} className="mt-4" variant={"outline"}>
              Clear
            </Button>
          )}
        </CardContent>
        <CardFooter className="flex justify-between gap-4">
          <div className="flex gap-4">
            <Button
              disabled={currentIndex === 0}
              onClick={handlePrevious}
              variant={"outline"}
              size={"icon"}
            >
              <MoveLeft />
            </Button>
            <Button
              disabled={currentIndex === shuffledQuestions.length - 1}
              onClick={handleNext}
              variant={"outline"}
              size={"icon"}
            >
              <MoveRight />
            </Button>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button>Submit</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>End Quiz</DialogTitle>
                <DialogDescription>
                  You have answered {totalAnswered} out of{" "}
                  {shuffledQuestions.length} questions. Are you sure you want to
                  submit?
                </DialogDescription>
              </DialogHeader>

              <DialogFooter className="sm:justify-start">
                <DialogClose asChild>
                  <Button type="button" onClick={handleSubmit}>
                    Submit
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Quiz;
