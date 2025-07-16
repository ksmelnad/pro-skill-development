import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getQuizzes } from "../actions/quiz";
import { getProfiles } from "../actions/profile";
import { cn } from "@/lib/utils";
import { BookOpen, Brain, Trophy } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  valueColor?: string;
  icon: React.ReactNode;
  description?: string;
}

export default async function page() {
  const quizzes = await getQuizzes();
  const profiles = await getProfiles();

  return (
    <div className="">
      <h3 className="section-title">Welcome Admin! </h3>
      <div className="p-4 grid auto-rows-min gap-4 md:grid-cols-3">
        <StatCard
          title="Users"
          value={profiles.length}
          valueColor="text-emerald-600"
          icon={<Trophy className="w-6 h-6 text-emerald-600" />}
        />
        <StatCard
          title="Profiles"
          value={profiles.length}
          valueColor="text-blue-600"
          icon={<Brain className="w-6 h-6 text-blue-600" />}
        />
        <StatCard
          title="Quizzes"
          value={quizzes.length}
          valueColor="text-rose-600"
          icon={<BookOpen className="w-6 h-6 text-rose-600" />}
        />
      </div>
      <div className="p-4 grid auto-rows-min gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Profiles</CardTitle>
            <CardDescription>No. of user profiles</CardDescription>
          </CardHeader>
          <CardContent>
            <p>There are {profiles.length} profiles.</p>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href="/admin/profiles">Go to Profiles</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Quizzes</CardTitle>
            <CardDescription>Quiz Bank</CardDescription>
          </CardHeader>
          <CardContent>
            <p>There are {quizzes.length} quizzes.</p>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href="/admin/quizzes">View Quiz Bank</Link>
            </Button>
          </CardFooter>
        </Card>
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
