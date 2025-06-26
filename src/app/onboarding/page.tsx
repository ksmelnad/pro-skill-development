"use client";

import * as React from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { completeOnboarding } from "@/app/actions/onboarding";
import { Button } from "@/components/ui/button";
import { UserDetails } from "@/components/onboarding/userDetails";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function OnboardingComponent() {
  const [error, setError] = React.useState("");
  const { user } = useUser();
  const router = useRouter();

  const handleSubmit = async () => {
    const res = await completeOnboarding();
    if (res?.message) {
      // Reloads the user's data from the Clerk API
      await user?.reload();
      router.push("/");
    }
    if (res?.error) {
      setError(res?.error);
    }
  };
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen m-4">
      <h1>👋 Hi, {user?.fullName}</h1>
      <h1 className="text-3xl lg:text-5xl font-semibold text-center text-transparent  gradient md:leading-[1.5em]">
        My Skill Learning Onboarding
      </h1>
      <Card>
        <CardHeader>
          <CardTitle>User Details</CardTitle>
          <CardDescription>
            Your basic profile will be created with some details.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <UserDetails />
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button onClick={handleSubmit}>Continue</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
