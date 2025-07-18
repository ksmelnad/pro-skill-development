import { Suspense } from "react";
import ResultsClientPage from "./results-client-page";

export default function ResultsPage() {
  return (
    <div>
      <h1 className="section-title">Quiz Results</h1>
      <Suspense
        fallback={<p className="text-center text-gray-500 mt-6">Loading...</p>}
      >
        <ResultsClientPage />
      </Suspense>
    </div>
  );
}
