import { getQuizzes } from "@/app/actions/quiz";
import Quizzes from "@/components/adminDashboard/quizzes";

export default async function page() {
  const quizzes = await getQuizzes();

  return <Quizzes quizzes={quizzes} />;
}
