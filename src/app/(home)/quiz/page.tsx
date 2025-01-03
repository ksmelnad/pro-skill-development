import Quiz from "@/components/quiz";
import questions from "@/data/quiz_data.json";

const page = async () => {
  return (
    <div>
      <h1>
        <Quiz questions={questions} />
      </h1>
    </div>
  );
};

export default page;
