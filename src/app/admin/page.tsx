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
export default async function page() {
  const quizzes = await getQuizzes();
  const profiles = await getProfiles();

  return (
    <div className="">
      <h3 className="section-title">Welcome Admin! </h3>
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
