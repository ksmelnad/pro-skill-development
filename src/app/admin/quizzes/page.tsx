import { getQuizzes } from "@/app/actions/quiz";
import Quizzes from "@/components/adminDashboard/quizzes";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export default async function page() {
  const quizzes = await getQuizzes();

  return (
    <div className="min-h-screen">
      <div className="flex justify-between items-center">
        <h1 className="section-title">Quizzes</h1>
        <Link href="/admin/quizzes/create">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <PlusCircle className="mr-2 h-5 w-5" />
            Create New Quiz
          </Button>
        </Link>
      </div>
      <Quizzes quizzes={quizzes} />
    </div>
  );
}
