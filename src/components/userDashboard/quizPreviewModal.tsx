"use client";

import type React from "react";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import {
  BookOpen,
  Clock,
  Target,
  Users,
  Play,
  AlertCircle,
  CheckCircle2,
  Timer,
  FileText,
  Award,
} from "lucide-react";
import { Quiz } from "@prisma/client";

// interface Quiz {
//   quizId: string
//   quizTitle: string
//   quizTopic: string
//   totalQuestions: number
//   maxAttempts: number
//   estimatedTime: string
//   difficulty: string
//   participants: number
//   description?: string
// }

interface QuizPreviewModalProps {
  quiz: Quiz;
  children: React.ReactNode;
}

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty.toLowerCase()) {
    case "beginner":
      return "bg-green-100 text-green-800 border-green-200";
    case "intermediate":
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    case "advanced":
      return "bg-red-100 text-red-800 border-red-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

export function QuizPreviewModal({ quiz, children }: QuizPreviewModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const instructions = [
    {
      icon: Timer,
      title: "Time Management",
      description: `You have ${quiz.allotedTime} to complete this quiz. Plan your time wisely for each question.`,
    },
    {
      icon: Target,
      title: "Attempt Limit",
      description: `You can attempt this quiz up to ${quiz.maxAttempts} times. Make each attempt count!`,
    },
    {
      icon: FileText,
      title: "Read Carefully",
      description:
        "Read each question thoroughly before selecting your answer. Some questions may have multiple correct answers.",
    },
    {
      icon: CheckCircle2,
      title: "Save Progress",
      description:
        "Your progress is automatically saved. You can pause and resume the quiz if needed.",
    },
    {
      icon: Award,
      title: "Scoring System",
      description:
        "Each question carries equal weight. Your final score will be calculated based on correct answers.",
    },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="space-y-4">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <DialogTitle className="text-2xl font-bold text-gray-900 pr-8">
                {quiz.quizTitle}
              </DialogTitle>
              <DialogDescription className="text-lg text-gray-600 font-medium">
                {quiz.quizTopic}
              </DialogDescription>
            </div>
            {/* <Badge variant="outline" className={`${getDifficultyColor(quiz.difficulty)} font-medium shrink-0`}>
              {quiz.difficulty}
            </Badge> */}
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Quiz Overview */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-blue-600" />
              Quiz Overview
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-blue-100 p-2">
                  <FileText className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total Questions</p>
                  <p className="font-semibold text-gray-900">
                    {quiz.totalQuestions}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-green-100 p-2">
                  <Clock className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Estimated Time</p>
                  <p className="font-semibold text-gray-900">
                    {quiz.allotedTime}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-orange-100 p-2">
                  <Target className="h-4 w-4 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Max Attempts</p>
                  <p className="font-semibold text-gray-900">
                    {quiz.maxAttempts}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-purple-100 p-2">
                  <Users className="h-4 w-4 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Participants</p>
                  {/* <p className="font-semibold text-gray-900">{quiz.participants.toLocaleString()}</p> */}
                </div>
              </div>
            </div>
          </div>

          <Separator />

          {/* Instructions */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-amber-600" />
              Important Instructions
            </h3>
            <div className="space-y-4">
              {instructions.map((instruction, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100"
                >
                  <div className="rounded-full bg-white p-2 shadow-sm shrink-0">
                    <instruction.icon className="h-4 w-4 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">
                      {instruction.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {instruction.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Quiz Description */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">
              About This Quiz
            </h3>
            {/* <p className="text-gray-600 leading-relaxed">
              {quiz.description ||
                `Test your knowledge in ${quiz.quizTopic} with this comprehensive ${quiz.difficulty.toLowerCase()} level quiz. This assessment covers key concepts and practical applications to help you evaluate your understanding of the subject matter.`}
            </p> */}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              asChild
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium"
              onClick={() => setIsOpen(false)}
            >
              <Link
                href={`/dashboard/quiz/${quiz.quizId}`}
                className="flex items-center justify-center gap-2"
              >
                <Play className="h-4 w-4" />
                Start Quiz Now
              </Link>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
