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
import {
  ArrowLeft,
  ArrowRight,
  Circle,
  Flag,
  Loader2,
  Timer,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

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
import { cn } from "@/lib/utils";

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
  const [markedForReview, setMarkedForReview] = useState<
    Record<number, boolean>
  >({});
  const { toast } = useToast();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const questions = quiz.questions;
  // const minSquaredGreaterThanX = Array.from({ length: 10}, (_, i) => i + 1).find((i) => i > 0 && questions.length < i * i)

  // Calculate minSquaredGreaterThanX (this will be the grid dimension)
  // It's the smallest integer 'd' such that d*d > number of questions.
  let minSquaredGreaterThanX = 1;
  const numQuestionsForGrid =
    shuffledQuestions.length > 0 ? shuffledQuestions.length : questions.length;

  if (numQuestionsForGrid === 0) {
    minSquaredGreaterThanX = 1; // Default to 1x1 for 0 questions
  } else {
    // Calculate smallest 'd' such that d*d > numQuestionsForGrid
    // Example: numQuestionsForGrid = 5 -> d=3 (3*3=9 > 5)
    // Example: numQuestionsForGrid = 9 -> d=4 (4*4=16 > 9)
    while (
      minSquaredGreaterThanX * minSquaredGreaterThanX <=
      numQuestionsForGrid
    ) {
      minSquaredGreaterThanX++;
    }
  }

  const handleGridNavigation = (questionIndex: number) => {
    if (questionIndex >= 0 && questionIndex < shuffledQuestions.length) {
      setCurrentIndex(questionIndex);
    }
  };
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

  if (shuffledQuestions.length === 0 && questions.length > 0) {
    return (
      <p className="text-center py-6 animate-pulse">Loading the quiz...</p>
    );
  }

  const currentQuestion = shuffledQuestions[currentIndex];
  const totalAnswered = Object.values(answers).filter(
    (answer) => answer !== null
  ).length;

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

  const handleMarkForReview = () => {
    setMarkedForReview((prev) => ({
      ...prev,
      [currentQuestion.questionId]: !prev[currentQuestion.questionId],
    }));
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
      <div className="grid xl:grid-cols-3 gap-4">
        <div className="col-span-2">
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
          <Card className="">
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

              <div className="mt-4 flex gap-2">
                <Button
                  onClick={handleClear}
                  variant={"outline"}
                  disabled={!answers[currentQuestion.questionId]}
                >
                  Clear Answer
                </Button>
                <Button
                  onClick={handleMarkForReview}
                  variant={
                    markedForReview[currentQuestion.questionId]
                      ? "default"
                      : "outline"
                  }
                  className={
                    markedForReview[currentQuestion.questionId]
                      ? "bg-orange-500 hover:bg-orange-600 text-white"
                      : ""
                  }
                >
                  <Flag size={16} className="mr-2" />
                  {markedForReview[currentQuestion.questionId]
                    ? "Unmark Review"
                    : "Mark for Review"}
                </Button>
              </div>
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
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Question Palette</CardTitle>
            <CardDescription>
              {shuffledQuestions.length > 0
                ? "Click a number to navigate."
                : "Loading questions..."}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {shuffledQuestions.length > 0 && minSquaredGreaterThanX > 0 && (
              <div
                className="grid gap-2 place-items-center"
                style={{
                  gridTemplateColumns: `repeat(${minSquaredGreaterThanX}, minmax(0, 1fr))`,
                }}
              >
                {Array.from({
                  length: minSquaredGreaterThanX * minSquaredGreaterThanX,
                }).map((_, cellIndex) => {
                  const questionNumberForDisplay = cellIndex + 1;
                  const actualQuestionIndex = questionNumberForDisplay - 1;

                  if (questionNumberForDisplay <= shuffledQuestions.length) {
                    const questionId =
                      shuffledQuestions[actualQuestionIndex]?.questionId;
                    const isAnswered =
                      questionId !== undefined &&
                      answers[questionId] !== null &&
                      answers[questionId] !== undefined;
                    const isMarked =
                      questionId !== undefined && markedForReview[questionId];
                    answers[questionId] !== undefined; // ???
                    const isCurrent = currentIndex === actualQuestionIndex;

                    return (
                      <Button
                        key={`grid-${actualQuestionIndex}`}
                        variant="ghost" // Let the Circle define the appearance
                        className="p-0 w-10 h-10 relative focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500 rounded-full"
                        onClick={() =>
                          handleGridNavigation(actualQuestionIndex)
                        }
                        title={`Question ${questionNumberForDisplay}`}
                      >
                        <Circle
                          className={cn(
                            "w-full h-full", // Circle fills the button area
                            isMarked
                              ? "fill-orange-400 text-orange-700"
                              : isCurrent
                              ? "fill-blue-400 text-blue-700"
                              : !isCurrent && isAnswered
                              ? "fill-green-400 text-green-700"
                              : !isCurrent && !isAnswered
                              ? "text-gray-400 fill-white hover:fill-gray-100"
                              : ""
                          )}
                          strokeWidth={0.5}
                        />
                        <span
                          className={cn(
                            "absolute inset-0 flex items-center justify-center text-xs font-semibold",
                            // isCurrent || (!isCurrent && isAnswered)
                            isMarked || isCurrent || (!isCurrent && isAnswered)
                              ? "text-white"
                              : "text-gray-800"
                          )}
                        >
                          {questionNumberForDisplay}
                        </span>
                      </Button>
                    );
                  } else {
                    return (
                      <div
                        key={`empty-${cellIndex}`}
                        className="w-10 h-10 rounded-full border border-dashed border-gray-200 bg-gray-50 flex items-center justify-center"
                        aria-hidden="true"
                      >
                        {/* Empty cell placeholder */}
                      </div>
                    );
                  }
                })}
              </div>
            )}
            {shuffledQuestions.length === 0 && questions.length > 0 && (
              <p className="text-sm text-center text-gray-500">
                Loading question palette...
              </p>
            )}
            <Separator className="my-4" />
            <div className="space-y-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <Circle
                  className="w-3 h-3 fill-blue-400 text-blue-700"
                  strokeWidth={0.5}
                />
                <span>Current Question</span>
              </div>
              <div className="flex items-center gap-2">
                <Circle
                  className="w-3 h-3 fill-green-400 text-green-700"
                  strokeWidth={0.5}
                />
                <span>Answered</span>
              </div>
              <div className="flex items-center gap-2">
                <Circle
                  className="w-3 h-3 fill-orange-400 text-orange-700"
                  strokeWidth={0.5}
                />
                <span>Marked for Review</span>
              </div>
              <div className="flex items-center gap-2">
                <Circle
                  className="w-3 h-3 fill-white text-gray-400 border border-gray-400"
                  strokeWidth={0.5}
                />
                <span>Not Answered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full border border-dashed border-gray-300 bg-gray-100" />
                <span>Not a Question</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
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
