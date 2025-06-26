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
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  BookOpen,
  Clock,
  Target,
  TrendingUp,
  Play,
  Users,
  Award,
  ChevronRight,
  Eye,
} from "lucide-react";
import { QuizPreviewModal } from "@/components/userDashboard/quizPreviewModal";

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

const page = async () => {
  const quizzes = await getQuizzes();

  return (
    <div className="">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative px-6 py-16 sm:py-6">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="rounded-full bg-white/10 p-4 backdrop-blur-sm">
                  <BookOpen className="h-12 w-12" />
                </div>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
                Test Your Knowledge
              </h1>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Challenge yourself with our comprehensive quizzes and track your
                progress
              </p>
              <div className="mt-8 flex justify-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  {/* <span>{quizzes.reduce((acc, quiz) => acc + quiz.participants, 0).toLocaleString()} participants</span> */}
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4" />
                  <span>{quizzes.length} quizzes available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-blue-100 p-3">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">
                  {quizzes.length}
                </p>
                <p className="text-sm text-gray-600">Available Quizzes</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-green-100 p-3">
                <Target className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">
                  {Math.round(
                    quizzes.reduce(
                      (acc, quiz) => acc + quiz.totalQuestions,
                      0
                    ) / quizzes.length
                  )}
                </p>
                <p className="text-sm text-gray-600">Avg Questions</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-purple-100 p-3">
                <Clock className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">
                  {Math.round(
                    quizzes.reduce((acc, quiz) => acc + quiz.allotedTime!, 0) /
                      quizzes.length
                  )}
                  m
                </p>
                <p className="text-sm text-gray-600">Avg Duration</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quiz Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {quizzes.map((quiz, index) => (
            <Card
              key={quiz.quizId}
              className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <CardHeader className="relative pb-4">
                <div className="flex items-start justify-between mb-3">
                  {/* <Badge variant="outline" className={`${getDifficultyColor(quiz.difficulty)} font-medium`}>
                    {quiz.difficulty}
                  </Badge> */}
                  <div className="text-xs text-gray-500 font-mono bg-gray-100 px-2 py-1 rounded">
                    {quiz.quizId}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {quiz.quizTitle}
                </CardTitle>
                <CardDescription className="text-gray-600 font-medium">
                  {quiz.quizTopic}
                </CardDescription>
              </CardHeader>

              <CardContent className="relative space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <BookOpen className="h-4 w-4 text-blue-500" />
                    <span className="font-medium">
                      {quiz.totalQuestions} questions
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4 text-green-500" />
                    <span className="font-medium">{quiz.allotedTime}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Target className="h-4 w-4 text-orange-500" />
                    <span className="font-medium">
                      {quiz.maxAttempts} attempts
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users className="h-4 w-4 text-purple-500" />
                    {/* <span className="font-medium">{quiz.participants.toLocaleString()}</span> */}
                  </div>
                </div>

                {/* Progress bar simulation */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Completion Rate</span>
                    <span>{Math.floor(Math.random() * 30 + 70)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                      style={{
                        width: `${Math.floor(Math.random() * 30 + 70)}%`,
                      }}
                    ></div>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="relative pt-6 flex flex-col items-center justify-between gap-2">
                <QuizPreviewModal quiz={quiz}>
                  <Button
                    variant="outline"
                    className="w-full border-2 border-blue-200 text-blue-600 hover:bg-blue-50 font-medium py-2.5 rounded-xl transition-all duration-200"
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    Preview Quiz
                  </Button>
                </QuizPreviewModal>

                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-2.5 rounded-xl transition-all duration-200 group-hover:shadow-lg"
                >
                  <Link
                    href={`/dashboard/quiz/${quiz.quizId}`}
                    className="flex items-center justify-center gap-2"
                  >
                    <Play className="h-4 w-4 mr-2" />
                    Quick Start
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Empty State (if no quizzes) */}
        {quizzes.length === 0 && (
          <div className="text-center py-16">
            <div className="rounded-full bg-gray-100 p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
              <BookOpen className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No quizzes available
            </h3>
            <p className="text-gray-600 mb-6">
              Check back later for new quizzes to test your knowledge.
            </p>
            <Button variant="outline">Refresh Page</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
