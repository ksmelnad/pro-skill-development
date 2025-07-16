import { auth, currentUser } from "@clerk/nextjs/server";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import { getQuizResult } from "../actions/quiz";
import { redirect } from "next/navigation";
import prisma from "@/utils/prismadb";
import {
  BookOpen,
  Award,
  MessageSquareText,
  CheckCircle,
  XCircle,
  Brain,
  TrendingUp,
  Trophy,
  ArrowRight,
  Play,
  Eye,
  BarChart3,
  Mail,
} from "lucide-react";
import { format } from "date-fns";
import { QuizPerformanceChart } from "@/components/userDashboard/QuizPerformanceChart";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface StatCardProps {
  title: string;
  value: string | number;
  valueColor?: string;
  icon: React.ReactNode;
  description?: string;
}

export default async function page() {
  const { userId } = await auth();
  const user = await currentUser();
  if (!userId) {
    redirect("/sign-in"); // Redirect if not authenticated
  }

  // Fetch profile with related data for completion and other sections
  const profile = await prisma.profile.findUnique({
    where: {
      userId: userId!,
    },
    include: {
      // personalInfo: true,
      educations: true,
      experiences: true,
      // skills are directly on profile, no need for include unless it's a relation
    },
  });
  if (!profile) {
    redirect("/onboarding");
  }
  // const totalFields = 12;
  // const validFilledCount = Object.values(profile)?.filter(Boolean).length || 5;
  // const progress = Math.round(((validFilledCount - 6) / totalFields) * 100);
  // Profile Completion Logic
  let completedFields = 0;
  const totalProfileFields = 9; // Define total fields for completion

  // Check personalInfo fields
  if (profile.personalInfo?.fullName) completedFields++;
  if (profile.personalInfo?.dob) completedFields++;
  if (profile.personalInfo?.mobile) completedFields++;
  if (profile.personalInfo?.address) completedFields++;
  if (profile.personalInfo?.city) completedFields++;
  if (profile.personalInfo?.country) completedFields++;

  // Check array fields
  if (profile.skills && profile.skills.length > 0) completedFields++;
  if (profile.educations && profile.educations.educationLevels.length > 0)
    completedFields++;
  if (profile.experiences && profile.experiences.experienceDetails.length > 0)
    completedFields++;

  const profileProgress = Math.round(
    (completedFields / totalProfileFields) * 100
  );

  // Fetch Quiz Results for analytics and recent activity
  const quizResults = await prisma.quizResult.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
    // take: 5, // Get recent 5 results for activity
  });

  // Quiz Analytics
  const totalQuizzesTaken = quizResults.length;
  let totalScoreSum = 0;
  let quizzesPassed = 0;
  let bestScore = 0;

  quizResults.forEach((result) => {
    totalScoreSum += result.percent;
    if (result.percent >= 70) {
      // Assuming 70% is passing
      quizzesPassed++;
    }
    if (result.percent > bestScore) {
      bestScore = result.percent;
    }
  });

  const averageScore =
    totalQuizzesTaken > 0
      ? (totalScoreSum / totalQuizzesTaken).toFixed(2)
      : "0.00";

  // Fetch Forum Activity
  const forumThreads = await prisma.forumThread.count({
    where: { author: { clerkId: userId } },
  });
  const forumPosts = await prisma.forumPost.count({
    where: { author: { clerkId: userId } },
  });
  const forumComments = await prisma.forumComment.count({
    where: { author: { clerkId: userId } },
  });

  return (
    <div className="p-4 md:p-6 space-y-8">
      <h3 className="text-3xl font-bold text-gray-800">
        Welcome, {user?.fullName || "User"}!
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-2  2xl:grid-cols-4 gap-6">
        <div className="flex flex-col items-center justify-center lg:col-span-2">
          <Image
            src={user?.imageUrl! || "user-128.svg"}
            width={100}
            height={100}
            alt="profile pic"
            className="rounded-full"
          />
          <p className="text-sm text-gray-500 mt-2">
            {user?.emailAddresses[0].emailAddress}
          </p>
          <p className="text-sm text-gray-500">
            Joined since: {format(new Date(user?.createdAt!), "MMM d, yyyy")}
          </p>
        </div>
        {/* Profile Completion Card */}
        <Card className="shadow border-l-4 border-emerald-600">
          <CardHeader className="pb-2">
            <CardDescription className="text-sm text-gray-600">
              Your Progress
            </CardDescription>
            <CardTitle className="text-xl font-bold text-gray-800">
              Profile Completion
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3">
              <Progress
                value={profileProgress}
                className="flex-1 h-2 bg-gray-200"
              />
              <span className="text-base font-semibold text-primary">
                {profileProgress}%
              </span>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              {completedFields} of {totalProfileFields} key fields completed.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild variant={"link"} size={"sm"}>
              <Link className="underline -ml-2" href="/dashboard/profile">
                Go to Profile <ArrowRight />{" "}
              </Link>
            </Button>
          </CardFooter>
        </Card>
        {/* Quiz Analytics Card */}
        {/* <Card className="shadow border-l-4 border-green-500">
          <CardHeader className="pb-2">
            <CardDescription className="text-sm text-gray-600">
              Learning Journey
            </CardDescription>
            <CardTitle className="text-2xl font-bold text-gray-800">
              Quiz Performance
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Quizzes Taken:</span>
              <span className="text-base font-medium text-green-700">
                {totalQuizzesTaken}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Average Score:</span>
              <span className="text-base font-medium text-green-700">
                {averageScore}%
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Quizzes Passed:</span>
              <span className="text-base font-medium text-green-700">
                {quizzesPassed}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Best Score:</span>
              <span className="text-base font-medium text-green-700">
                {bestScore}%
              </span>
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild variant={"outline"} size={"sm"}>
              <Link href="/dashboard/quiz">Take a quiz</Link>
            </Button>
          </CardFooter>
        </Card> */}
        {/* Forum Activity Card */}
        <Card className="shadow border-l-4 border-amber-500">
          <CardHeader className="pb-2">
            <CardDescription className="text-sm text-gray-600">
              Community Engagement
            </CardDescription>
            <CardTitle className="text-xl font-bold text-gray-800">
              Forum Activity
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Threads Created:</span>
              <span className="text-base font-medium text-gray-800">
                {forumThreads}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Posts Made:</span>
              <span className="text-base font-medium text-gray-800">
                {forumPosts}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">Comments Made:</span>
              <span className="text-base font-medium text-gray-800">
                {forumComments}
              </span>
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild variant="link" size="sm">
              <Link className="underline -ml-2" href="/forum">
                Visit Forum <ArrowRight />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Recent Activity Card (Quiz Results) */}
        {/* <Card className="shadow border-l-4 border-orange-500">
          <CardHeader className="pb-2">
            <CardDescription className="text-sm text-gray-600">
              Latest Actions
            </CardDescription>
            <CardTitle className="text-2xl font-bold text-gray-800">
              Recent Quiz Attempts
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {quizResults.length > 0 ? (
              <ul className="divide-y divide-gray-200 space-y-4">
                {quizResults.map((result) => (
                  <li
                    key={result.id}
                    className="flex items-center justify-between text-sm "
                  >
                    <div className="flex items-center gap-2">
                      {result.percent >= 70 ? (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      ) : (
                        <XCircle className="h-4 w-4 text-red-500" />
                      )}
                      <span className="font-medium truncate">
                        {result.quizTitle}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-600">{result.percent}%</span>
                      <span className="text-xs text-muted-foreground">
                        {format(new Date(result.createdAt), "MMM d")}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted-foreground italic">
                No recent quiz attempts.
              </p>
            )}
          </CardContent>
          <CardFooter>
            <Button asChild variant={"outline"} size={"sm"}>
              <Link href="/dashboard/results">See results</Link>
            </Button>
          </CardFooter>
        </Card> */}
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="xl:text-xl font-bold text-gray-700">Quiz Details</h3>
          <Button asChild size={"sm"}>
            <Link href="/dashboard/quiz">
              {" "}
              <Play className="mr-1" /> Take a quiz
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Attempted"
            value={quizResults.length}
            valueColor="text-rose-600"
            icon={<BookOpen className="w-6 h-6 text-rose-600" />}
          />
          <StatCard
            title="Passed"
            value={quizzesPassed}
            valueColor="text-blue-600"
            icon={<Brain className="w-6 h-6 text-blue-600" />}
          />
          <StatCard
            title="Average Score"
            value={`${averageScore}%`}
            valueColor="text-emerald-600"
            icon={<TrendingUp className="w-6 h-6 text-emerald-600" />}
          />
          <StatCard
            title="Best Score"
            value={`${bestScore}%`}
            valueColor="text-yellow-600"
            icon={<Trophy className="w-6 h-6 text-yellow-600" />}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Visualizations/Charts */}
        <section className="bg-white lg:col-span-2 dark:bg-gray-800 shadow rounded-xl p-6">
          <div className="flex items-center justify-between">
            <h2 className="xl:text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">
              Recent Quiz Performance Overview
            </h2>
            <Button variant={"secondary"} asChild size={"sm"}>
              <Link href={"/dashboard/results"}>
                <BarChart3 className="mr-1" /> View All Results
              </Link>
            </Button>
          </div>
          <QuizPerformanceChart data={quizResults.slice(0, 10)} />
        </section>
        {/* Recent Activity Section */}
        <section className=" bg-white dark:bg-gray-800 shadow rounded-xl p-6">
          <h2 className="xl:text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">
            Recent Quiz Attempts
          </h2>
          {quizResults.length > 0 ? (
            <ul className="divide-y divide-gray-200 space-y-2">
              {quizResults.slice(0, 10).map((result) => (
                <li
                  key={result.id}
                  className="flex items-center justify-between text-xs pb-2"
                >
                  <div className="flex items-center gap-2">
                    {result.percent >= 70 ? (
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    ) : (
                      <XCircle className="h-4 w-4 text-red-500" />
                    )}
                    <span className=" truncate">{result.quizTitle}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant={"outline"}
                      className={cn(
                        " rounded-full",
                        result.percent >= 70
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      )}
                    >
                      {result.percent}%
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {format(new Date(result.createdAt), "MMM d")}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-muted-foreground italic">
              No recent quiz attempts.
            </p>
          )}
        </section>
      </div>
    </div>
  );
}

function StatCard({
  title,
  value,
  valueColor,
  icon,
  description,
}: StatCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
          {title}
        </p>
        <div className="text-primary-500 dark:text-primary-400">{icon}</div>
      </div>
      <div className="mt-2">
        <p className={cn("text-3xl font-semibold", valueColor)}>{value}</p>
        {description && (
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
