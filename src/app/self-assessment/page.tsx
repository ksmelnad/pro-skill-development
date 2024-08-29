import SelfAssessment from "@/components/selfAssessment";

export default function page() {
  return (
    <div className=" container mx-auto flex justify-center py-10 lg:py16 min-h-[70vh]">
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
  );
}
