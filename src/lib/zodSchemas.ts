import { z } from "zod";

const quizOptionSchema = z.object({
  optionId: z.number(),
  option: z.string(),
});

const quizQuestionSchema = z.object({
  question: z.string(),
  options: z.array(quizOptionSchema),
  difficulty: z.number(),
  questionId: z.number(),
  correctOptionId: z.number(),
});

export const quizSchema = z.object({
  quizId: z.string(),
  quizTitle: z.string(),
  quizTopic: z.string(),
  totalQuestions: z.number(),
  maxAttempts: z.number(),
  questions: z.array(quizQuestionSchema),
});
