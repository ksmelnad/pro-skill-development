import {
  Education,
  Experience,
  ExperienceDetails,
  PersonalInfo,
  Prisma,
  Profile,
  Skill,
} from "@prisma/client";

// Education related types
export interface DegreeOption {
  value: string;
  label: string;
}

export interface ProfileWithPayload extends Profile {
  personalInfo: PersonalInfo | null;
  educations: Education | null;
  experiences: Experience | null;
  skills: Skill[];
}
