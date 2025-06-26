import { getQuizResult } from "@/app/actions/quiz";
import ResultsTableClient from "./resultsTableClient"; // Import the new client component

export default async function Results() {
  const quizResult = await getQuizResult();
  // const user = await currentUser();

  return (
    <div className="w-full">
      <ResultsTableClient quizResults={quizResult} />
    </div>
  );
}
