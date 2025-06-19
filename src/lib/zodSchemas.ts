import { z } from "zod";
import { EDUCATION_LEVEL_OPTIONS } from "./constants";

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

export const skillSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, { message: "Skill name cannot be empty." }),
  level: z.enum(["Beginner", "Skilled", "Advanced", "Expert"], {
    required_error: "Skill level is required.",
  }),
  experienceYears: z.coerce
    .number()
    .min(0, "Experience cannot be negative.")
    .optional(),
});

export type SkillFormValues = z.infer<typeof skillSchema>;

export const educationFormSchema = z
  .object({
    // id: z.string().optional(),
    level: z.string().min(1, {
      message: "Please select a level",
    }),
    board: z.string().optional(),
    institute: z.string().optional(),
    degree: z.string().optional(),
    subjects: z.string().min(2, {
      message: "Please enter the details",
    }),
    year: z.coerce
      .number()
      .int()
      .min(1950)
      .max(new Date().getFullYear() + 5)
      .optional(),
    expectedYear: z.coerce
      .number()
      .int()
      .min(1950)
      .max(new Date().getFullYear() + 10)
      .optional(),
    currentSemester: z.coerce
      .number({
        required_error: "Please enter your current semester",
      })
      .optional(),
    grade: z.string().min(1, {
      message: "Please enter the details",
    }),
    completed: z
      .boolean({
        required_error: "Please select if you have completed this level",
      })
      .default(true),
  })
  .superRefine((data, ctx) => {
    const selectedLevelInfo = EDUCATION_LEVEL_OPTIONS.find(
      (l) => l.level === data.level
    );

    if (["10th", "12th"].includes(data.level)) {
      if (!data.board || data.board.trim() === "") {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Board/University is required for 10th/12th.",
          path: ["board"],
        });
      }
    } else if (selectedLevelInfo?.options) {
      // Higher education levels
      if (!data.institute || data.institute.trim() === "") {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Institute name is required.",
          path: ["institute"],
        });
      }
      if (
        selectedLevelInfo.options.length > 0 &&
        (!data.degree || data.degree.trim() === "")
      ) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Degree/Course is required.",
          path: ["degree"],
        });
      }
    }

    if (data.completed) {
      if (!data.year) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Year of completion is required.",
          path: ["year"],
        });
      }
    } else {
      // Not completed (pursuing)
      if (!data.expectedYear) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Expected year of completion is required.",
          path: ["expectedYear"],
        });
      }
      if (!data.currentSemester) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Current semester/year is required.",
          path: ["currentSemester"],
        });
      }
    }
  });

export type EducationFormValues = z.infer<typeof educationFormSchema>;

// Forum Schemas
// Forum Schemas
export const createThreadSchema = z.object({
  title: z
    .string()
    .min(5, "Title must be at least 5 characters.")
    .max(150, "Title cannot exceed 150 characters."),
  content: z
    .string()
    .min(10, "Content must be at least 10 characters.")
    .max(5000, "Content cannot exceed 5000 characters."),
});
export type CreateThreadFormValues = z.infer<typeof createThreadSchema>;

export const createPostSchema = z.object({
  content: z
    .string()
    .min(2, "Reply must be at least 2 characters.")
    .max(5000, "Reply cannot exceed 5000 characters."),
  threadId: z.string(),
});
export type CreatePostFormValues = z.infer<typeof createPostSchema>;

export const createCommentSchema = z.object({
  content: z
    .string()
    .min(1, "Comment cannot be empty.")
    .max(1000, "Comment cannot exceed 1000 characters."),
  postId: z.string(),
});
export type CreateCommentFormValues = z.infer<typeof createCommentSchema>;
