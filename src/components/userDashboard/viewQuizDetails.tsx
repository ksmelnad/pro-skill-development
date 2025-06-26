"use client";

import "katex/dist/katex.min.css";
import Latex from "react-latex-next";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { CheckCircle, Clock, XCircle, Eye, EyeOff, Flag } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { getQuizDetailsForReview } from "@/app/actions/quiz"; // Assuming this action exists or will be created
import { Loader2 } from "lucide-react";
import { Button } from "../ui/button";
import QuizHeader from "./quizHeader";

// Define types based on Prisma schema for clarity in client component
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
  // If you add explanation to your Prisma schema, uncomment this:
  // explanation?: string;
}

interface QuizData {
  quizId: string;
  quizTitle: string;
  quizTopic: string;
  totalQuestions: number;
  questions: QuizQuestion[];
}

interface QuizAnswer {
  questionId: number;
  optionId: number;
}

interface QuizResultData {
  score: number;
  percent: number;
  grade: string;
  quizAnswers: QuizAnswer[];
  createdAt: Date; // Assuming Date object after fetching
}

export default function ViewQuizDetails({
  quizId,
  attempt,
}: {
  quizId: string;
  attempt: number;
}) {
  // Changed to client component, so remove async
  const [quizData, setQuizData] = useState<QuizData | null>(null);
  const [quizResultData, setQuizResultData] = useState<QuizResultData | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showExplanations, setShowExplanations] = useState(false); // Default to false

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await getQuizDetailsForReview(quizId, attempt);
        if (response.success && response.quiz && response.quizResult) {
          setQuizData(response.quiz);
          setQuizResultData(response.quizResult);
        } else {
          setError(response.error || "Failed to load quiz details.");
        }
      } catch (err) {
        console.error("Error fetching quiz details:", err);
        setError("An unexpected error occurred while fetching quiz details.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [quizId, attempt]);

  const getAnswerStatus = useCallback(
    (question: QuizQuestion) => {
      const userAnswer = quizResultData?.quizAnswers.find(
        (answer) => answer.questionId === question.questionId
      );
      const isCorrect = userAnswer?.optionId === question.correctOptionId;
      const isAnswered = userAnswer !== undefined;

      return { isCorrect, isAnswered, userAnswer };
    },
    [quizResultData]
  );

  const renderUserAnswer = useCallback(
    (question: QuizQuestion, userAnswer: QuizAnswer | undefined) => {
      if (userAnswer === undefined) {
        return <span className="text-slate-400 italic">Not answered</span>;
      }

      const selectedOption = question.options.find(
        (opt) => opt.optionId === userAnswer.optionId
      );
      return <Latex>{selectedOption?.option || "Invalid answer"}</Latex>;
    },
    []
  );

  const renderCorrectAnswer = useCallback((question: QuizQuestion) => {
    const correctOption = question.options.find(
      (opt) => opt.optionId === question.correctOptionId
    );
    return <Latex>{correctOption?.option || "N/A"}</Latex>;
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-48">
        <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
        <p className="ml-2 text-gray-600">Loading quiz review...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 p-4">
        <p>{error}</p>
      </div>
    );
  }

  if (!quizData || !quizResultData) {
    return (
      <div className="text-center text-gray-500 p-4">
        <p>No quiz data or result found for this attempt.</p>
      </div>
    );
  }

  // Extract values directly from quizResultData and calculate incorrect answers
  const correctAnswersLength = quizResultData.score;
  const totalQuestions = quizData.questions.length;
  const incorrectAnswersLength = totalQuestions - correctAnswersLength;
  const percent = quizResultData.percent;
  const grade = quizResultData.grade;

  return (
    <div className="py-4 max-w-full">
      <QuizHeader
        quizTitle={quizData.quizTitle}
        quizId={quizData.quizId}
        quizTopic={quizData.quizTopic}
        totalQuestions={quizData.totalQuestions}
        attempt={attempt}
      />
      {/* Header and Toggle Button */}
      <div className="mt-4 flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-slate-800">Summary</h2>
        <Button
          onClick={() => setShowExplanations(!showExplanations)}
          variant="outline"
        >
          {showExplanations ? (
            <>
              <EyeOff className="h-4 w-4 mr-2" />
              Hide Explanations
            </>
          ) : (
            <>
              <Eye className="h-4 w-4 mr-2" />
              Show Explanations (if available)
            </>
          )}
        </Button>
      </div>

      {/* Summary */}
      <Card className="bg-white/80 backdrop-blur-sm border-slate-200 mb-6 min-w-full">
        <CardHeader>
          {/* <CardTitle className="text-slate-800">Review </CardTitle> */}
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-emerald-600 mb-1">
                {correctAnswersLength}
              </div>
              <div className="text-sm text-slate-600">Correct</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-red-600 mb-1">
                {incorrectAnswersLength}
              </div>
              <div className="text-sm text-slate-600">Incorrect/Unanswered</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-1">
                {percent}%
              </div>
              <div className="text-sm text-slate-600">Score</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-amber-600 mb-1">
                {grade}
              </div>
              <div className="text-sm text-slate-600">Grade</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Questions Review */}
      <div className="space-y-4">
        {quizData.questions.map((question, index) => {
          const { isCorrect, isAnswered, userAnswer } =
            getAnswerStatus(question);
          // Flagged questions are not in your Prisma schema, so omitting this part of UI
          // const isFlagged = result.flaggedQuestions.includes(question.id);

          return (
            <Card
              key={question.questionId} // Use question.questionId as key
              className={` bg-white/80 backdrop-blur-sm border-slate-200 ${
                isCorrect
                  ? "border-l-4 border-l-emerald-500"
                  : isAnswered
                  ? "border-l-4 border-l-red-500"
                  : "border-l-4 border-l-slate-300"
              }`}
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <Badge variant="outline" className="mr-3 bg-white/50">
                        Question {index + 1}
                      </Badge>
                      <Badge variant="secondary" className="mr-3">
                        Difficulty {question.difficulty}
                      </Badge>
                      {/* If you had flagged questions in your schema: */}
                      {/* {isFlagged && (
                        <Badge variant="outline" className="text-amber-600 border-amber-200 bg-amber-50">
                          <Flag className="h-3 w-3 mr-1" />
                          Flagged
                        </Badge>
                      )} */}
                    </div>
                    <CardTitle className="text-lg text-slate-800 mb-2">
                      <Latex>{question.question}</Latex>
                    </CardTitle>
                  </div>
                  <div className="ml-4">
                    {isAnswered ? (
                      isCorrect ? (
                        <CheckCircle className="h-6 w-6 text-emerald-600" />
                      ) : (
                        <XCircle className="h-6 w-6 text-red-600" />
                      )
                    ) : (
                      <Clock className="h-6 w-6 text-slate-400" />
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Question Options (for multiple choice) */}
                {question.options && question.options.length > 0 && (
                  <div className="space-y-2">
                    {question.options.map((option, optionIndex) => {
                      const isCorrectOption =
                        option.optionId === question.correctOptionId;
                      const isUserSelectedOption =
                        userAnswer?.optionId === option.optionId;
                      return (
                        <div
                          key={option.optionId}
                          className={`p-3 rounded-lg border ${
                            isCorrectOption
                              ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                              : isUserSelectedOption
                              ? "bg-red-50 border-red-200 text-red-800"
                              : "bg-slate-50 border-slate-200"
                          }`}
                        >
                          <div className="flex items-center">
                            <span className="font-mono text-sm mr-3 opacity-70">
                              {String.fromCharCode(65 + optionIndex)}.
                            </span>
                            <Latex>{option.option}</Latex>
                            {isCorrectOption && (
                              <CheckCircle className="h-4 w-4 ml-auto text-emerald-600" />
                            )}
                            {isUserSelectedOption && !isCorrectOption && (
                              <XCircle className="h-4 w-4 ml-auto text-red-600" />
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Answer Summary */}
                <div className="grid md:grid-cols-2 gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <div>
                    <div className="text-sm font-medium text-slate-600 mb-2">
                      Your Answer:
                    </div>
                    <div className="text-sm">
                      {renderUserAnswer(question, userAnswer)}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-600 mb-2">
                      Correct Answer:
                    </div>
                    <div className="text-sm font-medium text-emerald-700">
                      {renderCorrectAnswer(question)}
                    </div>
                  </div>
                </div>

                {/* Explanation (if available and toggled) */}
                {showExplanations &&
                  (question as any).explanation && ( // Cast to any if explanation is not in QuizQuestion type
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <div className="text-sm font-medium text-blue-800 mb-2">
                        Explanation:
                      </div>
                      <div className="text-sm text-blue-700">
                        {(question as any).explanation}
                      </div>
                    </div>
                  )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
