"use client";

import React, { useState, useEffect, useTransition, useRef } from "react";
import { useRouter } from "next/navigation";
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
import { ArrowLeft, ArrowRight, Loader2, Timer } from "lucide-react";
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
import { Quiz as QuizType } from "@prisma/client";
import { time } from "framer-motion";
import katex from "katex";
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";
import KaTeXRenderer from "../katexRenderer";
import LatexRenderer from "../latexRenderer";
import styles from "@/styles/LatexRenderer.module.css";

interface QuizOption {
  optionId: number;
  option: string;
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

  quizId: string;
}

const Quiz = ({ quiz }: { quiz: QuizType }) => {
  // Shuffle questions and options
  const [shuffledQuestions, setShuffledQuestions] = useState<QuizQuestion[]>(
    []
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number | null>>({});
  const [seconds, setSeconds] = useState<number>(60);
  const questions = quiz.questions;
  const { toast } = useToast();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const onTimerEnd = React.useCallback(() => {
    toast({
      title: "Time is up!",
      description: "You have run out of time.",
      variant: "destructive",
    });
  }, [toast]);

  const timerId = useRef<number | null>(null);

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

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        console.log("Document visible again");
        setCurrentIndex((prevIndex) =>
          Math.min(prevIndex + 1, shuffledQuestions.length - 1)
        );
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [shuffledQuestions.length]);

  useEffect(() => {
    timerId.current = window.setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds > 0) {
          return prevSeconds - 1;
        } else {
          clearInterval(timerId.current!);
          if (onTimerEnd) {
            onTimerEnd();
          }
          return 0;
        }
      });
    }, 1000);

    return () => {
      clearInterval(timerId.current!);
    };
  }, [onTimerEnd]);

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
      const quizAnswers = Object.entries(answers)
        .filter(([, optionId]) => optionId !== null)
        .map(([questionId, optionId]) => ({
          questionId: Number(questionId),
          optionId: optionId as number,
        }));
      console.log("quizAnswers:", quizAnswers);
      if (!quiz.quizId || quizAnswers.length === 0) {
        throw new Error("Quiz ID or answers are missing");
      }
      const response = await createQuizResult({
        quizId: quiz.quizId,

        quizAnswers,
      });

      if (response.success) {
        toast({
          title: "Success 🎉",
          description:
            "✅ Quiz submitted successfully. Redirecting to results now...",
        });
        router.push("/dashboard/results");
      } else {
        toast({
          title: "❌ Error ",
          description: "Quiz submission failed",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.log("Error posting quiz result data:", error);
    }
  };

  const totalAnswered = Object.values(answers).filter(
    (answer) => answer !== null
  ).length;

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const formula = katex.renderToString("c = \\pm\\sqrt{a^2 + b^2}", {
    throwOnError: false,
  });

  const VcLatex = "$V_c = V_s(1 - 10^{-\\frac{t}{T}})$";

  return (
    <div className="min-h-screen">
      <div
        className={`flex justify-end items-center gap-2 py-2 mr-2
        ${
          seconds < 300 && seconds >= 60
            ? "text-yellow-500 animate-pulse"
            : seconds < 60
            ? "text-red-500 animate-pulse"
            : "text-gray-500"
        }
        `}
      >
        <Timer size={20} />
        <p className="">{formatTime(seconds)}</p>
      </div>
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <p className="text-sm text-gray-500  text-right">
            Question {currentIndex + 1} of {shuffledQuestions.length}
          </p>
          <CardTitle className="text-gray-800 text-lg py-4 font-semibold">
            <Latex>{currentQuestion.question} </Latex>
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
                <Latex>{option.option}</Latex>
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
              // size={"icon"}
            >
              <ArrowLeft size={18} className="mr-2" />
              Previous
            </Button>
            <Button
              disabled={currentIndex === shuffledQuestions.length - 1}
              onClick={handleNext}
              variant={"outline"}
              // size={"icon"}
            >
              Next
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button disabled={isPending}>
                {isPending && (
                  <Loader2 size={16} className="mr-2 animate-spin" />
                )}
                Finish
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Submit Quiz</DialogTitle>
                <DialogDescription></DialogDescription>
              </DialogHeader>
              <div>
                You have answered {totalAnswered} out of{" "}
                {shuffledQuestions.length} questions.{" "}
                {totalAnswered !== shuffledQuestions.length &&
                  "Are you sure you want to submit?"}
              </div>

              <DialogFooter className="sm:justify-start">
                <DialogClose asChild>
                  <Button
                    disabled={isPending}
                    type="button"
                    onClick={() => startTransition(handleSubmit)}
                  >
                    {isPending && (
                      <Loader2 size={16} className="mr-2 animate-spin" />
                    )}
                    Submit
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
      {/* <div className="py-4 max-w-2xl flex flex-col gap-4">
        <p dangerouslySetInnerHTML={{ __html: formula }} />
        <Latex>What is $(3\times 4) \div (5-3)$</Latex>
        <Latex>hi {VcLatex} </Latex>
        <LatexRenderer text="What is the derivative of $f(x) = x^2$ and $f(x) = x^2$?" />
      </div> */}
    </div>
  );
};

export default Quiz;
