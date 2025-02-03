"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import questions from "@/data/self-assessment-questionnaire.json";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import axios from "axios";

interface SelfAssessmentResponse {
  question: String;
  answer: String;
}

const generateSchema = () => {
  const schemaObject: Record<string, z.ZodTypeAny> = {};

  questions.forEach((question, index) => {
    const questionKey = `question${index + 1}`;

    switch (question.type) {
      case "text":
        schemaObject[questionKey] = z.string().min(1, "This field is required");
        break;
      case "mcq":
        schemaObject[questionKey] = z.string().min(1, "This field is required");
        break;
      case "paragraph":
        schemaObject[questionKey] = z
          .string()
          .min(10, "Please provide a longer response");
        break;
    }
  });

  return z.object(schemaObject);
};

const schema = generateSchema();

// Define the types for question objects
interface Question {
  type: "text" | "mcq" | "paragraph";
  question: string;
  options?: string[];
}

const Assessment = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  // const selfAssessmentResponse = questions.map((item) => item.type);
  // console.log(selfAssessmentResponse);

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (values: any) => {
    console.log("Values", Object.values(values));
    console.log("Values full:", values);
    setIsSubmitted(true);

    const selfAssessmentResponse: SelfAssessmentResponse[] = questions.map(
      (item, index) => ({
        question: item.question,
        answer: Object.values(values)[index] as string,
      })
    );

    try {
      const response = await axios.post("/api/self-assessment", {
        selfAssessmentResponse: selfAssessmentResponse,
      });
      if (response.status === 200) {
        console.log("Success");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleNextButton = async () => {
    const isValid = await form.trigger(`question${currentQuestionIndex + 1}`);
    if (isValid) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handlePrevButton = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const variants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  return (
    <div className="w-full max-w-lg mx-auto p-4 bg-gray-50 rounded-lg shadow">
      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            key={"thankyou"}
            ref={containerRef}
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="text-center py-8"
            style={{ height: "auto" }}
          >
            <h2 className="text-2xl font-bold mb-4">
              Thank you for submitting your self-assessment!
            </h2>
            <p className="text-gray-600 ">
              We will be reviewing your responses and will get back to you
              shortly.
            </p>
          </motion.div>
        ) : (
          <motion.div
            key={currentQuestionIndex}
            ref={containerRef}
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="p-8 "
            style={{ height: "auto" }}
          >
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 flex flex-col"
              >
                <p className="text-gray-600 font-semibold">
                  {questions[currentQuestionIndex].question}
                </p>
                {questions[currentQuestionIndex].type === "mcq" && (
                  <div className="mt-4">
                    <FormField
                      control={form.control}
                      name={`question${currentQuestionIndex + 1}`}
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              //   defaultValue={field.value}
                              value={field.value}
                              className="flex flex-col space-y-1"
                            >
                              {questions[currentQuestionIndex].options?.map(
                                (option, index) => (
                                  <FormItem
                                    key={index}
                                    className="flex items-center space-x-3 space-y-0"
                                  >
                                    <FormControl>
                                      <RadioGroupItem value={option} />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                      {option}
                                    </FormLabel>
                                  </FormItem>
                                )
                              )}
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}

                {questions[currentQuestionIndex].type === "paragraph" && (
                  <FormField
                    control={form.control}
                    name={`question${currentQuestionIndex + 1}`}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            className="mt-4 w-full p-2 border rounded-md resize-none"
                            rows={4}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
                {currentQuestionIndex < questions.length - 1 ? (
                  <div className="flex gap-2 justify-between mt-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handlePrevButton}
                    >
                      Previous
                    </Button>
                    <Button type="button" onClick={handleNextButton}>
                      Next
                    </Button>
                  </div>
                ) : (
                  <Button type="submit" className="mt-4">
                    Submit
                  </Button>
                )}
              </form>
            </Form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Assessment;
