import Quiz from "@/components/userDashboard/quiz";

export default async function page() {
  return (
    <div className="">
      <h3 className="section-title">Results </h3>
      <Quiz />
    </div>
  );
}
