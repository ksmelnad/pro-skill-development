"use client";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { useState, useTransition } from "react";
import { createQuiz } from "@/app/actions/quiz";
import { useToast } from "@/hooks/use-toast";
import { Quiz } from "@prisma/client";
import { format } from "date-fns";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "../ui/switch";
import { Loader2 } from "lucide-react";

const Quizzes = ({ quizzes }: { quizzes: Quiz[] }) => {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!file) {
      toast({
        title: "Error",
        description: "Please select a file",
        variant: "destructive",
      });
      return;
    }

    const reader = new FileReader();
    reader.readAsText(file);

    reader.onload = async function () {
      setIsLoading(true);
      const data = JSON.parse(reader.result as string);
      const response = await createQuiz(data);
      if (response.success) {
        setIsLoading(false);
        toast({
          title: "Success",
          description: "Quiz created successfully",
        });
      } else {
        setIsLoading(false);
        toast({
          title: "Error",
          description: response.error
            ? response.error
            : "Failed to create quiz",
          variant: "destructive",
        });
      }
    };

    reader.onerror = function (error) {
      console.log(error);
    };
  };

  return (
    <div className="">
      <h1 className="section-title">Quizzes</h1>
      <div className="mb-4 px-4 ">
        <form className="mt-4 flex items-end gap-4" onSubmit={handleSubmit}>
          <div className="space-y-1">
            <Label htmlFor="file">Upload Quiz JSON data</Label>
            <Input
              type="file"
              name="file"
              accept=".json"
              onChange={(e) =>
                setFile(e.target.files ? e.target.files[0] : null)
              }
            />
          </div>
          <Button disabled={isLoading} type="submit">
            {isLoading && <Loader2 className="animate-spin" size={16} />}
            Create
          </Button>
        </form>
      </div>
      <hr />
      <div className="mt-6 p-4">
        <h3 className="text-xl font-bold">Quiz Database</h3>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 ">
          {quizzes.map((quiz, index) => (
            <Card key={index} className="min-w-40">
              <CardHeader>
                <CardTitle>{quiz.quizTitle}</CardTitle>
                <CardDescription>{quiz.quizTopic}</CardDescription>
              </CardHeader>
              <CardContent className="text-sm">
                <p className="flex justify-between">
                  <span>QuizId:</span> <span>{quiz.quizId}</span>
                </p>
                <p className="flex justify-between">
                  <span>Total Questions:</span>{" "}
                  <span>{quiz.totalQuestions}</span>
                </p>
                <p className="flex justify-between">
                  <span>Max Attempts:</span> <span>{quiz.maxAttempts}</span>
                </p>
                <p className="flex justify-between">
                  <span>Created At:</span>
                  <span>
                    {new Date(quiz.createdAt).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </p>
              </CardContent>
              <hr />
              <CardFooter className="mt-4 w-full">
                <div className="w-full flex justify-between items-center  space-x-2">
                  <Label htmlFor="airplane-mode">Enable</Label>
                  <Switch id="airplane-mode" />
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quizzes;
