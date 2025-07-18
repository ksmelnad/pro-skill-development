"use client";
import { useState, useTransition } from "react";
import useSWR from "swr";
import { format } from "date-fns";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "../ui/switch";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BookOpen,
  Calendar,
  Clock,
  Loader2,
  Target,
  Users,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { createQuiz, updateQuizState } from "@/app/actions/quiz";
import type { Quiz } from "@prisma/client";
import { quizSchema } from "@/lib/zodSchemas";
// import CreateQuizForm from "./CreateQuizForm";
import { z } from "zod";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Quizzes({
  quizzes: initialQuizzes,
}: {
  quizzes: Quiz[];
}) {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [quizData, setQuizData] = useState<z.infer<typeof quizSchema> | null>(
    null
  );
  const { toast } = useToast();

  const {
    data: quizzes,
    mutate,
    isLoading: isQuizzesLoading,
  } = useSWR<Quiz[]>("/api/admin/quizzes", fetcher, {
    fallbackData: initialQuizzes,
  });

  const [isPending, startTransition] = useTransition();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onload = async () => {
        try {
          const data = JSON.parse(reader.result as string);
          const parsedData = quizSchema.safeParse(data);
          if (parsedData.success) {
            setQuizData(parsedData.data);
          } else {
            toast({
              title: "Error",
              description: "Invalid JSON format",
              variant: "destructive",
            });
          }
        } catch (err) {
          toast({
            title: "Error",
            description: "Invalid JSON file",
            variant: "destructive",
          });
        }
      };
      reader.readAsText(selectedFile);
    }
  };

  const handleFormSubmit = async (data: z.infer<typeof quizSchema>) => {
    setIsLoading(true);
    try {
      const response = await createQuiz(data);
      if (response.success) {
        await mutate();
        toast({ title: "Success", description: "Quiz created successfully" });
        setQuizData(null);
        setFile(null);
      } else {
        toast({
          title: "Error",
          description: response.error || "Failed to create quiz",
          variant: "destructive",
        });
      }
    } catch (err) {
      console.error(err);
      toast({
        title: "Error",
        description: "Failed to create quiz",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggle = async (quizId: string, enabled: boolean) => {
    startTransition(async () => {
      try {
        await mutate(
          async (current) => {
            const updated = await updateQuizState({ quizId, enabled });
            return current
              ? current.map((q) => (q.quizId === quizId ? updated : q))
              : [updated];
          },
          {
            optimisticData:
              quizzes?.map((q) =>
                q.quizId === quizId ? { ...q, enabled } : q
              ) || [],
            rollbackOnError: true,
            revalidate: false,
          }
        );
        toast({ title: "Success", description: "Quiz state updated" });
      } catch (err) {
        console.error(err);
        toast({
          title: "Error",
          description: "Failed to update state",
          variant: "destructive",
        });
      }
    });
  };

  return (
    <section className="px-4">
      {isQuizzesLoading && (
        <Loader2 className="animate-spin mx-auto mt-4" size={24} />
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {quizzes?.map((quiz) => (
          <Card
            key={quiz.quizId}
            className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm"
          >
            <CardHeader className="pb-4">
              <div className="flex justify-between mb-3">
                <div className="text-xs text-gray-500 font-mono bg-gray-100 px-2 py-1 rounded">
                  {quiz.quizId}
                </div>
              </div>
              <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                {quiz.quizTitle}
              </CardTitle>
              <CardDescription className="text-gray-600 font-medium">
                {quiz.quizTopic}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <BookOpen className="h-4 w-4 text-blue-500" />
                  <span className="font-medium">
                    {quiz.totalQuestions} questions
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="h-4 w-4 text-green-500" />
                  <span className="font-medium">{quiz.allotedTime} mins.</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Target className="h-4 w-4 text-orange-500" />
                  <span className="font-medium">
                    {quiz.maxAttempts} attempts
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Users className="h-4 w-4 text-purple-500" />
                  {/* <span className="font-medium">{quiz.participants.toLocaleString()}</span> */}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="h-4 w-4 text-orange-500" />
                  <span className="font-medium">
                    {format(new Date(quiz.createdAt), "MMMM d, yyyy")}
                  </span>
                </div>
              </div>
            </CardContent>
            <hr />
            <CardFooter className="mt-4">
              <div className="w-full flex justify-between items-center">
                <Label htmlFor={`toggle-${quiz.quizId}`}>Enable</Label>
                <Switch
                  id={`toggle-${quiz.quizId}`}
                  checked={quiz.enabled}
                  disabled={isPending}
                  onCheckedChange={(checked) =>
                    handleToggle(quiz.quizId, checked)
                  }
                />
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
