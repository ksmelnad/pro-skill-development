import SelfAssessment from "@/components/selfAssessment";

export default async function page() {
  return (
    <div className="bg-blue-700">
      <h2 className="text-xl lg:text-3xl text-center font-bold py-6 lg:py-8 text-white">
        Self Assessment
      </h2>
      <div className=" container mx-auto flex justify-center pb-4 lg:pb-4 min-h-[80vh]">
        {/* <h3>Self Assessment</h3>
      <p>
        Welcome to our platform, designed to connect talented individuals like
        you with exciting opportunities in the pharmaceutical and energy
        industries! To understand your strengths and guide you towards the best
        fit, we ask that you complete this brief self-analysis questionnaire.
        Your responses will be kept confidential and used solely to match you
        with suitable roles.{" "}
      </p> */}
        <SelfAssessment />{" "}
      </div>
    </div>
  );
}
