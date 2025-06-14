import type { DegreeOption } from "@/types/index";

export const SKILL_LEVEL_OPTIONS: DegreeOption[] = [
  { value: "Beginner", label: "Beginner" },
  { value: "Skilled", label: "Skilled" },
  { value: "Advanced", label: "Advanced" },
  { value: "Expert", label: "Expert" },
];

export const GRADUATION_OPTIONS: DegreeOption[] = [
  { value: "B.A", label: "Bachelor of Arts (B.A)" },
  { value: "B.Sc", label: "Bachelor of Science (B.Sc)" },
  { value: "B.Com", label: "Bachelor of Commerce (B.Com)" },
  { value: "B.Tech", label: "Bachelor of Technology (B.Tech)" },
  { value: "B.E", label: "Bachelor of Engineering (B.E)" },
  { value: "B.B.A", label: "Bachelor of Business Administration (BBA)" },
  { value: "B.C.A", label: "Bachelor of Computer Applications (BCA)" },
  { value: "B.Ed", label: "Bachelor of Education (B.Phil)" },
  { value: "Other", label: "Other" },
];

export const POSTGRADUATION_OPTIONS: DegreeOption[] = [
  { value: "M.A", label: "Master of Arts (M.A)" },
  { value: "M.Sc", label: "Master of Science (M.Sc)" },
  { value: "M.Com", label: "Master of Commerce (M.Com)" },
  { value: "M.Tech", label: "Master of Technology (M.Tech)" },
  { value: "M.E", label: "Master of Engineering (M.E)" },
  { value: "M.B.A", label: "Master of Business Administration (MBA)" },
  { value: "M.C.A", label: "Master of Computer Applications (MCA)" },
  { value: "M.Phil", label: "Master of Philosophy (M.Phil)" },
  { value: "M.Ed", label: "Master of Education (M.Ed)" },
  { value: "Other", label: "Other" },
];
export const DIPLOMA_OPTIONS: DegreeOption[] = [
  { value: "Diploma", label: "Diploma" },
  { value: "PG Diploma", label: "Post Graduate Diploma" },
  { value: "Other", label: "Other" },
];

export const DOCTORATE_OPTIONS: DegreeOption[] = [
  { value: "Ph.D", label: "Doctor of Philosophy (Ph.D)" },
];

export const EDUCATION_LEVEL_OPTIONS = [
  { level: "10th", label: "10th" },
  { level: "12th", label: "12th" },
  { level: "graduation", label: "Graduation", options: GRADUATION_OPTIONS },
  {
    level: "postgraduation",
    label: "Postgraduation",
    options: POSTGRADUATION_OPTIONS,
  },
  { level: "diploma", label: "Diploma", options: DIPLOMA_OPTIONS },
  { level: "doctorate", label: "Doctorate", options: DOCTORATE_OPTIONS },
];
