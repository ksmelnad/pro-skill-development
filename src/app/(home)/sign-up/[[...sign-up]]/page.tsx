import { SignUp } from "@clerk/nextjs";

export default function page() {
  return (
    <div className="flex justify-center mt-6">
      <SignUp />
    </div>
  );
}
