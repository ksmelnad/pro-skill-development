interface QuizHeaderProps {
  quizTitle: string;
  quizCode: string;
  quizTopic: string;
  totalQuestions: number;
  userFullname: string;
  attempt: number;
}

export default function QuizHeader({
  quizTitle,
  quizId,
  quizTopic,
  totalQuestions,
  userFullname,
  attempt,
}: {
  quizTitle: string;
  quizId: string;
  quizTopic: string;
  totalQuestions: number;
  userFullname: string;
  attempt: number;
}) {
  return (
    <section className="max-w-2xl mx-auto bg-sidebar my-4 shadow-md rounded-md">
      <div className="p-4">
        <p className="font-semibold text-blue-800 mb-2">{quizTitle}</p>
        <div className="flex justify-between text-sm">
          <div>
            <p>Quiz code: {quizId}</p>

            <p>Topic: {quizTopic}</p>
            <p>Total questions: {totalQuestions}</p>
          </div>
          <div>
            <h3>Name: {userFullname}</h3>
            <p>Attempt: {attempt}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
