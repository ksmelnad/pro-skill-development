import { currentUser } from "@clerk/nextjs/server";
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
import { getProfile } from "../actions/profile";
import { getQuizResult } from "../actions/quiz";
import { redirect } from "next/navigation";

export default async function page() {
  const user = await currentUser();
  const profile = await getProfile();
  if (!profile) {
    redirect("/dashboard/profile");
  }
  const totalFields = 12;
  const validFilledCount = Object.values(profile)?.filter(Boolean).length || 5;
  const progress = Math.round(((validFilledCount - 5) / totalFields) * 100);
  const quizResult = await getQuizResult();
  return (
    <div className="">
      <h3 className="section-title">Welcome {user?.fullName} </h3>
      <div className="p-4 grid auto-rows-min gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Profile completion</CardTitle>
            <CardDescription>Your profile completion status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Progress value={progress} className="flex-1" />
              <span className="text-sm text-muted-foreground">{progress}%</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href="/dashboard/profile">Go to Profile</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Quiz progress</CardTitle>
            <CardDescription>Your quiz progress</CardDescription>
          </CardHeader>
          <CardContent>
            <p>You completed {quizResult.length} quizzes.</p>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href="/dashboard/quiz">Take a quiz</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Results</CardTitle>
            <CardDescription>Quiz/Course results are here</CardDescription>
          </CardHeader>
          <CardContent>
            <p>See your results here</p>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href="/dashboard/results">See results</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
