"use client";

import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { quizSchema } from "@/lib/zodSchemas";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Trash2, ArrowLeft, Upload, PlusCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea";

import { useToast } from "@/hooks/use-toast";
import { createQuiz } from "@/app/actions/quiz";

type QuizFormValues = z.infer<typeof quizSchema>;

const CreateQuizPage = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [showJsonUpload, setShowJsonUpload] = useState(false);

  const defaultQuizData: QuizFormValues = {
    quizId: "",
    quizTitle: "",
    quizTopic: "",
    totalQuestions: 0,
    maxAttempts: 1,
    allotedTime: 60,
    questions: [],
  };

  const form = useForm<QuizFormValues>({
    resolver: zodResolver(quizSchema),
    defaultValues: defaultQuizData,
  });

  const { fields, remove, append } = useFieldArray({
    control: form.control,
    name: "questions",
  });

  const onSubmit = async (data: QuizFormValues) => {
    try {
      const quizId = `${Date.now()}-${Math.random()
        .toString(36)
        .substring(2, 9)}`;
      const quizData = {
        ...data,
        quizId,
        totalQuestions: data.questions.length,
      };

      const result = await createQuiz(quizData);

      if (result.success) {
        toast({
          title: "Success",
          description: "Quiz created successfully!",
        });
        router.push("/admin/quizzes");
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to create quiz",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error creating quiz:", error);
      toast({
        title: "Error",
        description: "An unexpected error occurred.",
        variant: "destructive",
      });
    }
  };

  const onCancel = () => {
    router.back();
  };

  const handleQuestionFileUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const fileContent = e.target?.result as string;
          let parsedQuestions: QuizFormValues["questions"] = [];

          if (file.type === "application/json") {
            parsedQuestions = JSON.parse(fileContent);
          } else if (file.type === "text/csv") {
            const lines = fileContent.split("\n");
            if (lines.length > 1) {
              const headers = lines[0].split(",").map((h) => h.trim());
              for (let i = 1; i < lines.length; i++) {
                const values = lines[i].split(",").map((v) => v.trim());
                if (values.length !== headers.length) continue;

                const questionData: { [key: string]: string } = {};
                headers.forEach((header, index) => {
                  questionData[header] = values[index];
                });

                const options = [];
                if (questionData["Option A"])
                  options.push({ option: questionData["Option A"] });
                if (questionData["Option B"])
                  options.push({ option: questionData["Option B"] });
                if (questionData["Option C"])
                  options.push({ option: questionData["Option C"] });
                if (questionData["Option D"])
                  options.push({ option: questionData["Option D"] });

                let correctOptionId = 0;
                switch (questionData["Correct Option"]?.toUpperCase()) {
                  case "A":
                    correctOptionId = 1;
                    break;
                  case "B":
                    correctOptionId = 2;
                    break;
                  case "C":
                    correctOptionId = 3;
                    break;
                  case "D":
                    correctOptionId = 4;
                    break;
                }

                parsedQuestions.push({
                  questionId: parseInt(questionData["Sr. No."]) || i,
                  question: questionData["question"] || "",
                  difficulty: 1,
                  correctOptionId: correctOptionId,
                  options: options.map((opt, index) => ({
                    ...opt,
                    optionId: index + 1,
                  })),
                });
              }
            }
          } else {
            alert("Unsupported file type. Please upload a JSON or CSV file.");
            return;
          }
          form.setValue("questions", parsedQuestions);
          form.setValue("totalQuestions", parsedQuestions.length);
        } catch (error) {
          console.error("Error parsing file:", error);
          alert("Error processing file. Please check the format.");
        }
      };
      reader.readAsText(file);
    }
  };

  const handleAddNew = () => {
    append({
      questionId: fields.length + 1,
      question: "",
      difficulty: 1,
      correctOptionId: 1,
      options: [
        { optionId: 1, option: "" },
        { optionId: 2, option: "" },
        { optionId: 3, option: "" },
        { optionId: 4, option: "" },
      ],
    });
  };

  return (
    <div className="py-8 bg-gray-50 min-h-screen">
      <div className="mb-6 space-y-6">
        <Button variant="outline" onClick={onCancel}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Quizzes
        </Button>
        <h1 className="section-title">Create New Quiz</h1>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-700">
                Quiz Details
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="quizTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Quiz Title</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Algebra Basics" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="quizTopic"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Quiz Topic</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Mathematics" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="maxAttempts"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Max Attempts</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="e.g., 3"
                        {...field}
                        onChange={(e) =>
                          field.onChange(parseInt(e.target.value, 10))
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="allotedTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Alloted Time (in minutes)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="e.g., 60"
                        {...field}
                        onChange={(e) =>
                          field.onChange(parseInt(e.target.value, 10))
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-700">
                Questions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 mb-4">
                <label
                  htmlFor="question-file-upload"
                  className="flex items-center gap-2 cursor-pointer text-blue-600 hover:text-blue-800"
                >
                  <Upload className="h-5 w-5" />
                  <span>Upload Questions (CSV or JSON)</span>
                </label>
                <Input
                  id="question-file-upload"
                  type="file"
                  accept=".json,.csv"
                  onChange={handleQuestionFileUpload}
                  className="hidden"
                />
              </div>

              {fields.map((field, index) => {
                const correctOptionId = form.watch(
                  `questions.${index}.correctOptionId`
                );
                const optionLabels = ["A", "B", "C", "D"];
                const selectedOptionIndex = field.options.findIndex(
                  (o) => o.optionId === correctOptionId
                );
                const selectedLabel =
                  selectedOptionIndex !== -1
                    ? optionLabels[selectedOptionIndex]
                    : undefined;

                return (
                  <Card
                    key={field.id}
                    className="mb-6 border border-gray-200 rounded-lg"
                  >
                    <CardHeader className="flex flex-row items-center justify-between bg-gray-100 p-4 rounded-t-lg">
                      <CardTitle className="text-lg font-semibold text-gray-800">
                        Question {index + 1}
                      </CardTitle>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => remove(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="h-5 w-5" />
                      </Button>
                    </CardHeader>
                    <CardContent className="p-6">
                      <FormField
                        control={form.control}
                        name={`questions.${index}.question`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Question Text</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Enter the question text here"
                                rows={3}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="mt-4">
                        <h4 className="font-semibold text-gray-600">Options</h4>
                        {field.options.map((option, optionIndex) => (
                          <div
                            key={option.optionId}
                            className="flex items-center gap-3 mt-2"
                          >
                            <span className="font-bold text-gray-700">
                              {optionLabels[optionIndex]}.
                            </span>
                            <FormField
                              control={form.control}
                              name={`questions.${index}.options.${optionIndex}.option`}
                              render={({ field: optionField }) => (
                                <FormItem
                                  className={cn(
                                    "flex-grow p-2 rounded-md transition-all",
                                    option.optionId === correctOptionId
                                      ? "border-green-500 border-2 bg-green-100/50"
                                      : "border-gray-300"
                                  )}
                                >
                                  <FormControl>
                                    <Input
                                      {...optionField}
                                      placeholder={`Option ${optionLabels[optionIndex]}`}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        ))}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                        <FormField
                          control={form.control}
                          name={`questions.${index}.correctOptionId`}
                          render={({ field: correctOptionField }) => (
                            <FormItem>
                              <FormLabel>Correct Option</FormLabel>
                              <Select
                                onValueChange={(value) =>
                                  correctOptionField.onChange(parseInt(value))
                                }
                                value={correctOptionField.value.toString()}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select correct option">
                                      {selectedLabel}
                                    </SelectValue>
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {field.options.map((option, optionIndex) => (
                                    <SelectItem
                                      key={option.optionId}
                                      value={option.optionId.toString()}
                                    >
                                      {optionLabels[optionIndex]}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name={`questions.${index}.difficulty`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Difficulty</FormLabel>
                              <FormControl>
                                <Input
                                  type="number"
                                  placeholder="e.g., 1"
                                  {...field}
                                  onChange={(e) =>
                                    field.onChange(parseInt(e.target.value, 10))
                                  }
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
              {fields.length > 0 && (
                <Button
                  variant="outline"
                  onClick={handleAddNew}
                  className="mt-4 w-full"
                >
                  <PlusCircle className="mr-2 h-4 w-4" /> Add New Question
                </Button>
              )}
            </CardContent>
          </Card>

          <div className="flex items-center my-8">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="flex-shrink mx-4 text-gray-500">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-700">
                Upload Full Quiz
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button
                variant="secondary"
                onClick={() => setShowJsonUpload(!showJsonUpload)}
              >
                <Upload className="mr-2 h-5 w-5" />
                {showJsonUpload ? "Hide" : "Upload JSON File"}
              </Button>
              {showJsonUpload && (
                <div className="mt-4">
                  <Input
                    type="file"
                    accept=".json"
                    onChange={handleQuestionFileUpload}
                  />
                </div>
              )}
            </CardContent>
          </Card>

          <div className="flex justify-end gap-4 mt-8">
            <Button type="button" variant="ghost" onClick={onCancel}>
              Cancel
            </Button>
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
              Create Quiz
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CreateQuizPage;
