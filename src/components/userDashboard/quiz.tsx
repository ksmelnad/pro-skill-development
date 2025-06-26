"use client";

import React, {
  useState,
  useEffect,
  useTransition,
  useRef,
  useCallback,
} from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Quiz as QuizType } from "@prisma/client";
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
  Clock,
  Loader2,
  Flag,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { createQuizResult } from "@/app/actions/quiz";
import { useToast } from "@/hooks/use-toast";
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";
import ViewQuizDetails from "./viewQuizDetails";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import QuizHeader from "./quizHeader";

// Utility: Fisher-Yates shuffle
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

interface QuizOption {
  optionId: number;
  option: string;
}
interface QuizQuestion {
  questionId: number;
  question: string;
  options: QuizOption[];
  correctOptionId?: number;
  difficulty: number;
}

interface QuizProps {
  quiz: QuizType;
  attemptCount: number;
}

const Quiz: React.FC<QuizProps> = ({ quiz, attemptCount }) => {
  const { quizId, questions } = quiz;
  const [shuffledQuestions, setShuffledQuestions] = useState<QuizQuestion[]>(
    []
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number | null>>({});
  const [markedForReview, setMarkedForReview] = useState<
    Record<number, boolean>
  >({});
  const [seconds, setSeconds] = useState(quiz.allotedTime! * 60);
  const { toast } = useToast();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [showSummary, setShowSummary] = useState(false);
  const [submittedAttempt, setSubmittedAttempt] = useState<number | null>(null);

  const timerRef = useRef<number | null>(null);

  // Shuffle on mount
  useEffect(() => {
    const grouped = questions.reduce((acc, q) => {
      (acc[q.difficulty] = acc[q.difficulty] || []).push(q);
      return acc;
    }, {} as Record<number, QuizQuestion[]>);

    const byDifficulty = Object.keys(grouped)
      .sort((a, b) => +a - +b)
      .flatMap((key) => shuffleArray(grouped[+key]));

    const withShuffledOptions = byDifficulty.map((q) => ({
      ...q,
      options: shuffleArray(q.options),
    }));

    setShuffledQuestions(withShuffledOptions);
  }, [questions]);

  // Countdown timer
  const handleSubmit = useCallback(async () => {
    const quizAnswers = Object.entries(answers)
      .filter(([, opt]) => opt != null)
      .map(([qid, opt]) => ({ questionId: +qid, optionId: opt! }));

    if (!quizId || quizAnswers.length === 0) {
      toast({
        title: "Error",
        description: "No answers to submit or missing quiz ID.",
        variant: "destructive",
      });
      return;
    }

    const res = await createQuizResult({ quizId, quizAnswers });
    if (res.success) {
      toast({
        title: "Success 🎉",
        description: "Quiz submitted successfully.",
      });
      setSubmittedAttempt(res.attempt ?? null);
      setShowSummary(true);
      clearInterval(timerRef?.current!);
      timerRef.current = null;
      setSeconds(0);
    } else {
      toast({
        title: "Submission Failed",
        description: "Unable to submit quiz.",
        variant: "destructive",
      });
    }
  }, [answers, quizId, toast]);

  useEffect(() => {
    timerRef.current = window.setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef?.current!);
          toast({
            title: "Time is up!",
            description: "Submitting automatically.",
            variant: "destructive",
          });
          startTransition(() => void handleSubmit());
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef?.current!);
  }, [handleSubmit, startTransition, toast]);

  if (shuffledQuestions.length === 0) {
    return <p className="text-center py-6 animate-pulse">Loading...</p>;
  }

  if (showSummary && submittedAttempt != null) {
    return <ViewQuizDetails quizId={quizId} attempt={submittedAttempt} />;
  }

  const current = shuffledQuestions[currentIndex];
  const totalAnswered = Object.values(answers).filter((a) => a != null).length;

  // Grid size
  const gridSize = Math.ceil(Math.sqrt(shuffledQuestions.length + 1));

  const formatTime = (s: number) =>
    `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;

  const getTimerColor = () => {
    if (seconds < 10) return "text-red-600";
    if (seconds < 60) return "text-yellow-600";
    return "text-gray-800";
  };

  const getBackgroundColor = () => {
    if (seconds < 10) return "bg-red-100";
    if (seconds < 60) return "bg-yellow-50";
    return "bg-gray-50";
  };

  // const getBorderColor = () => {
  //   if (seconds < 10) return "border-red-500";
  //   if (seconds < 60) return "border-yellow-500";
  //   return "border-blue-500";
  // };
  return (
    <div className="space-y-4">
      <QuizHeader
        quizTitle={quiz.quizTitle}
        quizId={quiz.quizId}
        quizTopic={quiz.quizTopic}
        totalQuestions={quiz.questions.length}
        attempt={attemptCount + 1}
      />
      <div className="grid xl:grid-cols-3 gap-4">
        <Card className="xl:col-span-2">
          <CardHeader>
            <div className="flex justify-between items-center">
              <Badge variant={"outline"} className="bg-gray-50 font-mono">
                Q {currentIndex + 1}/{shuffledQuestions.length}
              </Badge>
              <div className="flex gap-2">
                <motion.div
                  className={`relative rounded-full ${getBackgroundColor()}`}
                  animate={{
                    scale: seconds < 10 ? [1, 1.05, 1] : 1,
                  }}
                  transition={{
                    duration: 0.5,
                    repeat: seconds < 10 ? Number.POSITIVE_INFINITY : 0,
                    repeatType: "reverse",
                  }}
                >
                  <Badge
                    variant={"outline"}
                    className={cn(
                      getTimerColor(),
                      getBackgroundColor(),
                      "font-mono"
                    )}
                  >
                    <Clock />
                    {formatTime(seconds)}
                    <span className={`${getTimerColor()}`}>
                      {" "}
                      {seconds === 0
                        ? "| Time's Up!"
                        : seconds < 10
                        ? "| Critical!"
                        : seconds < 60 && "| Warning!"}
                    </span>
                  </Badge>
                </motion.div>
              </div>
            </div>
            <CardTitle className="mt-6 text-lg">
              <Latex>{current.question}</Latex>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-[upper-alpha] list-inside">
              {current.options.map((opt) => (
                <li
                  key={opt.optionId}
                  className={cn(
                    "p-2 mb-2 rounded border cursor-pointer",
                    answers[current.questionId] === opt.optionId
                      ? "bg-blue-100 ring ring-blue-300"
                      : "bg-gray-50"
                  )}
                  onClick={() =>
                    setAnswers((a) => ({
                      ...a,
                      [current.questionId]: opt.optionId,
                    }))
                  }
                >
                  <Latex>{opt.option}</Latex>
                </li>
              ))}
            </ol>
            <div className="mt-4 flex gap-2">
              <Button
                onClick={() =>
                  setAnswers((a) => ({ ...a, [current.questionId]: null }))
                }
                disabled={answers[current.questionId] == null}
                variant="outline"
              >
                Clear
              </Button>
              <Button
                onClick={() =>
                  setMarkedForReview((m) => ({
                    ...m,
                    [current.questionId]: !m[current.questionId],
                  }))
                }
                variant={
                  markedForReview[current.questionId] ? "default" : "outline"
                }
                className={
                  markedForReview[current.questionId]
                    ? "bg-amber-400 hover:bg-amber-600 text-white"
                    : ""
                }
              >
                <Flag className="mr-1" />
                {markedForReview[current.questionId] ? "Unmark" : "Review"}
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="flex gap-2">
              <Button
                onClick={() => setCurrentIndex((i) => Math.max(i - 1, 0))}
                disabled={currentIndex === 0}
                variant="outline"
              >
                <ArrowLeft className="mr-1" />
                Prev
              </Button>
              <Button
                onClick={() =>
                  setCurrentIndex((i) =>
                    Math.min(i + 1, shuffledQuestions.length - 1)
                  )
                }
                disabled={currentIndex === shuffledQuestions.length - 1}
                variant="outline"
              >
                Next
                <ArrowRight className="ml-1" />
              </Button>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button disabled={isPending}>
                  {isPending && <Loader2 className="mr-1 animate-spin" />}Finish
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Submit Quiz?</DialogTitle>
                </DialogHeader>
                <div>
                  You answered {totalAnswered} of {shuffledQuestions.length}.
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button
                      onClick={() => startTransition(() => void handleSubmit())}
                      disabled={isPending}
                    >
                      {isPending && <Loader2 className="mr-1 animate-spin" />}
                      Submit
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Palette</CardTitle>
          </CardHeader>
          <CardContent>
            <div
              className="grid gap-2"
              style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}
            >
              {Array.from({ length: gridSize * gridSize }).map((_, idx) => {
                const isFilled = idx < shuffledQuestions.length;
                const qIdx = idx;
                const isCurrent = currentIndex === qIdx;
                const qId = shuffledQuestions[qIdx]?.questionId;
                const isAnswered = qId != null && answers[qId] != null;
                const isMarked = qId != null && markedForReview[qId];

                if (!isFilled) return <div key={idx} className="h-8"></div>;

                return (
                  <Button
                    key={idx}
                    size="icon"
                    className={cn(
                      "relative rounded-full",
                      isCurrent
                        ? "bg-blue-500 text-white"
                        : isMarked
                        ? "bg-amber-400 text-white"
                        : isAnswered
                        ? "bg-green-500 text-white"
                        : "bg-gray-100 text-gray-500 hover:text-white hover:bg-blue-500"
                    )}
                    onClick={() => setCurrentIndex(qIdx)}
                  >
                    <span className="absolute inset-0 flex items-center justify-center text-xs">
                      {qIdx + 1}
                    </span>
                  </Button>
                );
              })}
            </div>
            <Separator className="my-2" />
            <div className="text-xs space-y-1">
              <div>
                <Circle
                  className="inline-block w-3 h-3 fill-blue-500 rounded-full"
                  strokeWidth={0.5}
                />{" "}
                Current
              </div>
              <div>
                <Circle
                  className="inline-block w-3 h-3 fill-green-500 rounded-full"
                  strokeWidth={0.5}
                />{" "}
                Answered
              </div>
              <div>
                <Circle
                  className="inline-block w-3 h-3 fill-amber-400 rounded-full "
                  strokeWidth={0.5}
                />{" "}
                Review
              </div>
              <div>
                <Circle
                  className="inline-block w-3 h-3 fill-gray-100 rounded-full "
                  strokeWidth={0.5}
                />{" "}
                Unanswered
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Quiz;
