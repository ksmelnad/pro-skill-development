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
import { ArrowRight, BookOpen, Brain, Trophy } from "lucide-react";

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
      <div className="flex lg:flex-row flex-col gap-2 items-center justify-between">
        <h3 className="section-title">Welcome Admin! </h3>

        <Button asChild variant={"secondary"}>
          <Link href={"/dashboard"}>
            User Dashboard <ArrowRight />
          </Link>
        </Button>
      </div>

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
