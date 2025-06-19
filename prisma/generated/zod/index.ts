import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const UserScalarFieldEnumSchema = z.enum(['id','clerkId','name','email','emailVerified','image','createdAt','updatedAt','jobSeekerId','hiringCompanyId','selfAssessmentId']);

export const ProfileScalarFieldEnumSchema = z.enum(['id','userId','createdAt','updatedAt']);

export const CertificateScalarFieldEnumSchema = z.enum(['id','profileId','userId','userName','course','attempt','key','issuedDate']);

export const AccountScalarFieldEnumSchema = z.enum(['id','userId','type','provider','providerAccountId','refresh_token','access_token','expires_at','token_type','scope','id_token','session_state','createdAt','updatedAt']);

export const SessionScalarFieldEnumSchema = z.enum(['id','sessionToken','userId','expires','createdAt','updatedAt']);

export const VerificationTokenScalarFieldEnumSchema = z.enum(['id','identifier','token','expires']);

export const JobSeekerScalarFieldEnumSchema = z.enum(['id','userId','firstName','lastName','dob','gender','contactNumber','address','city','state','postalCode','country','portfolioLinks','preferredJobRoles','resume','profilePicture','createdAt','updatedAt']);

export const EducationScalarFieldEnumSchema = z.enum(['id','userId','profileId']);

export const ExperienceScalarFieldEnumSchema = z.enum(['id','profileId','userId','createdAt','updatedAt']);

export const CertificationScalarFieldEnumSchema = z.enum(['id','jobSeekerId','name','issuedBy','issuedDate']);

export const HiringCompanyScalarFieldEnumSchema = z.enum(['id','userId','companyName','industry','companySize','website','socialLinks','contactPerson','contactEmail','contactNumber','address','city','state','postalCode','country','createdAt','updatedAt']);

export const JobScalarFieldEnumSchema = z.enum(['id','hiringCompanyId','title','description','requirements','salaryRange','location','employmentType','benefits','remote','postedAt']);

export const ApplicationScalarFieldEnumSchema = z.enum(['id','jobSeekerId','jobId','appliedAt','status','resume','coverLetter']);

export const InterviewScalarFieldEnumSchema = z.enum(['id','applicationId','scheduledAt','status','feedback']);

export const SelfAssessmentScalarFieldEnumSchema = z.enum(['id','userId','createdAt','updatedAt']);

export const QuizScalarFieldEnumSchema = z.enum(['id','quizId','quizTitle','quizTopic','totalQuestions','maxAttempts','allotedTime','enabled','createdAt']);

export const QuizResultScalarFieldEnumSchema = z.enum(['id','quizId','quizTitle','userId','score','percent','grade','createdAt','attempt']);

export const ForumThreadScalarFieldEnumSchema = z.enum(['id','slug','title','content','authorId','createdAt','updatedAt']);

export const ForumPostScalarFieldEnumSchema = z.enum(['id','content','authorId','threadId','createdAt','updatedAt']);

export const ForumCommentScalarFieldEnumSchema = z.enum(['id','content','authorId','postId','createdAt','updatedAt']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const LevelSchema = z.enum(['Beginner','Skilled','Advanced','Expert']);

export type LevelType = `${z.infer<typeof LevelSchema>}`

/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  id: z.string(),
  clerkId: z.string(),
  name: z.string().nullable(),
  email: z.string().nullable(),
  emailVerified: z.coerce.date().nullable(),
  image: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  jobSeekerId: z.string().nullable(),
  hiringCompanyId: z.string().nullable(),
  selfAssessmentId: z.string().nullable(),
})

export type User = z.infer<typeof UserSchema>

/////////////////////////////////////////
// PROFILE SCHEMA
/////////////////////////////////////////

export const ProfileSchema = z.object({
  id: z.string(),
  userId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Profile = z.infer<typeof ProfileSchema>

/////////////////////////////////////////
// CERTIFICATE SCHEMA
/////////////////////////////////////////

export const CertificateSchema = z.object({
  id: z.string(),
  profileId: z.string(),
  userId: z.string(),
  userName: z.string(),
  course: z.string(),
  attempt: z.number().int(),
  key: z.string(),
  issuedDate: z.coerce.date(),
})

export type Certificate = z.infer<typeof CertificateSchema>

/////////////////////////////////////////
// ACCOUNT SCHEMA
/////////////////////////////////////////

export const AccountSchema = z.object({
  id: z.string(),
  userId: z.string(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().nullable(),
  access_token: z.string().nullable(),
  expires_at: z.number().int().nullable(),
  token_type: z.string().nullable(),
  scope: z.string().nullable(),
  id_token: z.string().nullable(),
  session_state: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Account = z.infer<typeof AccountSchema>

/////////////////////////////////////////
// SESSION SCHEMA
/////////////////////////////////////////

export const SessionSchema = z.object({
  id: z.string(),
  sessionToken: z.string(),
  userId: z.string(),
  expires: z.coerce.date(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Session = z.infer<typeof SessionSchema>

/////////////////////////////////////////
// VERIFICATION TOKEN SCHEMA
/////////////////////////////////////////

export const VerificationTokenSchema = z.object({
  id: z.string(),
  identifier: z.string(),
  token: z.string(),
  expires: z.coerce.date(),
})

export type VerificationToken = z.infer<typeof VerificationTokenSchema>

/////////////////////////////////////////
// JOB SEEKER SCHEMA
/////////////////////////////////////////

export const JobSeekerSchema = z.object({
  id: z.string(),
  userId: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  dob: z.coerce.date(),
  gender: z.string(),
  contactNumber: z.string(),
  address: z.string(),
  city: z.string(),
  state: z.string(),
  postalCode: z.string(),
  country: z.string(),
  portfolioLinks: z.string().array(),
  preferredJobRoles: z.string().array(),
  resume: z.string(),
  profilePicture: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type JobSeeker = z.infer<typeof JobSeekerSchema>

/////////////////////////////////////////
// EDUCATION SCHEMA
/////////////////////////////////////////

export const EducationSchema = z.object({
  id: z.string(),
  userId: z.string(),
  profileId: z.string(),
})

export type Education = z.infer<typeof EducationSchema>

/////////////////////////////////////////
// EXPERIENCE SCHEMA
/////////////////////////////////////////

export const ExperienceSchema = z.object({
  id: z.string(),
  profileId: z.string(),
  userId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Experience = z.infer<typeof ExperienceSchema>

/////////////////////////////////////////
// CERTIFICATION SCHEMA
/////////////////////////////////////////

export const CertificationSchema = z.object({
  id: z.string(),
  jobSeekerId: z.string(),
  name: z.string(),
  issuedBy: z.string(),
  issuedDate: z.coerce.date(),
})

export type Certification = z.infer<typeof CertificationSchema>

/////////////////////////////////////////
// HIRING COMPANY SCHEMA
/////////////////////////////////////////

export const HiringCompanySchema = z.object({
  id: z.string(),
  userId: z.string(),
  companyName: z.string(),
  industry: z.string(),
  companySize: z.string(),
  website: z.string(),
  socialLinks: z.string().array(),
  contactPerson: z.string(),
  contactEmail: z.string(),
  contactNumber: z.string(),
  address: z.string(),
  city: z.string(),
  state: z.string(),
  postalCode: z.string(),
  country: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type HiringCompany = z.infer<typeof HiringCompanySchema>

/////////////////////////////////////////
// JOB SCHEMA
/////////////////////////////////////////

export const JobSchema = z.object({
  id: z.string(),
  hiringCompanyId: z.string(),
  title: z.string(),
  description: z.string(),
  requirements: z.string().array(),
  salaryRange: z.string(),
  location: z.string(),
  employmentType: z.string(),
  benefits: z.string().array(),
  remote: z.boolean(),
  postedAt: z.coerce.date(),
})

export type Job = z.infer<typeof JobSchema>

/////////////////////////////////////////
// APPLICATION SCHEMA
/////////////////////////////////////////

export const ApplicationSchema = z.object({
  id: z.string(),
  jobSeekerId: z.string(),
  jobId: z.string(),
  appliedAt: z.coerce.date(),
  status: z.string(),
  resume: z.string(),
  coverLetter: z.string().nullable(),
})

export type Application = z.infer<typeof ApplicationSchema>

/////////////////////////////////////////
// INTERVIEW SCHEMA
/////////////////////////////////////////

export const InterviewSchema = z.object({
  id: z.string(),
  applicationId: z.string(),
  scheduledAt: z.coerce.date(),
  status: z.string(),
  feedback: z.string().nullable(),
})

export type Interview = z.infer<typeof InterviewSchema>

/////////////////////////////////////////
// SELF ASSESSMENT SCHEMA
/////////////////////////////////////////

export const SelfAssessmentSchema = z.object({
  id: z.string(),
  userId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type SelfAssessment = z.infer<typeof SelfAssessmentSchema>

/////////////////////////////////////////
// QUIZ SCHEMA
/////////////////////////////////////////

export const QuizSchema = z.object({
  id: z.string(),
  quizId: z.string(),
  quizTitle: z.string(),
  quizTopic: z.string(),
  totalQuestions: z.number().int(),
  maxAttempts: z.number().int(),
  allotedTime: z.number().int().nullable(),
  enabled: z.boolean(),
  createdAt: z.coerce.date(),
})

export type Quiz = z.infer<typeof QuizSchema>

/////////////////////////////////////////
// QUIZ RESULT SCHEMA
/////////////////////////////////////////

export const QuizResultSchema = z.object({
  id: z.string(),
  quizId: z.string(),
  quizTitle: z.string(),
  userId: z.string(),
  score: z.number().int(),
  percent: z.number(),
  grade: z.string(),
  createdAt: z.coerce.date(),
  attempt: z.number().int(),
})

export type QuizResult = z.infer<typeof QuizResultSchema>

/////////////////////////////////////////
// FORUM THREAD SCHEMA
/////////////////////////////////////////

export const ForumThreadSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  content: z.string(),
  authorId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type ForumThread = z.infer<typeof ForumThreadSchema>

/////////////////////////////////////////
// FORUM POST SCHEMA
/////////////////////////////////////////

export const ForumPostSchema = z.object({
  id: z.string(),
  content: z.string(),
  authorId: z.string(),
  threadId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type ForumPost = z.infer<typeof ForumPostSchema>

/////////////////////////////////////////
// FORUM COMMENT SCHEMA
/////////////////////////////////////////

export const ForumCommentSchema = z.object({
  id: z.string(),
  content: z.string(),
  authorId: z.string(),
  postId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type ForumComment = z.infer<typeof ForumCommentSchema>

/////////////////////////////////////////
// COMPOSITE TYPES
/////////////////////////////////////////
// PERSONAL INFO
//------------------------------------------------------


/////////////////////////////////////////
// PERSONAL INFO SCHEMA
/////////////////////////////////////////

export const PersonalInfoSchema = z.object({
  fullName: z.string(),
  image: z.string().nullable(),
  email: z.string(),
  dob: z.coerce.date(),
  mobile: z.string().nullable(),
  relative: z.string().nullable(),
  address: z.string(),
  city: z.string(),
  state: z.string(),
  postalCode: z.string().nullable(),
  country: z.string(),
  linkedIn: z.string().nullable(),
  github: z.string().nullable(),
  twitter: z.string().nullable(),
  facebook: z.string().nullable(),
  hobbies: z.string().nullable(),
  areaImprovementCurrent: z.string().nullable(),
  areaImprovementFuture: z.string().nullable(),
})

export type PersonalInfo = z.infer<typeof PersonalInfoSchema>
// EDUCATION LEVEL
//------------------------------------------------------


/////////////////////////////////////////
// EDUCATION LEVEL SCHEMA
/////////////////////////////////////////

export const EducationLevelSchema = z.object({
  level: z.string(),
  board: z.string().nullable(),
  institute: z.string().nullable(),
  degree: z.string().nullable(),
  subjects: z.string(),
  year: z.number().int().nullable(),
  expectedYear: z.number().int().nullable(),
  currentSemester: z.number().int().nullable(),
  grade: z.string(),
  completed: z.boolean(),
})

export type EducationLevel = z.infer<typeof EducationLevelSchema>
// EXPERIENCE DETAILS
//------------------------------------------------------


/////////////////////////////////////////
// EXPERIENCE DETAILS SCHEMA
/////////////////////////////////////////

export const ExperienceDetailsSchema = z.object({
  company: z.string(),
  jobTitle: z.string(),
  employmentType: z.string(),
  locationType: z.string(),
  location: z.string().nullable(),
  startDate: z.coerce.date(),
  current: z.boolean(),
  endDate: z.coerce.date().nullable(),
  description: z.string().nullable(),
  skills: z.string().array(),
})

export type ExperienceDetails = z.infer<typeof ExperienceDetailsSchema>
// SKILL
//------------------------------------------------------


/////////////////////////////////////////
// SKILL SCHEMA
/////////////////////////////////////////

export const SkillSchema = z.object({
  level: LevelSchema,
  name: z.string(),
  experienceYears: z.number().int(),
})

export type Skill = z.infer<typeof SkillSchema>
// SELF ASSESSMENT RESPONSE
//------------------------------------------------------


/////////////////////////////////////////
// SELF ASSESSMENT RESPONSE SCHEMA
/////////////////////////////////////////

export const SelfAssessmentResponseSchema = z.object({
  question: z.string(),
  answer: z.string(),
})

export type SelfAssessmentResponse = z.infer<typeof SelfAssessmentResponseSchema>
// QUIZ ANSWER
//------------------------------------------------------


/////////////////////////////////////////
// QUIZ ANSWER SCHEMA
/////////////////////////////////////////

export const QuizAnswerSchema = z.object({
  questionId: z.number().int(),
  optionId: z.number().int(),
})

export type QuizAnswer = z.infer<typeof QuizAnswerSchema>
// QUIZ QUESTION
//------------------------------------------------------


/////////////////////////////////////////
// QUIZ QUESTION SCHEMA
/////////////////////////////////////////

export const QuizQuestionSchema = z.object({
  questionId: z.number().int(),
  question: z.string(),
  difficulty: z.number().int(),
  correctOptionId: z.number().int(),
})

export type QuizQuestion = z.infer<typeof QuizQuestionSchema>
// QUIZ OPTION
//------------------------------------------------------


/////////////////////////////////////////
// QUIZ OPTION SCHEMA
/////////////////////////////////////////

export const QuizOptionSchema = z.object({
  optionId: z.number().int(),
  option: z.string(),
})

export type QuizOption = z.infer<typeof QuizOptionSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// USER
//------------------------------------------------------

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z.object({
}).strict()

export const UserArgsSchema: z.ZodType<Prisma.UserDefaultArgs> = z.object({
  select: z.lazy(() => UserSelectSchema).optional(),
  include: z.lazy(() => UserIncludeSchema).optional(),
}).strict();

export const UserCountOutputTypeArgsSchema: z.ZodType<Prisma.UserCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => UserCountOutputTypeSelectSchema).nullish(),
}).strict();

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z.object({
  accounts: z.boolean().optional(),
  sessions: z.boolean().optional(),
  threads: z.boolean().optional(),
  posts: z.boolean().optional(),
  comments: z.boolean().optional(),
}).strict();

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
  id: z.boolean().optional(),
  clerkId: z.boolean().optional(),
  name: z.boolean().optional(),
  email: z.boolean().optional(),
  emailVerified: z.boolean().optional(),
  image: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  jobSeekerId: z.boolean().optional(),
  hiringCompanyId: z.boolean().optional(),
  selfAssessmentId: z.boolean().optional(),
  accounts: z.union([z.boolean(),z.lazy(() => AccountArgsSchema)]).optional(),
  sessions: z.union([z.boolean(),z.lazy(() => SessionArgsSchema)]).optional(),
  jobSeeker: z.union([z.boolean(),z.lazy(() => JobSeekerArgsSchema)]).optional(),
  hiringCompany: z.union([z.boolean(),z.lazy(() => HiringCompanyArgsSchema)]).optional(),
  selfAssessment: z.union([z.boolean(),z.lazy(() => SelfAssessmentArgsSchema)]).optional(),
  threads: z.union([z.boolean(),z.lazy(() => ForumThreadArgsSchema)]).optional(),
  posts: z.union([z.boolean(),z.lazy(() => ForumPostArgsSchema)]).optional(),
  comments: z.union([z.boolean(),z.lazy(() => ForumCommentArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

// PROFILE
//------------------------------------------------------

export const ProfileIncludeSchema: z.ZodType<Prisma.ProfileInclude> = z.object({
}).strict()

export const ProfileArgsSchema: z.ZodType<Prisma.ProfileDefaultArgs> = z.object({
  select: z.lazy(() => ProfileSelectSchema).optional(),
  include: z.lazy(() => ProfileIncludeSchema).optional(),
}).strict();

export const ProfileCountOutputTypeArgsSchema: z.ZodType<Prisma.ProfileCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => ProfileCountOutputTypeSelectSchema).nullish(),
}).strict();

export const ProfileCountOutputTypeSelectSchema: z.ZodType<Prisma.ProfileCountOutputTypeSelect> = z.object({
  skills: z.boolean().optional(),
  certificates: z.boolean().optional(),
}).strict();

export const ProfileSelectSchema: z.ZodType<Prisma.ProfileSelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  personalInfo: z.union([z.boolean(),z.lazy(() => PersonalInfoArgsSchema)]).optional(),
  skills: z.union([z.boolean(),z.lazy(() => SkillArgsSchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  certificates: z.union([z.boolean(),z.lazy(() => CertificateArgsSchema)]).optional(),
  educations: z.union([z.boolean(),z.lazy(() => EducationArgsSchema)]).optional(),
  experiences: z.union([z.boolean(),z.lazy(() => ExperienceArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ProfileCountOutputTypeArgsSchema)]).optional(),
}).strict()

// CERTIFICATE
//------------------------------------------------------

export const CertificateIncludeSchema: z.ZodType<Prisma.CertificateInclude> = z.object({
}).strict()

export const CertificateArgsSchema: z.ZodType<Prisma.CertificateDefaultArgs> = z.object({
  select: z.lazy(() => CertificateSelectSchema).optional(),
  include: z.lazy(() => CertificateIncludeSchema).optional(),
}).strict();

export const CertificateSelectSchema: z.ZodType<Prisma.CertificateSelect> = z.object({
  id: z.boolean().optional(),
  profileId: z.boolean().optional(),
  userId: z.boolean().optional(),
  userName: z.boolean().optional(),
  course: z.boolean().optional(),
  attempt: z.boolean().optional(),
  key: z.boolean().optional(),
  issuedDate: z.boolean().optional(),
  profile: z.union([z.boolean(),z.lazy(() => ProfileArgsSchema)]).optional(),
}).strict()

// ACCOUNT
//------------------------------------------------------

export const AccountIncludeSchema: z.ZodType<Prisma.AccountInclude> = z.object({
}).strict()

export const AccountArgsSchema: z.ZodType<Prisma.AccountDefaultArgs> = z.object({
  select: z.lazy(() => AccountSelectSchema).optional(),
  include: z.lazy(() => AccountIncludeSchema).optional(),
}).strict();

export const AccountSelectSchema: z.ZodType<Prisma.AccountSelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  type: z.boolean().optional(),
  provider: z.boolean().optional(),
  providerAccountId: z.boolean().optional(),
  refresh_token: z.boolean().optional(),
  access_token: z.boolean().optional(),
  expires_at: z.boolean().optional(),
  token_type: z.boolean().optional(),
  scope: z.boolean().optional(),
  id_token: z.boolean().optional(),
  session_state: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

// SESSION
//------------------------------------------------------

export const SessionIncludeSchema: z.ZodType<Prisma.SessionInclude> = z.object({
}).strict()

export const SessionArgsSchema: z.ZodType<Prisma.SessionDefaultArgs> = z.object({
  select: z.lazy(() => SessionSelectSchema).optional(),
  include: z.lazy(() => SessionIncludeSchema).optional(),
}).strict();

export const SessionSelectSchema: z.ZodType<Prisma.SessionSelect> = z.object({
  id: z.boolean().optional(),
  sessionToken: z.boolean().optional(),
  userId: z.boolean().optional(),
  expires: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

// VERIFICATION TOKEN
//------------------------------------------------------

export const VerificationTokenArgsSchema: z.ZodType<Prisma.VerificationTokenDefaultArgs> = z.object({
  select: z.lazy(() => VerificationTokenSelectSchema).optional(),
}).strict();

export const VerificationTokenSelectSchema: z.ZodType<Prisma.VerificationTokenSelect> = z.object({
  id: z.boolean().optional(),
  identifier: z.boolean().optional(),
  token: z.boolean().optional(),
  expires: z.boolean().optional(),
}).strict()

// JOB SEEKER
//------------------------------------------------------

export const JobSeekerIncludeSchema: z.ZodType<Prisma.JobSeekerInclude> = z.object({
}).strict()

export const JobSeekerArgsSchema: z.ZodType<Prisma.JobSeekerDefaultArgs> = z.object({
  select: z.lazy(() => JobSeekerSelectSchema).optional(),
  include: z.lazy(() => JobSeekerIncludeSchema).optional(),
}).strict();

export const JobSeekerCountOutputTypeArgsSchema: z.ZodType<Prisma.JobSeekerCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => JobSeekerCountOutputTypeSelectSchema).nullish(),
}).strict();

export const JobSeekerCountOutputTypeSelectSchema: z.ZodType<Prisma.JobSeekerCountOutputTypeSelect> = z.object({
  skills: z.boolean().optional(),
  certifications: z.boolean().optional(),
  applications: z.boolean().optional(),
}).strict();

export const JobSeekerSelectSchema: z.ZodType<Prisma.JobSeekerSelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  firstName: z.boolean().optional(),
  lastName: z.boolean().optional(),
  dob: z.boolean().optional(),
  gender: z.boolean().optional(),
  contactNumber: z.boolean().optional(),
  address: z.boolean().optional(),
  city: z.boolean().optional(),
  state: z.boolean().optional(),
  postalCode: z.boolean().optional(),
  country: z.boolean().optional(),
  skills: z.union([z.boolean(),z.lazy(() => SkillArgsSchema)]).optional(),
  portfolioLinks: z.boolean().optional(),
  preferredJobRoles: z.boolean().optional(),
  resume: z.boolean().optional(),
  profilePicture: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  certifications: z.union([z.boolean(),z.lazy(() => CertificationArgsSchema)]).optional(),
  applications: z.union([z.boolean(),z.lazy(() => ApplicationArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => JobSeekerCountOutputTypeArgsSchema)]).optional(),
}).strict()

// EDUCATION
//------------------------------------------------------

export const EducationIncludeSchema: z.ZodType<Prisma.EducationInclude> = z.object({
}).strict()

export const EducationArgsSchema: z.ZodType<Prisma.EducationDefaultArgs> = z.object({
  select: z.lazy(() => EducationSelectSchema).optional(),
  include: z.lazy(() => EducationIncludeSchema).optional(),
}).strict();

export const EducationSelectSchema: z.ZodType<Prisma.EducationSelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  profileId: z.boolean().optional(),
  educationLevels: z.union([z.boolean(),z.lazy(() => EducationLevelArgsSchema)]).optional(),
  profile: z.union([z.boolean(),z.lazy(() => ProfileArgsSchema)]).optional(),
}).strict()

// EXPERIENCE
//------------------------------------------------------

export const ExperienceIncludeSchema: z.ZodType<Prisma.ExperienceInclude> = z.object({
}).strict()

export const ExperienceArgsSchema: z.ZodType<Prisma.ExperienceDefaultArgs> = z.object({
  select: z.lazy(() => ExperienceSelectSchema).optional(),
  include: z.lazy(() => ExperienceIncludeSchema).optional(),
}).strict();

export const ExperienceSelectSchema: z.ZodType<Prisma.ExperienceSelect> = z.object({
  id: z.boolean().optional(),
  profileId: z.boolean().optional(),
  userId: z.boolean().optional(),
  experienceDetails: z.union([z.boolean(),z.lazy(() => ExperienceDetailsArgsSchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  profile: z.union([z.boolean(),z.lazy(() => ProfileArgsSchema)]).optional(),
}).strict()

// CERTIFICATION
//------------------------------------------------------

export const CertificationIncludeSchema: z.ZodType<Prisma.CertificationInclude> = z.object({
}).strict()

export const CertificationArgsSchema: z.ZodType<Prisma.CertificationDefaultArgs> = z.object({
  select: z.lazy(() => CertificationSelectSchema).optional(),
  include: z.lazy(() => CertificationIncludeSchema).optional(),
}).strict();

export const CertificationSelectSchema: z.ZodType<Prisma.CertificationSelect> = z.object({
  id: z.boolean().optional(),
  jobSeekerId: z.boolean().optional(),
  name: z.boolean().optional(),
  issuedBy: z.boolean().optional(),
  issuedDate: z.boolean().optional(),
  jobSeeker: z.union([z.boolean(),z.lazy(() => JobSeekerArgsSchema)]).optional(),
}).strict()

// HIRING COMPANY
//------------------------------------------------------

export const HiringCompanyIncludeSchema: z.ZodType<Prisma.HiringCompanyInclude> = z.object({
}).strict()

export const HiringCompanyArgsSchema: z.ZodType<Prisma.HiringCompanyDefaultArgs> = z.object({
  select: z.lazy(() => HiringCompanySelectSchema).optional(),
  include: z.lazy(() => HiringCompanyIncludeSchema).optional(),
}).strict();

export const HiringCompanyCountOutputTypeArgsSchema: z.ZodType<Prisma.HiringCompanyCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => HiringCompanyCountOutputTypeSelectSchema).nullish(),
}).strict();

export const HiringCompanyCountOutputTypeSelectSchema: z.ZodType<Prisma.HiringCompanyCountOutputTypeSelect> = z.object({
  jobs: z.boolean().optional(),
}).strict();

export const HiringCompanySelectSchema: z.ZodType<Prisma.HiringCompanySelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  companyName: z.boolean().optional(),
  industry: z.boolean().optional(),
  companySize: z.boolean().optional(),
  website: z.boolean().optional(),
  socialLinks: z.boolean().optional(),
  contactPerson: z.boolean().optional(),
  contactEmail: z.boolean().optional(),
  contactNumber: z.boolean().optional(),
  address: z.boolean().optional(),
  city: z.boolean().optional(),
  state: z.boolean().optional(),
  postalCode: z.boolean().optional(),
  country: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  jobs: z.union([z.boolean(),z.lazy(() => JobArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => HiringCompanyCountOutputTypeArgsSchema)]).optional(),
}).strict()

// JOB
//------------------------------------------------------

export const JobIncludeSchema: z.ZodType<Prisma.JobInclude> = z.object({
}).strict()

export const JobArgsSchema: z.ZodType<Prisma.JobDefaultArgs> = z.object({
  select: z.lazy(() => JobSelectSchema).optional(),
  include: z.lazy(() => JobIncludeSchema).optional(),
}).strict();

export const JobCountOutputTypeArgsSchema: z.ZodType<Prisma.JobCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => JobCountOutputTypeSelectSchema).nullish(),
}).strict();

export const JobCountOutputTypeSelectSchema: z.ZodType<Prisma.JobCountOutputTypeSelect> = z.object({
  applications: z.boolean().optional(),
}).strict();

export const JobSelectSchema: z.ZodType<Prisma.JobSelect> = z.object({
  id: z.boolean().optional(),
  hiringCompanyId: z.boolean().optional(),
  title: z.boolean().optional(),
  description: z.boolean().optional(),
  requirements: z.boolean().optional(),
  salaryRange: z.boolean().optional(),
  location: z.boolean().optional(),
  employmentType: z.boolean().optional(),
  benefits: z.boolean().optional(),
  remote: z.boolean().optional(),
  postedAt: z.boolean().optional(),
  hiringCompany: z.union([z.boolean(),z.lazy(() => HiringCompanyArgsSchema)]).optional(),
  applications: z.union([z.boolean(),z.lazy(() => ApplicationArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => JobCountOutputTypeArgsSchema)]).optional(),
}).strict()

// APPLICATION
//------------------------------------------------------

export const ApplicationIncludeSchema: z.ZodType<Prisma.ApplicationInclude> = z.object({
}).strict()

export const ApplicationArgsSchema: z.ZodType<Prisma.ApplicationDefaultArgs> = z.object({
  select: z.lazy(() => ApplicationSelectSchema).optional(),
  include: z.lazy(() => ApplicationIncludeSchema).optional(),
}).strict();

export const ApplicationCountOutputTypeArgsSchema: z.ZodType<Prisma.ApplicationCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => ApplicationCountOutputTypeSelectSchema).nullish(),
}).strict();

export const ApplicationCountOutputTypeSelectSchema: z.ZodType<Prisma.ApplicationCountOutputTypeSelect> = z.object({
  interviews: z.boolean().optional(),
}).strict();

export const ApplicationSelectSchema: z.ZodType<Prisma.ApplicationSelect> = z.object({
  id: z.boolean().optional(),
  jobSeekerId: z.boolean().optional(),
  jobId: z.boolean().optional(),
  appliedAt: z.boolean().optional(),
  status: z.boolean().optional(),
  resume: z.boolean().optional(),
  coverLetter: z.boolean().optional(),
  jobSeeker: z.union([z.boolean(),z.lazy(() => JobSeekerArgsSchema)]).optional(),
  job: z.union([z.boolean(),z.lazy(() => JobArgsSchema)]).optional(),
  interviews: z.union([z.boolean(),z.lazy(() => InterviewArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ApplicationCountOutputTypeArgsSchema)]).optional(),
}).strict()

// INTERVIEW
//------------------------------------------------------

export const InterviewIncludeSchema: z.ZodType<Prisma.InterviewInclude> = z.object({
}).strict()

export const InterviewArgsSchema: z.ZodType<Prisma.InterviewDefaultArgs> = z.object({
  select: z.lazy(() => InterviewSelectSchema).optional(),
  include: z.lazy(() => InterviewIncludeSchema).optional(),
}).strict();

export const InterviewSelectSchema: z.ZodType<Prisma.InterviewSelect> = z.object({
  id: z.boolean().optional(),
  applicationId: z.boolean().optional(),
  scheduledAt: z.boolean().optional(),
  status: z.boolean().optional(),
  feedback: z.boolean().optional(),
  application: z.union([z.boolean(),z.lazy(() => ApplicationArgsSchema)]).optional(),
}).strict()

// SELF ASSESSMENT
//------------------------------------------------------

export const SelfAssessmentIncludeSchema: z.ZodType<Prisma.SelfAssessmentInclude> = z.object({
}).strict()

export const SelfAssessmentArgsSchema: z.ZodType<Prisma.SelfAssessmentDefaultArgs> = z.object({
  select: z.lazy(() => SelfAssessmentSelectSchema).optional(),
  include: z.lazy(() => SelfAssessmentIncludeSchema).optional(),
}).strict();

export const SelfAssessmentSelectSchema: z.ZodType<Prisma.SelfAssessmentSelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  selfAssessmentResponse: z.union([z.boolean(),z.lazy(() => SelfAssessmentResponseArgsSchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

// QUIZ
//------------------------------------------------------

export const QuizIncludeSchema: z.ZodType<Prisma.QuizInclude> = z.object({
}).strict()

export const QuizArgsSchema: z.ZodType<Prisma.QuizDefaultArgs> = z.object({
  select: z.lazy(() => QuizSelectSchema).optional(),
  include: z.lazy(() => QuizIncludeSchema).optional(),
}).strict();

export const QuizSelectSchema: z.ZodType<Prisma.QuizSelect> = z.object({
  id: z.boolean().optional(),
  quizId: z.boolean().optional(),
  quizTitle: z.boolean().optional(),
  quizTopic: z.boolean().optional(),
  totalQuestions: z.boolean().optional(),
  maxAttempts: z.boolean().optional(),
  allotedTime: z.boolean().optional(),
  enabled: z.boolean().optional(),
  questions: z.union([z.boolean(),z.lazy(() => QuizQuestionArgsSchema)]).optional(),
  createdAt: z.boolean().optional(),
}).strict()

// QUIZ RESULT
//------------------------------------------------------

export const QuizResultIncludeSchema: z.ZodType<Prisma.QuizResultInclude> = z.object({
}).strict()

export const QuizResultArgsSchema: z.ZodType<Prisma.QuizResultDefaultArgs> = z.object({
  select: z.lazy(() => QuizResultSelectSchema).optional(),
  include: z.lazy(() => QuizResultIncludeSchema).optional(),
}).strict();

export const QuizResultSelectSchema: z.ZodType<Prisma.QuizResultSelect> = z.object({
  id: z.boolean().optional(),
  quizId: z.boolean().optional(),
  quizTitle: z.boolean().optional(),
  userId: z.boolean().optional(),
  score: z.boolean().optional(),
  percent: z.boolean().optional(),
  grade: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  attempt: z.boolean().optional(),
  quizAnswers: z.union([z.boolean(),z.lazy(() => QuizAnswerArgsSchema)]).optional(),
}).strict()

// FORUM THREAD
//------------------------------------------------------

export const ForumThreadIncludeSchema: z.ZodType<Prisma.ForumThreadInclude> = z.object({
}).strict()

export const ForumThreadArgsSchema: z.ZodType<Prisma.ForumThreadDefaultArgs> = z.object({
  select: z.lazy(() => ForumThreadSelectSchema).optional(),
  include: z.lazy(() => ForumThreadIncludeSchema).optional(),
}).strict();

export const ForumThreadCountOutputTypeArgsSchema: z.ZodType<Prisma.ForumThreadCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => ForumThreadCountOutputTypeSelectSchema).nullish(),
}).strict();

export const ForumThreadCountOutputTypeSelectSchema: z.ZodType<Prisma.ForumThreadCountOutputTypeSelect> = z.object({
  posts: z.boolean().optional(),
}).strict();

export const ForumThreadSelectSchema: z.ZodType<Prisma.ForumThreadSelect> = z.object({
  id: z.boolean().optional(),
  slug: z.boolean().optional(),
  title: z.boolean().optional(),
  content: z.boolean().optional(),
  authorId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  author: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  posts: z.union([z.boolean(),z.lazy(() => ForumPostArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ForumThreadCountOutputTypeArgsSchema)]).optional(),
}).strict()

// FORUM POST
//------------------------------------------------------

export const ForumPostIncludeSchema: z.ZodType<Prisma.ForumPostInclude> = z.object({
}).strict()

export const ForumPostArgsSchema: z.ZodType<Prisma.ForumPostDefaultArgs> = z.object({
  select: z.lazy(() => ForumPostSelectSchema).optional(),
  include: z.lazy(() => ForumPostIncludeSchema).optional(),
}).strict();

export const ForumPostCountOutputTypeArgsSchema: z.ZodType<Prisma.ForumPostCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => ForumPostCountOutputTypeSelectSchema).nullish(),
}).strict();

export const ForumPostCountOutputTypeSelectSchema: z.ZodType<Prisma.ForumPostCountOutputTypeSelect> = z.object({
  comments: z.boolean().optional(),
}).strict();

export const ForumPostSelectSchema: z.ZodType<Prisma.ForumPostSelect> = z.object({
  id: z.boolean().optional(),
  content: z.boolean().optional(),
  authorId: z.boolean().optional(),
  threadId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  author: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  thread: z.union([z.boolean(),z.lazy(() => ForumThreadArgsSchema)]).optional(),
  comments: z.union([z.boolean(),z.lazy(() => ForumCommentArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ForumPostCountOutputTypeArgsSchema)]).optional(),
}).strict()

// FORUM COMMENT
//------------------------------------------------------

export const ForumCommentIncludeSchema: z.ZodType<Prisma.ForumCommentInclude> = z.object({
}).strict()

export const ForumCommentArgsSchema: z.ZodType<Prisma.ForumCommentDefaultArgs> = z.object({
  select: z.lazy(() => ForumCommentSelectSchema).optional(),
  include: z.lazy(() => ForumCommentIncludeSchema).optional(),
}).strict();

export const ForumCommentSelectSchema: z.ZodType<Prisma.ForumCommentSelect> = z.object({
  id: z.boolean().optional(),
  content: z.boolean().optional(),
  authorId: z.boolean().optional(),
  postId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  author: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  post: z.union([z.boolean(),z.lazy(() => ForumPostArgsSchema)]).optional(),
}).strict()

// PERSONAL INFO
//------------------------------------------------------

export const PersonalInfoArgsSchema: z.ZodType<Prisma.PersonalInfoDefaultArgs> = z.object({
  select: z.lazy(() => PersonalInfoSelectSchema).optional(),
}).strict();

export const PersonalInfoSelectSchema: z.ZodType<Prisma.PersonalInfoSelect> = z.object({
  fullName: z.boolean().optional(),
  image: z.boolean().optional(),
  email: z.boolean().optional(),
  dob: z.boolean().optional(),
  mobile: z.boolean().optional(),
  relative: z.boolean().optional(),
  address: z.boolean().optional(),
  city: z.boolean().optional(),
  state: z.boolean().optional(),
  postalCode: z.boolean().optional(),
  country: z.boolean().optional(),
  linkedIn: z.boolean().optional(),
  github: z.boolean().optional(),
  twitter: z.boolean().optional(),
  facebook: z.boolean().optional(),
  hobbies: z.boolean().optional(),
  areaImprovementCurrent: z.boolean().optional(),
  areaImprovementFuture: z.boolean().optional(),
}).strict()

// SKILL
//------------------------------------------------------

export const SkillArgsSchema: z.ZodType<Prisma.SkillDefaultArgs> = z.object({
  select: z.lazy(() => SkillSelectSchema).optional(),
}).strict();

export const SkillSelectSchema: z.ZodType<Prisma.SkillSelect> = z.object({
  name: z.boolean().optional(),
  level: z.boolean().optional(),
  experienceYears: z.boolean().optional(),
}).strict()

// EDUCATION LEVEL
//------------------------------------------------------

export const EducationLevelArgsSchema: z.ZodType<Prisma.EducationLevelDefaultArgs> = z.object({
  select: z.lazy(() => EducationLevelSelectSchema).optional(),
}).strict();

export const EducationLevelSelectSchema: z.ZodType<Prisma.EducationLevelSelect> = z.object({
  level: z.boolean().optional(),
  board: z.boolean().optional(),
  institute: z.boolean().optional(),
  degree: z.boolean().optional(),
  subjects: z.boolean().optional(),
  year: z.boolean().optional(),
  expectedYear: z.boolean().optional(),
  currentSemester: z.boolean().optional(),
  grade: z.boolean().optional(),
  completed: z.boolean().optional(),
}).strict()

// EXPERIENCE DETAILS
//------------------------------------------------------

export const ExperienceDetailsArgsSchema: z.ZodType<Prisma.ExperienceDetailsDefaultArgs> = z.object({
  select: z.lazy(() => ExperienceDetailsSelectSchema).optional(),
}).strict();

export const ExperienceDetailsSelectSchema: z.ZodType<Prisma.ExperienceDetailsSelect> = z.object({
  company: z.boolean().optional(),
  jobTitle: z.boolean().optional(),
  employmentType: z.boolean().optional(),
  locationType: z.boolean().optional(),
  location: z.boolean().optional(),
  startDate: z.boolean().optional(),
  current: z.boolean().optional(),
  endDate: z.boolean().optional(),
  description: z.boolean().optional(),
  skills: z.boolean().optional(),
}).strict()

// SELF ASSESSMENT RESPONSE
//------------------------------------------------------

export const SelfAssessmentResponseArgsSchema: z.ZodType<Prisma.SelfAssessmentResponseDefaultArgs> = z.object({
  select: z.lazy(() => SelfAssessmentResponseSelectSchema).optional(),
}).strict();

export const SelfAssessmentResponseSelectSchema: z.ZodType<Prisma.SelfAssessmentResponseSelect> = z.object({
  question: z.boolean().optional(),
  answer: z.boolean().optional(),
}).strict()

// QUIZ QUESTION
//------------------------------------------------------

export const QuizQuestionIncludeSchema: z.ZodType<Prisma.QuizQuestionInclude> = z.object({
}).strict()

export const QuizQuestionArgsSchema: z.ZodType<Prisma.QuizQuestionDefaultArgs> = z.object({
  select: z.lazy(() => QuizQuestionSelectSchema).optional(),
  include: z.lazy(() => QuizQuestionIncludeSchema).optional(),
}).strict();

export const QuizQuestionSelectSchema: z.ZodType<Prisma.QuizQuestionSelect> = z.object({
  questionId: z.boolean().optional(),
  question: z.boolean().optional(),
  difficulty: z.boolean().optional(),
  options: z.union([z.boolean(),z.lazy(() => QuizOptionArgsSchema)]).optional(),
  correctOptionId: z.boolean().optional(),
}).strict()

// QUIZ ANSWER
//------------------------------------------------------

export const QuizAnswerArgsSchema: z.ZodType<Prisma.QuizAnswerDefaultArgs> = z.object({
  select: z.lazy(() => QuizAnswerSelectSchema).optional(),
}).strict();

export const QuizAnswerSelectSchema: z.ZodType<Prisma.QuizAnswerSelect> = z.object({
  questionId: z.boolean().optional(),
  optionId: z.boolean().optional(),
}).strict()

// QUIZ OPTION
//------------------------------------------------------

export const QuizOptionArgsSchema: z.ZodType<Prisma.QuizOptionDefaultArgs> = z.object({
  select: z.lazy(() => QuizOptionSelectSchema).optional(),
}).strict();

export const QuizOptionSelectSchema: z.ZodType<Prisma.QuizOptionSelect> = z.object({
  optionId: z.boolean().optional(),
  option: z.boolean().optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  clerkId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  email: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  emailVerified: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  image: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  jobSeekerId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  hiringCompanyId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  selfAssessmentId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  accounts: z.lazy(() => AccountListRelationFilterSchema).optional(),
  sessions: z.lazy(() => SessionListRelationFilterSchema).optional(),
  jobSeeker: z.union([ z.lazy(() => JobSeekerNullableScalarRelationFilterSchema),z.lazy(() => JobSeekerWhereInputSchema) ]).optional().nullable(),
  hiringCompany: z.union([ z.lazy(() => HiringCompanyNullableScalarRelationFilterSchema),z.lazy(() => HiringCompanyWhereInputSchema) ]).optional().nullable(),
  selfAssessment: z.union([ z.lazy(() => SelfAssessmentNullableScalarRelationFilterSchema),z.lazy(() => SelfAssessmentWhereInputSchema) ]).optional().nullable(),
  threads: z.lazy(() => ForumThreadListRelationFilterSchema).optional(),
  posts: z.lazy(() => ForumPostListRelationFilterSchema).optional(),
  comments: z.lazy(() => ForumCommentListRelationFilterSchema).optional()
}).strict();

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  clerkId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  jobSeekerId: z.lazy(() => SortOrderSchema).optional(),
  hiringCompanyId: z.lazy(() => SortOrderSchema).optional(),
  selfAssessmentId: z.lazy(() => SortOrderSchema).optional(),
  accounts: z.lazy(() => AccountOrderByRelationAggregateInputSchema).optional(),
  sessions: z.lazy(() => SessionOrderByRelationAggregateInputSchema).optional(),
  jobSeeker: z.lazy(() => JobSeekerOrderByWithRelationInputSchema).optional(),
  hiringCompany: z.lazy(() => HiringCompanyOrderByWithRelationInputSchema).optional(),
  selfAssessment: z.lazy(() => SelfAssessmentOrderByWithRelationInputSchema).optional(),
  threads: z.lazy(() => ForumThreadOrderByRelationAggregateInputSchema).optional(),
  posts: z.lazy(() => ForumPostOrderByRelationAggregateInputSchema).optional(),
  comments: z.lazy(() => ForumCommentOrderByRelationAggregateInputSchema).optional()
}).strict();

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    clerkId: z.string()
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    clerkId: z.string(),
  }),
])
.and(z.object({
  id: z.string().optional(),
  clerkId: z.string().optional(),
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  email: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  emailVerified: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  image: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  jobSeekerId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  hiringCompanyId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  selfAssessmentId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  accounts: z.lazy(() => AccountListRelationFilterSchema).optional(),
  sessions: z.lazy(() => SessionListRelationFilterSchema).optional(),
  jobSeeker: z.union([ z.lazy(() => JobSeekerNullableScalarRelationFilterSchema),z.lazy(() => JobSeekerWhereInputSchema) ]).optional().nullable(),
  hiringCompany: z.union([ z.lazy(() => HiringCompanyNullableScalarRelationFilterSchema),z.lazy(() => HiringCompanyWhereInputSchema) ]).optional().nullable(),
  selfAssessment: z.union([ z.lazy(() => SelfAssessmentNullableScalarRelationFilterSchema),z.lazy(() => SelfAssessmentWhereInputSchema) ]).optional().nullable(),
  threads: z.lazy(() => ForumThreadListRelationFilterSchema).optional(),
  posts: z.lazy(() => ForumPostListRelationFilterSchema).optional(),
  comments: z.lazy(() => ForumCommentListRelationFilterSchema).optional()
}).strict());

export const UserOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  clerkId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  jobSeekerId: z.lazy(() => SortOrderSchema).optional(),
  hiringCompanyId: z.lazy(() => SortOrderSchema).optional(),
  selfAssessmentId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UserCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserMinOrderByAggregateInputSchema).optional()
}).strict();

export const UserScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  clerkId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  email: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  emailVerified: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  image: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  jobSeekerId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  hiringCompanyId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  selfAssessmentId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const ProfileWhereInputSchema: z.ZodType<Prisma.ProfileWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ProfileWhereInputSchema),z.lazy(() => ProfileWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProfileWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProfileWhereInputSchema),z.lazy(() => ProfileWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  personalInfo: z.union([ z.lazy(() => PersonalInfoNullableCompositeFilterSchema),z.lazy(() => PersonalInfoObjectEqualityInputSchema) ]).optional().nullable(),
  skills: z.union([ z.lazy(() => SkillCompositeListFilterSchema),z.lazy(() => SkillObjectEqualityInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  certificates: z.lazy(() => CertificateListRelationFilterSchema).optional(),
  educations: z.union([ z.lazy(() => EducationNullableScalarRelationFilterSchema),z.lazy(() => EducationWhereInputSchema) ]).optional().nullable(),
  experiences: z.union([ z.lazy(() => ExperienceNullableScalarRelationFilterSchema),z.lazy(() => ExperienceWhereInputSchema) ]).optional().nullable(),
}).strict();

export const ProfileOrderByWithRelationInputSchema: z.ZodType<Prisma.ProfileOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  personalInfo: z.lazy(() => PersonalInfoOrderByInputSchema).optional(),
  skills: z.lazy(() => SkillOrderByCompositeAggregateInputSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  certificates: z.lazy(() => CertificateOrderByRelationAggregateInputSchema).optional(),
  educations: z.lazy(() => EducationOrderByWithRelationInputSchema).optional(),
  experiences: z.lazy(() => ExperienceOrderByWithRelationInputSchema).optional()
}).strict();

export const ProfileWhereUniqueInputSchema: z.ZodType<Prisma.ProfileWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    userId: z.string()
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    userId: z.string(),
  }),
])
.and(z.object({
  id: z.string().optional(),
  userId: z.string().optional(),
  AND: z.union([ z.lazy(() => ProfileWhereInputSchema),z.lazy(() => ProfileWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProfileWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProfileWhereInputSchema),z.lazy(() => ProfileWhereInputSchema).array() ]).optional(),
  personalInfo: z.union([ z.lazy(() => PersonalInfoNullableCompositeFilterSchema),z.lazy(() => PersonalInfoObjectEqualityInputSchema) ]).optional().nullable(),
  skills: z.union([ z.lazy(() => SkillCompositeListFilterSchema),z.lazy(() => SkillObjectEqualityInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  certificates: z.lazy(() => CertificateListRelationFilterSchema).optional(),
  educations: z.union([ z.lazy(() => EducationNullableScalarRelationFilterSchema),z.lazy(() => EducationWhereInputSchema) ]).optional().nullable(),
  experiences: z.union([ z.lazy(() => ExperienceNullableScalarRelationFilterSchema),z.lazy(() => ExperienceWhereInputSchema) ]).optional().nullable(),
}).strict());

export const ProfileOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProfileOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ProfileCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ProfileMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ProfileMinOrderByAggregateInputSchema).optional()
}).strict();

export const ProfileScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ProfileScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ProfileScalarWhereWithAggregatesInputSchema),z.lazy(() => ProfileScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProfileScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProfileScalarWhereWithAggregatesInputSchema),z.lazy(() => ProfileScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const CertificateWhereInputSchema: z.ZodType<Prisma.CertificateWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CertificateWhereInputSchema),z.lazy(() => CertificateWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CertificateWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CertificateWhereInputSchema),z.lazy(() => CertificateWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  profileId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  course: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  attempt: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  key: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  issuedDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  profile: z.union([ z.lazy(() => ProfileScalarRelationFilterSchema),z.lazy(() => ProfileWhereInputSchema) ]).optional(),
}).strict();

export const CertificateOrderByWithRelationInputSchema: z.ZodType<Prisma.CertificateOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  profileId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  userName: z.lazy(() => SortOrderSchema).optional(),
  course: z.lazy(() => SortOrderSchema).optional(),
  attempt: z.lazy(() => SortOrderSchema).optional(),
  key: z.lazy(() => SortOrderSchema).optional(),
  issuedDate: z.lazy(() => SortOrderSchema).optional(),
  profile: z.lazy(() => ProfileOrderByWithRelationInputSchema).optional()
}).strict();

export const CertificateWhereUniqueInputSchema: z.ZodType<Prisma.CertificateWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => CertificateWhereInputSchema),z.lazy(() => CertificateWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CertificateWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CertificateWhereInputSchema),z.lazy(() => CertificateWhereInputSchema).array() ]).optional(),
  profileId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  course: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  attempt: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  key: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  issuedDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  profile: z.union([ z.lazy(() => ProfileScalarRelationFilterSchema),z.lazy(() => ProfileWhereInputSchema) ]).optional(),
}).strict());

export const CertificateOrderByWithAggregationInputSchema: z.ZodType<Prisma.CertificateOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  profileId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  userName: z.lazy(() => SortOrderSchema).optional(),
  course: z.lazy(() => SortOrderSchema).optional(),
  attempt: z.lazy(() => SortOrderSchema).optional(),
  key: z.lazy(() => SortOrderSchema).optional(),
  issuedDate: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CertificateCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => CertificateAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CertificateMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CertificateMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => CertificateSumOrderByAggregateInputSchema).optional()
}).strict();

export const CertificateScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CertificateScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => CertificateScalarWhereWithAggregatesInputSchema),z.lazy(() => CertificateScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CertificateScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CertificateScalarWhereWithAggregatesInputSchema),z.lazy(() => CertificateScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  profileId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userName: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  course: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  attempt: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  key: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  issuedDate: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const AccountWhereInputSchema: z.ZodType<Prisma.AccountWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AccountWhereInputSchema),z.lazy(() => AccountWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AccountWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AccountWhereInputSchema),z.lazy(() => AccountWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  provider: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  providerAccountId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  refresh_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  access_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  expires_at: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  token_type: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  scope: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  id_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  session_state: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export const AccountOrderByWithRelationInputSchema: z.ZodType<Prisma.AccountOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  refresh_token: z.lazy(() => SortOrderSchema).optional(),
  access_token: z.lazy(() => SortOrderSchema).optional(),
  expires_at: z.lazy(() => SortOrderSchema).optional(),
  token_type: z.lazy(() => SortOrderSchema).optional(),
  scope: z.lazy(() => SortOrderSchema).optional(),
  id_token: z.lazy(() => SortOrderSchema).optional(),
  session_state: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export const AccountWhereUniqueInputSchema: z.ZodType<Prisma.AccountWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    provider_providerAccountId: z.lazy(() => AccountProviderProviderAccountIdCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    provider_providerAccountId: z.lazy(() => AccountProviderProviderAccountIdCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().optional(),
  provider_providerAccountId: z.lazy(() => AccountProviderProviderAccountIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => AccountWhereInputSchema),z.lazy(() => AccountWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AccountWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AccountWhereInputSchema),z.lazy(() => AccountWhereInputSchema).array() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  provider: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  providerAccountId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  refresh_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  access_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  expires_at: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  token_type: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  scope: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  id_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  session_state: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export const AccountOrderByWithAggregationInputSchema: z.ZodType<Prisma.AccountOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  refresh_token: z.lazy(() => SortOrderSchema).optional(),
  access_token: z.lazy(() => SortOrderSchema).optional(),
  expires_at: z.lazy(() => SortOrderSchema).optional(),
  token_type: z.lazy(() => SortOrderSchema).optional(),
  scope: z.lazy(() => SortOrderSchema).optional(),
  id_token: z.lazy(() => SortOrderSchema).optional(),
  session_state: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => AccountCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => AccountAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AccountMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AccountMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => AccountSumOrderByAggregateInputSchema).optional()
}).strict();

export const AccountScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AccountScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => AccountScalarWhereWithAggregatesInputSchema),z.lazy(() => AccountScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => AccountScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AccountScalarWhereWithAggregatesInputSchema),z.lazy(() => AccountScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  provider: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  providerAccountId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  refresh_token: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  access_token: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  expires_at: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  token_type: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  scope: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  id_token: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  session_state: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const SessionWhereInputSchema: z.ZodType<Prisma.SessionWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SessionWhereInputSchema),z.lazy(() => SessionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SessionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SessionWhereInputSchema),z.lazy(() => SessionWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  sessionToken: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export const SessionOrderByWithRelationInputSchema: z.ZodType<Prisma.SessionOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sessionToken: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export const SessionWhereUniqueInputSchema: z.ZodType<Prisma.SessionWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    sessionToken: z.string()
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    sessionToken: z.string(),
  }),
])
.and(z.object({
  id: z.string().optional(),
  sessionToken: z.string().optional(),
  AND: z.union([ z.lazy(() => SessionWhereInputSchema),z.lazy(() => SessionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SessionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SessionWhereInputSchema),z.lazy(() => SessionWhereInputSchema).array() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export const SessionOrderByWithAggregationInputSchema: z.ZodType<Prisma.SessionOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sessionToken: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SessionCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SessionMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SessionMinOrderByAggregateInputSchema).optional()
}).strict();

export const SessionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SessionScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => SessionScalarWhereWithAggregatesInputSchema),z.lazy(() => SessionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => SessionScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SessionScalarWhereWithAggregatesInputSchema),z.lazy(() => SessionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  sessionToken: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const VerificationTokenWhereInputSchema: z.ZodType<Prisma.VerificationTokenWhereInput> = z.object({
  AND: z.union([ z.lazy(() => VerificationTokenWhereInputSchema),z.lazy(() => VerificationTokenWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => VerificationTokenWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VerificationTokenWhereInputSchema),z.lazy(() => VerificationTokenWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  identifier: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  token: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const VerificationTokenOrderByWithRelationInputSchema: z.ZodType<Prisma.VerificationTokenOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  identifier: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VerificationTokenWhereUniqueInputSchema: z.ZodType<Prisma.VerificationTokenWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    identifier_token: z.lazy(() => VerificationTokenIdentifierTokenCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    identifier_token: z.lazy(() => VerificationTokenIdentifierTokenCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().optional(),
  identifier_token: z.lazy(() => VerificationTokenIdentifierTokenCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => VerificationTokenWhereInputSchema),z.lazy(() => VerificationTokenWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => VerificationTokenWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VerificationTokenWhereInputSchema),z.lazy(() => VerificationTokenWhereInputSchema).array() ]).optional(),
  identifier: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  token: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict());

export const VerificationTokenOrderByWithAggregationInputSchema: z.ZodType<Prisma.VerificationTokenOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  identifier: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => VerificationTokenCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => VerificationTokenMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => VerificationTokenMinOrderByAggregateInputSchema).optional()
}).strict();

export const VerificationTokenScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.VerificationTokenScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => VerificationTokenScalarWhereWithAggregatesInputSchema),z.lazy(() => VerificationTokenScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => VerificationTokenScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VerificationTokenScalarWhereWithAggregatesInputSchema),z.lazy(() => VerificationTokenScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  identifier: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  token: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const JobSeekerWhereInputSchema: z.ZodType<Prisma.JobSeekerWhereInput> = z.object({
  AND: z.union([ z.lazy(() => JobSeekerWhereInputSchema),z.lazy(() => JobSeekerWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => JobSeekerWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => JobSeekerWhereInputSchema),z.lazy(() => JobSeekerWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  firstName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  lastName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  dob: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  gender: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  contactNumber: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  address: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  city: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  state: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  postalCode: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  country: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  skills: z.union([ z.lazy(() => SkillCompositeListFilterSchema),z.lazy(() => SkillObjectEqualityInputSchema).array() ]).optional(),
  portfolioLinks: z.lazy(() => StringNullableListFilterSchema).optional(),
  preferredJobRoles: z.lazy(() => StringNullableListFilterSchema).optional(),
  resume: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  profilePicture: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  certifications: z.lazy(() => CertificationListRelationFilterSchema).optional(),
  applications: z.lazy(() => ApplicationListRelationFilterSchema).optional()
}).strict();

export const JobSeekerOrderByWithRelationInputSchema: z.ZodType<Prisma.JobSeekerOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  firstName: z.lazy(() => SortOrderSchema).optional(),
  lastName: z.lazy(() => SortOrderSchema).optional(),
  dob: z.lazy(() => SortOrderSchema).optional(),
  gender: z.lazy(() => SortOrderSchema).optional(),
  contactNumber: z.lazy(() => SortOrderSchema).optional(),
  address: z.lazy(() => SortOrderSchema).optional(),
  city: z.lazy(() => SortOrderSchema).optional(),
  state: z.lazy(() => SortOrderSchema).optional(),
  postalCode: z.lazy(() => SortOrderSchema).optional(),
  country: z.lazy(() => SortOrderSchema).optional(),
  skills: z.lazy(() => SkillOrderByCompositeAggregateInputSchema).optional(),
  portfolioLinks: z.lazy(() => SortOrderSchema).optional(),
  preferredJobRoles: z.lazy(() => SortOrderSchema).optional(),
  resume: z.lazy(() => SortOrderSchema).optional(),
  profilePicture: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  certifications: z.lazy(() => CertificationOrderByRelationAggregateInputSchema).optional(),
  applications: z.lazy(() => ApplicationOrderByRelationAggregateInputSchema).optional()
}).strict();

export const JobSeekerWhereUniqueInputSchema: z.ZodType<Prisma.JobSeekerWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    userId: z.string()
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    userId: z.string(),
  }),
])
.and(z.object({
  id: z.string().optional(),
  userId: z.string().optional(),
  AND: z.union([ z.lazy(() => JobSeekerWhereInputSchema),z.lazy(() => JobSeekerWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => JobSeekerWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => JobSeekerWhereInputSchema),z.lazy(() => JobSeekerWhereInputSchema).array() ]).optional(),
  firstName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  lastName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  dob: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  gender: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  contactNumber: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  address: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  city: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  state: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  postalCode: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  country: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  skills: z.union([ z.lazy(() => SkillCompositeListFilterSchema),z.lazy(() => SkillObjectEqualityInputSchema).array() ]).optional(),
  portfolioLinks: z.lazy(() => StringNullableListFilterSchema).optional(),
  preferredJobRoles: z.lazy(() => StringNullableListFilterSchema).optional(),
  resume: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  profilePicture: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  certifications: z.lazy(() => CertificationListRelationFilterSchema).optional(),
  applications: z.lazy(() => ApplicationListRelationFilterSchema).optional()
}).strict());

export const JobSeekerOrderByWithAggregationInputSchema: z.ZodType<Prisma.JobSeekerOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  firstName: z.lazy(() => SortOrderSchema).optional(),
  lastName: z.lazy(() => SortOrderSchema).optional(),
  dob: z.lazy(() => SortOrderSchema).optional(),
  gender: z.lazy(() => SortOrderSchema).optional(),
  contactNumber: z.lazy(() => SortOrderSchema).optional(),
  address: z.lazy(() => SortOrderSchema).optional(),
  city: z.lazy(() => SortOrderSchema).optional(),
  state: z.lazy(() => SortOrderSchema).optional(),
  postalCode: z.lazy(() => SortOrderSchema).optional(),
  country: z.lazy(() => SortOrderSchema).optional(),
  portfolioLinks: z.lazy(() => SortOrderSchema).optional(),
  preferredJobRoles: z.lazy(() => SortOrderSchema).optional(),
  resume: z.lazy(() => SortOrderSchema).optional(),
  profilePicture: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => JobSeekerCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => JobSeekerMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => JobSeekerMinOrderByAggregateInputSchema).optional()
}).strict();

export const JobSeekerScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.JobSeekerScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => JobSeekerScalarWhereWithAggregatesInputSchema),z.lazy(() => JobSeekerScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => JobSeekerScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => JobSeekerScalarWhereWithAggregatesInputSchema),z.lazy(() => JobSeekerScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  firstName: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  lastName: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  dob: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  gender: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  contactNumber: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  address: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  city: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  state: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  postalCode: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  country: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  portfolioLinks: z.lazy(() => StringNullableListFilterSchema).optional(),
  preferredJobRoles: z.lazy(() => StringNullableListFilterSchema).optional(),
  resume: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  profilePicture: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const EducationWhereInputSchema: z.ZodType<Prisma.EducationWhereInput> = z.object({
  AND: z.union([ z.lazy(() => EducationWhereInputSchema),z.lazy(() => EducationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EducationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EducationWhereInputSchema),z.lazy(() => EducationWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  profileId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  educationLevels: z.union([ z.lazy(() => EducationLevelCompositeListFilterSchema),z.lazy(() => EducationLevelObjectEqualityInputSchema).array() ]).optional(),
  profile: z.union([ z.lazy(() => ProfileScalarRelationFilterSchema),z.lazy(() => ProfileWhereInputSchema) ]).optional(),
}).strict();

export const EducationOrderByWithRelationInputSchema: z.ZodType<Prisma.EducationOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  profileId: z.lazy(() => SortOrderSchema).optional(),
  educationLevels: z.lazy(() => EducationLevelOrderByCompositeAggregateInputSchema).optional(),
  profile: z.lazy(() => ProfileOrderByWithRelationInputSchema).optional()
}).strict();

export const EducationWhereUniqueInputSchema: z.ZodType<Prisma.EducationWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    profileId: z.string()
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    profileId: z.string(),
  }),
])
.and(z.object({
  id: z.string().optional(),
  profileId: z.string().optional(),
  AND: z.union([ z.lazy(() => EducationWhereInputSchema),z.lazy(() => EducationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EducationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EducationWhereInputSchema),z.lazy(() => EducationWhereInputSchema).array() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  educationLevels: z.union([ z.lazy(() => EducationLevelCompositeListFilterSchema),z.lazy(() => EducationLevelObjectEqualityInputSchema).array() ]).optional(),
  profile: z.union([ z.lazy(() => ProfileScalarRelationFilterSchema),z.lazy(() => ProfileWhereInputSchema) ]).optional(),
}).strict());

export const EducationOrderByWithAggregationInputSchema: z.ZodType<Prisma.EducationOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  profileId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => EducationCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => EducationMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => EducationMinOrderByAggregateInputSchema).optional()
}).strict();

export const EducationScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.EducationScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => EducationScalarWhereWithAggregatesInputSchema),z.lazy(() => EducationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => EducationScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EducationScalarWhereWithAggregatesInputSchema),z.lazy(() => EducationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  profileId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const ExperienceWhereInputSchema: z.ZodType<Prisma.ExperienceWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ExperienceWhereInputSchema),z.lazy(() => ExperienceWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ExperienceWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ExperienceWhereInputSchema),z.lazy(() => ExperienceWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  profileId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  experienceDetails: z.union([ z.lazy(() => ExperienceDetailsCompositeListFilterSchema),z.lazy(() => ExperienceDetailsObjectEqualityInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  profile: z.union([ z.lazy(() => ProfileScalarRelationFilterSchema),z.lazy(() => ProfileWhereInputSchema) ]).optional(),
}).strict();

export const ExperienceOrderByWithRelationInputSchema: z.ZodType<Prisma.ExperienceOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  profileId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  experienceDetails: z.lazy(() => ExperienceDetailsOrderByCompositeAggregateInputSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  profile: z.lazy(() => ProfileOrderByWithRelationInputSchema).optional()
}).strict();

export const ExperienceWhereUniqueInputSchema: z.ZodType<Prisma.ExperienceWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    profileId: z.string()
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    profileId: z.string(),
  }),
])
.and(z.object({
  id: z.string().optional(),
  profileId: z.string().optional(),
  AND: z.union([ z.lazy(() => ExperienceWhereInputSchema),z.lazy(() => ExperienceWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ExperienceWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ExperienceWhereInputSchema),z.lazy(() => ExperienceWhereInputSchema).array() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  experienceDetails: z.union([ z.lazy(() => ExperienceDetailsCompositeListFilterSchema),z.lazy(() => ExperienceDetailsObjectEqualityInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  profile: z.union([ z.lazy(() => ProfileScalarRelationFilterSchema),z.lazy(() => ProfileWhereInputSchema) ]).optional(),
}).strict());

export const ExperienceOrderByWithAggregationInputSchema: z.ZodType<Prisma.ExperienceOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  profileId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ExperienceCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ExperienceMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ExperienceMinOrderByAggregateInputSchema).optional()
}).strict();

export const ExperienceScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ExperienceScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ExperienceScalarWhereWithAggregatesInputSchema),z.lazy(() => ExperienceScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ExperienceScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ExperienceScalarWhereWithAggregatesInputSchema),z.lazy(() => ExperienceScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  profileId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const CertificationWhereInputSchema: z.ZodType<Prisma.CertificationWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CertificationWhereInputSchema),z.lazy(() => CertificationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CertificationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CertificationWhereInputSchema),z.lazy(() => CertificationWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  jobSeekerId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  issuedBy: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  issuedDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  jobSeeker: z.union([ z.lazy(() => JobSeekerScalarRelationFilterSchema),z.lazy(() => JobSeekerWhereInputSchema) ]).optional(),
}).strict();

export const CertificationOrderByWithRelationInputSchema: z.ZodType<Prisma.CertificationOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  jobSeekerId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  issuedBy: z.lazy(() => SortOrderSchema).optional(),
  issuedDate: z.lazy(() => SortOrderSchema).optional(),
  jobSeeker: z.lazy(() => JobSeekerOrderByWithRelationInputSchema).optional()
}).strict();

export const CertificationWhereUniqueInputSchema: z.ZodType<Prisma.CertificationWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => CertificationWhereInputSchema),z.lazy(() => CertificationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CertificationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CertificationWhereInputSchema),z.lazy(() => CertificationWhereInputSchema).array() ]).optional(),
  jobSeekerId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  issuedBy: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  issuedDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  jobSeeker: z.union([ z.lazy(() => JobSeekerScalarRelationFilterSchema),z.lazy(() => JobSeekerWhereInputSchema) ]).optional(),
}).strict());

export const CertificationOrderByWithAggregationInputSchema: z.ZodType<Prisma.CertificationOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  jobSeekerId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  issuedBy: z.lazy(() => SortOrderSchema).optional(),
  issuedDate: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CertificationCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CertificationMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CertificationMinOrderByAggregateInputSchema).optional()
}).strict();

export const CertificationScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CertificationScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => CertificationScalarWhereWithAggregatesInputSchema),z.lazy(() => CertificationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CertificationScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CertificationScalarWhereWithAggregatesInputSchema),z.lazy(() => CertificationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  jobSeekerId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  issuedBy: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  issuedDate: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const HiringCompanyWhereInputSchema: z.ZodType<Prisma.HiringCompanyWhereInput> = z.object({
  AND: z.union([ z.lazy(() => HiringCompanyWhereInputSchema),z.lazy(() => HiringCompanyWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => HiringCompanyWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => HiringCompanyWhereInputSchema),z.lazy(() => HiringCompanyWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  companyName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  industry: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  companySize: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  website: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  socialLinks: z.lazy(() => StringNullableListFilterSchema).optional(),
  contactPerson: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  contactEmail: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  contactNumber: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  address: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  city: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  state: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  postalCode: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  country: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  jobs: z.lazy(() => JobListRelationFilterSchema).optional()
}).strict();

export const HiringCompanyOrderByWithRelationInputSchema: z.ZodType<Prisma.HiringCompanyOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  companyName: z.lazy(() => SortOrderSchema).optional(),
  industry: z.lazy(() => SortOrderSchema).optional(),
  companySize: z.lazy(() => SortOrderSchema).optional(),
  website: z.lazy(() => SortOrderSchema).optional(),
  socialLinks: z.lazy(() => SortOrderSchema).optional(),
  contactPerson: z.lazy(() => SortOrderSchema).optional(),
  contactEmail: z.lazy(() => SortOrderSchema).optional(),
  contactNumber: z.lazy(() => SortOrderSchema).optional(),
  address: z.lazy(() => SortOrderSchema).optional(),
  city: z.lazy(() => SortOrderSchema).optional(),
  state: z.lazy(() => SortOrderSchema).optional(),
  postalCode: z.lazy(() => SortOrderSchema).optional(),
  country: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  jobs: z.lazy(() => JobOrderByRelationAggregateInputSchema).optional()
}).strict();

export const HiringCompanyWhereUniqueInputSchema: z.ZodType<Prisma.HiringCompanyWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    userId: z.string()
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    userId: z.string(),
  }),
])
.and(z.object({
  id: z.string().optional(),
  userId: z.string().optional(),
  AND: z.union([ z.lazy(() => HiringCompanyWhereInputSchema),z.lazy(() => HiringCompanyWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => HiringCompanyWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => HiringCompanyWhereInputSchema),z.lazy(() => HiringCompanyWhereInputSchema).array() ]).optional(),
  companyName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  industry: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  companySize: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  website: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  socialLinks: z.lazy(() => StringNullableListFilterSchema).optional(),
  contactPerson: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  contactEmail: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  contactNumber: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  address: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  city: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  state: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  postalCode: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  country: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  jobs: z.lazy(() => JobListRelationFilterSchema).optional()
}).strict());

export const HiringCompanyOrderByWithAggregationInputSchema: z.ZodType<Prisma.HiringCompanyOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  companyName: z.lazy(() => SortOrderSchema).optional(),
  industry: z.lazy(() => SortOrderSchema).optional(),
  companySize: z.lazy(() => SortOrderSchema).optional(),
  website: z.lazy(() => SortOrderSchema).optional(),
  socialLinks: z.lazy(() => SortOrderSchema).optional(),
  contactPerson: z.lazy(() => SortOrderSchema).optional(),
  contactEmail: z.lazy(() => SortOrderSchema).optional(),
  contactNumber: z.lazy(() => SortOrderSchema).optional(),
  address: z.lazy(() => SortOrderSchema).optional(),
  city: z.lazy(() => SortOrderSchema).optional(),
  state: z.lazy(() => SortOrderSchema).optional(),
  postalCode: z.lazy(() => SortOrderSchema).optional(),
  country: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => HiringCompanyCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => HiringCompanyMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => HiringCompanyMinOrderByAggregateInputSchema).optional()
}).strict();

export const HiringCompanyScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.HiringCompanyScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => HiringCompanyScalarWhereWithAggregatesInputSchema),z.lazy(() => HiringCompanyScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => HiringCompanyScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => HiringCompanyScalarWhereWithAggregatesInputSchema),z.lazy(() => HiringCompanyScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  companyName: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  industry: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  companySize: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  website: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  socialLinks: z.lazy(() => StringNullableListFilterSchema).optional(),
  contactPerson: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  contactEmail: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  contactNumber: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  address: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  city: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  state: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  postalCode: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  country: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const JobWhereInputSchema: z.ZodType<Prisma.JobWhereInput> = z.object({
  AND: z.union([ z.lazy(() => JobWhereInputSchema),z.lazy(() => JobWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => JobWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => JobWhereInputSchema),z.lazy(() => JobWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  hiringCompanyId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  requirements: z.lazy(() => StringNullableListFilterSchema).optional(),
  salaryRange: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  location: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  employmentType: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  benefits: z.lazy(() => StringNullableListFilterSchema).optional(),
  remote: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  postedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  hiringCompany: z.union([ z.lazy(() => HiringCompanyScalarRelationFilterSchema),z.lazy(() => HiringCompanyWhereInputSchema) ]).optional(),
  applications: z.lazy(() => ApplicationListRelationFilterSchema).optional()
}).strict();

export const JobOrderByWithRelationInputSchema: z.ZodType<Prisma.JobOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  hiringCompanyId: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  requirements: z.lazy(() => SortOrderSchema).optional(),
  salaryRange: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  employmentType: z.lazy(() => SortOrderSchema).optional(),
  benefits: z.lazy(() => SortOrderSchema).optional(),
  remote: z.lazy(() => SortOrderSchema).optional(),
  postedAt: z.lazy(() => SortOrderSchema).optional(),
  hiringCompany: z.lazy(() => HiringCompanyOrderByWithRelationInputSchema).optional(),
  applications: z.lazy(() => ApplicationOrderByRelationAggregateInputSchema).optional()
}).strict();

export const JobWhereUniqueInputSchema: z.ZodType<Prisma.JobWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => JobWhereInputSchema),z.lazy(() => JobWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => JobWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => JobWhereInputSchema),z.lazy(() => JobWhereInputSchema).array() ]).optional(),
  hiringCompanyId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  requirements: z.lazy(() => StringNullableListFilterSchema).optional(),
  salaryRange: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  location: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  employmentType: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  benefits: z.lazy(() => StringNullableListFilterSchema).optional(),
  remote: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  postedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  hiringCompany: z.union([ z.lazy(() => HiringCompanyScalarRelationFilterSchema),z.lazy(() => HiringCompanyWhereInputSchema) ]).optional(),
  applications: z.lazy(() => ApplicationListRelationFilterSchema).optional()
}).strict());

export const JobOrderByWithAggregationInputSchema: z.ZodType<Prisma.JobOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  hiringCompanyId: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  requirements: z.lazy(() => SortOrderSchema).optional(),
  salaryRange: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  employmentType: z.lazy(() => SortOrderSchema).optional(),
  benefits: z.lazy(() => SortOrderSchema).optional(),
  remote: z.lazy(() => SortOrderSchema).optional(),
  postedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => JobCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => JobMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => JobMinOrderByAggregateInputSchema).optional()
}).strict();

export const JobScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.JobScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => JobScalarWhereWithAggregatesInputSchema),z.lazy(() => JobScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => JobScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => JobScalarWhereWithAggregatesInputSchema),z.lazy(() => JobScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  hiringCompanyId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  requirements: z.lazy(() => StringNullableListFilterSchema).optional(),
  salaryRange: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  location: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  employmentType: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  benefits: z.lazy(() => StringNullableListFilterSchema).optional(),
  remote: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  postedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const ApplicationWhereInputSchema: z.ZodType<Prisma.ApplicationWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ApplicationWhereInputSchema),z.lazy(() => ApplicationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ApplicationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ApplicationWhereInputSchema),z.lazy(() => ApplicationWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  jobSeekerId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  jobId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  appliedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  status: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  resume: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  coverLetter: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  jobSeeker: z.union([ z.lazy(() => JobSeekerScalarRelationFilterSchema),z.lazy(() => JobSeekerWhereInputSchema) ]).optional(),
  job: z.union([ z.lazy(() => JobScalarRelationFilterSchema),z.lazy(() => JobWhereInputSchema) ]).optional(),
  interviews: z.lazy(() => InterviewListRelationFilterSchema).optional()
}).strict();

export const ApplicationOrderByWithRelationInputSchema: z.ZodType<Prisma.ApplicationOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  jobSeekerId: z.lazy(() => SortOrderSchema).optional(),
  jobId: z.lazy(() => SortOrderSchema).optional(),
  appliedAt: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  resume: z.lazy(() => SortOrderSchema).optional(),
  coverLetter: z.lazy(() => SortOrderSchema).optional(),
  jobSeeker: z.lazy(() => JobSeekerOrderByWithRelationInputSchema).optional(),
  job: z.lazy(() => JobOrderByWithRelationInputSchema).optional(),
  interviews: z.lazy(() => InterviewOrderByRelationAggregateInputSchema).optional()
}).strict();

export const ApplicationWhereUniqueInputSchema: z.ZodType<Prisma.ApplicationWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => ApplicationWhereInputSchema),z.lazy(() => ApplicationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ApplicationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ApplicationWhereInputSchema),z.lazy(() => ApplicationWhereInputSchema).array() ]).optional(),
  jobSeekerId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  jobId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  appliedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  status: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  resume: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  coverLetter: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  jobSeeker: z.union([ z.lazy(() => JobSeekerScalarRelationFilterSchema),z.lazy(() => JobSeekerWhereInputSchema) ]).optional(),
  job: z.union([ z.lazy(() => JobScalarRelationFilterSchema),z.lazy(() => JobWhereInputSchema) ]).optional(),
  interviews: z.lazy(() => InterviewListRelationFilterSchema).optional()
}).strict());

export const ApplicationOrderByWithAggregationInputSchema: z.ZodType<Prisma.ApplicationOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  jobSeekerId: z.lazy(() => SortOrderSchema).optional(),
  jobId: z.lazy(() => SortOrderSchema).optional(),
  appliedAt: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  resume: z.lazy(() => SortOrderSchema).optional(),
  coverLetter: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ApplicationCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ApplicationMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ApplicationMinOrderByAggregateInputSchema).optional()
}).strict();

export const ApplicationScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ApplicationScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ApplicationScalarWhereWithAggregatesInputSchema),z.lazy(() => ApplicationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ApplicationScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ApplicationScalarWhereWithAggregatesInputSchema),z.lazy(() => ApplicationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  jobSeekerId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  jobId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  appliedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  status: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  resume: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  coverLetter: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const InterviewWhereInputSchema: z.ZodType<Prisma.InterviewWhereInput> = z.object({
  AND: z.union([ z.lazy(() => InterviewWhereInputSchema),z.lazy(() => InterviewWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => InterviewWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InterviewWhereInputSchema),z.lazy(() => InterviewWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  applicationId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  scheduledAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  status: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  feedback: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  application: z.union([ z.lazy(() => ApplicationScalarRelationFilterSchema),z.lazy(() => ApplicationWhereInputSchema) ]).optional(),
}).strict();

export const InterviewOrderByWithRelationInputSchema: z.ZodType<Prisma.InterviewOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  applicationId: z.lazy(() => SortOrderSchema).optional(),
  scheduledAt: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  feedback: z.lazy(() => SortOrderSchema).optional(),
  application: z.lazy(() => ApplicationOrderByWithRelationInputSchema).optional()
}).strict();

export const InterviewWhereUniqueInputSchema: z.ZodType<Prisma.InterviewWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => InterviewWhereInputSchema),z.lazy(() => InterviewWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => InterviewWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InterviewWhereInputSchema),z.lazy(() => InterviewWhereInputSchema).array() ]).optional(),
  applicationId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  scheduledAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  status: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  feedback: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  application: z.union([ z.lazy(() => ApplicationScalarRelationFilterSchema),z.lazy(() => ApplicationWhereInputSchema) ]).optional(),
}).strict());

export const InterviewOrderByWithAggregationInputSchema: z.ZodType<Prisma.InterviewOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  applicationId: z.lazy(() => SortOrderSchema).optional(),
  scheduledAt: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  feedback: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => InterviewCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => InterviewMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => InterviewMinOrderByAggregateInputSchema).optional()
}).strict();

export const InterviewScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.InterviewScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => InterviewScalarWhereWithAggregatesInputSchema),z.lazy(() => InterviewScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => InterviewScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InterviewScalarWhereWithAggregatesInputSchema),z.lazy(() => InterviewScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  applicationId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  scheduledAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  status: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  feedback: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const SelfAssessmentWhereInputSchema: z.ZodType<Prisma.SelfAssessmentWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SelfAssessmentWhereInputSchema),z.lazy(() => SelfAssessmentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SelfAssessmentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SelfAssessmentWhereInputSchema),z.lazy(() => SelfAssessmentWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  selfAssessmentResponse: z.union([ z.lazy(() => SelfAssessmentResponseCompositeListFilterSchema),z.lazy(() => SelfAssessmentResponseObjectEqualityInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export const SelfAssessmentOrderByWithRelationInputSchema: z.ZodType<Prisma.SelfAssessmentOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  selfAssessmentResponse: z.lazy(() => SelfAssessmentResponseOrderByCompositeAggregateInputSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export const SelfAssessmentWhereUniqueInputSchema: z.ZodType<Prisma.SelfAssessmentWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    userId: z.string()
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    userId: z.string(),
  }),
])
.and(z.object({
  id: z.string().optional(),
  userId: z.string().optional(),
  AND: z.union([ z.lazy(() => SelfAssessmentWhereInputSchema),z.lazy(() => SelfAssessmentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SelfAssessmentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SelfAssessmentWhereInputSchema),z.lazy(() => SelfAssessmentWhereInputSchema).array() ]).optional(),
  selfAssessmentResponse: z.union([ z.lazy(() => SelfAssessmentResponseCompositeListFilterSchema),z.lazy(() => SelfAssessmentResponseObjectEqualityInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export const SelfAssessmentOrderByWithAggregationInputSchema: z.ZodType<Prisma.SelfAssessmentOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SelfAssessmentCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SelfAssessmentMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SelfAssessmentMinOrderByAggregateInputSchema).optional()
}).strict();

export const SelfAssessmentScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SelfAssessmentScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => SelfAssessmentScalarWhereWithAggregatesInputSchema),z.lazy(() => SelfAssessmentScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => SelfAssessmentScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SelfAssessmentScalarWhereWithAggregatesInputSchema),z.lazy(() => SelfAssessmentScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const QuizWhereInputSchema: z.ZodType<Prisma.QuizWhereInput> = z.object({
  AND: z.union([ z.lazy(() => QuizWhereInputSchema),z.lazy(() => QuizWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => QuizWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => QuizWhereInputSchema),z.lazy(() => QuizWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  quizId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  quizTitle: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  quizTopic: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  totalQuestions: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  maxAttempts: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  allotedTime: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  enabled: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  questions: z.union([ z.lazy(() => QuizQuestionCompositeListFilterSchema),z.lazy(() => QuizQuestionObjectEqualityInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const QuizOrderByWithRelationInputSchema: z.ZodType<Prisma.QuizOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  quizId: z.lazy(() => SortOrderSchema).optional(),
  quizTitle: z.lazy(() => SortOrderSchema).optional(),
  quizTopic: z.lazy(() => SortOrderSchema).optional(),
  totalQuestions: z.lazy(() => SortOrderSchema).optional(),
  maxAttempts: z.lazy(() => SortOrderSchema).optional(),
  allotedTime: z.lazy(() => SortOrderSchema).optional(),
  enabled: z.lazy(() => SortOrderSchema).optional(),
  questions: z.lazy(() => QuizQuestionOrderByCompositeAggregateInputSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const QuizWhereUniqueInputSchema: z.ZodType<Prisma.QuizWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    quizId: z.string()
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    quizId: z.string(),
  }),
])
.and(z.object({
  id: z.string().optional(),
  quizId: z.string().optional(),
  AND: z.union([ z.lazy(() => QuizWhereInputSchema),z.lazy(() => QuizWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => QuizWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => QuizWhereInputSchema),z.lazy(() => QuizWhereInputSchema).array() ]).optional(),
  quizTitle: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  quizTopic: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  totalQuestions: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  maxAttempts: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  allotedTime: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  enabled: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  questions: z.union([ z.lazy(() => QuizQuestionCompositeListFilterSchema),z.lazy(() => QuizQuestionObjectEqualityInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict());

export const QuizOrderByWithAggregationInputSchema: z.ZodType<Prisma.QuizOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  quizId: z.lazy(() => SortOrderSchema).optional(),
  quizTitle: z.lazy(() => SortOrderSchema).optional(),
  quizTopic: z.lazy(() => SortOrderSchema).optional(),
  totalQuestions: z.lazy(() => SortOrderSchema).optional(),
  maxAttempts: z.lazy(() => SortOrderSchema).optional(),
  allotedTime: z.lazy(() => SortOrderSchema).optional(),
  enabled: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => QuizCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => QuizAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => QuizMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => QuizMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => QuizSumOrderByAggregateInputSchema).optional()
}).strict();

export const QuizScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.QuizScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => QuizScalarWhereWithAggregatesInputSchema),z.lazy(() => QuizScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => QuizScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => QuizScalarWhereWithAggregatesInputSchema),z.lazy(() => QuizScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  quizId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  quizTitle: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  quizTopic: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  totalQuestions: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  maxAttempts: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  allotedTime: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  enabled: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const QuizResultWhereInputSchema: z.ZodType<Prisma.QuizResultWhereInput> = z.object({
  AND: z.union([ z.lazy(() => QuizResultWhereInputSchema),z.lazy(() => QuizResultWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => QuizResultWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => QuizResultWhereInputSchema),z.lazy(() => QuizResultWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  quizId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  quizTitle: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  score: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  percent: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  grade: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  attempt: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  quizAnswers: z.union([ z.lazy(() => QuizAnswerCompositeListFilterSchema),z.lazy(() => QuizAnswerObjectEqualityInputSchema).array() ]).optional(),
}).strict();

export const QuizResultOrderByWithRelationInputSchema: z.ZodType<Prisma.QuizResultOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  quizId: z.lazy(() => SortOrderSchema).optional(),
  quizTitle: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  score: z.lazy(() => SortOrderSchema).optional(),
  percent: z.lazy(() => SortOrderSchema).optional(),
  grade: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  attempt: z.lazy(() => SortOrderSchema).optional(),
  quizAnswers: z.lazy(() => QuizAnswerOrderByCompositeAggregateInputSchema).optional()
}).strict();

export const QuizResultWhereUniqueInputSchema: z.ZodType<Prisma.QuizResultWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    quizId_userId_attempt: z.lazy(() => QuizResultQuizIdUserIdAttemptCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    quizId_userId_attempt: z.lazy(() => QuizResultQuizIdUserIdAttemptCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().optional(),
  quizId_userId_attempt: z.lazy(() => QuizResultQuizIdUserIdAttemptCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => QuizResultWhereInputSchema),z.lazy(() => QuizResultWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => QuizResultWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => QuizResultWhereInputSchema),z.lazy(() => QuizResultWhereInputSchema).array() ]).optional(),
  quizId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  quizTitle: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  score: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  percent: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  grade: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  attempt: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  quizAnswers: z.union([ z.lazy(() => QuizAnswerCompositeListFilterSchema),z.lazy(() => QuizAnswerObjectEqualityInputSchema).array() ]).optional(),
}).strict());

export const QuizResultOrderByWithAggregationInputSchema: z.ZodType<Prisma.QuizResultOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  quizId: z.lazy(() => SortOrderSchema).optional(),
  quizTitle: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  score: z.lazy(() => SortOrderSchema).optional(),
  percent: z.lazy(() => SortOrderSchema).optional(),
  grade: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  attempt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => QuizResultCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => QuizResultAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => QuizResultMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => QuizResultMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => QuizResultSumOrderByAggregateInputSchema).optional()
}).strict();

export const QuizResultScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.QuizResultScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => QuizResultScalarWhereWithAggregatesInputSchema),z.lazy(() => QuizResultScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => QuizResultScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => QuizResultScalarWhereWithAggregatesInputSchema),z.lazy(() => QuizResultScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  quizId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  quizTitle: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  score: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  percent: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  grade: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  attempt: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const ForumThreadWhereInputSchema: z.ZodType<Prisma.ForumThreadWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ForumThreadWhereInputSchema),z.lazy(() => ForumThreadWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ForumThreadWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ForumThreadWhereInputSchema),z.lazy(() => ForumThreadWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  slug: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  authorId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  author: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  posts: z.lazy(() => ForumPostListRelationFilterSchema).optional()
}).strict();

export const ForumThreadOrderByWithRelationInputSchema: z.ZodType<Prisma.ForumThreadOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  authorId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  author: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  posts: z.lazy(() => ForumPostOrderByRelationAggregateInputSchema).optional()
}).strict();

export const ForumThreadWhereUniqueInputSchema: z.ZodType<Prisma.ForumThreadWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    slug: z.string()
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    slug: z.string(),
  }),
])
.and(z.object({
  id: z.string().optional(),
  slug: z.string().optional(),
  AND: z.union([ z.lazy(() => ForumThreadWhereInputSchema),z.lazy(() => ForumThreadWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ForumThreadWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ForumThreadWhereInputSchema),z.lazy(() => ForumThreadWhereInputSchema).array() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  authorId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  author: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  posts: z.lazy(() => ForumPostListRelationFilterSchema).optional()
}).strict());

export const ForumThreadOrderByWithAggregationInputSchema: z.ZodType<Prisma.ForumThreadOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  authorId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ForumThreadCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ForumThreadMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ForumThreadMinOrderByAggregateInputSchema).optional()
}).strict();

export const ForumThreadScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ForumThreadScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ForumThreadScalarWhereWithAggregatesInputSchema),z.lazy(() => ForumThreadScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ForumThreadScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ForumThreadScalarWhereWithAggregatesInputSchema),z.lazy(() => ForumThreadScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  slug: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  authorId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const ForumPostWhereInputSchema: z.ZodType<Prisma.ForumPostWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ForumPostWhereInputSchema),z.lazy(() => ForumPostWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ForumPostWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ForumPostWhereInputSchema),z.lazy(() => ForumPostWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  authorId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  threadId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  author: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  thread: z.union([ z.lazy(() => ForumThreadScalarRelationFilterSchema),z.lazy(() => ForumThreadWhereInputSchema) ]).optional(),
  comments: z.lazy(() => ForumCommentListRelationFilterSchema).optional()
}).strict();

export const ForumPostOrderByWithRelationInputSchema: z.ZodType<Prisma.ForumPostOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  authorId: z.lazy(() => SortOrderSchema).optional(),
  threadId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  author: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  thread: z.lazy(() => ForumThreadOrderByWithRelationInputSchema).optional(),
  comments: z.lazy(() => ForumCommentOrderByRelationAggregateInputSchema).optional()
}).strict();

export const ForumPostWhereUniqueInputSchema: z.ZodType<Prisma.ForumPostWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => ForumPostWhereInputSchema),z.lazy(() => ForumPostWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ForumPostWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ForumPostWhereInputSchema),z.lazy(() => ForumPostWhereInputSchema).array() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  authorId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  threadId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  author: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  thread: z.union([ z.lazy(() => ForumThreadScalarRelationFilterSchema),z.lazy(() => ForumThreadWhereInputSchema) ]).optional(),
  comments: z.lazy(() => ForumCommentListRelationFilterSchema).optional()
}).strict());

export const ForumPostOrderByWithAggregationInputSchema: z.ZodType<Prisma.ForumPostOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  authorId: z.lazy(() => SortOrderSchema).optional(),
  threadId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ForumPostCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ForumPostMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ForumPostMinOrderByAggregateInputSchema).optional()
}).strict();

export const ForumPostScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ForumPostScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ForumPostScalarWhereWithAggregatesInputSchema),z.lazy(() => ForumPostScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ForumPostScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ForumPostScalarWhereWithAggregatesInputSchema),z.lazy(() => ForumPostScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  authorId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  threadId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const ForumCommentWhereInputSchema: z.ZodType<Prisma.ForumCommentWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ForumCommentWhereInputSchema),z.lazy(() => ForumCommentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ForumCommentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ForumCommentWhereInputSchema),z.lazy(() => ForumCommentWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  authorId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  postId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  author: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  post: z.union([ z.lazy(() => ForumPostScalarRelationFilterSchema),z.lazy(() => ForumPostWhereInputSchema) ]).optional(),
}).strict();

export const ForumCommentOrderByWithRelationInputSchema: z.ZodType<Prisma.ForumCommentOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  authorId: z.lazy(() => SortOrderSchema).optional(),
  postId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  author: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  post: z.lazy(() => ForumPostOrderByWithRelationInputSchema).optional()
}).strict();

export const ForumCommentWhereUniqueInputSchema: z.ZodType<Prisma.ForumCommentWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => ForumCommentWhereInputSchema),z.lazy(() => ForumCommentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ForumCommentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ForumCommentWhereInputSchema),z.lazy(() => ForumCommentWhereInputSchema).array() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  authorId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  postId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  author: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  post: z.union([ z.lazy(() => ForumPostScalarRelationFilterSchema),z.lazy(() => ForumPostWhereInputSchema) ]).optional(),
}).strict());

export const ForumCommentOrderByWithAggregationInputSchema: z.ZodType<Prisma.ForumCommentOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  authorId: z.lazy(() => SortOrderSchema).optional(),
  postId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ForumCommentCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ForumCommentMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ForumCommentMinOrderByAggregateInputSchema).optional()
}).strict();

export const ForumCommentScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ForumCommentScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ForumCommentScalarWhereWithAggregatesInputSchema),z.lazy(() => ForumCommentScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ForumCommentScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ForumCommentScalarWhereWithAggregatesInputSchema),z.lazy(() => ForumCommentScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  authorId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  postId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
  id: z.string().optional(),
  clerkId: z.string(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  jobSeekerId: z.string().optional().nullable(),
  hiringCompanyId: z.string().optional().nullable(),
  selfAssessmentId: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  jobSeeker: z.lazy(() => JobSeekerCreateNestedOneWithoutUserInputSchema).optional(),
  hiringCompany: z.lazy(() => HiringCompanyCreateNestedOneWithoutUserInputSchema).optional(),
  selfAssessment: z.lazy(() => SelfAssessmentCreateNestedOneWithoutUserInputSchema).optional(),
  threads: z.lazy(() => ForumThreadCreateNestedManyWithoutAuthorInputSchema).optional(),
  posts: z.lazy(() => ForumPostCreateNestedManyWithoutAuthorInputSchema).optional(),
  comments: z.lazy(() => ForumCommentCreateNestedManyWithoutAuthorInputSchema).optional()
}).strict();

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  clerkId: z.string(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  jobSeekerId: z.string().optional().nullable(),
  hiringCompanyId: z.string().optional().nullable(),
  selfAssessmentId: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  jobSeeker: z.lazy(() => JobSeekerUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  hiringCompany: z.lazy(() => HiringCompanyUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  selfAssessment: z.lazy(() => SelfAssessmentUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  threads: z.lazy(() => ForumThreadUncheckedCreateNestedManyWithoutAuthorInputSchema).optional(),
  posts: z.lazy(() => ForumPostUncheckedCreateNestedManyWithoutAuthorInputSchema).optional(),
  comments: z.lazy(() => ForumCommentUncheckedCreateNestedManyWithoutAuthorInputSchema).optional()
}).strict();

export const UserUpdateInputSchema: z.ZodType<Prisma.UserUpdateInput> = z.object({
  clerkId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  jobSeekerId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hiringCompanyId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  selfAssessmentId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional(),
  jobSeeker: z.lazy(() => JobSeekerUpdateOneWithoutUserNestedInputSchema).optional(),
  hiringCompany: z.lazy(() => HiringCompanyUpdateOneWithoutUserNestedInputSchema).optional(),
  selfAssessment: z.lazy(() => SelfAssessmentUpdateOneWithoutUserNestedInputSchema).optional(),
  threads: z.lazy(() => ForumThreadUpdateManyWithoutAuthorNestedInputSchema).optional(),
  posts: z.lazy(() => ForumPostUpdateManyWithoutAuthorNestedInputSchema).optional(),
  comments: z.lazy(() => ForumCommentUpdateManyWithoutAuthorNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateInputSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> = z.object({
  clerkId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  jobSeekerId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hiringCompanyId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  selfAssessmentId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  jobSeeker: z.lazy(() => JobSeekerUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  hiringCompany: z.lazy(() => HiringCompanyUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  selfAssessment: z.lazy(() => SelfAssessmentUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  threads: z.lazy(() => ForumThreadUncheckedUpdateManyWithoutAuthorNestedInputSchema).optional(),
  posts: z.lazy(() => ForumPostUncheckedUpdateManyWithoutAuthorNestedInputSchema).optional(),
  comments: z.lazy(() => ForumCommentUncheckedUpdateManyWithoutAuthorNestedInputSchema).optional()
}).strict();

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> = z.object({
  id: z.string().optional(),
  clerkId: z.string(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  jobSeekerId: z.string().optional().nullable(),
  hiringCompanyId: z.string().optional().nullable(),
  selfAssessmentId: z.string().optional().nullable()
}).strict();

export const UserUpdateManyMutationInputSchema: z.ZodType<Prisma.UserUpdateManyMutationInput> = z.object({
  clerkId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  jobSeekerId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hiringCompanyId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  selfAssessmentId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const UserUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyInput> = z.object({
  clerkId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  jobSeekerId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hiringCompanyId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  selfAssessmentId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ProfileCreateInputSchema: z.ZodType<Prisma.ProfileCreateInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  personalInfo: z.union([ z.lazy(() => PersonalInfoNullableCreateEnvelopeInputSchema),z.lazy(() => PersonalInfoCreateInputSchema) ]).optional().nullable(),
  skills: z.union([ z.lazy(() => SkillListCreateEnvelopeInputSchema),z.lazy(() => SkillCreateInputSchema),z.lazy(() => SkillCreateInputSchema).array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  certificates: z.lazy(() => CertificateCreateNestedManyWithoutProfileInputSchema).optional(),
  educations: z.lazy(() => EducationCreateNestedOneWithoutProfileInputSchema).optional(),
  experiences: z.lazy(() => ExperienceCreateNestedOneWithoutProfileInputSchema).optional()
}).strict();

export const ProfileUncheckedCreateInputSchema: z.ZodType<Prisma.ProfileUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  personalInfo: z.union([ z.lazy(() => PersonalInfoNullableCreateEnvelopeInputSchema),z.lazy(() => PersonalInfoCreateInputSchema) ]).optional().nullable(),
  skills: z.union([ z.lazy(() => SkillListCreateEnvelopeInputSchema),z.lazy(() => SkillCreateInputSchema),z.lazy(() => SkillCreateInputSchema).array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  certificates: z.lazy(() => CertificateUncheckedCreateNestedManyWithoutProfileInputSchema).optional(),
  educations: z.lazy(() => EducationUncheckedCreateNestedOneWithoutProfileInputSchema).optional(),
  experiences: z.lazy(() => ExperienceUncheckedCreateNestedOneWithoutProfileInputSchema).optional()
}).strict();

export const ProfileUpdateInputSchema: z.ZodType<Prisma.ProfileUpdateInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  personalInfo: z.union([ z.lazy(() => PersonalInfoNullableUpdateEnvelopeInputSchema),z.lazy(() => PersonalInfoCreateInputSchema) ]).optional().nullable(),
  skills: z.union([ z.lazy(() => SkillListUpdateEnvelopeInputSchema),z.lazy(() => SkillCreateInputSchema),z.lazy(() => SkillCreateInputSchema).array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  certificates: z.lazy(() => CertificateUpdateManyWithoutProfileNestedInputSchema).optional(),
  educations: z.lazy(() => EducationUpdateOneWithoutProfileNestedInputSchema).optional(),
  experiences: z.lazy(() => ExperienceUpdateOneWithoutProfileNestedInputSchema).optional()
}).strict();

export const ProfileUncheckedUpdateInputSchema: z.ZodType<Prisma.ProfileUncheckedUpdateInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  personalInfo: z.union([ z.lazy(() => PersonalInfoNullableUpdateEnvelopeInputSchema),z.lazy(() => PersonalInfoCreateInputSchema) ]).optional().nullable(),
  skills: z.union([ z.lazy(() => SkillListUpdateEnvelopeInputSchema),z.lazy(() => SkillCreateInputSchema),z.lazy(() => SkillCreateInputSchema).array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  certificates: z.lazy(() => CertificateUncheckedUpdateManyWithoutProfileNestedInputSchema).optional(),
  educations: z.lazy(() => EducationUncheckedUpdateOneWithoutProfileNestedInputSchema).optional(),
  experiences: z.lazy(() => ExperienceUncheckedUpdateOneWithoutProfileNestedInputSchema).optional()
}).strict();

export const ProfileCreateManyInputSchema: z.ZodType<Prisma.ProfileCreateManyInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  personalInfo: z.union([ z.lazy(() => PersonalInfoNullableCreateEnvelopeInputSchema),z.lazy(() => PersonalInfoCreateInputSchema) ]).optional().nullable(),
  skills: z.union([ z.lazy(() => SkillListCreateEnvelopeInputSchema),z.lazy(() => SkillCreateInputSchema),z.lazy(() => SkillCreateInputSchema).array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const ProfileUpdateManyMutationInputSchema: z.ZodType<Prisma.ProfileUpdateManyMutationInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  personalInfo: z.union([ z.lazy(() => PersonalInfoNullableUpdateEnvelopeInputSchema),z.lazy(() => PersonalInfoCreateInputSchema) ]).optional().nullable(),
  skills: z.union([ z.lazy(() => SkillListUpdateEnvelopeInputSchema),z.lazy(() => SkillCreateInputSchema),z.lazy(() => SkillCreateInputSchema).array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProfileUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ProfileUncheckedUpdateManyInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  personalInfo: z.union([ z.lazy(() => PersonalInfoNullableUpdateEnvelopeInputSchema),z.lazy(() => PersonalInfoCreateInputSchema) ]).optional().nullable(),
  skills: z.union([ z.lazy(() => SkillListUpdateEnvelopeInputSchema),z.lazy(() => SkillCreateInputSchema),z.lazy(() => SkillCreateInputSchema).array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CertificateCreateInputSchema: z.ZodType<Prisma.CertificateCreateInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  userName: z.string(),
  course: z.string(),
  attempt: z.number().int(),
  key: z.string(),
  issuedDate: z.coerce.date(),
  profile: z.lazy(() => ProfileCreateNestedOneWithoutCertificatesInputSchema)
}).strict();

export const CertificateUncheckedCreateInputSchema: z.ZodType<Prisma.CertificateUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  profileId: z.string(),
  userId: z.string(),
  userName: z.string(),
  course: z.string(),
  attempt: z.number().int(),
  key: z.string(),
  issuedDate: z.coerce.date()
}).strict();

export const CertificateUpdateInputSchema: z.ZodType<Prisma.CertificateUpdateInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  course: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  attempt: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  key: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  issuedDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  profile: z.lazy(() => ProfileUpdateOneRequiredWithoutCertificatesNestedInputSchema).optional()
}).strict();

export const CertificateUncheckedUpdateInputSchema: z.ZodType<Prisma.CertificateUncheckedUpdateInput> = z.object({
  profileId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  course: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  attempt: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  key: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  issuedDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CertificateCreateManyInputSchema: z.ZodType<Prisma.CertificateCreateManyInput> = z.object({
  id: z.string().optional(),
  profileId: z.string(),
  userId: z.string(),
  userName: z.string(),
  course: z.string(),
  attempt: z.number().int(),
  key: z.string(),
  issuedDate: z.coerce.date()
}).strict();

export const CertificateUpdateManyMutationInputSchema: z.ZodType<Prisma.CertificateUpdateManyMutationInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  course: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  attempt: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  key: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  issuedDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CertificateUncheckedUpdateManyInputSchema: z.ZodType<Prisma.CertificateUncheckedUpdateManyInput> = z.object({
  profileId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  course: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  attempt: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  key: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  issuedDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AccountCreateInputSchema: z.ZodType<Prisma.AccountCreateInput> = z.object({
  id: z.string().optional(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional().nullable(),
  access_token: z.string().optional().nullable(),
  expires_at: z.number().int().optional().nullable(),
  token_type: z.string().optional().nullable(),
  scope: z.string().optional().nullable(),
  id_token: z.string().optional().nullable(),
  session_state: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutAccountsInputSchema)
}).strict();

export const AccountUncheckedCreateInputSchema: z.ZodType<Prisma.AccountUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional().nullable(),
  access_token: z.string().optional().nullable(),
  expires_at: z.number().int().optional().nullable(),
  token_type: z.string().optional().nullable(),
  scope: z.string().optional().nullable(),
  id_token: z.string().optional().nullable(),
  session_state: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const AccountUpdateInputSchema: z.ZodType<Prisma.AccountUpdateInput> = z.object({
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutAccountsNestedInputSchema).optional()
}).strict();

export const AccountUncheckedUpdateInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AccountCreateManyInputSchema: z.ZodType<Prisma.AccountCreateManyInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional().nullable(),
  access_token: z.string().optional().nullable(),
  expires_at: z.number().int().optional().nullable(),
  token_type: z.string().optional().nullable(),
  scope: z.string().optional().nullable(),
  id_token: z.string().optional().nullable(),
  session_state: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const AccountUpdateManyMutationInputSchema: z.ZodType<Prisma.AccountUpdateManyMutationInput> = z.object({
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AccountUncheckedUpdateManyInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateManyInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionCreateInputSchema: z.ZodType<Prisma.SessionCreateInput> = z.object({
  id: z.string().optional(),
  sessionToken: z.string(),
  expires: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutSessionsInputSchema)
}).strict();

export const SessionUncheckedCreateInputSchema: z.ZodType<Prisma.SessionUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  sessionToken: z.string(),
  userId: z.string(),
  expires: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const SessionUpdateInputSchema: z.ZodType<Prisma.SessionUpdateInput> = z.object({
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutSessionsNestedInputSchema).optional()
}).strict();

export const SessionUncheckedUpdateInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateInput> = z.object({
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionCreateManyInputSchema: z.ZodType<Prisma.SessionCreateManyInput> = z.object({
  id: z.string().optional(),
  sessionToken: z.string(),
  userId: z.string(),
  expires: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const SessionUpdateManyMutationInputSchema: z.ZodType<Prisma.SessionUpdateManyMutationInput> = z.object({
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionUncheckedUpdateManyInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyInput> = z.object({
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VerificationTokenCreateInputSchema: z.ZodType<Prisma.VerificationTokenCreateInput> = z.object({
  id: z.string().optional(),
  identifier: z.string(),
  token: z.string(),
  expires: z.coerce.date()
}).strict();

export const VerificationTokenUncheckedCreateInputSchema: z.ZodType<Prisma.VerificationTokenUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  identifier: z.string(),
  token: z.string(),
  expires: z.coerce.date()
}).strict();

export const VerificationTokenUpdateInputSchema: z.ZodType<Prisma.VerificationTokenUpdateInput> = z.object({
  identifier: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VerificationTokenUncheckedUpdateInputSchema: z.ZodType<Prisma.VerificationTokenUncheckedUpdateInput> = z.object({
  identifier: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VerificationTokenCreateManyInputSchema: z.ZodType<Prisma.VerificationTokenCreateManyInput> = z.object({
  id: z.string().optional(),
  identifier: z.string(),
  token: z.string(),
  expires: z.coerce.date()
}).strict();

export const VerificationTokenUpdateManyMutationInputSchema: z.ZodType<Prisma.VerificationTokenUpdateManyMutationInput> = z.object({
  identifier: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VerificationTokenUncheckedUpdateManyInputSchema: z.ZodType<Prisma.VerificationTokenUncheckedUpdateManyInput> = z.object({
  identifier: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const JobSeekerCreateInputSchema: z.ZodType<Prisma.JobSeekerCreateInput> = z.object({
  id: z.string().optional(),
  firstName: z.string(),
  lastName: z.string(),
  dob: z.coerce.date(),
  gender: z.string(),
  contactNumber: z.string(),
  address: z.string(),
  city: z.string(),
  state: z.string(),
  postalCode: z.string(),
  country: z.string(),
  skills: z.union([ z.lazy(() => SkillListCreateEnvelopeInputSchema),z.lazy(() => SkillCreateInputSchema),z.lazy(() => SkillCreateInputSchema).array() ]).optional(),
  portfolioLinks: z.union([ z.lazy(() => JobSeekerCreateportfolioLinksInputSchema),z.string().array() ]).optional(),
  preferredJobRoles: z.union([ z.lazy(() => JobSeekerCreatepreferredJobRolesInputSchema),z.string().array() ]).optional(),
  resume: z.string(),
  profilePicture: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutJobSeekerInputSchema),
  certifications: z.lazy(() => CertificationCreateNestedManyWithoutJobSeekerInputSchema).optional(),
  applications: z.lazy(() => ApplicationCreateNestedManyWithoutJobSeekerInputSchema).optional()
}).strict();

export const JobSeekerUncheckedCreateInputSchema: z.ZodType<Prisma.JobSeekerUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  dob: z.coerce.date(),
  gender: z.string(),
  contactNumber: z.string(),
  address: z.string(),
  city: z.string(),
  state: z.string(),
  postalCode: z.string(),
  country: z.string(),
  skills: z.union([ z.lazy(() => SkillListCreateEnvelopeInputSchema),z.lazy(() => SkillCreateInputSchema),z.lazy(() => SkillCreateInputSchema).array() ]).optional(),
  portfolioLinks: z.union([ z.lazy(() => JobSeekerCreateportfolioLinksInputSchema),z.string().array() ]).optional(),
  preferredJobRoles: z.union([ z.lazy(() => JobSeekerCreatepreferredJobRolesInputSchema),z.string().array() ]).optional(),
  resume: z.string(),
  profilePicture: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  certifications: z.lazy(() => CertificationUncheckedCreateNestedManyWithoutJobSeekerInputSchema).optional(),
  applications: z.lazy(() => ApplicationUncheckedCreateNestedManyWithoutJobSeekerInputSchema).optional()
}).strict();

export const JobSeekerUpdateInputSchema: z.ZodType<Prisma.JobSeekerUpdateInput> = z.object({
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dob: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  gender: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  contactNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  postalCode: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  country: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  skills: z.union([ z.lazy(() => SkillListUpdateEnvelopeInputSchema),z.lazy(() => SkillCreateInputSchema),z.lazy(() => SkillCreateInputSchema).array() ]).optional(),
  portfolioLinks: z.union([ z.lazy(() => JobSeekerUpdateportfolioLinksInputSchema),z.string().array() ]).optional(),
  preferredJobRoles: z.union([ z.lazy(() => JobSeekerUpdatepreferredJobRolesInputSchema),z.string().array() ]).optional(),
  resume: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  profilePicture: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutJobSeekerNestedInputSchema).optional(),
  certifications: z.lazy(() => CertificationUpdateManyWithoutJobSeekerNestedInputSchema).optional(),
  applications: z.lazy(() => ApplicationUpdateManyWithoutJobSeekerNestedInputSchema).optional()
}).strict();

export const JobSeekerUncheckedUpdateInputSchema: z.ZodType<Prisma.JobSeekerUncheckedUpdateInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dob: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  gender: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  contactNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  postalCode: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  country: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  skills: z.union([ z.lazy(() => SkillListUpdateEnvelopeInputSchema),z.lazy(() => SkillCreateInputSchema),z.lazy(() => SkillCreateInputSchema).array() ]).optional(),
  portfolioLinks: z.union([ z.lazy(() => JobSeekerUpdateportfolioLinksInputSchema),z.string().array() ]).optional(),
  preferredJobRoles: z.union([ z.lazy(() => JobSeekerUpdatepreferredJobRolesInputSchema),z.string().array() ]).optional(),
  resume: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  profilePicture: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  certifications: z.lazy(() => CertificationUncheckedUpdateManyWithoutJobSeekerNestedInputSchema).optional(),
  applications: z.lazy(() => ApplicationUncheckedUpdateManyWithoutJobSeekerNestedInputSchema).optional()
}).strict();

export const JobSeekerCreateManyInputSchema: z.ZodType<Prisma.JobSeekerCreateManyInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  dob: z.coerce.date(),
  gender: z.string(),
  contactNumber: z.string(),
  address: z.string(),
  city: z.string(),
  state: z.string(),
  postalCode: z.string(),
  country: z.string(),
  skills: z.union([ z.lazy(() => SkillListCreateEnvelopeInputSchema),z.lazy(() => SkillCreateInputSchema),z.lazy(() => SkillCreateInputSchema).array() ]).optional(),
  portfolioLinks: z.union([ z.lazy(() => JobSeekerCreateportfolioLinksInputSchema),z.string().array() ]).optional(),
  preferredJobRoles: z.union([ z.lazy(() => JobSeekerCreatepreferredJobRolesInputSchema),z.string().array() ]).optional(),
  resume: z.string(),
  profilePicture: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const JobSeekerUpdateManyMutationInputSchema: z.ZodType<Prisma.JobSeekerUpdateManyMutationInput> = z.object({
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dob: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  gender: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  contactNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  postalCode: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  country: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  skills: z.union([ z.lazy(() => SkillListUpdateEnvelopeInputSchema),z.lazy(() => SkillCreateInputSchema),z.lazy(() => SkillCreateInputSchema).array() ]).optional(),
  portfolioLinks: z.union([ z.lazy(() => JobSeekerUpdateportfolioLinksInputSchema),z.string().array() ]).optional(),
  preferredJobRoles: z.union([ z.lazy(() => JobSeekerUpdatepreferredJobRolesInputSchema),z.string().array() ]).optional(),
  resume: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  profilePicture: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const JobSeekerUncheckedUpdateManyInputSchema: z.ZodType<Prisma.JobSeekerUncheckedUpdateManyInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dob: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  gender: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  contactNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  postalCode: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  country: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  skills: z.union([ z.lazy(() => SkillListUpdateEnvelopeInputSchema),z.lazy(() => SkillCreateInputSchema),z.lazy(() => SkillCreateInputSchema).array() ]).optional(),
  portfolioLinks: z.union([ z.lazy(() => JobSeekerUpdateportfolioLinksInputSchema),z.string().array() ]).optional(),
  preferredJobRoles: z.union([ z.lazy(() => JobSeekerUpdatepreferredJobRolesInputSchema),z.string().array() ]).optional(),
  resume: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  profilePicture: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const EducationCreateInputSchema: z.ZodType<Prisma.EducationCreateInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  educationLevels: z.union([ z.lazy(() => EducationLevelListCreateEnvelopeInputSchema),z.lazy(() => EducationLevelCreateInputSchema),z.lazy(() => EducationLevelCreateInputSchema).array() ]).optional(),
  profile: z.lazy(() => ProfileCreateNestedOneWithoutEducationsInputSchema)
}).strict();

export const EducationUncheckedCreateInputSchema: z.ZodType<Prisma.EducationUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  profileId: z.string(),
  educationLevels: z.union([ z.lazy(() => EducationLevelListCreateEnvelopeInputSchema),z.lazy(() => EducationLevelCreateInputSchema),z.lazy(() => EducationLevelCreateInputSchema).array() ]).optional(),
}).strict();

export const EducationUpdateInputSchema: z.ZodType<Prisma.EducationUpdateInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  educationLevels: z.union([ z.lazy(() => EducationLevelListUpdateEnvelopeInputSchema),z.lazy(() => EducationLevelCreateInputSchema),z.lazy(() => EducationLevelCreateInputSchema).array() ]).optional(),
  profile: z.lazy(() => ProfileUpdateOneRequiredWithoutEducationsNestedInputSchema).optional()
}).strict();

export const EducationUncheckedUpdateInputSchema: z.ZodType<Prisma.EducationUncheckedUpdateInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  profileId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  educationLevels: z.union([ z.lazy(() => EducationLevelListUpdateEnvelopeInputSchema),z.lazy(() => EducationLevelCreateInputSchema),z.lazy(() => EducationLevelCreateInputSchema).array() ]).optional(),
}).strict();

export const EducationCreateManyInputSchema: z.ZodType<Prisma.EducationCreateManyInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  profileId: z.string(),
  educationLevels: z.union([ z.lazy(() => EducationLevelListCreateEnvelopeInputSchema),z.lazy(() => EducationLevelCreateInputSchema),z.lazy(() => EducationLevelCreateInputSchema).array() ]).optional(),
}).strict();

export const EducationUpdateManyMutationInputSchema: z.ZodType<Prisma.EducationUpdateManyMutationInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  educationLevels: z.union([ z.lazy(() => EducationLevelListUpdateEnvelopeInputSchema),z.lazy(() => EducationLevelCreateInputSchema),z.lazy(() => EducationLevelCreateInputSchema).array() ]).optional(),
}).strict();

export const EducationUncheckedUpdateManyInputSchema: z.ZodType<Prisma.EducationUncheckedUpdateManyInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  profileId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  educationLevels: z.union([ z.lazy(() => EducationLevelListUpdateEnvelopeInputSchema),z.lazy(() => EducationLevelCreateInputSchema),z.lazy(() => EducationLevelCreateInputSchema).array() ]).optional(),
}).strict();

export const ExperienceCreateInputSchema: z.ZodType<Prisma.ExperienceCreateInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  experienceDetails: z.union([ z.lazy(() => ExperienceDetailsListCreateEnvelopeInputSchema),z.lazy(() => ExperienceDetailsCreateInputSchema),z.lazy(() => ExperienceDetailsCreateInputSchema).array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  profile: z.lazy(() => ProfileCreateNestedOneWithoutExperiencesInputSchema)
}).strict();

export const ExperienceUncheckedCreateInputSchema: z.ZodType<Prisma.ExperienceUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  profileId: z.string(),
  userId: z.string(),
  experienceDetails: z.union([ z.lazy(() => ExperienceDetailsListCreateEnvelopeInputSchema),z.lazy(() => ExperienceDetailsCreateInputSchema),z.lazy(() => ExperienceDetailsCreateInputSchema).array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const ExperienceUpdateInputSchema: z.ZodType<Prisma.ExperienceUpdateInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  experienceDetails: z.union([ z.lazy(() => ExperienceDetailsListUpdateEnvelopeInputSchema),z.lazy(() => ExperienceDetailsCreateInputSchema),z.lazy(() => ExperienceDetailsCreateInputSchema).array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  profile: z.lazy(() => ProfileUpdateOneRequiredWithoutExperiencesNestedInputSchema).optional()
}).strict();

export const ExperienceUncheckedUpdateInputSchema: z.ZodType<Prisma.ExperienceUncheckedUpdateInput> = z.object({
  profileId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  experienceDetails: z.union([ z.lazy(() => ExperienceDetailsListUpdateEnvelopeInputSchema),z.lazy(() => ExperienceDetailsCreateInputSchema),z.lazy(() => ExperienceDetailsCreateInputSchema).array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ExperienceCreateManyInputSchema: z.ZodType<Prisma.ExperienceCreateManyInput> = z.object({
  id: z.string().optional(),
  profileId: z.string(),
  userId: z.string(),
  experienceDetails: z.union([ z.lazy(() => ExperienceDetailsListCreateEnvelopeInputSchema),z.lazy(() => ExperienceDetailsCreateInputSchema),z.lazy(() => ExperienceDetailsCreateInputSchema).array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const ExperienceUpdateManyMutationInputSchema: z.ZodType<Prisma.ExperienceUpdateManyMutationInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  experienceDetails: z.union([ z.lazy(() => ExperienceDetailsListUpdateEnvelopeInputSchema),z.lazy(() => ExperienceDetailsCreateInputSchema),z.lazy(() => ExperienceDetailsCreateInputSchema).array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ExperienceUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ExperienceUncheckedUpdateManyInput> = z.object({
  profileId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  experienceDetails: z.union([ z.lazy(() => ExperienceDetailsListUpdateEnvelopeInputSchema),z.lazy(() => ExperienceDetailsCreateInputSchema),z.lazy(() => ExperienceDetailsCreateInputSchema).array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CertificationCreateInputSchema: z.ZodType<Prisma.CertificationCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  issuedBy: z.string(),
  issuedDate: z.coerce.date(),
  jobSeeker: z.lazy(() => JobSeekerCreateNestedOneWithoutCertificationsInputSchema)
}).strict();

export const CertificationUncheckedCreateInputSchema: z.ZodType<Prisma.CertificationUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  jobSeekerId: z.string(),
  name: z.string(),
  issuedBy: z.string(),
  issuedDate: z.coerce.date()
}).strict();

export const CertificationUpdateInputSchema: z.ZodType<Prisma.CertificationUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  issuedBy: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  issuedDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  jobSeeker: z.lazy(() => JobSeekerUpdateOneRequiredWithoutCertificationsNestedInputSchema).optional()
}).strict();

export const CertificationUncheckedUpdateInputSchema: z.ZodType<Prisma.CertificationUncheckedUpdateInput> = z.object({
  jobSeekerId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  issuedBy: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  issuedDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CertificationCreateManyInputSchema: z.ZodType<Prisma.CertificationCreateManyInput> = z.object({
  id: z.string().optional(),
  jobSeekerId: z.string(),
  name: z.string(),
  issuedBy: z.string(),
  issuedDate: z.coerce.date()
}).strict();

export const CertificationUpdateManyMutationInputSchema: z.ZodType<Prisma.CertificationUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  issuedBy: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  issuedDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CertificationUncheckedUpdateManyInputSchema: z.ZodType<Prisma.CertificationUncheckedUpdateManyInput> = z.object({
  jobSeekerId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  issuedBy: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  issuedDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const HiringCompanyCreateInputSchema: z.ZodType<Prisma.HiringCompanyCreateInput> = z.object({
  id: z.string().optional(),
  companyName: z.string(),
  industry: z.string(),
  companySize: z.string(),
  website: z.string(),
  socialLinks: z.union([ z.lazy(() => HiringCompanyCreatesocialLinksInputSchema),z.string().array() ]).optional(),
  contactPerson: z.string(),
  contactEmail: z.string(),
  contactNumber: z.string(),
  address: z.string(),
  city: z.string(),
  state: z.string(),
  postalCode: z.string(),
  country: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutHiringCompanyInputSchema),
  jobs: z.lazy(() => JobCreateNestedManyWithoutHiringCompanyInputSchema).optional()
}).strict();

export const HiringCompanyUncheckedCreateInputSchema: z.ZodType<Prisma.HiringCompanyUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  companyName: z.string(),
  industry: z.string(),
  companySize: z.string(),
  website: z.string(),
  socialLinks: z.union([ z.lazy(() => HiringCompanyCreatesocialLinksInputSchema),z.string().array() ]).optional(),
  contactPerson: z.string(),
  contactEmail: z.string(),
  contactNumber: z.string(),
  address: z.string(),
  city: z.string(),
  state: z.string(),
  postalCode: z.string(),
  country: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  jobs: z.lazy(() => JobUncheckedCreateNestedManyWithoutHiringCompanyInputSchema).optional()
}).strict();

export const HiringCompanyUpdateInputSchema: z.ZodType<Prisma.HiringCompanyUpdateInput> = z.object({
  companyName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  industry: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  companySize: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  website: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  socialLinks: z.union([ z.lazy(() => HiringCompanyUpdatesocialLinksInputSchema),z.string().array() ]).optional(),
  contactPerson: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  contactEmail: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  contactNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  postalCode: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  country: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutHiringCompanyNestedInputSchema).optional(),
  jobs: z.lazy(() => JobUpdateManyWithoutHiringCompanyNestedInputSchema).optional()
}).strict();

export const HiringCompanyUncheckedUpdateInputSchema: z.ZodType<Prisma.HiringCompanyUncheckedUpdateInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  companyName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  industry: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  companySize: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  website: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  socialLinks: z.union([ z.lazy(() => HiringCompanyUpdatesocialLinksInputSchema),z.string().array() ]).optional(),
  contactPerson: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  contactEmail: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  contactNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  postalCode: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  country: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  jobs: z.lazy(() => JobUncheckedUpdateManyWithoutHiringCompanyNestedInputSchema).optional()
}).strict();

export const HiringCompanyCreateManyInputSchema: z.ZodType<Prisma.HiringCompanyCreateManyInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  companyName: z.string(),
  industry: z.string(),
  companySize: z.string(),
  website: z.string(),
  socialLinks: z.union([ z.lazy(() => HiringCompanyCreatesocialLinksInputSchema),z.string().array() ]).optional(),
  contactPerson: z.string(),
  contactEmail: z.string(),
  contactNumber: z.string(),
  address: z.string(),
  city: z.string(),
  state: z.string(),
  postalCode: z.string(),
  country: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const HiringCompanyUpdateManyMutationInputSchema: z.ZodType<Prisma.HiringCompanyUpdateManyMutationInput> = z.object({
  companyName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  industry: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  companySize: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  website: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  socialLinks: z.union([ z.lazy(() => HiringCompanyUpdatesocialLinksInputSchema),z.string().array() ]).optional(),
  contactPerson: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  contactEmail: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  contactNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  postalCode: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  country: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const HiringCompanyUncheckedUpdateManyInputSchema: z.ZodType<Prisma.HiringCompanyUncheckedUpdateManyInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  companyName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  industry: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  companySize: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  website: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  socialLinks: z.union([ z.lazy(() => HiringCompanyUpdatesocialLinksInputSchema),z.string().array() ]).optional(),
  contactPerson: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  contactEmail: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  contactNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  postalCode: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  country: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const JobCreateInputSchema: z.ZodType<Prisma.JobCreateInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string(),
  requirements: z.union([ z.lazy(() => JobCreaterequirementsInputSchema),z.string().array() ]).optional(),
  salaryRange: z.string(),
  location: z.string(),
  employmentType: z.string(),
  benefits: z.union([ z.lazy(() => JobCreatebenefitsInputSchema),z.string().array() ]).optional(),
  remote: z.boolean(),
  postedAt: z.coerce.date().optional(),
  hiringCompany: z.lazy(() => HiringCompanyCreateNestedOneWithoutJobsInputSchema),
  applications: z.lazy(() => ApplicationCreateNestedManyWithoutJobInputSchema).optional()
}).strict();

export const JobUncheckedCreateInputSchema: z.ZodType<Prisma.JobUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  hiringCompanyId: z.string(),
  title: z.string(),
  description: z.string(),
  requirements: z.union([ z.lazy(() => JobCreaterequirementsInputSchema),z.string().array() ]).optional(),
  salaryRange: z.string(),
  location: z.string(),
  employmentType: z.string(),
  benefits: z.union([ z.lazy(() => JobCreatebenefitsInputSchema),z.string().array() ]).optional(),
  remote: z.boolean(),
  postedAt: z.coerce.date().optional(),
  applications: z.lazy(() => ApplicationUncheckedCreateNestedManyWithoutJobInputSchema).optional()
}).strict();

export const JobUpdateInputSchema: z.ZodType<Prisma.JobUpdateInput> = z.object({
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  requirements: z.union([ z.lazy(() => JobUpdaterequirementsInputSchema),z.string().array() ]).optional(),
  salaryRange: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  employmentType: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  benefits: z.union([ z.lazy(() => JobUpdatebenefitsInputSchema),z.string().array() ]).optional(),
  remote: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  postedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  hiringCompany: z.lazy(() => HiringCompanyUpdateOneRequiredWithoutJobsNestedInputSchema).optional(),
  applications: z.lazy(() => ApplicationUpdateManyWithoutJobNestedInputSchema).optional()
}).strict();

export const JobUncheckedUpdateInputSchema: z.ZodType<Prisma.JobUncheckedUpdateInput> = z.object({
  hiringCompanyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  requirements: z.union([ z.lazy(() => JobUpdaterequirementsInputSchema),z.string().array() ]).optional(),
  salaryRange: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  employmentType: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  benefits: z.union([ z.lazy(() => JobUpdatebenefitsInputSchema),z.string().array() ]).optional(),
  remote: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  postedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  applications: z.lazy(() => ApplicationUncheckedUpdateManyWithoutJobNestedInputSchema).optional()
}).strict();

export const JobCreateManyInputSchema: z.ZodType<Prisma.JobCreateManyInput> = z.object({
  id: z.string().optional(),
  hiringCompanyId: z.string(),
  title: z.string(),
  description: z.string(),
  requirements: z.union([ z.lazy(() => JobCreaterequirementsInputSchema),z.string().array() ]).optional(),
  salaryRange: z.string(),
  location: z.string(),
  employmentType: z.string(),
  benefits: z.union([ z.lazy(() => JobCreatebenefitsInputSchema),z.string().array() ]).optional(),
  remote: z.boolean(),
  postedAt: z.coerce.date().optional()
}).strict();

export const JobUpdateManyMutationInputSchema: z.ZodType<Prisma.JobUpdateManyMutationInput> = z.object({
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  requirements: z.union([ z.lazy(() => JobUpdaterequirementsInputSchema),z.string().array() ]).optional(),
  salaryRange: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  employmentType: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  benefits: z.union([ z.lazy(() => JobUpdatebenefitsInputSchema),z.string().array() ]).optional(),
  remote: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  postedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const JobUncheckedUpdateManyInputSchema: z.ZodType<Prisma.JobUncheckedUpdateManyInput> = z.object({
  hiringCompanyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  requirements: z.union([ z.lazy(() => JobUpdaterequirementsInputSchema),z.string().array() ]).optional(),
  salaryRange: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  employmentType: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  benefits: z.union([ z.lazy(() => JobUpdatebenefitsInputSchema),z.string().array() ]).optional(),
  remote: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  postedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ApplicationCreateInputSchema: z.ZodType<Prisma.ApplicationCreateInput> = z.object({
  id: z.string().optional(),
  appliedAt: z.coerce.date().optional(),
  status: z.string().optional(),
  resume: z.string(),
  coverLetter: z.string().optional().nullable(),
  jobSeeker: z.lazy(() => JobSeekerCreateNestedOneWithoutApplicationsInputSchema),
  job: z.lazy(() => JobCreateNestedOneWithoutApplicationsInputSchema),
  interviews: z.lazy(() => InterviewCreateNestedManyWithoutApplicationInputSchema).optional()
}).strict();

export const ApplicationUncheckedCreateInputSchema: z.ZodType<Prisma.ApplicationUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  jobSeekerId: z.string(),
  jobId: z.string(),
  appliedAt: z.coerce.date().optional(),
  status: z.string().optional(),
  resume: z.string(),
  coverLetter: z.string().optional().nullable(),
  interviews: z.lazy(() => InterviewUncheckedCreateNestedManyWithoutApplicationInputSchema).optional()
}).strict();

export const ApplicationUpdateInputSchema: z.ZodType<Prisma.ApplicationUpdateInput> = z.object({
  appliedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  resume: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  coverLetter: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  jobSeeker: z.lazy(() => JobSeekerUpdateOneRequiredWithoutApplicationsNestedInputSchema).optional(),
  job: z.lazy(() => JobUpdateOneRequiredWithoutApplicationsNestedInputSchema).optional(),
  interviews: z.lazy(() => InterviewUpdateManyWithoutApplicationNestedInputSchema).optional()
}).strict();

export const ApplicationUncheckedUpdateInputSchema: z.ZodType<Prisma.ApplicationUncheckedUpdateInput> = z.object({
  jobSeekerId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  jobId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  appliedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  resume: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  coverLetter: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  interviews: z.lazy(() => InterviewUncheckedUpdateManyWithoutApplicationNestedInputSchema).optional()
}).strict();

export const ApplicationCreateManyInputSchema: z.ZodType<Prisma.ApplicationCreateManyInput> = z.object({
  id: z.string().optional(),
  jobSeekerId: z.string(),
  jobId: z.string(),
  appliedAt: z.coerce.date().optional(),
  status: z.string().optional(),
  resume: z.string(),
  coverLetter: z.string().optional().nullable()
}).strict();

export const ApplicationUpdateManyMutationInputSchema: z.ZodType<Prisma.ApplicationUpdateManyMutationInput> = z.object({
  appliedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  resume: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  coverLetter: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ApplicationUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ApplicationUncheckedUpdateManyInput> = z.object({
  jobSeekerId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  jobId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  appliedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  resume: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  coverLetter: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const InterviewCreateInputSchema: z.ZodType<Prisma.InterviewCreateInput> = z.object({
  id: z.string().optional(),
  scheduledAt: z.coerce.date(),
  status: z.string().optional(),
  feedback: z.string().optional().nullable(),
  application: z.lazy(() => ApplicationCreateNestedOneWithoutInterviewsInputSchema)
}).strict();

export const InterviewUncheckedCreateInputSchema: z.ZodType<Prisma.InterviewUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  applicationId: z.string(),
  scheduledAt: z.coerce.date(),
  status: z.string().optional(),
  feedback: z.string().optional().nullable()
}).strict();

export const InterviewUpdateInputSchema: z.ZodType<Prisma.InterviewUpdateInput> = z.object({
  scheduledAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  feedback: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  application: z.lazy(() => ApplicationUpdateOneRequiredWithoutInterviewsNestedInputSchema).optional()
}).strict();

export const InterviewUncheckedUpdateInputSchema: z.ZodType<Prisma.InterviewUncheckedUpdateInput> = z.object({
  applicationId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  scheduledAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  feedback: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const InterviewCreateManyInputSchema: z.ZodType<Prisma.InterviewCreateManyInput> = z.object({
  id: z.string().optional(),
  applicationId: z.string(),
  scheduledAt: z.coerce.date(),
  status: z.string().optional(),
  feedback: z.string().optional().nullable()
}).strict();

export const InterviewUpdateManyMutationInputSchema: z.ZodType<Prisma.InterviewUpdateManyMutationInput> = z.object({
  scheduledAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  feedback: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const InterviewUncheckedUpdateManyInputSchema: z.ZodType<Prisma.InterviewUncheckedUpdateManyInput> = z.object({
  applicationId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  scheduledAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  feedback: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const SelfAssessmentCreateInputSchema: z.ZodType<Prisma.SelfAssessmentCreateInput> = z.object({
  id: z.string().optional(),
  selfAssessmentResponse: z.union([ z.lazy(() => SelfAssessmentResponseListCreateEnvelopeInputSchema),z.lazy(() => SelfAssessmentResponseCreateInputSchema),z.lazy(() => SelfAssessmentResponseCreateInputSchema).array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutSelfAssessmentInputSchema)
}).strict();

export const SelfAssessmentUncheckedCreateInputSchema: z.ZodType<Prisma.SelfAssessmentUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  selfAssessmentResponse: z.union([ z.lazy(() => SelfAssessmentResponseListCreateEnvelopeInputSchema),z.lazy(() => SelfAssessmentResponseCreateInputSchema),z.lazy(() => SelfAssessmentResponseCreateInputSchema).array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const SelfAssessmentUpdateInputSchema: z.ZodType<Prisma.SelfAssessmentUpdateInput> = z.object({
  selfAssessmentResponse: z.union([ z.lazy(() => SelfAssessmentResponseListUpdateEnvelopeInputSchema),z.lazy(() => SelfAssessmentResponseCreateInputSchema),z.lazy(() => SelfAssessmentResponseCreateInputSchema).array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutSelfAssessmentNestedInputSchema).optional()
}).strict();

export const SelfAssessmentUncheckedUpdateInputSchema: z.ZodType<Prisma.SelfAssessmentUncheckedUpdateInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  selfAssessmentResponse: z.union([ z.lazy(() => SelfAssessmentResponseListUpdateEnvelopeInputSchema),z.lazy(() => SelfAssessmentResponseCreateInputSchema),z.lazy(() => SelfAssessmentResponseCreateInputSchema).array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SelfAssessmentCreateManyInputSchema: z.ZodType<Prisma.SelfAssessmentCreateManyInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  selfAssessmentResponse: z.union([ z.lazy(() => SelfAssessmentResponseListCreateEnvelopeInputSchema),z.lazy(() => SelfAssessmentResponseCreateInputSchema),z.lazy(() => SelfAssessmentResponseCreateInputSchema).array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const SelfAssessmentUpdateManyMutationInputSchema: z.ZodType<Prisma.SelfAssessmentUpdateManyMutationInput> = z.object({
  selfAssessmentResponse: z.union([ z.lazy(() => SelfAssessmentResponseListUpdateEnvelopeInputSchema),z.lazy(() => SelfAssessmentResponseCreateInputSchema),z.lazy(() => SelfAssessmentResponseCreateInputSchema).array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SelfAssessmentUncheckedUpdateManyInputSchema: z.ZodType<Prisma.SelfAssessmentUncheckedUpdateManyInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  selfAssessmentResponse: z.union([ z.lazy(() => SelfAssessmentResponseListUpdateEnvelopeInputSchema),z.lazy(() => SelfAssessmentResponseCreateInputSchema),z.lazy(() => SelfAssessmentResponseCreateInputSchema).array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const QuizCreateInputSchema: z.ZodType<Prisma.QuizCreateInput> = z.object({
  id: z.string().optional(),
  quizId: z.string(),
  quizTitle: z.string(),
  quizTopic: z.string(),
  totalQuestions: z.number().int(),
  maxAttempts: z.number().int(),
  allotedTime: z.number().int().optional().nullable(),
  enabled: z.boolean().optional(),
  questions: z.union([ z.lazy(() => QuizQuestionListCreateEnvelopeInputSchema),z.lazy(() => QuizQuestionCreateInputSchema),z.lazy(() => QuizQuestionCreateInputSchema).array() ]).optional(),
  createdAt: z.coerce.date().optional()
}).strict();

export const QuizUncheckedCreateInputSchema: z.ZodType<Prisma.QuizUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  quizId: z.string(),
  quizTitle: z.string(),
  quizTopic: z.string(),
  totalQuestions: z.number().int(),
  maxAttempts: z.number().int(),
  allotedTime: z.number().int().optional().nullable(),
  enabled: z.boolean().optional(),
  questions: z.union([ z.lazy(() => QuizQuestionListCreateEnvelopeInputSchema),z.lazy(() => QuizQuestionCreateInputSchema),z.lazy(() => QuizQuestionCreateInputSchema).array() ]).optional(),
  createdAt: z.coerce.date().optional()
}).strict();

export const QuizUpdateInputSchema: z.ZodType<Prisma.QuizUpdateInput> = z.object({
  quizId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quizTitle: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quizTopic: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  totalQuestions: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  maxAttempts: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  allotedTime: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  enabled: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  questions: z.union([ z.lazy(() => QuizQuestionListUpdateEnvelopeInputSchema),z.lazy(() => QuizQuestionCreateInputSchema),z.lazy(() => QuizQuestionCreateInputSchema).array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const QuizUncheckedUpdateInputSchema: z.ZodType<Prisma.QuizUncheckedUpdateInput> = z.object({
  quizId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quizTitle: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quizTopic: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  totalQuestions: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  maxAttempts: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  allotedTime: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  enabled: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  questions: z.union([ z.lazy(() => QuizQuestionListUpdateEnvelopeInputSchema),z.lazy(() => QuizQuestionCreateInputSchema),z.lazy(() => QuizQuestionCreateInputSchema).array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const QuizCreateManyInputSchema: z.ZodType<Prisma.QuizCreateManyInput> = z.object({
  id: z.string().optional(),
  quizId: z.string(),
  quizTitle: z.string(),
  quizTopic: z.string(),
  totalQuestions: z.number().int(),
  maxAttempts: z.number().int(),
  allotedTime: z.number().int().optional().nullable(),
  enabled: z.boolean().optional(),
  questions: z.union([ z.lazy(() => QuizQuestionListCreateEnvelopeInputSchema),z.lazy(() => QuizQuestionCreateInputSchema),z.lazy(() => QuizQuestionCreateInputSchema).array() ]).optional(),
  createdAt: z.coerce.date().optional()
}).strict();

export const QuizUpdateManyMutationInputSchema: z.ZodType<Prisma.QuizUpdateManyMutationInput> = z.object({
  quizId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quizTitle: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quizTopic: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  totalQuestions: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  maxAttempts: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  allotedTime: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  enabled: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  questions: z.union([ z.lazy(() => QuizQuestionListUpdateEnvelopeInputSchema),z.lazy(() => QuizQuestionCreateInputSchema),z.lazy(() => QuizQuestionCreateInputSchema).array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const QuizUncheckedUpdateManyInputSchema: z.ZodType<Prisma.QuizUncheckedUpdateManyInput> = z.object({
  quizId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quizTitle: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quizTopic: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  totalQuestions: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  maxAttempts: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  allotedTime: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  enabled: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  questions: z.union([ z.lazy(() => QuizQuestionListUpdateEnvelopeInputSchema),z.lazy(() => QuizQuestionCreateInputSchema),z.lazy(() => QuizQuestionCreateInputSchema).array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const QuizResultCreateInputSchema: z.ZodType<Prisma.QuizResultCreateInput> = z.object({
  id: z.string().optional(),
  quizId: z.string(),
  quizTitle: z.string(),
  userId: z.string(),
  score: z.number().int(),
  percent: z.number(),
  grade: z.string(),
  createdAt: z.coerce.date().optional(),
  attempt: z.number().int(),
  quizAnswers: z.union([ z.lazy(() => QuizAnswerListCreateEnvelopeInputSchema),z.lazy(() => QuizAnswerCreateInputSchema),z.lazy(() => QuizAnswerCreateInputSchema).array() ]).optional(),
}).strict();

export const QuizResultUncheckedCreateInputSchema: z.ZodType<Prisma.QuizResultUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  quizId: z.string(),
  quizTitle: z.string(),
  userId: z.string(),
  score: z.number().int(),
  percent: z.number(),
  grade: z.string(),
  createdAt: z.coerce.date().optional(),
  attempt: z.number().int(),
  quizAnswers: z.union([ z.lazy(() => QuizAnswerListCreateEnvelopeInputSchema),z.lazy(() => QuizAnswerCreateInputSchema),z.lazy(() => QuizAnswerCreateInputSchema).array() ]).optional(),
}).strict();

export const QuizResultUpdateInputSchema: z.ZodType<Prisma.QuizResultUpdateInput> = z.object({
  quizId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quizTitle: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  score: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  percent: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  grade: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  attempt: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  quizAnswers: z.union([ z.lazy(() => QuizAnswerListUpdateEnvelopeInputSchema),z.lazy(() => QuizAnswerCreateInputSchema),z.lazy(() => QuizAnswerCreateInputSchema).array() ]).optional(),
}).strict();

export const QuizResultUncheckedUpdateInputSchema: z.ZodType<Prisma.QuizResultUncheckedUpdateInput> = z.object({
  quizId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quizTitle: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  score: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  percent: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  grade: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  attempt: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  quizAnswers: z.union([ z.lazy(() => QuizAnswerListUpdateEnvelopeInputSchema),z.lazy(() => QuizAnswerCreateInputSchema),z.lazy(() => QuizAnswerCreateInputSchema).array() ]).optional(),
}).strict();

export const QuizResultCreateManyInputSchema: z.ZodType<Prisma.QuizResultCreateManyInput> = z.object({
  id: z.string().optional(),
  quizId: z.string(),
  quizTitle: z.string(),
  userId: z.string(),
  score: z.number().int(),
  percent: z.number(),
  grade: z.string(),
  createdAt: z.coerce.date().optional(),
  attempt: z.number().int(),
  quizAnswers: z.union([ z.lazy(() => QuizAnswerListCreateEnvelopeInputSchema),z.lazy(() => QuizAnswerCreateInputSchema),z.lazy(() => QuizAnswerCreateInputSchema).array() ]).optional(),
}).strict();

export const QuizResultUpdateManyMutationInputSchema: z.ZodType<Prisma.QuizResultUpdateManyMutationInput> = z.object({
  quizId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quizTitle: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  score: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  percent: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  grade: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  attempt: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  quizAnswers: z.union([ z.lazy(() => QuizAnswerListUpdateEnvelopeInputSchema),z.lazy(() => QuizAnswerCreateInputSchema),z.lazy(() => QuizAnswerCreateInputSchema).array() ]).optional(),
}).strict();

export const QuizResultUncheckedUpdateManyInputSchema: z.ZodType<Prisma.QuizResultUncheckedUpdateManyInput> = z.object({
  quizId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quizTitle: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  score: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  percent: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  grade: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  attempt: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  quizAnswers: z.union([ z.lazy(() => QuizAnswerListUpdateEnvelopeInputSchema),z.lazy(() => QuizAnswerCreateInputSchema),z.lazy(() => QuizAnswerCreateInputSchema).array() ]).optional(),
}).strict();

export const ForumThreadCreateInputSchema: z.ZodType<Prisma.ForumThreadCreateInput> = z.object({
  id: z.string().optional(),
  slug: z.string(),
  title: z.string(),
  content: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  author: z.lazy(() => UserCreateNestedOneWithoutThreadsInputSchema),
  posts: z.lazy(() => ForumPostCreateNestedManyWithoutThreadInputSchema).optional()
}).strict();

export const ForumThreadUncheckedCreateInputSchema: z.ZodType<Prisma.ForumThreadUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  slug: z.string(),
  title: z.string(),
  content: z.string(),
  authorId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  posts: z.lazy(() => ForumPostUncheckedCreateNestedManyWithoutThreadInputSchema).optional()
}).strict();

export const ForumThreadUpdateInputSchema: z.ZodType<Prisma.ForumThreadUpdateInput> = z.object({
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  author: z.lazy(() => UserUpdateOneRequiredWithoutThreadsNestedInputSchema).optional(),
  posts: z.lazy(() => ForumPostUpdateManyWithoutThreadNestedInputSchema).optional()
}).strict();

export const ForumThreadUncheckedUpdateInputSchema: z.ZodType<Prisma.ForumThreadUncheckedUpdateInput> = z.object({
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  authorId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  posts: z.lazy(() => ForumPostUncheckedUpdateManyWithoutThreadNestedInputSchema).optional()
}).strict();

export const ForumThreadCreateManyInputSchema: z.ZodType<Prisma.ForumThreadCreateManyInput> = z.object({
  id: z.string().optional(),
  slug: z.string(),
  title: z.string(),
  content: z.string(),
  authorId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const ForumThreadUpdateManyMutationInputSchema: z.ZodType<Prisma.ForumThreadUpdateManyMutationInput> = z.object({
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ForumThreadUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ForumThreadUncheckedUpdateManyInput> = z.object({
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  authorId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ForumPostCreateInputSchema: z.ZodType<Prisma.ForumPostCreateInput> = z.object({
  id: z.string().optional(),
  content: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  author: z.lazy(() => UserCreateNestedOneWithoutPostsInputSchema),
  thread: z.lazy(() => ForumThreadCreateNestedOneWithoutPostsInputSchema),
  comments: z.lazy(() => ForumCommentCreateNestedManyWithoutPostInputSchema).optional()
}).strict();

export const ForumPostUncheckedCreateInputSchema: z.ZodType<Prisma.ForumPostUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  content: z.string(),
  authorId: z.string(),
  threadId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  comments: z.lazy(() => ForumCommentUncheckedCreateNestedManyWithoutPostInputSchema).optional()
}).strict();

export const ForumPostUpdateInputSchema: z.ZodType<Prisma.ForumPostUpdateInput> = z.object({
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  author: z.lazy(() => UserUpdateOneRequiredWithoutPostsNestedInputSchema).optional(),
  thread: z.lazy(() => ForumThreadUpdateOneRequiredWithoutPostsNestedInputSchema).optional(),
  comments: z.lazy(() => ForumCommentUpdateManyWithoutPostNestedInputSchema).optional()
}).strict();

export const ForumPostUncheckedUpdateInputSchema: z.ZodType<Prisma.ForumPostUncheckedUpdateInput> = z.object({
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  authorId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  threadId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  comments: z.lazy(() => ForumCommentUncheckedUpdateManyWithoutPostNestedInputSchema).optional()
}).strict();

export const ForumPostCreateManyInputSchema: z.ZodType<Prisma.ForumPostCreateManyInput> = z.object({
  id: z.string().optional(),
  content: z.string(),
  authorId: z.string(),
  threadId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const ForumPostUpdateManyMutationInputSchema: z.ZodType<Prisma.ForumPostUpdateManyMutationInput> = z.object({
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ForumPostUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ForumPostUncheckedUpdateManyInput> = z.object({
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  authorId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  threadId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ForumCommentCreateInputSchema: z.ZodType<Prisma.ForumCommentCreateInput> = z.object({
  id: z.string().optional(),
  content: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  author: z.lazy(() => UserCreateNestedOneWithoutCommentsInputSchema),
  post: z.lazy(() => ForumPostCreateNestedOneWithoutCommentsInputSchema)
}).strict();

export const ForumCommentUncheckedCreateInputSchema: z.ZodType<Prisma.ForumCommentUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  content: z.string(),
  authorId: z.string(),
  postId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const ForumCommentUpdateInputSchema: z.ZodType<Prisma.ForumCommentUpdateInput> = z.object({
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  author: z.lazy(() => UserUpdateOneRequiredWithoutCommentsNestedInputSchema).optional(),
  post: z.lazy(() => ForumPostUpdateOneRequiredWithoutCommentsNestedInputSchema).optional()
}).strict();

export const ForumCommentUncheckedUpdateInputSchema: z.ZodType<Prisma.ForumCommentUncheckedUpdateInput> = z.object({
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  authorId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  postId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ForumCommentCreateManyInputSchema: z.ZodType<Prisma.ForumCommentCreateManyInput> = z.object({
  id: z.string().optional(),
  content: z.string(),
  authorId: z.string(),
  postId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const ForumCommentUpdateManyMutationInputSchema: z.ZodType<Prisma.ForumCommentUpdateManyMutationInput> = z.object({
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ForumCommentUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ForumCommentUncheckedUpdateManyInput> = z.object({
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  authorId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  postId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();

export const DateTimeNullableFilterSchema: z.ZodType<Prisma.DateTimeNullableFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const AccountListRelationFilterSchema: z.ZodType<Prisma.AccountListRelationFilter> = z.object({
  every: z.lazy(() => AccountWhereInputSchema).optional(),
  some: z.lazy(() => AccountWhereInputSchema).optional(),
  none: z.lazy(() => AccountWhereInputSchema).optional()
}).strict();

export const SessionListRelationFilterSchema: z.ZodType<Prisma.SessionListRelationFilter> = z.object({
  every: z.lazy(() => SessionWhereInputSchema).optional(),
  some: z.lazy(() => SessionWhereInputSchema).optional(),
  none: z.lazy(() => SessionWhereInputSchema).optional()
}).strict();

export const JobSeekerNullableScalarRelationFilterSchema: z.ZodType<Prisma.JobSeekerNullableScalarRelationFilter> = z.object({
  is: z.lazy(() => JobSeekerWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => JobSeekerWhereInputSchema).optional().nullable()
}).strict();

export const HiringCompanyNullableScalarRelationFilterSchema: z.ZodType<Prisma.HiringCompanyNullableScalarRelationFilter> = z.object({
  is: z.lazy(() => HiringCompanyWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => HiringCompanyWhereInputSchema).optional().nullable()
}).strict();

export const SelfAssessmentNullableScalarRelationFilterSchema: z.ZodType<Prisma.SelfAssessmentNullableScalarRelationFilter> = z.object({
  is: z.lazy(() => SelfAssessmentWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => SelfAssessmentWhereInputSchema).optional().nullable()
}).strict();

export const ForumThreadListRelationFilterSchema: z.ZodType<Prisma.ForumThreadListRelationFilter> = z.object({
  every: z.lazy(() => ForumThreadWhereInputSchema).optional(),
  some: z.lazy(() => ForumThreadWhereInputSchema).optional(),
  none: z.lazy(() => ForumThreadWhereInputSchema).optional()
}).strict();

export const ForumPostListRelationFilterSchema: z.ZodType<Prisma.ForumPostListRelationFilter> = z.object({
  every: z.lazy(() => ForumPostWhereInputSchema).optional(),
  some: z.lazy(() => ForumPostWhereInputSchema).optional(),
  none: z.lazy(() => ForumPostWhereInputSchema).optional()
}).strict();

export const ForumCommentListRelationFilterSchema: z.ZodType<Prisma.ForumCommentListRelationFilter> = z.object({
  every: z.lazy(() => ForumCommentWhereInputSchema).optional(),
  some: z.lazy(() => ForumCommentWhereInputSchema).optional(),
  none: z.lazy(() => ForumCommentWhereInputSchema).optional()
}).strict();

export const AccountOrderByRelationAggregateInputSchema: z.ZodType<Prisma.AccountOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SessionOrderByRelationAggregateInputSchema: z.ZodType<Prisma.SessionOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ForumThreadOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ForumThreadOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ForumPostOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ForumPostOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ForumCommentOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ForumCommentOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  clerkId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  jobSeekerId: z.lazy(() => SortOrderSchema).optional(),
  hiringCompanyId: z.lazy(() => SortOrderSchema).optional(),
  selfAssessmentId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  clerkId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  jobSeekerId: z.lazy(() => SortOrderSchema).optional(),
  hiringCompanyId: z.lazy(() => SortOrderSchema).optional(),
  selfAssessmentId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  clerkId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  jobSeekerId: z.lazy(() => SortOrderSchema).optional(),
  hiringCompanyId: z.lazy(() => SortOrderSchema).optional(),
  selfAssessmentId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  isSet: z.boolean().optional()
}).strict();

export const DateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  isSet: z.boolean().optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const PersonalInfoNullableCompositeFilterSchema: z.ZodType<Prisma.PersonalInfoNullableCompositeFilter> = z.object({
  equals: z.lazy(() => PersonalInfoObjectEqualityInputSchema).optional().nullable(),
  is: z.lazy(() => PersonalInfoWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => PersonalInfoWhereInputSchema).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();

export const PersonalInfoObjectEqualityInputSchema: z.ZodType<Prisma.PersonalInfoObjectEqualityInput> = z.object({
  fullName: z.string(),
  image: z.string().optional().nullable(),
  email: z.string(),
  dob: z.coerce.date(),
  mobile: z.string().optional().nullable(),
  relative: z.string().optional().nullable(),
  address: z.string(),
  city: z.string(),
  state: z.string(),
  postalCode: z.string().optional().nullable(),
  country: z.string(),
  linkedIn: z.string().optional().nullable(),
  github: z.string().optional().nullable(),
  twitter: z.string().optional().nullable(),
  facebook: z.string().optional().nullable(),
  hobbies: z.string().optional().nullable(),
  areaImprovementCurrent: z.string().optional().nullable(),
  areaImprovementFuture: z.string().optional().nullable()
}).strict();

export const SkillCompositeListFilterSchema: z.ZodType<Prisma.SkillCompositeListFilter> = z.object({
  equals: z.lazy(() => SkillObjectEqualityInputSchema).array().optional(),
  every: z.lazy(() => SkillWhereInputSchema).optional(),
  some: z.lazy(() => SkillWhereInputSchema).optional(),
  none: z.lazy(() => SkillWhereInputSchema).optional(),
  isEmpty: z.boolean().optional(),
  isSet: z.boolean().optional()
}).strict();

export const SkillObjectEqualityInputSchema: z.ZodType<Prisma.SkillObjectEqualityInput> = z.object({
  name: z.string(),
  level: z.lazy(() => LevelSchema),
  experienceYears: z.number()
}).strict();

export const CertificateListRelationFilterSchema: z.ZodType<Prisma.CertificateListRelationFilter> = z.object({
  every: z.lazy(() => CertificateWhereInputSchema).optional(),
  some: z.lazy(() => CertificateWhereInputSchema).optional(),
  none: z.lazy(() => CertificateWhereInputSchema).optional()
}).strict();

export const EducationNullableScalarRelationFilterSchema: z.ZodType<Prisma.EducationNullableScalarRelationFilter> = z.object({
  is: z.lazy(() => EducationWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => EducationWhereInputSchema).optional().nullable()
}).strict();

export const ExperienceNullableScalarRelationFilterSchema: z.ZodType<Prisma.ExperienceNullableScalarRelationFilter> = z.object({
  is: z.lazy(() => ExperienceWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => ExperienceWhereInputSchema).optional().nullable()
}).strict();

export const PersonalInfoOrderByInputSchema: z.ZodType<Prisma.PersonalInfoOrderByInput> = z.object({
  fullName: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  dob: z.lazy(() => SortOrderSchema).optional(),
  mobile: z.lazy(() => SortOrderSchema).optional(),
  relative: z.lazy(() => SortOrderSchema).optional(),
  address: z.lazy(() => SortOrderSchema).optional(),
  city: z.lazy(() => SortOrderSchema).optional(),
  state: z.lazy(() => SortOrderSchema).optional(),
  postalCode: z.lazy(() => SortOrderSchema).optional(),
  country: z.lazy(() => SortOrderSchema).optional(),
  linkedIn: z.lazy(() => SortOrderSchema).optional(),
  github: z.lazy(() => SortOrderSchema).optional(),
  twitter: z.lazy(() => SortOrderSchema).optional(),
  facebook: z.lazy(() => SortOrderSchema).optional(),
  hobbies: z.lazy(() => SortOrderSchema).optional(),
  areaImprovementCurrent: z.lazy(() => SortOrderSchema).optional(),
  areaImprovementFuture: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SkillOrderByCompositeAggregateInputSchema: z.ZodType<Prisma.SkillOrderByCompositeAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CertificateOrderByRelationAggregateInputSchema: z.ZodType<Prisma.CertificateOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProfileCountOrderByAggregateInputSchema: z.ZodType<Prisma.ProfileCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProfileMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ProfileMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProfileMinOrderByAggregateInputSchema: z.ZodType<Prisma.ProfileMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const ProfileScalarRelationFilterSchema: z.ZodType<Prisma.ProfileScalarRelationFilter> = z.object({
  is: z.lazy(() => ProfileWhereInputSchema).optional(),
  isNot: z.lazy(() => ProfileWhereInputSchema).optional()
}).strict();

export const CertificateCountOrderByAggregateInputSchema: z.ZodType<Prisma.CertificateCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  profileId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  userName: z.lazy(() => SortOrderSchema).optional(),
  course: z.lazy(() => SortOrderSchema).optional(),
  attempt: z.lazy(() => SortOrderSchema).optional(),
  key: z.lazy(() => SortOrderSchema).optional(),
  issuedDate: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CertificateAvgOrderByAggregateInputSchema: z.ZodType<Prisma.CertificateAvgOrderByAggregateInput> = z.object({
  attempt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CertificateMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CertificateMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  profileId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  userName: z.lazy(() => SortOrderSchema).optional(),
  course: z.lazy(() => SortOrderSchema).optional(),
  attempt: z.lazy(() => SortOrderSchema).optional(),
  key: z.lazy(() => SortOrderSchema).optional(),
  issuedDate: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CertificateMinOrderByAggregateInputSchema: z.ZodType<Prisma.CertificateMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  profileId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  userName: z.lazy(() => SortOrderSchema).optional(),
  course: z.lazy(() => SortOrderSchema).optional(),
  attempt: z.lazy(() => SortOrderSchema).optional(),
  key: z.lazy(() => SortOrderSchema).optional(),
  issuedDate: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CertificateSumOrderByAggregateInputSchema: z.ZodType<Prisma.CertificateSumOrderByAggregateInput> = z.object({
  attempt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const IntNullableFilterSchema: z.ZodType<Prisma.IntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();

export const UserScalarRelationFilterSchema: z.ZodType<Prisma.UserScalarRelationFilter> = z.object({
  is: z.lazy(() => UserWhereInputSchema).optional(),
  isNot: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const AccountProviderProviderAccountIdCompoundUniqueInputSchema: z.ZodType<Prisma.AccountProviderProviderAccountIdCompoundUniqueInput> = z.object({
  provider: z.string(),
  providerAccountId: z.string()
}).strict();

export const AccountCountOrderByAggregateInputSchema: z.ZodType<Prisma.AccountCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  refresh_token: z.lazy(() => SortOrderSchema).optional(),
  access_token: z.lazy(() => SortOrderSchema).optional(),
  expires_at: z.lazy(() => SortOrderSchema).optional(),
  token_type: z.lazy(() => SortOrderSchema).optional(),
  scope: z.lazy(() => SortOrderSchema).optional(),
  id_token: z.lazy(() => SortOrderSchema).optional(),
  session_state: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AccountAvgOrderByAggregateInputSchema: z.ZodType<Prisma.AccountAvgOrderByAggregateInput> = z.object({
  expires_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AccountMaxOrderByAggregateInputSchema: z.ZodType<Prisma.AccountMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  refresh_token: z.lazy(() => SortOrderSchema).optional(),
  access_token: z.lazy(() => SortOrderSchema).optional(),
  expires_at: z.lazy(() => SortOrderSchema).optional(),
  token_type: z.lazy(() => SortOrderSchema).optional(),
  scope: z.lazy(() => SortOrderSchema).optional(),
  id_token: z.lazy(() => SortOrderSchema).optional(),
  session_state: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AccountMinOrderByAggregateInputSchema: z.ZodType<Prisma.AccountMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  refresh_token: z.lazy(() => SortOrderSchema).optional(),
  access_token: z.lazy(() => SortOrderSchema).optional(),
  expires_at: z.lazy(() => SortOrderSchema).optional(),
  token_type: z.lazy(() => SortOrderSchema).optional(),
  scope: z.lazy(() => SortOrderSchema).optional(),
  id_token: z.lazy(() => SortOrderSchema).optional(),
  session_state: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AccountSumOrderByAggregateInputSchema: z.ZodType<Prisma.AccountSumOrderByAggregateInput> = z.object({
  expires_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.IntNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  isSet: z.boolean().optional()
}).strict();

export const SessionCountOrderByAggregateInputSchema: z.ZodType<Prisma.SessionCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sessionToken: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SessionMaxOrderByAggregateInputSchema: z.ZodType<Prisma.SessionMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sessionToken: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SessionMinOrderByAggregateInputSchema: z.ZodType<Prisma.SessionMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sessionToken: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VerificationTokenIdentifierTokenCompoundUniqueInputSchema: z.ZodType<Prisma.VerificationTokenIdentifierTokenCompoundUniqueInput> = z.object({
  identifier: z.string(),
  token: z.string()
}).strict();

export const VerificationTokenCountOrderByAggregateInputSchema: z.ZodType<Prisma.VerificationTokenCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  identifier: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VerificationTokenMaxOrderByAggregateInputSchema: z.ZodType<Prisma.VerificationTokenMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  identifier: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VerificationTokenMinOrderByAggregateInputSchema: z.ZodType<Prisma.VerificationTokenMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  identifier: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringNullableListFilterSchema: z.ZodType<Prisma.StringNullableListFilter> = z.object({
  equals: z.string().array().optional().nullable(),
  has: z.string().optional().nullable(),
  hasEvery: z.string().array().optional(),
  hasSome: z.string().array().optional(),
  isEmpty: z.boolean().optional()
}).strict();

export const CertificationListRelationFilterSchema: z.ZodType<Prisma.CertificationListRelationFilter> = z.object({
  every: z.lazy(() => CertificationWhereInputSchema).optional(),
  some: z.lazy(() => CertificationWhereInputSchema).optional(),
  none: z.lazy(() => CertificationWhereInputSchema).optional()
}).strict();

export const ApplicationListRelationFilterSchema: z.ZodType<Prisma.ApplicationListRelationFilter> = z.object({
  every: z.lazy(() => ApplicationWhereInputSchema).optional(),
  some: z.lazy(() => ApplicationWhereInputSchema).optional(),
  none: z.lazy(() => ApplicationWhereInputSchema).optional()
}).strict();

export const CertificationOrderByRelationAggregateInputSchema: z.ZodType<Prisma.CertificationOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ApplicationOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ApplicationOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const JobSeekerCountOrderByAggregateInputSchema: z.ZodType<Prisma.JobSeekerCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  firstName: z.lazy(() => SortOrderSchema).optional(),
  lastName: z.lazy(() => SortOrderSchema).optional(),
  dob: z.lazy(() => SortOrderSchema).optional(),
  gender: z.lazy(() => SortOrderSchema).optional(),
  contactNumber: z.lazy(() => SortOrderSchema).optional(),
  address: z.lazy(() => SortOrderSchema).optional(),
  city: z.lazy(() => SortOrderSchema).optional(),
  state: z.lazy(() => SortOrderSchema).optional(),
  postalCode: z.lazy(() => SortOrderSchema).optional(),
  country: z.lazy(() => SortOrderSchema).optional(),
  portfolioLinks: z.lazy(() => SortOrderSchema).optional(),
  preferredJobRoles: z.lazy(() => SortOrderSchema).optional(),
  resume: z.lazy(() => SortOrderSchema).optional(),
  profilePicture: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const JobSeekerMaxOrderByAggregateInputSchema: z.ZodType<Prisma.JobSeekerMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  firstName: z.lazy(() => SortOrderSchema).optional(),
  lastName: z.lazy(() => SortOrderSchema).optional(),
  dob: z.lazy(() => SortOrderSchema).optional(),
  gender: z.lazy(() => SortOrderSchema).optional(),
  contactNumber: z.lazy(() => SortOrderSchema).optional(),
  address: z.lazy(() => SortOrderSchema).optional(),
  city: z.lazy(() => SortOrderSchema).optional(),
  state: z.lazy(() => SortOrderSchema).optional(),
  postalCode: z.lazy(() => SortOrderSchema).optional(),
  country: z.lazy(() => SortOrderSchema).optional(),
  resume: z.lazy(() => SortOrderSchema).optional(),
  profilePicture: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const JobSeekerMinOrderByAggregateInputSchema: z.ZodType<Prisma.JobSeekerMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  firstName: z.lazy(() => SortOrderSchema).optional(),
  lastName: z.lazy(() => SortOrderSchema).optional(),
  dob: z.lazy(() => SortOrderSchema).optional(),
  gender: z.lazy(() => SortOrderSchema).optional(),
  contactNumber: z.lazy(() => SortOrderSchema).optional(),
  address: z.lazy(() => SortOrderSchema).optional(),
  city: z.lazy(() => SortOrderSchema).optional(),
  state: z.lazy(() => SortOrderSchema).optional(),
  postalCode: z.lazy(() => SortOrderSchema).optional(),
  country: z.lazy(() => SortOrderSchema).optional(),
  resume: z.lazy(() => SortOrderSchema).optional(),
  profilePicture: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EducationLevelCompositeListFilterSchema: z.ZodType<Prisma.EducationLevelCompositeListFilter> = z.object({
  equals: z.lazy(() => EducationLevelObjectEqualityInputSchema).array().optional(),
  every: z.lazy(() => EducationLevelWhereInputSchema).optional(),
  some: z.lazy(() => EducationLevelWhereInputSchema).optional(),
  none: z.lazy(() => EducationLevelWhereInputSchema).optional(),
  isEmpty: z.boolean().optional(),
  isSet: z.boolean().optional()
}).strict();

export const EducationLevelObjectEqualityInputSchema: z.ZodType<Prisma.EducationLevelObjectEqualityInput> = z.object({
  level: z.string(),
  board: z.string().optional().nullable(),
  institute: z.string().optional().nullable(),
  degree: z.string().optional().nullable(),
  subjects: z.string(),
  year: z.number().optional().nullable(),
  expectedYear: z.number().optional().nullable(),
  currentSemester: z.number().optional().nullable(),
  grade: z.string(),
  completed: z.boolean()
}).strict();

export const EducationLevelOrderByCompositeAggregateInputSchema: z.ZodType<Prisma.EducationLevelOrderByCompositeAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EducationCountOrderByAggregateInputSchema: z.ZodType<Prisma.EducationCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  profileId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EducationMaxOrderByAggregateInputSchema: z.ZodType<Prisma.EducationMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  profileId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EducationMinOrderByAggregateInputSchema: z.ZodType<Prisma.EducationMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  profileId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ExperienceDetailsCompositeListFilterSchema: z.ZodType<Prisma.ExperienceDetailsCompositeListFilter> = z.object({
  equals: z.lazy(() => ExperienceDetailsObjectEqualityInputSchema).array().optional(),
  every: z.lazy(() => ExperienceDetailsWhereInputSchema).optional(),
  some: z.lazy(() => ExperienceDetailsWhereInputSchema).optional(),
  none: z.lazy(() => ExperienceDetailsWhereInputSchema).optional(),
  isEmpty: z.boolean().optional(),
  isSet: z.boolean().optional()
}).strict();

export const ExperienceDetailsObjectEqualityInputSchema: z.ZodType<Prisma.ExperienceDetailsObjectEqualityInput> = z.object({
  company: z.string(),
  jobTitle: z.string(),
  employmentType: z.string(),
  locationType: z.string(),
  location: z.string().optional().nullable(),
  startDate: z.coerce.date(),
  current: z.boolean(),
  endDate: z.coerce.date().optional().nullable(),
  description: z.string().optional().nullable(),
  skills: z.string().array().optional()
}).strict();

export const ExperienceDetailsOrderByCompositeAggregateInputSchema: z.ZodType<Prisma.ExperienceDetailsOrderByCompositeAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ExperienceCountOrderByAggregateInputSchema: z.ZodType<Prisma.ExperienceCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  profileId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ExperienceMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ExperienceMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  profileId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ExperienceMinOrderByAggregateInputSchema: z.ZodType<Prisma.ExperienceMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  profileId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const JobSeekerScalarRelationFilterSchema: z.ZodType<Prisma.JobSeekerScalarRelationFilter> = z.object({
  is: z.lazy(() => JobSeekerWhereInputSchema).optional(),
  isNot: z.lazy(() => JobSeekerWhereInputSchema).optional()
}).strict();

export const CertificationCountOrderByAggregateInputSchema: z.ZodType<Prisma.CertificationCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  jobSeekerId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  issuedBy: z.lazy(() => SortOrderSchema).optional(),
  issuedDate: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CertificationMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CertificationMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  jobSeekerId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  issuedBy: z.lazy(() => SortOrderSchema).optional(),
  issuedDate: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CertificationMinOrderByAggregateInputSchema: z.ZodType<Prisma.CertificationMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  jobSeekerId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  issuedBy: z.lazy(() => SortOrderSchema).optional(),
  issuedDate: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const JobListRelationFilterSchema: z.ZodType<Prisma.JobListRelationFilter> = z.object({
  every: z.lazy(() => JobWhereInputSchema).optional(),
  some: z.lazy(() => JobWhereInputSchema).optional(),
  none: z.lazy(() => JobWhereInputSchema).optional()
}).strict();

export const JobOrderByRelationAggregateInputSchema: z.ZodType<Prisma.JobOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const HiringCompanyCountOrderByAggregateInputSchema: z.ZodType<Prisma.HiringCompanyCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  companyName: z.lazy(() => SortOrderSchema).optional(),
  industry: z.lazy(() => SortOrderSchema).optional(),
  companySize: z.lazy(() => SortOrderSchema).optional(),
  website: z.lazy(() => SortOrderSchema).optional(),
  socialLinks: z.lazy(() => SortOrderSchema).optional(),
  contactPerson: z.lazy(() => SortOrderSchema).optional(),
  contactEmail: z.lazy(() => SortOrderSchema).optional(),
  contactNumber: z.lazy(() => SortOrderSchema).optional(),
  address: z.lazy(() => SortOrderSchema).optional(),
  city: z.lazy(() => SortOrderSchema).optional(),
  state: z.lazy(() => SortOrderSchema).optional(),
  postalCode: z.lazy(() => SortOrderSchema).optional(),
  country: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const HiringCompanyMaxOrderByAggregateInputSchema: z.ZodType<Prisma.HiringCompanyMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  companyName: z.lazy(() => SortOrderSchema).optional(),
  industry: z.lazy(() => SortOrderSchema).optional(),
  companySize: z.lazy(() => SortOrderSchema).optional(),
  website: z.lazy(() => SortOrderSchema).optional(),
  contactPerson: z.lazy(() => SortOrderSchema).optional(),
  contactEmail: z.lazy(() => SortOrderSchema).optional(),
  contactNumber: z.lazy(() => SortOrderSchema).optional(),
  address: z.lazy(() => SortOrderSchema).optional(),
  city: z.lazy(() => SortOrderSchema).optional(),
  state: z.lazy(() => SortOrderSchema).optional(),
  postalCode: z.lazy(() => SortOrderSchema).optional(),
  country: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const HiringCompanyMinOrderByAggregateInputSchema: z.ZodType<Prisma.HiringCompanyMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  companyName: z.lazy(() => SortOrderSchema).optional(),
  industry: z.lazy(() => SortOrderSchema).optional(),
  companySize: z.lazy(() => SortOrderSchema).optional(),
  website: z.lazy(() => SortOrderSchema).optional(),
  contactPerson: z.lazy(() => SortOrderSchema).optional(),
  contactEmail: z.lazy(() => SortOrderSchema).optional(),
  contactNumber: z.lazy(() => SortOrderSchema).optional(),
  address: z.lazy(() => SortOrderSchema).optional(),
  city: z.lazy(() => SortOrderSchema).optional(),
  state: z.lazy(() => SortOrderSchema).optional(),
  postalCode: z.lazy(() => SortOrderSchema).optional(),
  country: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BoolFilterSchema: z.ZodType<Prisma.BoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
}).strict();

export const HiringCompanyScalarRelationFilterSchema: z.ZodType<Prisma.HiringCompanyScalarRelationFilter> = z.object({
  is: z.lazy(() => HiringCompanyWhereInputSchema).optional(),
  isNot: z.lazy(() => HiringCompanyWhereInputSchema).optional()
}).strict();

export const JobCountOrderByAggregateInputSchema: z.ZodType<Prisma.JobCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  hiringCompanyId: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  requirements: z.lazy(() => SortOrderSchema).optional(),
  salaryRange: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  employmentType: z.lazy(() => SortOrderSchema).optional(),
  benefits: z.lazy(() => SortOrderSchema).optional(),
  remote: z.lazy(() => SortOrderSchema).optional(),
  postedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const JobMaxOrderByAggregateInputSchema: z.ZodType<Prisma.JobMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  hiringCompanyId: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  salaryRange: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  employmentType: z.lazy(() => SortOrderSchema).optional(),
  remote: z.lazy(() => SortOrderSchema).optional(),
  postedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const JobMinOrderByAggregateInputSchema: z.ZodType<Prisma.JobMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  hiringCompanyId: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  salaryRange: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  employmentType: z.lazy(() => SortOrderSchema).optional(),
  remote: z.lazy(() => SortOrderSchema).optional(),
  postedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BoolWithAggregatesFilterSchema: z.ZodType<Prisma.BoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();

export const JobScalarRelationFilterSchema: z.ZodType<Prisma.JobScalarRelationFilter> = z.object({
  is: z.lazy(() => JobWhereInputSchema).optional(),
  isNot: z.lazy(() => JobWhereInputSchema).optional()
}).strict();

export const InterviewListRelationFilterSchema: z.ZodType<Prisma.InterviewListRelationFilter> = z.object({
  every: z.lazy(() => InterviewWhereInputSchema).optional(),
  some: z.lazy(() => InterviewWhereInputSchema).optional(),
  none: z.lazy(() => InterviewWhereInputSchema).optional()
}).strict();

export const InterviewOrderByRelationAggregateInputSchema: z.ZodType<Prisma.InterviewOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ApplicationCountOrderByAggregateInputSchema: z.ZodType<Prisma.ApplicationCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  jobSeekerId: z.lazy(() => SortOrderSchema).optional(),
  jobId: z.lazy(() => SortOrderSchema).optional(),
  appliedAt: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  resume: z.lazy(() => SortOrderSchema).optional(),
  coverLetter: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ApplicationMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ApplicationMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  jobSeekerId: z.lazy(() => SortOrderSchema).optional(),
  jobId: z.lazy(() => SortOrderSchema).optional(),
  appliedAt: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  resume: z.lazy(() => SortOrderSchema).optional(),
  coverLetter: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ApplicationMinOrderByAggregateInputSchema: z.ZodType<Prisma.ApplicationMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  jobSeekerId: z.lazy(() => SortOrderSchema).optional(),
  jobId: z.lazy(() => SortOrderSchema).optional(),
  appliedAt: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  resume: z.lazy(() => SortOrderSchema).optional(),
  coverLetter: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ApplicationScalarRelationFilterSchema: z.ZodType<Prisma.ApplicationScalarRelationFilter> = z.object({
  is: z.lazy(() => ApplicationWhereInputSchema).optional(),
  isNot: z.lazy(() => ApplicationWhereInputSchema).optional()
}).strict();

export const InterviewCountOrderByAggregateInputSchema: z.ZodType<Prisma.InterviewCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  applicationId: z.lazy(() => SortOrderSchema).optional(),
  scheduledAt: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  feedback: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InterviewMaxOrderByAggregateInputSchema: z.ZodType<Prisma.InterviewMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  applicationId: z.lazy(() => SortOrderSchema).optional(),
  scheduledAt: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  feedback: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InterviewMinOrderByAggregateInputSchema: z.ZodType<Prisma.InterviewMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  applicationId: z.lazy(() => SortOrderSchema).optional(),
  scheduledAt: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  feedback: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SelfAssessmentResponseCompositeListFilterSchema: z.ZodType<Prisma.SelfAssessmentResponseCompositeListFilter> = z.object({
  equals: z.lazy(() => SelfAssessmentResponseObjectEqualityInputSchema).array().optional(),
  every: z.lazy(() => SelfAssessmentResponseWhereInputSchema).optional(),
  some: z.lazy(() => SelfAssessmentResponseWhereInputSchema).optional(),
  none: z.lazy(() => SelfAssessmentResponseWhereInputSchema).optional(),
  isEmpty: z.boolean().optional(),
  isSet: z.boolean().optional()
}).strict();

export const SelfAssessmentResponseObjectEqualityInputSchema: z.ZodType<Prisma.SelfAssessmentResponseObjectEqualityInput> = z.object({
  question: z.string(),
  answer: z.string()
}).strict();

export const SelfAssessmentResponseOrderByCompositeAggregateInputSchema: z.ZodType<Prisma.SelfAssessmentResponseOrderByCompositeAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SelfAssessmentCountOrderByAggregateInputSchema: z.ZodType<Prisma.SelfAssessmentCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SelfAssessmentMaxOrderByAggregateInputSchema: z.ZodType<Prisma.SelfAssessmentMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SelfAssessmentMinOrderByAggregateInputSchema: z.ZodType<Prisma.SelfAssessmentMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const QuizQuestionCompositeListFilterSchema: z.ZodType<Prisma.QuizQuestionCompositeListFilter> = z.object({
  equals: z.lazy(() => QuizQuestionObjectEqualityInputSchema).array().optional(),
  every: z.lazy(() => QuizQuestionWhereInputSchema).optional(),
  some: z.lazy(() => QuizQuestionWhereInputSchema).optional(),
  none: z.lazy(() => QuizQuestionWhereInputSchema).optional(),
  isEmpty: z.boolean().optional(),
  isSet: z.boolean().optional()
}).strict();

export const QuizQuestionObjectEqualityInputSchema: z.ZodType<Prisma.QuizQuestionObjectEqualityInput> = z.object({
  questionId: z.number(),
  question: z.string(),
  difficulty: z.number(),
  options: z.lazy(() => QuizOptionObjectEqualityInputSchema).array().optional(),
  correctOptionId: z.number()
}).strict();

export const QuizQuestionOrderByCompositeAggregateInputSchema: z.ZodType<Prisma.QuizQuestionOrderByCompositeAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const QuizCountOrderByAggregateInputSchema: z.ZodType<Prisma.QuizCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  quizId: z.lazy(() => SortOrderSchema).optional(),
  quizTitle: z.lazy(() => SortOrderSchema).optional(),
  quizTopic: z.lazy(() => SortOrderSchema).optional(),
  totalQuestions: z.lazy(() => SortOrderSchema).optional(),
  maxAttempts: z.lazy(() => SortOrderSchema).optional(),
  allotedTime: z.lazy(() => SortOrderSchema).optional(),
  enabled: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const QuizAvgOrderByAggregateInputSchema: z.ZodType<Prisma.QuizAvgOrderByAggregateInput> = z.object({
  totalQuestions: z.lazy(() => SortOrderSchema).optional(),
  maxAttempts: z.lazy(() => SortOrderSchema).optional(),
  allotedTime: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const QuizMaxOrderByAggregateInputSchema: z.ZodType<Prisma.QuizMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  quizId: z.lazy(() => SortOrderSchema).optional(),
  quizTitle: z.lazy(() => SortOrderSchema).optional(),
  quizTopic: z.lazy(() => SortOrderSchema).optional(),
  totalQuestions: z.lazy(() => SortOrderSchema).optional(),
  maxAttempts: z.lazy(() => SortOrderSchema).optional(),
  allotedTime: z.lazy(() => SortOrderSchema).optional(),
  enabled: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const QuizMinOrderByAggregateInputSchema: z.ZodType<Prisma.QuizMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  quizId: z.lazy(() => SortOrderSchema).optional(),
  quizTitle: z.lazy(() => SortOrderSchema).optional(),
  quizTopic: z.lazy(() => SortOrderSchema).optional(),
  totalQuestions: z.lazy(() => SortOrderSchema).optional(),
  maxAttempts: z.lazy(() => SortOrderSchema).optional(),
  allotedTime: z.lazy(() => SortOrderSchema).optional(),
  enabled: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const QuizSumOrderByAggregateInputSchema: z.ZodType<Prisma.QuizSumOrderByAggregateInput> = z.object({
  totalQuestions: z.lazy(() => SortOrderSchema).optional(),
  maxAttempts: z.lazy(() => SortOrderSchema).optional(),
  allotedTime: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FloatFilterSchema: z.ZodType<Prisma.FloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const QuizAnswerCompositeListFilterSchema: z.ZodType<Prisma.QuizAnswerCompositeListFilter> = z.object({
  equals: z.lazy(() => QuizAnswerObjectEqualityInputSchema).array().optional(),
  every: z.lazy(() => QuizAnswerWhereInputSchema).optional(),
  some: z.lazy(() => QuizAnswerWhereInputSchema).optional(),
  none: z.lazy(() => QuizAnswerWhereInputSchema).optional(),
  isEmpty: z.boolean().optional(),
  isSet: z.boolean().optional()
}).strict();

export const QuizAnswerObjectEqualityInputSchema: z.ZodType<Prisma.QuizAnswerObjectEqualityInput> = z.object({
  questionId: z.number(),
  optionId: z.number()
}).strict();

export const QuizAnswerOrderByCompositeAggregateInputSchema: z.ZodType<Prisma.QuizAnswerOrderByCompositeAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const QuizResultQuizIdUserIdAttemptCompoundUniqueInputSchema: z.ZodType<Prisma.QuizResultQuizIdUserIdAttemptCompoundUniqueInput> = z.object({
  quizId: z.string(),
  userId: z.string(),
  attempt: z.number()
}).strict();

export const QuizResultCountOrderByAggregateInputSchema: z.ZodType<Prisma.QuizResultCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  quizId: z.lazy(() => SortOrderSchema).optional(),
  quizTitle: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  score: z.lazy(() => SortOrderSchema).optional(),
  percent: z.lazy(() => SortOrderSchema).optional(),
  grade: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  attempt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const QuizResultAvgOrderByAggregateInputSchema: z.ZodType<Prisma.QuizResultAvgOrderByAggregateInput> = z.object({
  score: z.lazy(() => SortOrderSchema).optional(),
  percent: z.lazy(() => SortOrderSchema).optional(),
  attempt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const QuizResultMaxOrderByAggregateInputSchema: z.ZodType<Prisma.QuizResultMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  quizId: z.lazy(() => SortOrderSchema).optional(),
  quizTitle: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  score: z.lazy(() => SortOrderSchema).optional(),
  percent: z.lazy(() => SortOrderSchema).optional(),
  grade: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  attempt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const QuizResultMinOrderByAggregateInputSchema: z.ZodType<Prisma.QuizResultMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  quizId: z.lazy(() => SortOrderSchema).optional(),
  quizTitle: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  score: z.lazy(() => SortOrderSchema).optional(),
  percent: z.lazy(() => SortOrderSchema).optional(),
  grade: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  attempt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const QuizResultSumOrderByAggregateInputSchema: z.ZodType<Prisma.QuizResultSumOrderByAggregateInput> = z.object({
  score: z.lazy(() => SortOrderSchema).optional(),
  percent: z.lazy(() => SortOrderSchema).optional(),
  attempt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FloatWithAggregatesFilterSchema: z.ZodType<Prisma.FloatWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatFilterSchema).optional()
}).strict();

export const ForumThreadCountOrderByAggregateInputSchema: z.ZodType<Prisma.ForumThreadCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  authorId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ForumThreadMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ForumThreadMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  authorId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ForumThreadMinOrderByAggregateInputSchema: z.ZodType<Prisma.ForumThreadMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  authorId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ForumThreadScalarRelationFilterSchema: z.ZodType<Prisma.ForumThreadScalarRelationFilter> = z.object({
  is: z.lazy(() => ForumThreadWhereInputSchema).optional(),
  isNot: z.lazy(() => ForumThreadWhereInputSchema).optional()
}).strict();

export const ForumPostCountOrderByAggregateInputSchema: z.ZodType<Prisma.ForumPostCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  authorId: z.lazy(() => SortOrderSchema).optional(),
  threadId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ForumPostMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ForumPostMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  authorId: z.lazy(() => SortOrderSchema).optional(),
  threadId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ForumPostMinOrderByAggregateInputSchema: z.ZodType<Prisma.ForumPostMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  authorId: z.lazy(() => SortOrderSchema).optional(),
  threadId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ForumPostScalarRelationFilterSchema: z.ZodType<Prisma.ForumPostScalarRelationFilter> = z.object({
  is: z.lazy(() => ForumPostWhereInputSchema).optional(),
  isNot: z.lazy(() => ForumPostWhereInputSchema).optional()
}).strict();

export const ForumCommentCountOrderByAggregateInputSchema: z.ZodType<Prisma.ForumCommentCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  authorId: z.lazy(() => SortOrderSchema).optional(),
  postId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ForumCommentMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ForumCommentMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  authorId: z.lazy(() => SortOrderSchema).optional(),
  postId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ForumCommentMinOrderByAggregateInputSchema: z.ZodType<Prisma.ForumCommentMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  authorId: z.lazy(() => SortOrderSchema).optional(),
  postId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AccountCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.AccountCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountCreateWithoutUserInputSchema).array(),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const SessionCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.SessionCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionCreateWithoutUserInputSchema).array(),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const JobSeekerCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.JobSeekerCreateNestedOneWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => JobSeekerCreateWithoutUserInputSchema),z.lazy(() => JobSeekerUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => JobSeekerCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => JobSeekerWhereUniqueInputSchema).optional()
}).strict();

export const HiringCompanyCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.HiringCompanyCreateNestedOneWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => HiringCompanyCreateWithoutUserInputSchema),z.lazy(() => HiringCompanyUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => HiringCompanyCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => HiringCompanyWhereUniqueInputSchema).optional()
}).strict();

export const SelfAssessmentCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.SelfAssessmentCreateNestedOneWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => SelfAssessmentCreateWithoutUserInputSchema),z.lazy(() => SelfAssessmentUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SelfAssessmentCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => SelfAssessmentWhereUniqueInputSchema).optional()
}).strict();

export const ForumThreadCreateNestedManyWithoutAuthorInputSchema: z.ZodType<Prisma.ForumThreadCreateNestedManyWithoutAuthorInput> = z.object({
  create: z.union([ z.lazy(() => ForumThreadCreateWithoutAuthorInputSchema),z.lazy(() => ForumThreadCreateWithoutAuthorInputSchema).array(),z.lazy(() => ForumThreadUncheckedCreateWithoutAuthorInputSchema),z.lazy(() => ForumThreadUncheckedCreateWithoutAuthorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ForumThreadCreateOrConnectWithoutAuthorInputSchema),z.lazy(() => ForumThreadCreateOrConnectWithoutAuthorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ForumThreadCreateManyAuthorInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ForumThreadWhereUniqueInputSchema),z.lazy(() => ForumThreadWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ForumPostCreateNestedManyWithoutAuthorInputSchema: z.ZodType<Prisma.ForumPostCreateNestedManyWithoutAuthorInput> = z.object({
  create: z.union([ z.lazy(() => ForumPostCreateWithoutAuthorInputSchema),z.lazy(() => ForumPostCreateWithoutAuthorInputSchema).array(),z.lazy(() => ForumPostUncheckedCreateWithoutAuthorInputSchema),z.lazy(() => ForumPostUncheckedCreateWithoutAuthorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ForumPostCreateOrConnectWithoutAuthorInputSchema),z.lazy(() => ForumPostCreateOrConnectWithoutAuthorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ForumPostCreateManyAuthorInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ForumPostWhereUniqueInputSchema),z.lazy(() => ForumPostWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ForumCommentCreateNestedManyWithoutAuthorInputSchema: z.ZodType<Prisma.ForumCommentCreateNestedManyWithoutAuthorInput> = z.object({
  create: z.union([ z.lazy(() => ForumCommentCreateWithoutAuthorInputSchema),z.lazy(() => ForumCommentCreateWithoutAuthorInputSchema).array(),z.lazy(() => ForumCommentUncheckedCreateWithoutAuthorInputSchema),z.lazy(() => ForumCommentUncheckedCreateWithoutAuthorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ForumCommentCreateOrConnectWithoutAuthorInputSchema),z.lazy(() => ForumCommentCreateOrConnectWithoutAuthorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ForumCommentCreateManyAuthorInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ForumCommentWhereUniqueInputSchema),z.lazy(() => ForumCommentWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const AccountUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountCreateWithoutUserInputSchema).array(),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const SessionUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionCreateWithoutUserInputSchema).array(),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const JobSeekerUncheckedCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.JobSeekerUncheckedCreateNestedOneWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => JobSeekerCreateWithoutUserInputSchema),z.lazy(() => JobSeekerUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => JobSeekerCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => JobSeekerWhereUniqueInputSchema).optional()
}).strict();

export const HiringCompanyUncheckedCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.HiringCompanyUncheckedCreateNestedOneWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => HiringCompanyCreateWithoutUserInputSchema),z.lazy(() => HiringCompanyUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => HiringCompanyCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => HiringCompanyWhereUniqueInputSchema).optional()
}).strict();

export const SelfAssessmentUncheckedCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.SelfAssessmentUncheckedCreateNestedOneWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => SelfAssessmentCreateWithoutUserInputSchema),z.lazy(() => SelfAssessmentUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SelfAssessmentCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => SelfAssessmentWhereUniqueInputSchema).optional()
}).strict();

export const ForumThreadUncheckedCreateNestedManyWithoutAuthorInputSchema: z.ZodType<Prisma.ForumThreadUncheckedCreateNestedManyWithoutAuthorInput> = z.object({
  create: z.union([ z.lazy(() => ForumThreadCreateWithoutAuthorInputSchema),z.lazy(() => ForumThreadCreateWithoutAuthorInputSchema).array(),z.lazy(() => ForumThreadUncheckedCreateWithoutAuthorInputSchema),z.lazy(() => ForumThreadUncheckedCreateWithoutAuthorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ForumThreadCreateOrConnectWithoutAuthorInputSchema),z.lazy(() => ForumThreadCreateOrConnectWithoutAuthorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ForumThreadCreateManyAuthorInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ForumThreadWhereUniqueInputSchema),z.lazy(() => ForumThreadWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ForumPostUncheckedCreateNestedManyWithoutAuthorInputSchema: z.ZodType<Prisma.ForumPostUncheckedCreateNestedManyWithoutAuthorInput> = z.object({
  create: z.union([ z.lazy(() => ForumPostCreateWithoutAuthorInputSchema),z.lazy(() => ForumPostCreateWithoutAuthorInputSchema).array(),z.lazy(() => ForumPostUncheckedCreateWithoutAuthorInputSchema),z.lazy(() => ForumPostUncheckedCreateWithoutAuthorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ForumPostCreateOrConnectWithoutAuthorInputSchema),z.lazy(() => ForumPostCreateOrConnectWithoutAuthorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ForumPostCreateManyAuthorInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ForumPostWhereUniqueInputSchema),z.lazy(() => ForumPostWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ForumCommentUncheckedCreateNestedManyWithoutAuthorInputSchema: z.ZodType<Prisma.ForumCommentUncheckedCreateNestedManyWithoutAuthorInput> = z.object({
  create: z.union([ z.lazy(() => ForumCommentCreateWithoutAuthorInputSchema),z.lazy(() => ForumCommentCreateWithoutAuthorInputSchema).array(),z.lazy(() => ForumCommentUncheckedCreateWithoutAuthorInputSchema),z.lazy(() => ForumCommentUncheckedCreateWithoutAuthorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ForumCommentCreateOrConnectWithoutAuthorInputSchema),z.lazy(() => ForumCommentCreateOrConnectWithoutAuthorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ForumCommentCreateManyAuthorInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ForumCommentWhereUniqueInputSchema),z.lazy(() => ForumCommentWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable(),
  unset: z.boolean().optional()
}).strict();

export const NullableDateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableDateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional().nullable(),
  unset: z.boolean().optional()
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const AccountUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.AccountUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountCreateWithoutUserInputSchema).array(),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AccountScalarWhereInputSchema),z.lazy(() => AccountScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const SessionUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.SessionUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionCreateWithoutUserInputSchema).array(),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SessionScalarWhereInputSchema),z.lazy(() => SessionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const JobSeekerUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.JobSeekerUpdateOneWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => JobSeekerCreateWithoutUserInputSchema),z.lazy(() => JobSeekerUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => JobSeekerCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => JobSeekerUpsertWithoutUserInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => JobSeekerWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => JobSeekerWhereInputSchema) ]).optional(),
  connect: z.lazy(() => JobSeekerWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => JobSeekerUpdateToOneWithWhereWithoutUserInputSchema),z.lazy(() => JobSeekerUpdateWithoutUserInputSchema),z.lazy(() => JobSeekerUncheckedUpdateWithoutUserInputSchema) ]).optional(),
}).strict();

export const HiringCompanyUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.HiringCompanyUpdateOneWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => HiringCompanyCreateWithoutUserInputSchema),z.lazy(() => HiringCompanyUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => HiringCompanyCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => HiringCompanyUpsertWithoutUserInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => HiringCompanyWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => HiringCompanyWhereInputSchema) ]).optional(),
  connect: z.lazy(() => HiringCompanyWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => HiringCompanyUpdateToOneWithWhereWithoutUserInputSchema),z.lazy(() => HiringCompanyUpdateWithoutUserInputSchema),z.lazy(() => HiringCompanyUncheckedUpdateWithoutUserInputSchema) ]).optional(),
}).strict();

export const SelfAssessmentUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.SelfAssessmentUpdateOneWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => SelfAssessmentCreateWithoutUserInputSchema),z.lazy(() => SelfAssessmentUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SelfAssessmentCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => SelfAssessmentUpsertWithoutUserInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => SelfAssessmentWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => SelfAssessmentWhereInputSchema) ]).optional(),
  connect: z.lazy(() => SelfAssessmentWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => SelfAssessmentUpdateToOneWithWhereWithoutUserInputSchema),z.lazy(() => SelfAssessmentUpdateWithoutUserInputSchema),z.lazy(() => SelfAssessmentUncheckedUpdateWithoutUserInputSchema) ]).optional(),
}).strict();

export const ForumThreadUpdateManyWithoutAuthorNestedInputSchema: z.ZodType<Prisma.ForumThreadUpdateManyWithoutAuthorNestedInput> = z.object({
  create: z.union([ z.lazy(() => ForumThreadCreateWithoutAuthorInputSchema),z.lazy(() => ForumThreadCreateWithoutAuthorInputSchema).array(),z.lazy(() => ForumThreadUncheckedCreateWithoutAuthorInputSchema),z.lazy(() => ForumThreadUncheckedCreateWithoutAuthorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ForumThreadCreateOrConnectWithoutAuthorInputSchema),z.lazy(() => ForumThreadCreateOrConnectWithoutAuthorInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ForumThreadUpsertWithWhereUniqueWithoutAuthorInputSchema),z.lazy(() => ForumThreadUpsertWithWhereUniqueWithoutAuthorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ForumThreadCreateManyAuthorInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ForumThreadWhereUniqueInputSchema),z.lazy(() => ForumThreadWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ForumThreadWhereUniqueInputSchema),z.lazy(() => ForumThreadWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ForumThreadWhereUniqueInputSchema),z.lazy(() => ForumThreadWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ForumThreadWhereUniqueInputSchema),z.lazy(() => ForumThreadWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ForumThreadUpdateWithWhereUniqueWithoutAuthorInputSchema),z.lazy(() => ForumThreadUpdateWithWhereUniqueWithoutAuthorInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ForumThreadUpdateManyWithWhereWithoutAuthorInputSchema),z.lazy(() => ForumThreadUpdateManyWithWhereWithoutAuthorInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ForumThreadScalarWhereInputSchema),z.lazy(() => ForumThreadScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ForumPostUpdateManyWithoutAuthorNestedInputSchema: z.ZodType<Prisma.ForumPostUpdateManyWithoutAuthorNestedInput> = z.object({
  create: z.union([ z.lazy(() => ForumPostCreateWithoutAuthorInputSchema),z.lazy(() => ForumPostCreateWithoutAuthorInputSchema).array(),z.lazy(() => ForumPostUncheckedCreateWithoutAuthorInputSchema),z.lazy(() => ForumPostUncheckedCreateWithoutAuthorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ForumPostCreateOrConnectWithoutAuthorInputSchema),z.lazy(() => ForumPostCreateOrConnectWithoutAuthorInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ForumPostUpsertWithWhereUniqueWithoutAuthorInputSchema),z.lazy(() => ForumPostUpsertWithWhereUniqueWithoutAuthorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ForumPostCreateManyAuthorInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ForumPostWhereUniqueInputSchema),z.lazy(() => ForumPostWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ForumPostWhereUniqueInputSchema),z.lazy(() => ForumPostWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ForumPostWhereUniqueInputSchema),z.lazy(() => ForumPostWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ForumPostWhereUniqueInputSchema),z.lazy(() => ForumPostWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ForumPostUpdateWithWhereUniqueWithoutAuthorInputSchema),z.lazy(() => ForumPostUpdateWithWhereUniqueWithoutAuthorInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ForumPostUpdateManyWithWhereWithoutAuthorInputSchema),z.lazy(() => ForumPostUpdateManyWithWhereWithoutAuthorInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ForumPostScalarWhereInputSchema),z.lazy(() => ForumPostScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ForumCommentUpdateManyWithoutAuthorNestedInputSchema: z.ZodType<Prisma.ForumCommentUpdateManyWithoutAuthorNestedInput> = z.object({
  create: z.union([ z.lazy(() => ForumCommentCreateWithoutAuthorInputSchema),z.lazy(() => ForumCommentCreateWithoutAuthorInputSchema).array(),z.lazy(() => ForumCommentUncheckedCreateWithoutAuthorInputSchema),z.lazy(() => ForumCommentUncheckedCreateWithoutAuthorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ForumCommentCreateOrConnectWithoutAuthorInputSchema),z.lazy(() => ForumCommentCreateOrConnectWithoutAuthorInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ForumCommentUpsertWithWhereUniqueWithoutAuthorInputSchema),z.lazy(() => ForumCommentUpsertWithWhereUniqueWithoutAuthorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ForumCommentCreateManyAuthorInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ForumCommentWhereUniqueInputSchema),z.lazy(() => ForumCommentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ForumCommentWhereUniqueInputSchema),z.lazy(() => ForumCommentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ForumCommentWhereUniqueInputSchema),z.lazy(() => ForumCommentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ForumCommentWhereUniqueInputSchema),z.lazy(() => ForumCommentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ForumCommentUpdateWithWhereUniqueWithoutAuthorInputSchema),z.lazy(() => ForumCommentUpdateWithWhereUniqueWithoutAuthorInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ForumCommentUpdateManyWithWhereWithoutAuthorInputSchema),z.lazy(() => ForumCommentUpdateManyWithWhereWithoutAuthorInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ForumCommentScalarWhereInputSchema),z.lazy(() => ForumCommentScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const AccountUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountCreateWithoutUserInputSchema).array(),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AccountScalarWhereInputSchema),z.lazy(() => AccountScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const SessionUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionCreateWithoutUserInputSchema).array(),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SessionScalarWhereInputSchema),z.lazy(() => SessionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const JobSeekerUncheckedUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.JobSeekerUncheckedUpdateOneWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => JobSeekerCreateWithoutUserInputSchema),z.lazy(() => JobSeekerUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => JobSeekerCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => JobSeekerUpsertWithoutUserInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => JobSeekerWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => JobSeekerWhereInputSchema) ]).optional(),
  connect: z.lazy(() => JobSeekerWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => JobSeekerUpdateToOneWithWhereWithoutUserInputSchema),z.lazy(() => JobSeekerUpdateWithoutUserInputSchema),z.lazy(() => JobSeekerUncheckedUpdateWithoutUserInputSchema) ]).optional(),
}).strict();

export const HiringCompanyUncheckedUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.HiringCompanyUncheckedUpdateOneWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => HiringCompanyCreateWithoutUserInputSchema),z.lazy(() => HiringCompanyUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => HiringCompanyCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => HiringCompanyUpsertWithoutUserInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => HiringCompanyWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => HiringCompanyWhereInputSchema) ]).optional(),
  connect: z.lazy(() => HiringCompanyWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => HiringCompanyUpdateToOneWithWhereWithoutUserInputSchema),z.lazy(() => HiringCompanyUpdateWithoutUserInputSchema),z.lazy(() => HiringCompanyUncheckedUpdateWithoutUserInputSchema) ]).optional(),
}).strict();

export const SelfAssessmentUncheckedUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.SelfAssessmentUncheckedUpdateOneWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => SelfAssessmentCreateWithoutUserInputSchema),z.lazy(() => SelfAssessmentUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SelfAssessmentCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => SelfAssessmentUpsertWithoutUserInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => SelfAssessmentWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => SelfAssessmentWhereInputSchema) ]).optional(),
  connect: z.lazy(() => SelfAssessmentWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => SelfAssessmentUpdateToOneWithWhereWithoutUserInputSchema),z.lazy(() => SelfAssessmentUpdateWithoutUserInputSchema),z.lazy(() => SelfAssessmentUncheckedUpdateWithoutUserInputSchema) ]).optional(),
}).strict();

export const ForumThreadUncheckedUpdateManyWithoutAuthorNestedInputSchema: z.ZodType<Prisma.ForumThreadUncheckedUpdateManyWithoutAuthorNestedInput> = z.object({
  create: z.union([ z.lazy(() => ForumThreadCreateWithoutAuthorInputSchema),z.lazy(() => ForumThreadCreateWithoutAuthorInputSchema).array(),z.lazy(() => ForumThreadUncheckedCreateWithoutAuthorInputSchema),z.lazy(() => ForumThreadUncheckedCreateWithoutAuthorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ForumThreadCreateOrConnectWithoutAuthorInputSchema),z.lazy(() => ForumThreadCreateOrConnectWithoutAuthorInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ForumThreadUpsertWithWhereUniqueWithoutAuthorInputSchema),z.lazy(() => ForumThreadUpsertWithWhereUniqueWithoutAuthorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ForumThreadCreateManyAuthorInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ForumThreadWhereUniqueInputSchema),z.lazy(() => ForumThreadWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ForumThreadWhereUniqueInputSchema),z.lazy(() => ForumThreadWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ForumThreadWhereUniqueInputSchema),z.lazy(() => ForumThreadWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ForumThreadWhereUniqueInputSchema),z.lazy(() => ForumThreadWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ForumThreadUpdateWithWhereUniqueWithoutAuthorInputSchema),z.lazy(() => ForumThreadUpdateWithWhereUniqueWithoutAuthorInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ForumThreadUpdateManyWithWhereWithoutAuthorInputSchema),z.lazy(() => ForumThreadUpdateManyWithWhereWithoutAuthorInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ForumThreadScalarWhereInputSchema),z.lazy(() => ForumThreadScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ForumPostUncheckedUpdateManyWithoutAuthorNestedInputSchema: z.ZodType<Prisma.ForumPostUncheckedUpdateManyWithoutAuthorNestedInput> = z.object({
  create: z.union([ z.lazy(() => ForumPostCreateWithoutAuthorInputSchema),z.lazy(() => ForumPostCreateWithoutAuthorInputSchema).array(),z.lazy(() => ForumPostUncheckedCreateWithoutAuthorInputSchema),z.lazy(() => ForumPostUncheckedCreateWithoutAuthorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ForumPostCreateOrConnectWithoutAuthorInputSchema),z.lazy(() => ForumPostCreateOrConnectWithoutAuthorInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ForumPostUpsertWithWhereUniqueWithoutAuthorInputSchema),z.lazy(() => ForumPostUpsertWithWhereUniqueWithoutAuthorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ForumPostCreateManyAuthorInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ForumPostWhereUniqueInputSchema),z.lazy(() => ForumPostWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ForumPostWhereUniqueInputSchema),z.lazy(() => ForumPostWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ForumPostWhereUniqueInputSchema),z.lazy(() => ForumPostWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ForumPostWhereUniqueInputSchema),z.lazy(() => ForumPostWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ForumPostUpdateWithWhereUniqueWithoutAuthorInputSchema),z.lazy(() => ForumPostUpdateWithWhereUniqueWithoutAuthorInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ForumPostUpdateManyWithWhereWithoutAuthorInputSchema),z.lazy(() => ForumPostUpdateManyWithWhereWithoutAuthorInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ForumPostScalarWhereInputSchema),z.lazy(() => ForumPostScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ForumCommentUncheckedUpdateManyWithoutAuthorNestedInputSchema: z.ZodType<Prisma.ForumCommentUncheckedUpdateManyWithoutAuthorNestedInput> = z.object({
  create: z.union([ z.lazy(() => ForumCommentCreateWithoutAuthorInputSchema),z.lazy(() => ForumCommentCreateWithoutAuthorInputSchema).array(),z.lazy(() => ForumCommentUncheckedCreateWithoutAuthorInputSchema),z.lazy(() => ForumCommentUncheckedCreateWithoutAuthorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ForumCommentCreateOrConnectWithoutAuthorInputSchema),z.lazy(() => ForumCommentCreateOrConnectWithoutAuthorInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ForumCommentUpsertWithWhereUniqueWithoutAuthorInputSchema),z.lazy(() => ForumCommentUpsertWithWhereUniqueWithoutAuthorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ForumCommentCreateManyAuthorInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ForumCommentWhereUniqueInputSchema),z.lazy(() => ForumCommentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ForumCommentWhereUniqueInputSchema),z.lazy(() => ForumCommentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ForumCommentWhereUniqueInputSchema),z.lazy(() => ForumCommentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ForumCommentWhereUniqueInputSchema),z.lazy(() => ForumCommentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ForumCommentUpdateWithWhereUniqueWithoutAuthorInputSchema),z.lazy(() => ForumCommentUpdateWithWhereUniqueWithoutAuthorInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ForumCommentUpdateManyWithWhereWithoutAuthorInputSchema),z.lazy(() => ForumCommentUpdateManyWithWhereWithoutAuthorInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ForumCommentScalarWhereInputSchema),z.lazy(() => ForumCommentScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PersonalInfoNullableCreateEnvelopeInputSchema: z.ZodType<Prisma.PersonalInfoNullableCreateEnvelopeInput> = z.object({
  set: z.lazy(() => PersonalInfoCreateInputSchema).optional().nullable()
}).strict();

export const PersonalInfoCreateInputSchema: z.ZodType<Prisma.PersonalInfoCreateInput> = z.object({
  fullName: z.string(),
  image: z.string().optional().nullable(),
  email: z.string(),
  dob: z.coerce.date(),
  mobile: z.string().optional().nullable(),
  relative: z.string().optional().nullable(),
  address: z.string(),
  city: z.string(),
  state: z.string(),
  postalCode: z.string().optional().nullable(),
  country: z.string(),
  linkedIn: z.string().optional().nullable(),
  github: z.string().optional().nullable(),
  twitter: z.string().optional().nullable(),
  facebook: z.string().optional().nullable(),
  hobbies: z.string().optional().nullable(),
  areaImprovementCurrent: z.string().optional().nullable(),
  areaImprovementFuture: z.string().optional().nullable()
}).strict();

export const SkillListCreateEnvelopeInputSchema: z.ZodType<Prisma.SkillListCreateEnvelopeInput> = z.object({
  set: z.union([ z.lazy(() => SkillCreateInputSchema),z.lazy(() => SkillCreateInputSchema).array() ]).optional(),
}).strict();

export const SkillCreateInputSchema: z.ZodType<Prisma.SkillCreateInput> = z.object({
  name: z.string(),
  level: z.lazy(() => LevelSchema),
  experienceYears: z.number()
}).strict();

export const CertificateCreateNestedManyWithoutProfileInputSchema: z.ZodType<Prisma.CertificateCreateNestedManyWithoutProfileInput> = z.object({
  create: z.union([ z.lazy(() => CertificateCreateWithoutProfileInputSchema),z.lazy(() => CertificateCreateWithoutProfileInputSchema).array(),z.lazy(() => CertificateUncheckedCreateWithoutProfileInputSchema),z.lazy(() => CertificateUncheckedCreateWithoutProfileInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CertificateCreateOrConnectWithoutProfileInputSchema),z.lazy(() => CertificateCreateOrConnectWithoutProfileInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CertificateCreateManyProfileInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CertificateWhereUniqueInputSchema),z.lazy(() => CertificateWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const EducationCreateNestedOneWithoutProfileInputSchema: z.ZodType<Prisma.EducationCreateNestedOneWithoutProfileInput> = z.object({
  create: z.union([ z.lazy(() => EducationCreateWithoutProfileInputSchema),z.lazy(() => EducationUncheckedCreateWithoutProfileInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => EducationCreateOrConnectWithoutProfileInputSchema).optional(),
  connect: z.lazy(() => EducationWhereUniqueInputSchema).optional()
}).strict();

export const ExperienceCreateNestedOneWithoutProfileInputSchema: z.ZodType<Prisma.ExperienceCreateNestedOneWithoutProfileInput> = z.object({
  create: z.union([ z.lazy(() => ExperienceCreateWithoutProfileInputSchema),z.lazy(() => ExperienceUncheckedCreateWithoutProfileInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ExperienceCreateOrConnectWithoutProfileInputSchema).optional(),
  connect: z.lazy(() => ExperienceWhereUniqueInputSchema).optional()
}).strict();

export const CertificateUncheckedCreateNestedManyWithoutProfileInputSchema: z.ZodType<Prisma.CertificateUncheckedCreateNestedManyWithoutProfileInput> = z.object({
  create: z.union([ z.lazy(() => CertificateCreateWithoutProfileInputSchema),z.lazy(() => CertificateCreateWithoutProfileInputSchema).array(),z.lazy(() => CertificateUncheckedCreateWithoutProfileInputSchema),z.lazy(() => CertificateUncheckedCreateWithoutProfileInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CertificateCreateOrConnectWithoutProfileInputSchema),z.lazy(() => CertificateCreateOrConnectWithoutProfileInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CertificateCreateManyProfileInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CertificateWhereUniqueInputSchema),z.lazy(() => CertificateWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const EducationUncheckedCreateNestedOneWithoutProfileInputSchema: z.ZodType<Prisma.EducationUncheckedCreateNestedOneWithoutProfileInput> = z.object({
  create: z.union([ z.lazy(() => EducationCreateWithoutProfileInputSchema),z.lazy(() => EducationUncheckedCreateWithoutProfileInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => EducationCreateOrConnectWithoutProfileInputSchema).optional(),
  connect: z.lazy(() => EducationWhereUniqueInputSchema).optional()
}).strict();

export const ExperienceUncheckedCreateNestedOneWithoutProfileInputSchema: z.ZodType<Prisma.ExperienceUncheckedCreateNestedOneWithoutProfileInput> = z.object({
  create: z.union([ z.lazy(() => ExperienceCreateWithoutProfileInputSchema),z.lazy(() => ExperienceUncheckedCreateWithoutProfileInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ExperienceCreateOrConnectWithoutProfileInputSchema).optional(),
  connect: z.lazy(() => ExperienceWhereUniqueInputSchema).optional()
}).strict();

export const PersonalInfoNullableUpdateEnvelopeInputSchema: z.ZodType<Prisma.PersonalInfoNullableUpdateEnvelopeInput> = z.object({
  set: z.lazy(() => PersonalInfoCreateInputSchema).optional().nullable(),
  upsert: z.lazy(() => PersonalInfoUpsertInputSchema).optional(),
  unset: z.boolean().optional()
}).strict();

export const SkillListUpdateEnvelopeInputSchema: z.ZodType<Prisma.SkillListUpdateEnvelopeInput> = z.object({
  set: z.union([ z.lazy(() => SkillCreateInputSchema),z.lazy(() => SkillCreateInputSchema).array() ]).optional(),
  push: z.union([ z.lazy(() => SkillCreateInputSchema),z.lazy(() => SkillCreateInputSchema).array() ]).optional(),
  updateMany: z.lazy(() => SkillUpdateManyInputSchema).optional(),
  deleteMany: z.lazy(() => SkillDeleteManyInputSchema).optional()
}).strict();

export const CertificateUpdateManyWithoutProfileNestedInputSchema: z.ZodType<Prisma.CertificateUpdateManyWithoutProfileNestedInput> = z.object({
  create: z.union([ z.lazy(() => CertificateCreateWithoutProfileInputSchema),z.lazy(() => CertificateCreateWithoutProfileInputSchema).array(),z.lazy(() => CertificateUncheckedCreateWithoutProfileInputSchema),z.lazy(() => CertificateUncheckedCreateWithoutProfileInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CertificateCreateOrConnectWithoutProfileInputSchema),z.lazy(() => CertificateCreateOrConnectWithoutProfileInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CertificateUpsertWithWhereUniqueWithoutProfileInputSchema),z.lazy(() => CertificateUpsertWithWhereUniqueWithoutProfileInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CertificateCreateManyProfileInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CertificateWhereUniqueInputSchema),z.lazy(() => CertificateWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CertificateWhereUniqueInputSchema),z.lazy(() => CertificateWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CertificateWhereUniqueInputSchema),z.lazy(() => CertificateWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CertificateWhereUniqueInputSchema),z.lazy(() => CertificateWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CertificateUpdateWithWhereUniqueWithoutProfileInputSchema),z.lazy(() => CertificateUpdateWithWhereUniqueWithoutProfileInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CertificateUpdateManyWithWhereWithoutProfileInputSchema),z.lazy(() => CertificateUpdateManyWithWhereWithoutProfileInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CertificateScalarWhereInputSchema),z.lazy(() => CertificateScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const EducationUpdateOneWithoutProfileNestedInputSchema: z.ZodType<Prisma.EducationUpdateOneWithoutProfileNestedInput> = z.object({
  create: z.union([ z.lazy(() => EducationCreateWithoutProfileInputSchema),z.lazy(() => EducationUncheckedCreateWithoutProfileInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => EducationCreateOrConnectWithoutProfileInputSchema).optional(),
  upsert: z.lazy(() => EducationUpsertWithoutProfileInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => EducationWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => EducationWhereInputSchema) ]).optional(),
  connect: z.lazy(() => EducationWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => EducationUpdateToOneWithWhereWithoutProfileInputSchema),z.lazy(() => EducationUpdateWithoutProfileInputSchema),z.lazy(() => EducationUncheckedUpdateWithoutProfileInputSchema) ]).optional(),
}).strict();

export const ExperienceUpdateOneWithoutProfileNestedInputSchema: z.ZodType<Prisma.ExperienceUpdateOneWithoutProfileNestedInput> = z.object({
  create: z.union([ z.lazy(() => ExperienceCreateWithoutProfileInputSchema),z.lazy(() => ExperienceUncheckedCreateWithoutProfileInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ExperienceCreateOrConnectWithoutProfileInputSchema).optional(),
  upsert: z.lazy(() => ExperienceUpsertWithoutProfileInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => ExperienceWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => ExperienceWhereInputSchema) ]).optional(),
  connect: z.lazy(() => ExperienceWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ExperienceUpdateToOneWithWhereWithoutProfileInputSchema),z.lazy(() => ExperienceUpdateWithoutProfileInputSchema),z.lazy(() => ExperienceUncheckedUpdateWithoutProfileInputSchema) ]).optional(),
}).strict();

export const CertificateUncheckedUpdateManyWithoutProfileNestedInputSchema: z.ZodType<Prisma.CertificateUncheckedUpdateManyWithoutProfileNestedInput> = z.object({
  create: z.union([ z.lazy(() => CertificateCreateWithoutProfileInputSchema),z.lazy(() => CertificateCreateWithoutProfileInputSchema).array(),z.lazy(() => CertificateUncheckedCreateWithoutProfileInputSchema),z.lazy(() => CertificateUncheckedCreateWithoutProfileInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CertificateCreateOrConnectWithoutProfileInputSchema),z.lazy(() => CertificateCreateOrConnectWithoutProfileInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CertificateUpsertWithWhereUniqueWithoutProfileInputSchema),z.lazy(() => CertificateUpsertWithWhereUniqueWithoutProfileInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CertificateCreateManyProfileInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CertificateWhereUniqueInputSchema),z.lazy(() => CertificateWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CertificateWhereUniqueInputSchema),z.lazy(() => CertificateWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CertificateWhereUniqueInputSchema),z.lazy(() => CertificateWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CertificateWhereUniqueInputSchema),z.lazy(() => CertificateWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CertificateUpdateWithWhereUniqueWithoutProfileInputSchema),z.lazy(() => CertificateUpdateWithWhereUniqueWithoutProfileInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CertificateUpdateManyWithWhereWithoutProfileInputSchema),z.lazy(() => CertificateUpdateManyWithWhereWithoutProfileInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CertificateScalarWhereInputSchema),z.lazy(() => CertificateScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const EducationUncheckedUpdateOneWithoutProfileNestedInputSchema: z.ZodType<Prisma.EducationUncheckedUpdateOneWithoutProfileNestedInput> = z.object({
  create: z.union([ z.lazy(() => EducationCreateWithoutProfileInputSchema),z.lazy(() => EducationUncheckedCreateWithoutProfileInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => EducationCreateOrConnectWithoutProfileInputSchema).optional(),
  upsert: z.lazy(() => EducationUpsertWithoutProfileInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => EducationWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => EducationWhereInputSchema) ]).optional(),
  connect: z.lazy(() => EducationWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => EducationUpdateToOneWithWhereWithoutProfileInputSchema),z.lazy(() => EducationUpdateWithoutProfileInputSchema),z.lazy(() => EducationUncheckedUpdateWithoutProfileInputSchema) ]).optional(),
}).strict();

export const ExperienceUncheckedUpdateOneWithoutProfileNestedInputSchema: z.ZodType<Prisma.ExperienceUncheckedUpdateOneWithoutProfileNestedInput> = z.object({
  create: z.union([ z.lazy(() => ExperienceCreateWithoutProfileInputSchema),z.lazy(() => ExperienceUncheckedCreateWithoutProfileInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ExperienceCreateOrConnectWithoutProfileInputSchema).optional(),
  upsert: z.lazy(() => ExperienceUpsertWithoutProfileInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => ExperienceWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => ExperienceWhereInputSchema) ]).optional(),
  connect: z.lazy(() => ExperienceWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ExperienceUpdateToOneWithWhereWithoutProfileInputSchema),z.lazy(() => ExperienceUpdateWithoutProfileInputSchema),z.lazy(() => ExperienceUncheckedUpdateWithoutProfileInputSchema) ]).optional(),
}).strict();

export const ProfileCreateNestedOneWithoutCertificatesInputSchema: z.ZodType<Prisma.ProfileCreateNestedOneWithoutCertificatesInput> = z.object({
  create: z.union([ z.lazy(() => ProfileCreateWithoutCertificatesInputSchema),z.lazy(() => ProfileUncheckedCreateWithoutCertificatesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProfileCreateOrConnectWithoutCertificatesInputSchema).optional(),
  connect: z.lazy(() => ProfileWhereUniqueInputSchema).optional()
}).strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const ProfileUpdateOneRequiredWithoutCertificatesNestedInputSchema: z.ZodType<Prisma.ProfileUpdateOneRequiredWithoutCertificatesNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProfileCreateWithoutCertificatesInputSchema),z.lazy(() => ProfileUncheckedCreateWithoutCertificatesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProfileCreateOrConnectWithoutCertificatesInputSchema).optional(),
  upsert: z.lazy(() => ProfileUpsertWithoutCertificatesInputSchema).optional(),
  connect: z.lazy(() => ProfileWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProfileUpdateToOneWithWhereWithoutCertificatesInputSchema),z.lazy(() => ProfileUpdateWithoutCertificatesInputSchema),z.lazy(() => ProfileUncheckedUpdateWithoutCertificatesInputSchema) ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutAccountsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutAccountsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAccountsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const NullableIntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableIntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional().nullable(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional(),
  unset: z.boolean().optional()
}).strict();

export const UserUpdateOneRequiredWithoutAccountsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutAccountsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAccountsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutAccountsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutAccountsInputSchema),z.lazy(() => UserUpdateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAccountsInputSchema) ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutSessionsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutSessionsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSessionsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const UserUpdateOneRequiredWithoutSessionsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutSessionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSessionsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutSessionsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutSessionsInputSchema),z.lazy(() => UserUpdateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSessionsInputSchema) ]).optional(),
}).strict();

export const JobSeekerCreateportfolioLinksInputSchema: z.ZodType<Prisma.JobSeekerCreateportfolioLinksInput> = z.object({
  set: z.string().array()
}).strict();

export const JobSeekerCreatepreferredJobRolesInputSchema: z.ZodType<Prisma.JobSeekerCreatepreferredJobRolesInput> = z.object({
  set: z.string().array()
}).strict();

export const UserCreateNestedOneWithoutJobSeekerInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutJobSeekerInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutJobSeekerInputSchema),z.lazy(() => UserUncheckedCreateWithoutJobSeekerInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutJobSeekerInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const CertificationCreateNestedManyWithoutJobSeekerInputSchema: z.ZodType<Prisma.CertificationCreateNestedManyWithoutJobSeekerInput> = z.object({
  create: z.union([ z.lazy(() => CertificationCreateWithoutJobSeekerInputSchema),z.lazy(() => CertificationCreateWithoutJobSeekerInputSchema).array(),z.lazy(() => CertificationUncheckedCreateWithoutJobSeekerInputSchema),z.lazy(() => CertificationUncheckedCreateWithoutJobSeekerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CertificationCreateOrConnectWithoutJobSeekerInputSchema),z.lazy(() => CertificationCreateOrConnectWithoutJobSeekerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CertificationCreateManyJobSeekerInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CertificationWhereUniqueInputSchema),z.lazy(() => CertificationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ApplicationCreateNestedManyWithoutJobSeekerInputSchema: z.ZodType<Prisma.ApplicationCreateNestedManyWithoutJobSeekerInput> = z.object({
  create: z.union([ z.lazy(() => ApplicationCreateWithoutJobSeekerInputSchema),z.lazy(() => ApplicationCreateWithoutJobSeekerInputSchema).array(),z.lazy(() => ApplicationUncheckedCreateWithoutJobSeekerInputSchema),z.lazy(() => ApplicationUncheckedCreateWithoutJobSeekerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ApplicationCreateOrConnectWithoutJobSeekerInputSchema),z.lazy(() => ApplicationCreateOrConnectWithoutJobSeekerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ApplicationCreateManyJobSeekerInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ApplicationWhereUniqueInputSchema),z.lazy(() => ApplicationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CertificationUncheckedCreateNestedManyWithoutJobSeekerInputSchema: z.ZodType<Prisma.CertificationUncheckedCreateNestedManyWithoutJobSeekerInput> = z.object({
  create: z.union([ z.lazy(() => CertificationCreateWithoutJobSeekerInputSchema),z.lazy(() => CertificationCreateWithoutJobSeekerInputSchema).array(),z.lazy(() => CertificationUncheckedCreateWithoutJobSeekerInputSchema),z.lazy(() => CertificationUncheckedCreateWithoutJobSeekerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CertificationCreateOrConnectWithoutJobSeekerInputSchema),z.lazy(() => CertificationCreateOrConnectWithoutJobSeekerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CertificationCreateManyJobSeekerInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CertificationWhereUniqueInputSchema),z.lazy(() => CertificationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ApplicationUncheckedCreateNestedManyWithoutJobSeekerInputSchema: z.ZodType<Prisma.ApplicationUncheckedCreateNestedManyWithoutJobSeekerInput> = z.object({
  create: z.union([ z.lazy(() => ApplicationCreateWithoutJobSeekerInputSchema),z.lazy(() => ApplicationCreateWithoutJobSeekerInputSchema).array(),z.lazy(() => ApplicationUncheckedCreateWithoutJobSeekerInputSchema),z.lazy(() => ApplicationUncheckedCreateWithoutJobSeekerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ApplicationCreateOrConnectWithoutJobSeekerInputSchema),z.lazy(() => ApplicationCreateOrConnectWithoutJobSeekerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ApplicationCreateManyJobSeekerInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ApplicationWhereUniqueInputSchema),z.lazy(() => ApplicationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const JobSeekerUpdateportfolioLinksInputSchema: z.ZodType<Prisma.JobSeekerUpdateportfolioLinksInput> = z.object({
  set: z.string().array().optional(),
  push: z.union([ z.string(),z.string().array() ]).optional(),
}).strict();

export const JobSeekerUpdatepreferredJobRolesInputSchema: z.ZodType<Prisma.JobSeekerUpdatepreferredJobRolesInput> = z.object({
  set: z.string().array().optional(),
  push: z.union([ z.string(),z.string().array() ]).optional(),
}).strict();

export const UserUpdateOneRequiredWithoutJobSeekerNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutJobSeekerNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutJobSeekerInputSchema),z.lazy(() => UserUncheckedCreateWithoutJobSeekerInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutJobSeekerInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutJobSeekerInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutJobSeekerInputSchema),z.lazy(() => UserUpdateWithoutJobSeekerInputSchema),z.lazy(() => UserUncheckedUpdateWithoutJobSeekerInputSchema) ]).optional(),
}).strict();

export const CertificationUpdateManyWithoutJobSeekerNestedInputSchema: z.ZodType<Prisma.CertificationUpdateManyWithoutJobSeekerNestedInput> = z.object({
  create: z.union([ z.lazy(() => CertificationCreateWithoutJobSeekerInputSchema),z.lazy(() => CertificationCreateWithoutJobSeekerInputSchema).array(),z.lazy(() => CertificationUncheckedCreateWithoutJobSeekerInputSchema),z.lazy(() => CertificationUncheckedCreateWithoutJobSeekerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CertificationCreateOrConnectWithoutJobSeekerInputSchema),z.lazy(() => CertificationCreateOrConnectWithoutJobSeekerInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CertificationUpsertWithWhereUniqueWithoutJobSeekerInputSchema),z.lazy(() => CertificationUpsertWithWhereUniqueWithoutJobSeekerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CertificationCreateManyJobSeekerInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CertificationWhereUniqueInputSchema),z.lazy(() => CertificationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CertificationWhereUniqueInputSchema),z.lazy(() => CertificationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CertificationWhereUniqueInputSchema),z.lazy(() => CertificationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CertificationWhereUniqueInputSchema),z.lazy(() => CertificationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CertificationUpdateWithWhereUniqueWithoutJobSeekerInputSchema),z.lazy(() => CertificationUpdateWithWhereUniqueWithoutJobSeekerInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CertificationUpdateManyWithWhereWithoutJobSeekerInputSchema),z.lazy(() => CertificationUpdateManyWithWhereWithoutJobSeekerInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CertificationScalarWhereInputSchema),z.lazy(() => CertificationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ApplicationUpdateManyWithoutJobSeekerNestedInputSchema: z.ZodType<Prisma.ApplicationUpdateManyWithoutJobSeekerNestedInput> = z.object({
  create: z.union([ z.lazy(() => ApplicationCreateWithoutJobSeekerInputSchema),z.lazy(() => ApplicationCreateWithoutJobSeekerInputSchema).array(),z.lazy(() => ApplicationUncheckedCreateWithoutJobSeekerInputSchema),z.lazy(() => ApplicationUncheckedCreateWithoutJobSeekerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ApplicationCreateOrConnectWithoutJobSeekerInputSchema),z.lazy(() => ApplicationCreateOrConnectWithoutJobSeekerInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ApplicationUpsertWithWhereUniqueWithoutJobSeekerInputSchema),z.lazy(() => ApplicationUpsertWithWhereUniqueWithoutJobSeekerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ApplicationCreateManyJobSeekerInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ApplicationWhereUniqueInputSchema),z.lazy(() => ApplicationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ApplicationWhereUniqueInputSchema),z.lazy(() => ApplicationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ApplicationWhereUniqueInputSchema),z.lazy(() => ApplicationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ApplicationWhereUniqueInputSchema),z.lazy(() => ApplicationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ApplicationUpdateWithWhereUniqueWithoutJobSeekerInputSchema),z.lazy(() => ApplicationUpdateWithWhereUniqueWithoutJobSeekerInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ApplicationUpdateManyWithWhereWithoutJobSeekerInputSchema),z.lazy(() => ApplicationUpdateManyWithWhereWithoutJobSeekerInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ApplicationScalarWhereInputSchema),z.lazy(() => ApplicationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CertificationUncheckedUpdateManyWithoutJobSeekerNestedInputSchema: z.ZodType<Prisma.CertificationUncheckedUpdateManyWithoutJobSeekerNestedInput> = z.object({
  create: z.union([ z.lazy(() => CertificationCreateWithoutJobSeekerInputSchema),z.lazy(() => CertificationCreateWithoutJobSeekerInputSchema).array(),z.lazy(() => CertificationUncheckedCreateWithoutJobSeekerInputSchema),z.lazy(() => CertificationUncheckedCreateWithoutJobSeekerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CertificationCreateOrConnectWithoutJobSeekerInputSchema),z.lazy(() => CertificationCreateOrConnectWithoutJobSeekerInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CertificationUpsertWithWhereUniqueWithoutJobSeekerInputSchema),z.lazy(() => CertificationUpsertWithWhereUniqueWithoutJobSeekerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CertificationCreateManyJobSeekerInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CertificationWhereUniqueInputSchema),z.lazy(() => CertificationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CertificationWhereUniqueInputSchema),z.lazy(() => CertificationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CertificationWhereUniqueInputSchema),z.lazy(() => CertificationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CertificationWhereUniqueInputSchema),z.lazy(() => CertificationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CertificationUpdateWithWhereUniqueWithoutJobSeekerInputSchema),z.lazy(() => CertificationUpdateWithWhereUniqueWithoutJobSeekerInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CertificationUpdateManyWithWhereWithoutJobSeekerInputSchema),z.lazy(() => CertificationUpdateManyWithWhereWithoutJobSeekerInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CertificationScalarWhereInputSchema),z.lazy(() => CertificationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ApplicationUncheckedUpdateManyWithoutJobSeekerNestedInputSchema: z.ZodType<Prisma.ApplicationUncheckedUpdateManyWithoutJobSeekerNestedInput> = z.object({
  create: z.union([ z.lazy(() => ApplicationCreateWithoutJobSeekerInputSchema),z.lazy(() => ApplicationCreateWithoutJobSeekerInputSchema).array(),z.lazy(() => ApplicationUncheckedCreateWithoutJobSeekerInputSchema),z.lazy(() => ApplicationUncheckedCreateWithoutJobSeekerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ApplicationCreateOrConnectWithoutJobSeekerInputSchema),z.lazy(() => ApplicationCreateOrConnectWithoutJobSeekerInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ApplicationUpsertWithWhereUniqueWithoutJobSeekerInputSchema),z.lazy(() => ApplicationUpsertWithWhereUniqueWithoutJobSeekerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ApplicationCreateManyJobSeekerInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ApplicationWhereUniqueInputSchema),z.lazy(() => ApplicationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ApplicationWhereUniqueInputSchema),z.lazy(() => ApplicationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ApplicationWhereUniqueInputSchema),z.lazy(() => ApplicationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ApplicationWhereUniqueInputSchema),z.lazy(() => ApplicationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ApplicationUpdateWithWhereUniqueWithoutJobSeekerInputSchema),z.lazy(() => ApplicationUpdateWithWhereUniqueWithoutJobSeekerInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ApplicationUpdateManyWithWhereWithoutJobSeekerInputSchema),z.lazy(() => ApplicationUpdateManyWithWhereWithoutJobSeekerInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ApplicationScalarWhereInputSchema),z.lazy(() => ApplicationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const EducationLevelListCreateEnvelopeInputSchema: z.ZodType<Prisma.EducationLevelListCreateEnvelopeInput> = z.object({
  set: z.union([ z.lazy(() => EducationLevelCreateInputSchema),z.lazy(() => EducationLevelCreateInputSchema).array() ]).optional(),
}).strict();

export const EducationLevelCreateInputSchema: z.ZodType<Prisma.EducationLevelCreateInput> = z.object({
  level: z.string(),
  board: z.string().optional().nullable(),
  institute: z.string().optional().nullable(),
  degree: z.string().optional().nullable(),
  subjects: z.string(),
  year: z.number().optional().nullable(),
  expectedYear: z.number().optional().nullable(),
  currentSemester: z.number().optional().nullable(),
  grade: z.string(),
  completed: z.boolean().optional()
}).strict();

export const ProfileCreateNestedOneWithoutEducationsInputSchema: z.ZodType<Prisma.ProfileCreateNestedOneWithoutEducationsInput> = z.object({
  create: z.union([ z.lazy(() => ProfileCreateWithoutEducationsInputSchema),z.lazy(() => ProfileUncheckedCreateWithoutEducationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProfileCreateOrConnectWithoutEducationsInputSchema).optional(),
  connect: z.lazy(() => ProfileWhereUniqueInputSchema).optional()
}).strict();

export const EducationLevelListUpdateEnvelopeInputSchema: z.ZodType<Prisma.EducationLevelListUpdateEnvelopeInput> = z.object({
  set: z.union([ z.lazy(() => EducationLevelCreateInputSchema),z.lazy(() => EducationLevelCreateInputSchema).array() ]).optional(),
  push: z.union([ z.lazy(() => EducationLevelCreateInputSchema),z.lazy(() => EducationLevelCreateInputSchema).array() ]).optional(),
  updateMany: z.lazy(() => EducationLevelUpdateManyInputSchema).optional(),
  deleteMany: z.lazy(() => EducationLevelDeleteManyInputSchema).optional()
}).strict();

export const ProfileUpdateOneRequiredWithoutEducationsNestedInputSchema: z.ZodType<Prisma.ProfileUpdateOneRequiredWithoutEducationsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProfileCreateWithoutEducationsInputSchema),z.lazy(() => ProfileUncheckedCreateWithoutEducationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProfileCreateOrConnectWithoutEducationsInputSchema).optional(),
  upsert: z.lazy(() => ProfileUpsertWithoutEducationsInputSchema).optional(),
  connect: z.lazy(() => ProfileWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProfileUpdateToOneWithWhereWithoutEducationsInputSchema),z.lazy(() => ProfileUpdateWithoutEducationsInputSchema),z.lazy(() => ProfileUncheckedUpdateWithoutEducationsInputSchema) ]).optional(),
}).strict();

export const ExperienceDetailsListCreateEnvelopeInputSchema: z.ZodType<Prisma.ExperienceDetailsListCreateEnvelopeInput> = z.object({
  set: z.union([ z.lazy(() => ExperienceDetailsCreateInputSchema),z.lazy(() => ExperienceDetailsCreateInputSchema).array() ]).optional(),
}).strict();

export const ExperienceDetailsCreateInputSchema: z.ZodType<Prisma.ExperienceDetailsCreateInput> = z.object({
  company: z.string(),
  jobTitle: z.string(),
  employmentType: z.string(),
  locationType: z.string(),
  location: z.string().optional().nullable(),
  startDate: z.coerce.date(),
  current: z.boolean(),
  endDate: z.coerce.date().optional().nullable(),
  description: z.string().optional().nullable(),
  skills: z.union([ z.lazy(() => ExperienceDetailsCreateskillsInputSchema),z.string().array() ]).optional(),
}).strict();

export const ProfileCreateNestedOneWithoutExperiencesInputSchema: z.ZodType<Prisma.ProfileCreateNestedOneWithoutExperiencesInput> = z.object({
  create: z.union([ z.lazy(() => ProfileCreateWithoutExperiencesInputSchema),z.lazy(() => ProfileUncheckedCreateWithoutExperiencesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProfileCreateOrConnectWithoutExperiencesInputSchema).optional(),
  connect: z.lazy(() => ProfileWhereUniqueInputSchema).optional()
}).strict();

export const ExperienceDetailsListUpdateEnvelopeInputSchema: z.ZodType<Prisma.ExperienceDetailsListUpdateEnvelopeInput> = z.object({
  set: z.union([ z.lazy(() => ExperienceDetailsCreateInputSchema),z.lazy(() => ExperienceDetailsCreateInputSchema).array() ]).optional(),
  push: z.union([ z.lazy(() => ExperienceDetailsCreateInputSchema),z.lazy(() => ExperienceDetailsCreateInputSchema).array() ]).optional(),
  updateMany: z.lazy(() => ExperienceDetailsUpdateManyInputSchema).optional(),
  deleteMany: z.lazy(() => ExperienceDetailsDeleteManyInputSchema).optional()
}).strict();

export const ProfileUpdateOneRequiredWithoutExperiencesNestedInputSchema: z.ZodType<Prisma.ProfileUpdateOneRequiredWithoutExperiencesNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProfileCreateWithoutExperiencesInputSchema),z.lazy(() => ProfileUncheckedCreateWithoutExperiencesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProfileCreateOrConnectWithoutExperiencesInputSchema).optional(),
  upsert: z.lazy(() => ProfileUpsertWithoutExperiencesInputSchema).optional(),
  connect: z.lazy(() => ProfileWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProfileUpdateToOneWithWhereWithoutExperiencesInputSchema),z.lazy(() => ProfileUpdateWithoutExperiencesInputSchema),z.lazy(() => ProfileUncheckedUpdateWithoutExperiencesInputSchema) ]).optional(),
}).strict();

export const JobSeekerCreateNestedOneWithoutCertificationsInputSchema: z.ZodType<Prisma.JobSeekerCreateNestedOneWithoutCertificationsInput> = z.object({
  create: z.union([ z.lazy(() => JobSeekerCreateWithoutCertificationsInputSchema),z.lazy(() => JobSeekerUncheckedCreateWithoutCertificationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => JobSeekerCreateOrConnectWithoutCertificationsInputSchema).optional(),
  connect: z.lazy(() => JobSeekerWhereUniqueInputSchema).optional()
}).strict();

export const JobSeekerUpdateOneRequiredWithoutCertificationsNestedInputSchema: z.ZodType<Prisma.JobSeekerUpdateOneRequiredWithoutCertificationsNestedInput> = z.object({
  create: z.union([ z.lazy(() => JobSeekerCreateWithoutCertificationsInputSchema),z.lazy(() => JobSeekerUncheckedCreateWithoutCertificationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => JobSeekerCreateOrConnectWithoutCertificationsInputSchema).optional(),
  upsert: z.lazy(() => JobSeekerUpsertWithoutCertificationsInputSchema).optional(),
  connect: z.lazy(() => JobSeekerWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => JobSeekerUpdateToOneWithWhereWithoutCertificationsInputSchema),z.lazy(() => JobSeekerUpdateWithoutCertificationsInputSchema),z.lazy(() => JobSeekerUncheckedUpdateWithoutCertificationsInputSchema) ]).optional(),
}).strict();

export const HiringCompanyCreatesocialLinksInputSchema: z.ZodType<Prisma.HiringCompanyCreatesocialLinksInput> = z.object({
  set: z.string().array()
}).strict();

export const UserCreateNestedOneWithoutHiringCompanyInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutHiringCompanyInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutHiringCompanyInputSchema),z.lazy(() => UserUncheckedCreateWithoutHiringCompanyInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutHiringCompanyInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const JobCreateNestedManyWithoutHiringCompanyInputSchema: z.ZodType<Prisma.JobCreateNestedManyWithoutHiringCompanyInput> = z.object({
  create: z.union([ z.lazy(() => JobCreateWithoutHiringCompanyInputSchema),z.lazy(() => JobCreateWithoutHiringCompanyInputSchema).array(),z.lazy(() => JobUncheckedCreateWithoutHiringCompanyInputSchema),z.lazy(() => JobUncheckedCreateWithoutHiringCompanyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => JobCreateOrConnectWithoutHiringCompanyInputSchema),z.lazy(() => JobCreateOrConnectWithoutHiringCompanyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => JobCreateManyHiringCompanyInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => JobWhereUniqueInputSchema),z.lazy(() => JobWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const JobUncheckedCreateNestedManyWithoutHiringCompanyInputSchema: z.ZodType<Prisma.JobUncheckedCreateNestedManyWithoutHiringCompanyInput> = z.object({
  create: z.union([ z.lazy(() => JobCreateWithoutHiringCompanyInputSchema),z.lazy(() => JobCreateWithoutHiringCompanyInputSchema).array(),z.lazy(() => JobUncheckedCreateWithoutHiringCompanyInputSchema),z.lazy(() => JobUncheckedCreateWithoutHiringCompanyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => JobCreateOrConnectWithoutHiringCompanyInputSchema),z.lazy(() => JobCreateOrConnectWithoutHiringCompanyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => JobCreateManyHiringCompanyInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => JobWhereUniqueInputSchema),z.lazy(() => JobWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const HiringCompanyUpdatesocialLinksInputSchema: z.ZodType<Prisma.HiringCompanyUpdatesocialLinksInput> = z.object({
  set: z.string().array().optional(),
  push: z.union([ z.string(),z.string().array() ]).optional(),
}).strict();

export const UserUpdateOneRequiredWithoutHiringCompanyNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutHiringCompanyNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutHiringCompanyInputSchema),z.lazy(() => UserUncheckedCreateWithoutHiringCompanyInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutHiringCompanyInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutHiringCompanyInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutHiringCompanyInputSchema),z.lazy(() => UserUpdateWithoutHiringCompanyInputSchema),z.lazy(() => UserUncheckedUpdateWithoutHiringCompanyInputSchema) ]).optional(),
}).strict();

export const JobUpdateManyWithoutHiringCompanyNestedInputSchema: z.ZodType<Prisma.JobUpdateManyWithoutHiringCompanyNestedInput> = z.object({
  create: z.union([ z.lazy(() => JobCreateWithoutHiringCompanyInputSchema),z.lazy(() => JobCreateWithoutHiringCompanyInputSchema).array(),z.lazy(() => JobUncheckedCreateWithoutHiringCompanyInputSchema),z.lazy(() => JobUncheckedCreateWithoutHiringCompanyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => JobCreateOrConnectWithoutHiringCompanyInputSchema),z.lazy(() => JobCreateOrConnectWithoutHiringCompanyInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => JobUpsertWithWhereUniqueWithoutHiringCompanyInputSchema),z.lazy(() => JobUpsertWithWhereUniqueWithoutHiringCompanyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => JobCreateManyHiringCompanyInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => JobWhereUniqueInputSchema),z.lazy(() => JobWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => JobWhereUniqueInputSchema),z.lazy(() => JobWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => JobWhereUniqueInputSchema),z.lazy(() => JobWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => JobWhereUniqueInputSchema),z.lazy(() => JobWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => JobUpdateWithWhereUniqueWithoutHiringCompanyInputSchema),z.lazy(() => JobUpdateWithWhereUniqueWithoutHiringCompanyInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => JobUpdateManyWithWhereWithoutHiringCompanyInputSchema),z.lazy(() => JobUpdateManyWithWhereWithoutHiringCompanyInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => JobScalarWhereInputSchema),z.lazy(() => JobScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const JobUncheckedUpdateManyWithoutHiringCompanyNestedInputSchema: z.ZodType<Prisma.JobUncheckedUpdateManyWithoutHiringCompanyNestedInput> = z.object({
  create: z.union([ z.lazy(() => JobCreateWithoutHiringCompanyInputSchema),z.lazy(() => JobCreateWithoutHiringCompanyInputSchema).array(),z.lazy(() => JobUncheckedCreateWithoutHiringCompanyInputSchema),z.lazy(() => JobUncheckedCreateWithoutHiringCompanyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => JobCreateOrConnectWithoutHiringCompanyInputSchema),z.lazy(() => JobCreateOrConnectWithoutHiringCompanyInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => JobUpsertWithWhereUniqueWithoutHiringCompanyInputSchema),z.lazy(() => JobUpsertWithWhereUniqueWithoutHiringCompanyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => JobCreateManyHiringCompanyInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => JobWhereUniqueInputSchema),z.lazy(() => JobWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => JobWhereUniqueInputSchema),z.lazy(() => JobWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => JobWhereUniqueInputSchema),z.lazy(() => JobWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => JobWhereUniqueInputSchema),z.lazy(() => JobWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => JobUpdateWithWhereUniqueWithoutHiringCompanyInputSchema),z.lazy(() => JobUpdateWithWhereUniqueWithoutHiringCompanyInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => JobUpdateManyWithWhereWithoutHiringCompanyInputSchema),z.lazy(() => JobUpdateManyWithWhereWithoutHiringCompanyInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => JobScalarWhereInputSchema),z.lazy(() => JobScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const JobCreaterequirementsInputSchema: z.ZodType<Prisma.JobCreaterequirementsInput> = z.object({
  set: z.string().array()
}).strict();

export const JobCreatebenefitsInputSchema: z.ZodType<Prisma.JobCreatebenefitsInput> = z.object({
  set: z.string().array()
}).strict();

export const HiringCompanyCreateNestedOneWithoutJobsInputSchema: z.ZodType<Prisma.HiringCompanyCreateNestedOneWithoutJobsInput> = z.object({
  create: z.union([ z.lazy(() => HiringCompanyCreateWithoutJobsInputSchema),z.lazy(() => HiringCompanyUncheckedCreateWithoutJobsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => HiringCompanyCreateOrConnectWithoutJobsInputSchema).optional(),
  connect: z.lazy(() => HiringCompanyWhereUniqueInputSchema).optional()
}).strict();

export const ApplicationCreateNestedManyWithoutJobInputSchema: z.ZodType<Prisma.ApplicationCreateNestedManyWithoutJobInput> = z.object({
  create: z.union([ z.lazy(() => ApplicationCreateWithoutJobInputSchema),z.lazy(() => ApplicationCreateWithoutJobInputSchema).array(),z.lazy(() => ApplicationUncheckedCreateWithoutJobInputSchema),z.lazy(() => ApplicationUncheckedCreateWithoutJobInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ApplicationCreateOrConnectWithoutJobInputSchema),z.lazy(() => ApplicationCreateOrConnectWithoutJobInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ApplicationCreateManyJobInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ApplicationWhereUniqueInputSchema),z.lazy(() => ApplicationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ApplicationUncheckedCreateNestedManyWithoutJobInputSchema: z.ZodType<Prisma.ApplicationUncheckedCreateNestedManyWithoutJobInput> = z.object({
  create: z.union([ z.lazy(() => ApplicationCreateWithoutJobInputSchema),z.lazy(() => ApplicationCreateWithoutJobInputSchema).array(),z.lazy(() => ApplicationUncheckedCreateWithoutJobInputSchema),z.lazy(() => ApplicationUncheckedCreateWithoutJobInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ApplicationCreateOrConnectWithoutJobInputSchema),z.lazy(() => ApplicationCreateOrConnectWithoutJobInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ApplicationCreateManyJobInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ApplicationWhereUniqueInputSchema),z.lazy(() => ApplicationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const JobUpdaterequirementsInputSchema: z.ZodType<Prisma.JobUpdaterequirementsInput> = z.object({
  set: z.string().array().optional(),
  push: z.union([ z.string(),z.string().array() ]).optional(),
}).strict();

export const JobUpdatebenefitsInputSchema: z.ZodType<Prisma.JobUpdatebenefitsInput> = z.object({
  set: z.string().array().optional(),
  push: z.union([ z.string(),z.string().array() ]).optional(),
}).strict();

export const BoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.BoolFieldUpdateOperationsInput> = z.object({
  set: z.boolean().optional()
}).strict();

export const HiringCompanyUpdateOneRequiredWithoutJobsNestedInputSchema: z.ZodType<Prisma.HiringCompanyUpdateOneRequiredWithoutJobsNestedInput> = z.object({
  create: z.union([ z.lazy(() => HiringCompanyCreateWithoutJobsInputSchema),z.lazy(() => HiringCompanyUncheckedCreateWithoutJobsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => HiringCompanyCreateOrConnectWithoutJobsInputSchema).optional(),
  upsert: z.lazy(() => HiringCompanyUpsertWithoutJobsInputSchema).optional(),
  connect: z.lazy(() => HiringCompanyWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => HiringCompanyUpdateToOneWithWhereWithoutJobsInputSchema),z.lazy(() => HiringCompanyUpdateWithoutJobsInputSchema),z.lazy(() => HiringCompanyUncheckedUpdateWithoutJobsInputSchema) ]).optional(),
}).strict();

export const ApplicationUpdateManyWithoutJobNestedInputSchema: z.ZodType<Prisma.ApplicationUpdateManyWithoutJobNestedInput> = z.object({
  create: z.union([ z.lazy(() => ApplicationCreateWithoutJobInputSchema),z.lazy(() => ApplicationCreateWithoutJobInputSchema).array(),z.lazy(() => ApplicationUncheckedCreateWithoutJobInputSchema),z.lazy(() => ApplicationUncheckedCreateWithoutJobInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ApplicationCreateOrConnectWithoutJobInputSchema),z.lazy(() => ApplicationCreateOrConnectWithoutJobInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ApplicationUpsertWithWhereUniqueWithoutJobInputSchema),z.lazy(() => ApplicationUpsertWithWhereUniqueWithoutJobInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ApplicationCreateManyJobInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ApplicationWhereUniqueInputSchema),z.lazy(() => ApplicationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ApplicationWhereUniqueInputSchema),z.lazy(() => ApplicationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ApplicationWhereUniqueInputSchema),z.lazy(() => ApplicationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ApplicationWhereUniqueInputSchema),z.lazy(() => ApplicationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ApplicationUpdateWithWhereUniqueWithoutJobInputSchema),z.lazy(() => ApplicationUpdateWithWhereUniqueWithoutJobInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ApplicationUpdateManyWithWhereWithoutJobInputSchema),z.lazy(() => ApplicationUpdateManyWithWhereWithoutJobInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ApplicationScalarWhereInputSchema),z.lazy(() => ApplicationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ApplicationUncheckedUpdateManyWithoutJobNestedInputSchema: z.ZodType<Prisma.ApplicationUncheckedUpdateManyWithoutJobNestedInput> = z.object({
  create: z.union([ z.lazy(() => ApplicationCreateWithoutJobInputSchema),z.lazy(() => ApplicationCreateWithoutJobInputSchema).array(),z.lazy(() => ApplicationUncheckedCreateWithoutJobInputSchema),z.lazy(() => ApplicationUncheckedCreateWithoutJobInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ApplicationCreateOrConnectWithoutJobInputSchema),z.lazy(() => ApplicationCreateOrConnectWithoutJobInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ApplicationUpsertWithWhereUniqueWithoutJobInputSchema),z.lazy(() => ApplicationUpsertWithWhereUniqueWithoutJobInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ApplicationCreateManyJobInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ApplicationWhereUniqueInputSchema),z.lazy(() => ApplicationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ApplicationWhereUniqueInputSchema),z.lazy(() => ApplicationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ApplicationWhereUniqueInputSchema),z.lazy(() => ApplicationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ApplicationWhereUniqueInputSchema),z.lazy(() => ApplicationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ApplicationUpdateWithWhereUniqueWithoutJobInputSchema),z.lazy(() => ApplicationUpdateWithWhereUniqueWithoutJobInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ApplicationUpdateManyWithWhereWithoutJobInputSchema),z.lazy(() => ApplicationUpdateManyWithWhereWithoutJobInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ApplicationScalarWhereInputSchema),z.lazy(() => ApplicationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const JobSeekerCreateNestedOneWithoutApplicationsInputSchema: z.ZodType<Prisma.JobSeekerCreateNestedOneWithoutApplicationsInput> = z.object({
  create: z.union([ z.lazy(() => JobSeekerCreateWithoutApplicationsInputSchema),z.lazy(() => JobSeekerUncheckedCreateWithoutApplicationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => JobSeekerCreateOrConnectWithoutApplicationsInputSchema).optional(),
  connect: z.lazy(() => JobSeekerWhereUniqueInputSchema).optional()
}).strict();

export const JobCreateNestedOneWithoutApplicationsInputSchema: z.ZodType<Prisma.JobCreateNestedOneWithoutApplicationsInput> = z.object({
  create: z.union([ z.lazy(() => JobCreateWithoutApplicationsInputSchema),z.lazy(() => JobUncheckedCreateWithoutApplicationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => JobCreateOrConnectWithoutApplicationsInputSchema).optional(),
  connect: z.lazy(() => JobWhereUniqueInputSchema).optional()
}).strict();

export const InterviewCreateNestedManyWithoutApplicationInputSchema: z.ZodType<Prisma.InterviewCreateNestedManyWithoutApplicationInput> = z.object({
  create: z.union([ z.lazy(() => InterviewCreateWithoutApplicationInputSchema),z.lazy(() => InterviewCreateWithoutApplicationInputSchema).array(),z.lazy(() => InterviewUncheckedCreateWithoutApplicationInputSchema),z.lazy(() => InterviewUncheckedCreateWithoutApplicationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InterviewCreateOrConnectWithoutApplicationInputSchema),z.lazy(() => InterviewCreateOrConnectWithoutApplicationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InterviewCreateManyApplicationInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => InterviewWhereUniqueInputSchema),z.lazy(() => InterviewWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const InterviewUncheckedCreateNestedManyWithoutApplicationInputSchema: z.ZodType<Prisma.InterviewUncheckedCreateNestedManyWithoutApplicationInput> = z.object({
  create: z.union([ z.lazy(() => InterviewCreateWithoutApplicationInputSchema),z.lazy(() => InterviewCreateWithoutApplicationInputSchema).array(),z.lazy(() => InterviewUncheckedCreateWithoutApplicationInputSchema),z.lazy(() => InterviewUncheckedCreateWithoutApplicationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InterviewCreateOrConnectWithoutApplicationInputSchema),z.lazy(() => InterviewCreateOrConnectWithoutApplicationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InterviewCreateManyApplicationInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => InterviewWhereUniqueInputSchema),z.lazy(() => InterviewWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const JobSeekerUpdateOneRequiredWithoutApplicationsNestedInputSchema: z.ZodType<Prisma.JobSeekerUpdateOneRequiredWithoutApplicationsNestedInput> = z.object({
  create: z.union([ z.lazy(() => JobSeekerCreateWithoutApplicationsInputSchema),z.lazy(() => JobSeekerUncheckedCreateWithoutApplicationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => JobSeekerCreateOrConnectWithoutApplicationsInputSchema).optional(),
  upsert: z.lazy(() => JobSeekerUpsertWithoutApplicationsInputSchema).optional(),
  connect: z.lazy(() => JobSeekerWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => JobSeekerUpdateToOneWithWhereWithoutApplicationsInputSchema),z.lazy(() => JobSeekerUpdateWithoutApplicationsInputSchema),z.lazy(() => JobSeekerUncheckedUpdateWithoutApplicationsInputSchema) ]).optional(),
}).strict();

export const JobUpdateOneRequiredWithoutApplicationsNestedInputSchema: z.ZodType<Prisma.JobUpdateOneRequiredWithoutApplicationsNestedInput> = z.object({
  create: z.union([ z.lazy(() => JobCreateWithoutApplicationsInputSchema),z.lazy(() => JobUncheckedCreateWithoutApplicationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => JobCreateOrConnectWithoutApplicationsInputSchema).optional(),
  upsert: z.lazy(() => JobUpsertWithoutApplicationsInputSchema).optional(),
  connect: z.lazy(() => JobWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => JobUpdateToOneWithWhereWithoutApplicationsInputSchema),z.lazy(() => JobUpdateWithoutApplicationsInputSchema),z.lazy(() => JobUncheckedUpdateWithoutApplicationsInputSchema) ]).optional(),
}).strict();

export const InterviewUpdateManyWithoutApplicationNestedInputSchema: z.ZodType<Prisma.InterviewUpdateManyWithoutApplicationNestedInput> = z.object({
  create: z.union([ z.lazy(() => InterviewCreateWithoutApplicationInputSchema),z.lazy(() => InterviewCreateWithoutApplicationInputSchema).array(),z.lazy(() => InterviewUncheckedCreateWithoutApplicationInputSchema),z.lazy(() => InterviewUncheckedCreateWithoutApplicationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InterviewCreateOrConnectWithoutApplicationInputSchema),z.lazy(() => InterviewCreateOrConnectWithoutApplicationInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => InterviewUpsertWithWhereUniqueWithoutApplicationInputSchema),z.lazy(() => InterviewUpsertWithWhereUniqueWithoutApplicationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InterviewCreateManyApplicationInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => InterviewWhereUniqueInputSchema),z.lazy(() => InterviewWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => InterviewWhereUniqueInputSchema),z.lazy(() => InterviewWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => InterviewWhereUniqueInputSchema),z.lazy(() => InterviewWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => InterviewWhereUniqueInputSchema),z.lazy(() => InterviewWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => InterviewUpdateWithWhereUniqueWithoutApplicationInputSchema),z.lazy(() => InterviewUpdateWithWhereUniqueWithoutApplicationInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => InterviewUpdateManyWithWhereWithoutApplicationInputSchema),z.lazy(() => InterviewUpdateManyWithWhereWithoutApplicationInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => InterviewScalarWhereInputSchema),z.lazy(() => InterviewScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const InterviewUncheckedUpdateManyWithoutApplicationNestedInputSchema: z.ZodType<Prisma.InterviewUncheckedUpdateManyWithoutApplicationNestedInput> = z.object({
  create: z.union([ z.lazy(() => InterviewCreateWithoutApplicationInputSchema),z.lazy(() => InterviewCreateWithoutApplicationInputSchema).array(),z.lazy(() => InterviewUncheckedCreateWithoutApplicationInputSchema),z.lazy(() => InterviewUncheckedCreateWithoutApplicationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InterviewCreateOrConnectWithoutApplicationInputSchema),z.lazy(() => InterviewCreateOrConnectWithoutApplicationInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => InterviewUpsertWithWhereUniqueWithoutApplicationInputSchema),z.lazy(() => InterviewUpsertWithWhereUniqueWithoutApplicationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InterviewCreateManyApplicationInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => InterviewWhereUniqueInputSchema),z.lazy(() => InterviewWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => InterviewWhereUniqueInputSchema),z.lazy(() => InterviewWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => InterviewWhereUniqueInputSchema),z.lazy(() => InterviewWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => InterviewWhereUniqueInputSchema),z.lazy(() => InterviewWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => InterviewUpdateWithWhereUniqueWithoutApplicationInputSchema),z.lazy(() => InterviewUpdateWithWhereUniqueWithoutApplicationInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => InterviewUpdateManyWithWhereWithoutApplicationInputSchema),z.lazy(() => InterviewUpdateManyWithWhereWithoutApplicationInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => InterviewScalarWhereInputSchema),z.lazy(() => InterviewScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ApplicationCreateNestedOneWithoutInterviewsInputSchema: z.ZodType<Prisma.ApplicationCreateNestedOneWithoutInterviewsInput> = z.object({
  create: z.union([ z.lazy(() => ApplicationCreateWithoutInterviewsInputSchema),z.lazy(() => ApplicationUncheckedCreateWithoutInterviewsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ApplicationCreateOrConnectWithoutInterviewsInputSchema).optional(),
  connect: z.lazy(() => ApplicationWhereUniqueInputSchema).optional()
}).strict();

export const ApplicationUpdateOneRequiredWithoutInterviewsNestedInputSchema: z.ZodType<Prisma.ApplicationUpdateOneRequiredWithoutInterviewsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ApplicationCreateWithoutInterviewsInputSchema),z.lazy(() => ApplicationUncheckedCreateWithoutInterviewsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ApplicationCreateOrConnectWithoutInterviewsInputSchema).optional(),
  upsert: z.lazy(() => ApplicationUpsertWithoutInterviewsInputSchema).optional(),
  connect: z.lazy(() => ApplicationWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ApplicationUpdateToOneWithWhereWithoutInterviewsInputSchema),z.lazy(() => ApplicationUpdateWithoutInterviewsInputSchema),z.lazy(() => ApplicationUncheckedUpdateWithoutInterviewsInputSchema) ]).optional(),
}).strict();

export const SelfAssessmentResponseListCreateEnvelopeInputSchema: z.ZodType<Prisma.SelfAssessmentResponseListCreateEnvelopeInput> = z.object({
  set: z.union([ z.lazy(() => SelfAssessmentResponseCreateInputSchema),z.lazy(() => SelfAssessmentResponseCreateInputSchema).array() ]).optional(),
}).strict();

export const SelfAssessmentResponseCreateInputSchema: z.ZodType<Prisma.SelfAssessmentResponseCreateInput> = z.object({
  question: z.string(),
  answer: z.string()
}).strict();

export const UserCreateNestedOneWithoutSelfAssessmentInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutSelfAssessmentInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutSelfAssessmentInputSchema),z.lazy(() => UserUncheckedCreateWithoutSelfAssessmentInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSelfAssessmentInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const SelfAssessmentResponseListUpdateEnvelopeInputSchema: z.ZodType<Prisma.SelfAssessmentResponseListUpdateEnvelopeInput> = z.object({
  set: z.union([ z.lazy(() => SelfAssessmentResponseCreateInputSchema),z.lazy(() => SelfAssessmentResponseCreateInputSchema).array() ]).optional(),
  push: z.union([ z.lazy(() => SelfAssessmentResponseCreateInputSchema),z.lazy(() => SelfAssessmentResponseCreateInputSchema).array() ]).optional(),
  updateMany: z.lazy(() => SelfAssessmentResponseUpdateManyInputSchema).optional(),
  deleteMany: z.lazy(() => SelfAssessmentResponseDeleteManyInputSchema).optional()
}).strict();

export const UserUpdateOneRequiredWithoutSelfAssessmentNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutSelfAssessmentNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutSelfAssessmentInputSchema),z.lazy(() => UserUncheckedCreateWithoutSelfAssessmentInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSelfAssessmentInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutSelfAssessmentInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutSelfAssessmentInputSchema),z.lazy(() => UserUpdateWithoutSelfAssessmentInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSelfAssessmentInputSchema) ]).optional(),
}).strict();

export const QuizQuestionListCreateEnvelopeInputSchema: z.ZodType<Prisma.QuizQuestionListCreateEnvelopeInput> = z.object({
  set: z.union([ z.lazy(() => QuizQuestionCreateInputSchema),z.lazy(() => QuizQuestionCreateInputSchema).array() ]).optional(),
}).strict();

export const QuizQuestionCreateInputSchema: z.ZodType<Prisma.QuizQuestionCreateInput> = z.object({
  questionId: z.number(),
  question: z.string(),
  difficulty: z.number(),
  options: z.union([ z.lazy(() => QuizOptionCreateInputSchema),z.lazy(() => QuizOptionCreateInputSchema).array() ]).optional(),
  correctOptionId: z.number()
}).strict();

export const QuizQuestionListUpdateEnvelopeInputSchema: z.ZodType<Prisma.QuizQuestionListUpdateEnvelopeInput> = z.object({
  set: z.union([ z.lazy(() => QuizQuestionCreateInputSchema),z.lazy(() => QuizQuestionCreateInputSchema).array() ]).optional(),
  push: z.union([ z.lazy(() => QuizQuestionCreateInputSchema),z.lazy(() => QuizQuestionCreateInputSchema).array() ]).optional(),
  updateMany: z.lazy(() => QuizQuestionUpdateManyInputSchema).optional(),
  deleteMany: z.lazy(() => QuizQuestionDeleteManyInputSchema).optional()
}).strict();

export const QuizAnswerListCreateEnvelopeInputSchema: z.ZodType<Prisma.QuizAnswerListCreateEnvelopeInput> = z.object({
  set: z.union([ z.lazy(() => QuizAnswerCreateInputSchema),z.lazy(() => QuizAnswerCreateInputSchema).array() ]).optional(),
}).strict();

export const QuizAnswerCreateInputSchema: z.ZodType<Prisma.QuizAnswerCreateInput> = z.object({
  questionId: z.number(),
  optionId: z.number()
}).strict();

export const FloatFieldUpdateOperationsInputSchema: z.ZodType<Prisma.FloatFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const QuizAnswerListUpdateEnvelopeInputSchema: z.ZodType<Prisma.QuizAnswerListUpdateEnvelopeInput> = z.object({
  set: z.union([ z.lazy(() => QuizAnswerCreateInputSchema),z.lazy(() => QuizAnswerCreateInputSchema).array() ]).optional(),
  push: z.union([ z.lazy(() => QuizAnswerCreateInputSchema),z.lazy(() => QuizAnswerCreateInputSchema).array() ]).optional(),
  updateMany: z.lazy(() => QuizAnswerUpdateManyInputSchema).optional(),
  deleteMany: z.lazy(() => QuizAnswerDeleteManyInputSchema).optional()
}).strict();

export const UserCreateNestedOneWithoutThreadsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutThreadsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutThreadsInputSchema),z.lazy(() => UserUncheckedCreateWithoutThreadsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutThreadsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const ForumPostCreateNestedManyWithoutThreadInputSchema: z.ZodType<Prisma.ForumPostCreateNestedManyWithoutThreadInput> = z.object({
  create: z.union([ z.lazy(() => ForumPostCreateWithoutThreadInputSchema),z.lazy(() => ForumPostCreateWithoutThreadInputSchema).array(),z.lazy(() => ForumPostUncheckedCreateWithoutThreadInputSchema),z.lazy(() => ForumPostUncheckedCreateWithoutThreadInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ForumPostCreateOrConnectWithoutThreadInputSchema),z.lazy(() => ForumPostCreateOrConnectWithoutThreadInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ForumPostCreateManyThreadInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ForumPostWhereUniqueInputSchema),z.lazy(() => ForumPostWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ForumPostUncheckedCreateNestedManyWithoutThreadInputSchema: z.ZodType<Prisma.ForumPostUncheckedCreateNestedManyWithoutThreadInput> = z.object({
  create: z.union([ z.lazy(() => ForumPostCreateWithoutThreadInputSchema),z.lazy(() => ForumPostCreateWithoutThreadInputSchema).array(),z.lazy(() => ForumPostUncheckedCreateWithoutThreadInputSchema),z.lazy(() => ForumPostUncheckedCreateWithoutThreadInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ForumPostCreateOrConnectWithoutThreadInputSchema),z.lazy(() => ForumPostCreateOrConnectWithoutThreadInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ForumPostCreateManyThreadInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ForumPostWhereUniqueInputSchema),z.lazy(() => ForumPostWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UserUpdateOneRequiredWithoutThreadsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutThreadsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutThreadsInputSchema),z.lazy(() => UserUncheckedCreateWithoutThreadsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutThreadsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutThreadsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutThreadsInputSchema),z.lazy(() => UserUpdateWithoutThreadsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutThreadsInputSchema) ]).optional(),
}).strict();

export const ForumPostUpdateManyWithoutThreadNestedInputSchema: z.ZodType<Prisma.ForumPostUpdateManyWithoutThreadNestedInput> = z.object({
  create: z.union([ z.lazy(() => ForumPostCreateWithoutThreadInputSchema),z.lazy(() => ForumPostCreateWithoutThreadInputSchema).array(),z.lazy(() => ForumPostUncheckedCreateWithoutThreadInputSchema),z.lazy(() => ForumPostUncheckedCreateWithoutThreadInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ForumPostCreateOrConnectWithoutThreadInputSchema),z.lazy(() => ForumPostCreateOrConnectWithoutThreadInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ForumPostUpsertWithWhereUniqueWithoutThreadInputSchema),z.lazy(() => ForumPostUpsertWithWhereUniqueWithoutThreadInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ForumPostCreateManyThreadInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ForumPostWhereUniqueInputSchema),z.lazy(() => ForumPostWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ForumPostWhereUniqueInputSchema),z.lazy(() => ForumPostWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ForumPostWhereUniqueInputSchema),z.lazy(() => ForumPostWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ForumPostWhereUniqueInputSchema),z.lazy(() => ForumPostWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ForumPostUpdateWithWhereUniqueWithoutThreadInputSchema),z.lazy(() => ForumPostUpdateWithWhereUniqueWithoutThreadInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ForumPostUpdateManyWithWhereWithoutThreadInputSchema),z.lazy(() => ForumPostUpdateManyWithWhereWithoutThreadInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ForumPostScalarWhereInputSchema),z.lazy(() => ForumPostScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ForumPostUncheckedUpdateManyWithoutThreadNestedInputSchema: z.ZodType<Prisma.ForumPostUncheckedUpdateManyWithoutThreadNestedInput> = z.object({
  create: z.union([ z.lazy(() => ForumPostCreateWithoutThreadInputSchema),z.lazy(() => ForumPostCreateWithoutThreadInputSchema).array(),z.lazy(() => ForumPostUncheckedCreateWithoutThreadInputSchema),z.lazy(() => ForumPostUncheckedCreateWithoutThreadInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ForumPostCreateOrConnectWithoutThreadInputSchema),z.lazy(() => ForumPostCreateOrConnectWithoutThreadInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ForumPostUpsertWithWhereUniqueWithoutThreadInputSchema),z.lazy(() => ForumPostUpsertWithWhereUniqueWithoutThreadInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ForumPostCreateManyThreadInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ForumPostWhereUniqueInputSchema),z.lazy(() => ForumPostWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ForumPostWhereUniqueInputSchema),z.lazy(() => ForumPostWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ForumPostWhereUniqueInputSchema),z.lazy(() => ForumPostWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ForumPostWhereUniqueInputSchema),z.lazy(() => ForumPostWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ForumPostUpdateWithWhereUniqueWithoutThreadInputSchema),z.lazy(() => ForumPostUpdateWithWhereUniqueWithoutThreadInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ForumPostUpdateManyWithWhereWithoutThreadInputSchema),z.lazy(() => ForumPostUpdateManyWithWhereWithoutThreadInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ForumPostScalarWhereInputSchema),z.lazy(() => ForumPostScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutPostsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutPostsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutPostsInputSchema),z.lazy(() => UserUncheckedCreateWithoutPostsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPostsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const ForumThreadCreateNestedOneWithoutPostsInputSchema: z.ZodType<Prisma.ForumThreadCreateNestedOneWithoutPostsInput> = z.object({
  create: z.union([ z.lazy(() => ForumThreadCreateWithoutPostsInputSchema),z.lazy(() => ForumThreadUncheckedCreateWithoutPostsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ForumThreadCreateOrConnectWithoutPostsInputSchema).optional(),
  connect: z.lazy(() => ForumThreadWhereUniqueInputSchema).optional()
}).strict();

export const ForumCommentCreateNestedManyWithoutPostInputSchema: z.ZodType<Prisma.ForumCommentCreateNestedManyWithoutPostInput> = z.object({
  create: z.union([ z.lazy(() => ForumCommentCreateWithoutPostInputSchema),z.lazy(() => ForumCommentCreateWithoutPostInputSchema).array(),z.lazy(() => ForumCommentUncheckedCreateWithoutPostInputSchema),z.lazy(() => ForumCommentUncheckedCreateWithoutPostInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ForumCommentCreateOrConnectWithoutPostInputSchema),z.lazy(() => ForumCommentCreateOrConnectWithoutPostInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ForumCommentCreateManyPostInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ForumCommentWhereUniqueInputSchema),z.lazy(() => ForumCommentWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ForumCommentUncheckedCreateNestedManyWithoutPostInputSchema: z.ZodType<Prisma.ForumCommentUncheckedCreateNestedManyWithoutPostInput> = z.object({
  create: z.union([ z.lazy(() => ForumCommentCreateWithoutPostInputSchema),z.lazy(() => ForumCommentCreateWithoutPostInputSchema).array(),z.lazy(() => ForumCommentUncheckedCreateWithoutPostInputSchema),z.lazy(() => ForumCommentUncheckedCreateWithoutPostInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ForumCommentCreateOrConnectWithoutPostInputSchema),z.lazy(() => ForumCommentCreateOrConnectWithoutPostInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ForumCommentCreateManyPostInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ForumCommentWhereUniqueInputSchema),z.lazy(() => ForumCommentWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UserUpdateOneRequiredWithoutPostsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutPostsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutPostsInputSchema),z.lazy(() => UserUncheckedCreateWithoutPostsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPostsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutPostsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutPostsInputSchema),z.lazy(() => UserUpdateWithoutPostsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutPostsInputSchema) ]).optional(),
}).strict();

export const ForumThreadUpdateOneRequiredWithoutPostsNestedInputSchema: z.ZodType<Prisma.ForumThreadUpdateOneRequiredWithoutPostsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ForumThreadCreateWithoutPostsInputSchema),z.lazy(() => ForumThreadUncheckedCreateWithoutPostsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ForumThreadCreateOrConnectWithoutPostsInputSchema).optional(),
  upsert: z.lazy(() => ForumThreadUpsertWithoutPostsInputSchema).optional(),
  connect: z.lazy(() => ForumThreadWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ForumThreadUpdateToOneWithWhereWithoutPostsInputSchema),z.lazy(() => ForumThreadUpdateWithoutPostsInputSchema),z.lazy(() => ForumThreadUncheckedUpdateWithoutPostsInputSchema) ]).optional(),
}).strict();

export const ForumCommentUpdateManyWithoutPostNestedInputSchema: z.ZodType<Prisma.ForumCommentUpdateManyWithoutPostNestedInput> = z.object({
  create: z.union([ z.lazy(() => ForumCommentCreateWithoutPostInputSchema),z.lazy(() => ForumCommentCreateWithoutPostInputSchema).array(),z.lazy(() => ForumCommentUncheckedCreateWithoutPostInputSchema),z.lazy(() => ForumCommentUncheckedCreateWithoutPostInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ForumCommentCreateOrConnectWithoutPostInputSchema),z.lazy(() => ForumCommentCreateOrConnectWithoutPostInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ForumCommentUpsertWithWhereUniqueWithoutPostInputSchema),z.lazy(() => ForumCommentUpsertWithWhereUniqueWithoutPostInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ForumCommentCreateManyPostInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ForumCommentWhereUniqueInputSchema),z.lazy(() => ForumCommentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ForumCommentWhereUniqueInputSchema),z.lazy(() => ForumCommentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ForumCommentWhereUniqueInputSchema),z.lazy(() => ForumCommentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ForumCommentWhereUniqueInputSchema),z.lazy(() => ForumCommentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ForumCommentUpdateWithWhereUniqueWithoutPostInputSchema),z.lazy(() => ForumCommentUpdateWithWhereUniqueWithoutPostInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ForumCommentUpdateManyWithWhereWithoutPostInputSchema),z.lazy(() => ForumCommentUpdateManyWithWhereWithoutPostInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ForumCommentScalarWhereInputSchema),z.lazy(() => ForumCommentScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ForumCommentUncheckedUpdateManyWithoutPostNestedInputSchema: z.ZodType<Prisma.ForumCommentUncheckedUpdateManyWithoutPostNestedInput> = z.object({
  create: z.union([ z.lazy(() => ForumCommentCreateWithoutPostInputSchema),z.lazy(() => ForumCommentCreateWithoutPostInputSchema).array(),z.lazy(() => ForumCommentUncheckedCreateWithoutPostInputSchema),z.lazy(() => ForumCommentUncheckedCreateWithoutPostInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ForumCommentCreateOrConnectWithoutPostInputSchema),z.lazy(() => ForumCommentCreateOrConnectWithoutPostInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ForumCommentUpsertWithWhereUniqueWithoutPostInputSchema),z.lazy(() => ForumCommentUpsertWithWhereUniqueWithoutPostInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ForumCommentCreateManyPostInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ForumCommentWhereUniqueInputSchema),z.lazy(() => ForumCommentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ForumCommentWhereUniqueInputSchema),z.lazy(() => ForumCommentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ForumCommentWhereUniqueInputSchema),z.lazy(() => ForumCommentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ForumCommentWhereUniqueInputSchema),z.lazy(() => ForumCommentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ForumCommentUpdateWithWhereUniqueWithoutPostInputSchema),z.lazy(() => ForumCommentUpdateWithWhereUniqueWithoutPostInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ForumCommentUpdateManyWithWhereWithoutPostInputSchema),z.lazy(() => ForumCommentUpdateManyWithWhereWithoutPostInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ForumCommentScalarWhereInputSchema),z.lazy(() => ForumCommentScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutCommentsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutCommentsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutCommentsInputSchema),z.lazy(() => UserUncheckedCreateWithoutCommentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCommentsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const ForumPostCreateNestedOneWithoutCommentsInputSchema: z.ZodType<Prisma.ForumPostCreateNestedOneWithoutCommentsInput> = z.object({
  create: z.union([ z.lazy(() => ForumPostCreateWithoutCommentsInputSchema),z.lazy(() => ForumPostUncheckedCreateWithoutCommentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ForumPostCreateOrConnectWithoutCommentsInputSchema).optional(),
  connect: z.lazy(() => ForumPostWhereUniqueInputSchema).optional()
}).strict();

export const UserUpdateOneRequiredWithoutCommentsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutCommentsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutCommentsInputSchema),z.lazy(() => UserUncheckedCreateWithoutCommentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCommentsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutCommentsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutCommentsInputSchema),z.lazy(() => UserUpdateWithoutCommentsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCommentsInputSchema) ]).optional(),
}).strict();

export const ForumPostUpdateOneRequiredWithoutCommentsNestedInputSchema: z.ZodType<Prisma.ForumPostUpdateOneRequiredWithoutCommentsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ForumPostCreateWithoutCommentsInputSchema),z.lazy(() => ForumPostUncheckedCreateWithoutCommentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ForumPostCreateOrConnectWithoutCommentsInputSchema).optional(),
  upsert: z.lazy(() => ForumPostUpsertWithoutCommentsInputSchema).optional(),
  connect: z.lazy(() => ForumPostWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ForumPostUpdateToOneWithWhereWithoutCommentsInputSchema),z.lazy(() => ForumPostUpdateWithoutCommentsInputSchema),z.lazy(() => ForumPostUncheckedUpdateWithoutCommentsInputSchema) ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();

export const NestedDateTimeNullableFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  isSet: z.boolean().optional()
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();

export const NestedDateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  isSet: z.boolean().optional()
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const PersonalInfoWhereInputSchema: z.ZodType<Prisma.PersonalInfoWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PersonalInfoWhereInputSchema),z.lazy(() => PersonalInfoWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PersonalInfoWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PersonalInfoWhereInputSchema),z.lazy(() => PersonalInfoWhereInputSchema).array() ]).optional(),
  fullName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  image: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  dob: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  mobile: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  relative: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  address: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  city: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  state: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  postalCode: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  country: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  linkedIn: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  github: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  twitter: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  facebook: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  hobbies: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  areaImprovementCurrent: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  areaImprovementFuture: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const SkillWhereInputSchema: z.ZodType<Prisma.SkillWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SkillWhereInputSchema),z.lazy(() => SkillWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SkillWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SkillWhereInputSchema),z.lazy(() => SkillWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  level: z.union([ z.lazy(() => EnumLevelFilterSchema),z.lazy(() => LevelSchema) ]).optional(),
  experienceYears: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const NestedIntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  isSet: z.boolean().optional()
}).strict();

export const NestedFloatNullableFilterSchema: z.ZodType<Prisma.NestedFloatNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatNullableFilterSchema) ]).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();

export const EducationLevelWhereInputSchema: z.ZodType<Prisma.EducationLevelWhereInput> = z.object({
  AND: z.union([ z.lazy(() => EducationLevelWhereInputSchema),z.lazy(() => EducationLevelWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EducationLevelWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EducationLevelWhereInputSchema),z.lazy(() => EducationLevelWhereInputSchema).array() ]).optional(),
  level: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  board: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  institute: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  degree: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  subjects: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  year: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  expectedYear: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  currentSemester: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  grade: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  completed: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
}).strict();

export const ExperienceDetailsWhereInputSchema: z.ZodType<Prisma.ExperienceDetailsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ExperienceDetailsWhereInputSchema),z.lazy(() => ExperienceDetailsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ExperienceDetailsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ExperienceDetailsWhereInputSchema),z.lazy(() => ExperienceDetailsWhereInputSchema).array() ]).optional(),
  company: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  jobTitle: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  employmentType: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  locationType: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  location: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  startDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  current: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  endDate: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  skills: z.lazy(() => StringNullableListFilterSchema).optional()
}).strict();

export const NestedBoolFilterSchema: z.ZodType<Prisma.NestedBoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
}).strict();

export const NestedBoolWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();

export const SelfAssessmentResponseWhereInputSchema: z.ZodType<Prisma.SelfAssessmentResponseWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SelfAssessmentResponseWhereInputSchema),z.lazy(() => SelfAssessmentResponseWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SelfAssessmentResponseWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SelfAssessmentResponseWhereInputSchema),z.lazy(() => SelfAssessmentResponseWhereInputSchema).array() ]).optional(),
  question: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  answer: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const QuizQuestionWhereInputSchema: z.ZodType<Prisma.QuizQuestionWhereInput> = z.object({
  AND: z.union([ z.lazy(() => QuizQuestionWhereInputSchema),z.lazy(() => QuizQuestionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => QuizQuestionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => QuizQuestionWhereInputSchema),z.lazy(() => QuizQuestionWhereInputSchema).array() ]).optional(),
  questionId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  question: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  difficulty: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  options: z.union([ z.lazy(() => QuizOptionCompositeListFilterSchema),z.lazy(() => QuizOptionObjectEqualityInputSchema).array() ]).optional(),
  correctOptionId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const QuizOptionObjectEqualityInputSchema: z.ZodType<Prisma.QuizOptionObjectEqualityInput> = z.object({
  optionId: z.number(),
  option: z.string()
}).strict();

export const QuizAnswerWhereInputSchema: z.ZodType<Prisma.QuizAnswerWhereInput> = z.object({
  AND: z.union([ z.lazy(() => QuizAnswerWhereInputSchema),z.lazy(() => QuizAnswerWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => QuizAnswerWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => QuizAnswerWhereInputSchema),z.lazy(() => QuizAnswerWhereInputSchema).array() ]).optional(),
  questionId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  optionId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const NestedFloatWithAggregatesFilterSchema: z.ZodType<Prisma.NestedFloatWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatFilterSchema).optional()
}).strict();

export const AccountCreateWithoutUserInputSchema: z.ZodType<Prisma.AccountCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional().nullable(),
  access_token: z.string().optional().nullable(),
  expires_at: z.number().int().optional().nullable(),
  token_type: z.string().optional().nullable(),
  scope: z.string().optional().nullable(),
  id_token: z.string().optional().nullable(),
  session_state: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const AccountUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional().nullable(),
  access_token: z.string().optional().nullable(),
  expires_at: z.number().int().optional().nullable(),
  token_type: z.string().optional().nullable(),
  scope: z.string().optional().nullable(),
  id_token: z.string().optional().nullable(),
  session_state: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const AccountCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.AccountCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => AccountWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const AccountCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.AccountCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => AccountCreateManyUserInputSchema),z.lazy(() => AccountCreateManyUserInputSchema).array() ]),
}).strict();

export const SessionCreateWithoutUserInputSchema: z.ZodType<Prisma.SessionCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  sessionToken: z.string(),
  expires: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const SessionUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  sessionToken: z.string(),
  expires: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const SessionCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.SessionCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => SessionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const SessionCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.SessionCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => SessionCreateManyUserInputSchema),z.lazy(() => SessionCreateManyUserInputSchema).array() ]),
}).strict();

export const JobSeekerCreateWithoutUserInputSchema: z.ZodType<Prisma.JobSeekerCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  firstName: z.string(),
  lastName: z.string(),
  dob: z.coerce.date(),
  gender: z.string(),
  contactNumber: z.string(),
  address: z.string(),
  city: z.string(),
  state: z.string(),
  postalCode: z.string(),
  country: z.string(),
  skills: z.union([ z.lazy(() => SkillListCreateEnvelopeInputSchema),z.lazy(() => SkillCreateInputSchema),z.lazy(() => SkillCreateInputSchema).array() ]).optional(),
  portfolioLinks: z.union([ z.lazy(() => JobSeekerCreateportfolioLinksInputSchema),z.string().array() ]).optional(),
  preferredJobRoles: z.union([ z.lazy(() => JobSeekerCreatepreferredJobRolesInputSchema),z.string().array() ]).optional(),
  resume: z.string(),
  profilePicture: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  certifications: z.lazy(() => CertificationCreateNestedManyWithoutJobSeekerInputSchema).optional(),
  applications: z.lazy(() => ApplicationCreateNestedManyWithoutJobSeekerInputSchema).optional()
}).strict();

export const JobSeekerUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.JobSeekerUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  firstName: z.string(),
  lastName: z.string(),
  dob: z.coerce.date(),
  gender: z.string(),
  contactNumber: z.string(),
  address: z.string(),
  city: z.string(),
  state: z.string(),
  postalCode: z.string(),
  country: z.string(),
  skills: z.union([ z.lazy(() => SkillListCreateEnvelopeInputSchema),z.lazy(() => SkillCreateInputSchema),z.lazy(() => SkillCreateInputSchema).array() ]).optional(),
  portfolioLinks: z.union([ z.lazy(() => JobSeekerCreateportfolioLinksInputSchema),z.string().array() ]).optional(),
  preferredJobRoles: z.union([ z.lazy(() => JobSeekerCreatepreferredJobRolesInputSchema),z.string().array() ]).optional(),
  resume: z.string(),
  profilePicture: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  certifications: z.lazy(() => CertificationUncheckedCreateNestedManyWithoutJobSeekerInputSchema).optional(),
  applications: z.lazy(() => ApplicationUncheckedCreateNestedManyWithoutJobSeekerInputSchema).optional()
}).strict();

export const JobSeekerCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.JobSeekerCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => JobSeekerWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => JobSeekerCreateWithoutUserInputSchema),z.lazy(() => JobSeekerUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const HiringCompanyCreateWithoutUserInputSchema: z.ZodType<Prisma.HiringCompanyCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  companyName: z.string(),
  industry: z.string(),
  companySize: z.string(),
  website: z.string(),
  socialLinks: z.union([ z.lazy(() => HiringCompanyCreatesocialLinksInputSchema),z.string().array() ]).optional(),
  contactPerson: z.string(),
  contactEmail: z.string(),
  contactNumber: z.string(),
  address: z.string(),
  city: z.string(),
  state: z.string(),
  postalCode: z.string(),
  country: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  jobs: z.lazy(() => JobCreateNestedManyWithoutHiringCompanyInputSchema).optional()
}).strict();

export const HiringCompanyUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.HiringCompanyUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  companyName: z.string(),
  industry: z.string(),
  companySize: z.string(),
  website: z.string(),
  socialLinks: z.union([ z.lazy(() => HiringCompanyCreatesocialLinksInputSchema),z.string().array() ]).optional(),
  contactPerson: z.string(),
  contactEmail: z.string(),
  contactNumber: z.string(),
  address: z.string(),
  city: z.string(),
  state: z.string(),
  postalCode: z.string(),
  country: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  jobs: z.lazy(() => JobUncheckedCreateNestedManyWithoutHiringCompanyInputSchema).optional()
}).strict();

export const HiringCompanyCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.HiringCompanyCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => HiringCompanyWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => HiringCompanyCreateWithoutUserInputSchema),z.lazy(() => HiringCompanyUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const SelfAssessmentCreateWithoutUserInputSchema: z.ZodType<Prisma.SelfAssessmentCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  selfAssessmentResponse: z.union([ z.lazy(() => SelfAssessmentResponseListCreateEnvelopeInputSchema),z.lazy(() => SelfAssessmentResponseCreateInputSchema),z.lazy(() => SelfAssessmentResponseCreateInputSchema).array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const SelfAssessmentUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.SelfAssessmentUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  selfAssessmentResponse: z.union([ z.lazy(() => SelfAssessmentResponseListCreateEnvelopeInputSchema),z.lazy(() => SelfAssessmentResponseCreateInputSchema),z.lazy(() => SelfAssessmentResponseCreateInputSchema).array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const SelfAssessmentCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.SelfAssessmentCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => SelfAssessmentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SelfAssessmentCreateWithoutUserInputSchema),z.lazy(() => SelfAssessmentUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const ForumThreadCreateWithoutAuthorInputSchema: z.ZodType<Prisma.ForumThreadCreateWithoutAuthorInput> = z.object({
  id: z.string().optional(),
  slug: z.string(),
  title: z.string(),
  content: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  posts: z.lazy(() => ForumPostCreateNestedManyWithoutThreadInputSchema).optional()
}).strict();

export const ForumThreadUncheckedCreateWithoutAuthorInputSchema: z.ZodType<Prisma.ForumThreadUncheckedCreateWithoutAuthorInput> = z.object({
  id: z.string().optional(),
  slug: z.string(),
  title: z.string(),
  content: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  posts: z.lazy(() => ForumPostUncheckedCreateNestedManyWithoutThreadInputSchema).optional()
}).strict();

export const ForumThreadCreateOrConnectWithoutAuthorInputSchema: z.ZodType<Prisma.ForumThreadCreateOrConnectWithoutAuthorInput> = z.object({
  where: z.lazy(() => ForumThreadWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ForumThreadCreateWithoutAuthorInputSchema),z.lazy(() => ForumThreadUncheckedCreateWithoutAuthorInputSchema) ]),
}).strict();

export const ForumThreadCreateManyAuthorInputEnvelopeSchema: z.ZodType<Prisma.ForumThreadCreateManyAuthorInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ForumThreadCreateManyAuthorInputSchema),z.lazy(() => ForumThreadCreateManyAuthorInputSchema).array() ]),
}).strict();

export const ForumPostCreateWithoutAuthorInputSchema: z.ZodType<Prisma.ForumPostCreateWithoutAuthorInput> = z.object({
  id: z.string().optional(),
  content: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  thread: z.lazy(() => ForumThreadCreateNestedOneWithoutPostsInputSchema),
  comments: z.lazy(() => ForumCommentCreateNestedManyWithoutPostInputSchema).optional()
}).strict();

export const ForumPostUncheckedCreateWithoutAuthorInputSchema: z.ZodType<Prisma.ForumPostUncheckedCreateWithoutAuthorInput> = z.object({
  id: z.string().optional(),
  content: z.string(),
  threadId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  comments: z.lazy(() => ForumCommentUncheckedCreateNestedManyWithoutPostInputSchema).optional()
}).strict();

export const ForumPostCreateOrConnectWithoutAuthorInputSchema: z.ZodType<Prisma.ForumPostCreateOrConnectWithoutAuthorInput> = z.object({
  where: z.lazy(() => ForumPostWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ForumPostCreateWithoutAuthorInputSchema),z.lazy(() => ForumPostUncheckedCreateWithoutAuthorInputSchema) ]),
}).strict();

export const ForumPostCreateManyAuthorInputEnvelopeSchema: z.ZodType<Prisma.ForumPostCreateManyAuthorInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ForumPostCreateManyAuthorInputSchema),z.lazy(() => ForumPostCreateManyAuthorInputSchema).array() ]),
}).strict();

export const ForumCommentCreateWithoutAuthorInputSchema: z.ZodType<Prisma.ForumCommentCreateWithoutAuthorInput> = z.object({
  id: z.string().optional(),
  content: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  post: z.lazy(() => ForumPostCreateNestedOneWithoutCommentsInputSchema)
}).strict();

export const ForumCommentUncheckedCreateWithoutAuthorInputSchema: z.ZodType<Prisma.ForumCommentUncheckedCreateWithoutAuthorInput> = z.object({
  id: z.string().optional(),
  content: z.string(),
  postId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const ForumCommentCreateOrConnectWithoutAuthorInputSchema: z.ZodType<Prisma.ForumCommentCreateOrConnectWithoutAuthorInput> = z.object({
  where: z.lazy(() => ForumCommentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ForumCommentCreateWithoutAuthorInputSchema),z.lazy(() => ForumCommentUncheckedCreateWithoutAuthorInputSchema) ]),
}).strict();

export const ForumCommentCreateManyAuthorInputEnvelopeSchema: z.ZodType<Prisma.ForumCommentCreateManyAuthorInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ForumCommentCreateManyAuthorInputSchema),z.lazy(() => ForumCommentCreateManyAuthorInputSchema).array() ]),
}).strict();

export const AccountUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.AccountUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => AccountWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => AccountUpdateWithoutUserInputSchema),z.lazy(() => AccountUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const AccountUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.AccountUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => AccountWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => AccountUpdateWithoutUserInputSchema),z.lazy(() => AccountUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const AccountUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.AccountUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => AccountScalarWhereInputSchema),
  data: z.union([ z.lazy(() => AccountUpdateManyMutationInputSchema),z.lazy(() => AccountUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const AccountScalarWhereInputSchema: z.ZodType<Prisma.AccountScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AccountScalarWhereInputSchema),z.lazy(() => AccountScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AccountScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AccountScalarWhereInputSchema),z.lazy(() => AccountScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  provider: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  providerAccountId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  refresh_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  access_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  expires_at: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  token_type: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  scope: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  id_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  session_state: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const SessionUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.SessionUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => SessionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SessionUpdateWithoutUserInputSchema),z.lazy(() => SessionUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const SessionUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.SessionUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => SessionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SessionUpdateWithoutUserInputSchema),z.lazy(() => SessionUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const SessionUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.SessionUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => SessionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SessionUpdateManyMutationInputSchema),z.lazy(() => SessionUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const SessionScalarWhereInputSchema: z.ZodType<Prisma.SessionScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SessionScalarWhereInputSchema),z.lazy(() => SessionScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SessionScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SessionScalarWhereInputSchema),z.lazy(() => SessionScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  sessionToken: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const JobSeekerUpsertWithoutUserInputSchema: z.ZodType<Prisma.JobSeekerUpsertWithoutUserInput> = z.object({
  update: z.union([ z.lazy(() => JobSeekerUpdateWithoutUserInputSchema),z.lazy(() => JobSeekerUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => JobSeekerCreateWithoutUserInputSchema),z.lazy(() => JobSeekerUncheckedCreateWithoutUserInputSchema) ]),
  where: z.lazy(() => JobSeekerWhereInputSchema).optional()
}).strict();

export const JobSeekerUpdateToOneWithWhereWithoutUserInputSchema: z.ZodType<Prisma.JobSeekerUpdateToOneWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => JobSeekerWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => JobSeekerUpdateWithoutUserInputSchema),z.lazy(() => JobSeekerUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const JobSeekerUpdateWithoutUserInputSchema: z.ZodType<Prisma.JobSeekerUpdateWithoutUserInput> = z.object({
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dob: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  gender: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  contactNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  postalCode: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  country: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  skills: z.union([ z.lazy(() => SkillListUpdateEnvelopeInputSchema),z.lazy(() => SkillCreateInputSchema),z.lazy(() => SkillCreateInputSchema).array() ]).optional(),
  portfolioLinks: z.union([ z.lazy(() => JobSeekerUpdateportfolioLinksInputSchema),z.string().array() ]).optional(),
  preferredJobRoles: z.union([ z.lazy(() => JobSeekerUpdatepreferredJobRolesInputSchema),z.string().array() ]).optional(),
  resume: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  profilePicture: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  certifications: z.lazy(() => CertificationUpdateManyWithoutJobSeekerNestedInputSchema).optional(),
  applications: z.lazy(() => ApplicationUpdateManyWithoutJobSeekerNestedInputSchema).optional()
}).strict();

export const JobSeekerUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.JobSeekerUncheckedUpdateWithoutUserInput> = z.object({
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dob: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  gender: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  contactNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  postalCode: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  country: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  skills: z.union([ z.lazy(() => SkillListUpdateEnvelopeInputSchema),z.lazy(() => SkillCreateInputSchema),z.lazy(() => SkillCreateInputSchema).array() ]).optional(),
  portfolioLinks: z.union([ z.lazy(() => JobSeekerUpdateportfolioLinksInputSchema),z.string().array() ]).optional(),
  preferredJobRoles: z.union([ z.lazy(() => JobSeekerUpdatepreferredJobRolesInputSchema),z.string().array() ]).optional(),
  resume: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  profilePicture: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  certifications: z.lazy(() => CertificationUncheckedUpdateManyWithoutJobSeekerNestedInputSchema).optional(),
  applications: z.lazy(() => ApplicationUncheckedUpdateManyWithoutJobSeekerNestedInputSchema).optional()
}).strict();

export const HiringCompanyUpsertWithoutUserInputSchema: z.ZodType<Prisma.HiringCompanyUpsertWithoutUserInput> = z.object({
  update: z.union([ z.lazy(() => HiringCompanyUpdateWithoutUserInputSchema),z.lazy(() => HiringCompanyUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => HiringCompanyCreateWithoutUserInputSchema),z.lazy(() => HiringCompanyUncheckedCreateWithoutUserInputSchema) ]),
  where: z.lazy(() => HiringCompanyWhereInputSchema).optional()
}).strict();

export const HiringCompanyUpdateToOneWithWhereWithoutUserInputSchema: z.ZodType<Prisma.HiringCompanyUpdateToOneWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => HiringCompanyWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => HiringCompanyUpdateWithoutUserInputSchema),z.lazy(() => HiringCompanyUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const HiringCompanyUpdateWithoutUserInputSchema: z.ZodType<Prisma.HiringCompanyUpdateWithoutUserInput> = z.object({
  companyName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  industry: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  companySize: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  website: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  socialLinks: z.union([ z.lazy(() => HiringCompanyUpdatesocialLinksInputSchema),z.string().array() ]).optional(),
  contactPerson: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  contactEmail: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  contactNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  postalCode: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  country: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  jobs: z.lazy(() => JobUpdateManyWithoutHiringCompanyNestedInputSchema).optional()
}).strict();

export const HiringCompanyUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.HiringCompanyUncheckedUpdateWithoutUserInput> = z.object({
  companyName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  industry: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  companySize: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  website: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  socialLinks: z.union([ z.lazy(() => HiringCompanyUpdatesocialLinksInputSchema),z.string().array() ]).optional(),
  contactPerson: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  contactEmail: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  contactNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  postalCode: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  country: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  jobs: z.lazy(() => JobUncheckedUpdateManyWithoutHiringCompanyNestedInputSchema).optional()
}).strict();

export const SelfAssessmentUpsertWithoutUserInputSchema: z.ZodType<Prisma.SelfAssessmentUpsertWithoutUserInput> = z.object({
  update: z.union([ z.lazy(() => SelfAssessmentUpdateWithoutUserInputSchema),z.lazy(() => SelfAssessmentUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => SelfAssessmentCreateWithoutUserInputSchema),z.lazy(() => SelfAssessmentUncheckedCreateWithoutUserInputSchema) ]),
  where: z.lazy(() => SelfAssessmentWhereInputSchema).optional()
}).strict();

export const SelfAssessmentUpdateToOneWithWhereWithoutUserInputSchema: z.ZodType<Prisma.SelfAssessmentUpdateToOneWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => SelfAssessmentWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => SelfAssessmentUpdateWithoutUserInputSchema),z.lazy(() => SelfAssessmentUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const SelfAssessmentUpdateWithoutUserInputSchema: z.ZodType<Prisma.SelfAssessmentUpdateWithoutUserInput> = z.object({
  selfAssessmentResponse: z.union([ z.lazy(() => SelfAssessmentResponseListUpdateEnvelopeInputSchema),z.lazy(() => SelfAssessmentResponseCreateInputSchema),z.lazy(() => SelfAssessmentResponseCreateInputSchema).array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SelfAssessmentUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.SelfAssessmentUncheckedUpdateWithoutUserInput> = z.object({
  selfAssessmentResponse: z.union([ z.lazy(() => SelfAssessmentResponseListUpdateEnvelopeInputSchema),z.lazy(() => SelfAssessmentResponseCreateInputSchema),z.lazy(() => SelfAssessmentResponseCreateInputSchema).array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ForumThreadUpsertWithWhereUniqueWithoutAuthorInputSchema: z.ZodType<Prisma.ForumThreadUpsertWithWhereUniqueWithoutAuthorInput> = z.object({
  where: z.lazy(() => ForumThreadWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ForumThreadUpdateWithoutAuthorInputSchema),z.lazy(() => ForumThreadUncheckedUpdateWithoutAuthorInputSchema) ]),
  create: z.union([ z.lazy(() => ForumThreadCreateWithoutAuthorInputSchema),z.lazy(() => ForumThreadUncheckedCreateWithoutAuthorInputSchema) ]),
}).strict();

export const ForumThreadUpdateWithWhereUniqueWithoutAuthorInputSchema: z.ZodType<Prisma.ForumThreadUpdateWithWhereUniqueWithoutAuthorInput> = z.object({
  where: z.lazy(() => ForumThreadWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ForumThreadUpdateWithoutAuthorInputSchema),z.lazy(() => ForumThreadUncheckedUpdateWithoutAuthorInputSchema) ]),
}).strict();

export const ForumThreadUpdateManyWithWhereWithoutAuthorInputSchema: z.ZodType<Prisma.ForumThreadUpdateManyWithWhereWithoutAuthorInput> = z.object({
  where: z.lazy(() => ForumThreadScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ForumThreadUpdateManyMutationInputSchema),z.lazy(() => ForumThreadUncheckedUpdateManyWithoutAuthorInputSchema) ]),
}).strict();

export const ForumThreadScalarWhereInputSchema: z.ZodType<Prisma.ForumThreadScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ForumThreadScalarWhereInputSchema),z.lazy(() => ForumThreadScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ForumThreadScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ForumThreadScalarWhereInputSchema),z.lazy(() => ForumThreadScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  slug: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  authorId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const ForumPostUpsertWithWhereUniqueWithoutAuthorInputSchema: z.ZodType<Prisma.ForumPostUpsertWithWhereUniqueWithoutAuthorInput> = z.object({
  where: z.lazy(() => ForumPostWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ForumPostUpdateWithoutAuthorInputSchema),z.lazy(() => ForumPostUncheckedUpdateWithoutAuthorInputSchema) ]),
  create: z.union([ z.lazy(() => ForumPostCreateWithoutAuthorInputSchema),z.lazy(() => ForumPostUncheckedCreateWithoutAuthorInputSchema) ]),
}).strict();

export const ForumPostUpdateWithWhereUniqueWithoutAuthorInputSchema: z.ZodType<Prisma.ForumPostUpdateWithWhereUniqueWithoutAuthorInput> = z.object({
  where: z.lazy(() => ForumPostWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ForumPostUpdateWithoutAuthorInputSchema),z.lazy(() => ForumPostUncheckedUpdateWithoutAuthorInputSchema) ]),
}).strict();

export const ForumPostUpdateManyWithWhereWithoutAuthorInputSchema: z.ZodType<Prisma.ForumPostUpdateManyWithWhereWithoutAuthorInput> = z.object({
  where: z.lazy(() => ForumPostScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ForumPostUpdateManyMutationInputSchema),z.lazy(() => ForumPostUncheckedUpdateManyWithoutAuthorInputSchema) ]),
}).strict();

export const ForumPostScalarWhereInputSchema: z.ZodType<Prisma.ForumPostScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ForumPostScalarWhereInputSchema),z.lazy(() => ForumPostScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ForumPostScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ForumPostScalarWhereInputSchema),z.lazy(() => ForumPostScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  authorId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  threadId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const ForumCommentUpsertWithWhereUniqueWithoutAuthorInputSchema: z.ZodType<Prisma.ForumCommentUpsertWithWhereUniqueWithoutAuthorInput> = z.object({
  where: z.lazy(() => ForumCommentWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ForumCommentUpdateWithoutAuthorInputSchema),z.lazy(() => ForumCommentUncheckedUpdateWithoutAuthorInputSchema) ]),
  create: z.union([ z.lazy(() => ForumCommentCreateWithoutAuthorInputSchema),z.lazy(() => ForumCommentUncheckedCreateWithoutAuthorInputSchema) ]),
}).strict();

export const ForumCommentUpdateWithWhereUniqueWithoutAuthorInputSchema: z.ZodType<Prisma.ForumCommentUpdateWithWhereUniqueWithoutAuthorInput> = z.object({
  where: z.lazy(() => ForumCommentWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ForumCommentUpdateWithoutAuthorInputSchema),z.lazy(() => ForumCommentUncheckedUpdateWithoutAuthorInputSchema) ]),
}).strict();

export const ForumCommentUpdateManyWithWhereWithoutAuthorInputSchema: z.ZodType<Prisma.ForumCommentUpdateManyWithWhereWithoutAuthorInput> = z.object({
  where: z.lazy(() => ForumCommentScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ForumCommentUpdateManyMutationInputSchema),z.lazy(() => ForumCommentUncheckedUpdateManyWithoutAuthorInputSchema) ]),
}).strict();

export const ForumCommentScalarWhereInputSchema: z.ZodType<Prisma.ForumCommentScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ForumCommentScalarWhereInputSchema),z.lazy(() => ForumCommentScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ForumCommentScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ForumCommentScalarWhereInputSchema),z.lazy(() => ForumCommentScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  authorId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  postId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const CertificateCreateWithoutProfileInputSchema: z.ZodType<Prisma.CertificateCreateWithoutProfileInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  userName: z.string(),
  course: z.string(),
  attempt: z.number().int(),
  key: z.string(),
  issuedDate: z.coerce.date()
}).strict();

export const CertificateUncheckedCreateWithoutProfileInputSchema: z.ZodType<Prisma.CertificateUncheckedCreateWithoutProfileInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  userName: z.string(),
  course: z.string(),
  attempt: z.number().int(),
  key: z.string(),
  issuedDate: z.coerce.date()
}).strict();

export const CertificateCreateOrConnectWithoutProfileInputSchema: z.ZodType<Prisma.CertificateCreateOrConnectWithoutProfileInput> = z.object({
  where: z.lazy(() => CertificateWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CertificateCreateWithoutProfileInputSchema),z.lazy(() => CertificateUncheckedCreateWithoutProfileInputSchema) ]),
}).strict();

export const CertificateCreateManyProfileInputEnvelopeSchema: z.ZodType<Prisma.CertificateCreateManyProfileInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CertificateCreateManyProfileInputSchema),z.lazy(() => CertificateCreateManyProfileInputSchema).array() ]),
}).strict();

export const EducationCreateWithoutProfileInputSchema: z.ZodType<Prisma.EducationCreateWithoutProfileInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  educationLevels: z.union([ z.lazy(() => EducationLevelListCreateEnvelopeInputSchema),z.lazy(() => EducationLevelCreateInputSchema),z.lazy(() => EducationLevelCreateInputSchema).array() ]).optional(),
}).strict();

export const EducationUncheckedCreateWithoutProfileInputSchema: z.ZodType<Prisma.EducationUncheckedCreateWithoutProfileInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  educationLevels: z.union([ z.lazy(() => EducationLevelListCreateEnvelopeInputSchema),z.lazy(() => EducationLevelCreateInputSchema),z.lazy(() => EducationLevelCreateInputSchema).array() ]).optional(),
}).strict();

export const EducationCreateOrConnectWithoutProfileInputSchema: z.ZodType<Prisma.EducationCreateOrConnectWithoutProfileInput> = z.object({
  where: z.lazy(() => EducationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => EducationCreateWithoutProfileInputSchema),z.lazy(() => EducationUncheckedCreateWithoutProfileInputSchema) ]),
}).strict();

export const ExperienceCreateWithoutProfileInputSchema: z.ZodType<Prisma.ExperienceCreateWithoutProfileInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  experienceDetails: z.union([ z.lazy(() => ExperienceDetailsListCreateEnvelopeInputSchema),z.lazy(() => ExperienceDetailsCreateInputSchema),z.lazy(() => ExperienceDetailsCreateInputSchema).array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const ExperienceUncheckedCreateWithoutProfileInputSchema: z.ZodType<Prisma.ExperienceUncheckedCreateWithoutProfileInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  experienceDetails: z.union([ z.lazy(() => ExperienceDetailsListCreateEnvelopeInputSchema),z.lazy(() => ExperienceDetailsCreateInputSchema),z.lazy(() => ExperienceDetailsCreateInputSchema).array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const ExperienceCreateOrConnectWithoutProfileInputSchema: z.ZodType<Prisma.ExperienceCreateOrConnectWithoutProfileInput> = z.object({
  where: z.lazy(() => ExperienceWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ExperienceCreateWithoutProfileInputSchema),z.lazy(() => ExperienceUncheckedCreateWithoutProfileInputSchema) ]),
}).strict();

export const PersonalInfoUpsertInputSchema: z.ZodType<Prisma.PersonalInfoUpsertInput> = z.object({
  set: z.lazy(() => PersonalInfoCreateInputSchema).nullable(),
  update: z.lazy(() => PersonalInfoUpdateInputSchema)
}).strict();

export const SkillUpdateManyInputSchema: z.ZodType<Prisma.SkillUpdateManyInput> = z.object({
  where: z.lazy(() => SkillWhereInputSchema),
  data: z.lazy(() => SkillUpdateInputSchema)
}).strict();

export const SkillDeleteManyInputSchema: z.ZodType<Prisma.SkillDeleteManyInput> = z.object({
  where: z.lazy(() => SkillWhereInputSchema)
}).strict();

export const CertificateUpsertWithWhereUniqueWithoutProfileInputSchema: z.ZodType<Prisma.CertificateUpsertWithWhereUniqueWithoutProfileInput> = z.object({
  where: z.lazy(() => CertificateWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CertificateUpdateWithoutProfileInputSchema),z.lazy(() => CertificateUncheckedUpdateWithoutProfileInputSchema) ]),
  create: z.union([ z.lazy(() => CertificateCreateWithoutProfileInputSchema),z.lazy(() => CertificateUncheckedCreateWithoutProfileInputSchema) ]),
}).strict();

export const CertificateUpdateWithWhereUniqueWithoutProfileInputSchema: z.ZodType<Prisma.CertificateUpdateWithWhereUniqueWithoutProfileInput> = z.object({
  where: z.lazy(() => CertificateWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CertificateUpdateWithoutProfileInputSchema),z.lazy(() => CertificateUncheckedUpdateWithoutProfileInputSchema) ]),
}).strict();

export const CertificateUpdateManyWithWhereWithoutProfileInputSchema: z.ZodType<Prisma.CertificateUpdateManyWithWhereWithoutProfileInput> = z.object({
  where: z.lazy(() => CertificateScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CertificateUpdateManyMutationInputSchema),z.lazy(() => CertificateUncheckedUpdateManyWithoutProfileInputSchema) ]),
}).strict();

export const CertificateScalarWhereInputSchema: z.ZodType<Prisma.CertificateScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CertificateScalarWhereInputSchema),z.lazy(() => CertificateScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CertificateScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CertificateScalarWhereInputSchema),z.lazy(() => CertificateScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  profileId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  course: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  attempt: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  key: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  issuedDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const EducationUpsertWithoutProfileInputSchema: z.ZodType<Prisma.EducationUpsertWithoutProfileInput> = z.object({
  update: z.union([ z.lazy(() => EducationUpdateWithoutProfileInputSchema),z.lazy(() => EducationUncheckedUpdateWithoutProfileInputSchema) ]),
  create: z.union([ z.lazy(() => EducationCreateWithoutProfileInputSchema),z.lazy(() => EducationUncheckedCreateWithoutProfileInputSchema) ]),
  where: z.lazy(() => EducationWhereInputSchema).optional()
}).strict();

export const EducationUpdateToOneWithWhereWithoutProfileInputSchema: z.ZodType<Prisma.EducationUpdateToOneWithWhereWithoutProfileInput> = z.object({
  where: z.lazy(() => EducationWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => EducationUpdateWithoutProfileInputSchema),z.lazy(() => EducationUncheckedUpdateWithoutProfileInputSchema) ]),
}).strict();

export const EducationUpdateWithoutProfileInputSchema: z.ZodType<Prisma.EducationUpdateWithoutProfileInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  educationLevels: z.union([ z.lazy(() => EducationLevelListUpdateEnvelopeInputSchema),z.lazy(() => EducationLevelCreateInputSchema),z.lazy(() => EducationLevelCreateInputSchema).array() ]).optional(),
}).strict();

export const EducationUncheckedUpdateWithoutProfileInputSchema: z.ZodType<Prisma.EducationUncheckedUpdateWithoutProfileInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  educationLevels: z.union([ z.lazy(() => EducationLevelListUpdateEnvelopeInputSchema),z.lazy(() => EducationLevelCreateInputSchema),z.lazy(() => EducationLevelCreateInputSchema).array() ]).optional(),
}).strict();

export const ExperienceUpsertWithoutProfileInputSchema: z.ZodType<Prisma.ExperienceUpsertWithoutProfileInput> = z.object({
  update: z.union([ z.lazy(() => ExperienceUpdateWithoutProfileInputSchema),z.lazy(() => ExperienceUncheckedUpdateWithoutProfileInputSchema) ]),
  create: z.union([ z.lazy(() => ExperienceCreateWithoutProfileInputSchema),z.lazy(() => ExperienceUncheckedCreateWithoutProfileInputSchema) ]),
  where: z.lazy(() => ExperienceWhereInputSchema).optional()
}).strict();

export const ExperienceUpdateToOneWithWhereWithoutProfileInputSchema: z.ZodType<Prisma.ExperienceUpdateToOneWithWhereWithoutProfileInput> = z.object({
  where: z.lazy(() => ExperienceWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ExperienceUpdateWithoutProfileInputSchema),z.lazy(() => ExperienceUncheckedUpdateWithoutProfileInputSchema) ]),
}).strict();

export const ExperienceUpdateWithoutProfileInputSchema: z.ZodType<Prisma.ExperienceUpdateWithoutProfileInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  experienceDetails: z.union([ z.lazy(() => ExperienceDetailsListUpdateEnvelopeInputSchema),z.lazy(() => ExperienceDetailsCreateInputSchema),z.lazy(() => ExperienceDetailsCreateInputSchema).array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ExperienceUncheckedUpdateWithoutProfileInputSchema: z.ZodType<Prisma.ExperienceUncheckedUpdateWithoutProfileInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  experienceDetails: z.union([ z.lazy(() => ExperienceDetailsListUpdateEnvelopeInputSchema),z.lazy(() => ExperienceDetailsCreateInputSchema),z.lazy(() => ExperienceDetailsCreateInputSchema).array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProfileCreateWithoutCertificatesInputSchema: z.ZodType<Prisma.ProfileCreateWithoutCertificatesInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  personalInfo: z.union([ z.lazy(() => PersonalInfoNullableCreateEnvelopeInputSchema),z.lazy(() => PersonalInfoCreateInputSchema) ]).optional().nullable(),
  skills: z.union([ z.lazy(() => SkillListCreateEnvelopeInputSchema),z.lazy(() => SkillCreateInputSchema),z.lazy(() => SkillCreateInputSchema).array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  educations: z.lazy(() => EducationCreateNestedOneWithoutProfileInputSchema).optional(),
  experiences: z.lazy(() => ExperienceCreateNestedOneWithoutProfileInputSchema).optional()
}).strict();

export const ProfileUncheckedCreateWithoutCertificatesInputSchema: z.ZodType<Prisma.ProfileUncheckedCreateWithoutCertificatesInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  personalInfo: z.union([ z.lazy(() => PersonalInfoNullableCreateEnvelopeInputSchema),z.lazy(() => PersonalInfoCreateInputSchema) ]).optional().nullable(),
  skills: z.union([ z.lazy(() => SkillListCreateEnvelopeInputSchema),z.lazy(() => SkillCreateInputSchema),z.lazy(() => SkillCreateInputSchema).array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  educations: z.lazy(() => EducationUncheckedCreateNestedOneWithoutProfileInputSchema).optional(),
  experiences: z.lazy(() => ExperienceUncheckedCreateNestedOneWithoutProfileInputSchema).optional()
}).strict();

export const ProfileCreateOrConnectWithoutCertificatesInputSchema: z.ZodType<Prisma.ProfileCreateOrConnectWithoutCertificatesInput> = z.object({
  where: z.lazy(() => ProfileWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProfileCreateWithoutCertificatesInputSchema),z.lazy(() => ProfileUncheckedCreateWithoutCertificatesInputSchema) ]),
}).strict();

export const ProfileUpsertWithoutCertificatesInputSchema: z.ZodType<Prisma.ProfileUpsertWithoutCertificatesInput> = z.object({
  update: z.union([ z.lazy(() => ProfileUpdateWithoutCertificatesInputSchema),z.lazy(() => ProfileUncheckedUpdateWithoutCertificatesInputSchema) ]),
  create: z.union([ z.lazy(() => ProfileCreateWithoutCertificatesInputSchema),z.lazy(() => ProfileUncheckedCreateWithoutCertificatesInputSchema) ]),
  where: z.lazy(() => ProfileWhereInputSchema).optional()
}).strict();

export const ProfileUpdateToOneWithWhereWithoutCertificatesInputSchema: z.ZodType<Prisma.ProfileUpdateToOneWithWhereWithoutCertificatesInput> = z.object({
  where: z.lazy(() => ProfileWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProfileUpdateWithoutCertificatesInputSchema),z.lazy(() => ProfileUncheckedUpdateWithoutCertificatesInputSchema) ]),
}).strict();

export const ProfileUpdateWithoutCertificatesInputSchema: z.ZodType<Prisma.ProfileUpdateWithoutCertificatesInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  personalInfo: z.union([ z.lazy(() => PersonalInfoNullableUpdateEnvelopeInputSchema),z.lazy(() => PersonalInfoCreateInputSchema) ]).optional().nullable(),
  skills: z.union([ z.lazy(() => SkillListUpdateEnvelopeInputSchema),z.lazy(() => SkillCreateInputSchema),z.lazy(() => SkillCreateInputSchema).array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  educations: z.lazy(() => EducationUpdateOneWithoutProfileNestedInputSchema).optional(),
  experiences: z.lazy(() => ExperienceUpdateOneWithoutProfileNestedInputSchema).optional()
}).strict();

export const ProfileUncheckedUpdateWithoutCertificatesInputSchema: z.ZodType<Prisma.ProfileUncheckedUpdateWithoutCertificatesInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  personalInfo: z.union([ z.lazy(() => PersonalInfoNullableUpdateEnvelopeInputSchema),z.lazy(() => PersonalInfoCreateInputSchema) ]).optional().nullable(),
  skills: z.union([ z.lazy(() => SkillListUpdateEnvelopeInputSchema),z.lazy(() => SkillCreateInputSchema),z.lazy(() => SkillCreateInputSchema).array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  educations: z.lazy(() => EducationUncheckedUpdateOneWithoutProfileNestedInputSchema).optional(),
  experiences: z.lazy(() => ExperienceUncheckedUpdateOneWithoutProfileNestedInputSchema).optional()
}).strict();

export const UserCreateWithoutAccountsInputSchema: z.ZodType<Prisma.UserCreateWithoutAccountsInput> = z.object({
  id: z.string().optional(),
  clerkId: z.string(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  jobSeekerId: z.string().optional().nullable(),
  hiringCompanyId: z.string().optional().nullable(),
  selfAssessmentId: z.string().optional().nullable(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  jobSeeker: z.lazy(() => JobSeekerCreateNestedOneWithoutUserInputSchema).optional(),
  hiringCompany: z.lazy(() => HiringCompanyCreateNestedOneWithoutUserInputSchema).optional(),
  selfAssessment: z.lazy(() => SelfAssessmentCreateNestedOneWithoutUserInputSchema).optional(),
  threads: z.lazy(() => ForumThreadCreateNestedManyWithoutAuthorInputSchema).optional(),
  posts: z.lazy(() => ForumPostCreateNestedManyWithoutAuthorInputSchema).optional(),
  comments: z.lazy(() => ForumCommentCreateNestedManyWithoutAuthorInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutAccountsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutAccountsInput> = z.object({
  id: z.string().optional(),
  clerkId: z.string(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  jobSeekerId: z.string().optional().nullable(),
  hiringCompanyId: z.string().optional().nullable(),
  selfAssessmentId: z.string().optional().nullable(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  jobSeeker: z.lazy(() => JobSeekerUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  hiringCompany: z.lazy(() => HiringCompanyUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  selfAssessment: z.lazy(() => SelfAssessmentUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  threads: z.lazy(() => ForumThreadUncheckedCreateNestedManyWithoutAuthorInputSchema).optional(),
  posts: z.lazy(() => ForumPostUncheckedCreateNestedManyWithoutAuthorInputSchema).optional(),
  comments: z.lazy(() => ForumCommentUncheckedCreateNestedManyWithoutAuthorInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutAccountsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutAccountsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema) ]),
}).strict();

export const UserUpsertWithoutAccountsInputSchema: z.ZodType<Prisma.UserUpsertWithoutAccountsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAccountsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutAccountsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutAccountsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAccountsInputSchema) ]),
}).strict();

export const UserUpdateWithoutAccountsInputSchema: z.ZodType<Prisma.UserUpdateWithoutAccountsInput> = z.object({
  clerkId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  jobSeekerId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hiringCompanyId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  selfAssessmentId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional(),
  jobSeeker: z.lazy(() => JobSeekerUpdateOneWithoutUserNestedInputSchema).optional(),
  hiringCompany: z.lazy(() => HiringCompanyUpdateOneWithoutUserNestedInputSchema).optional(),
  selfAssessment: z.lazy(() => SelfAssessmentUpdateOneWithoutUserNestedInputSchema).optional(),
  threads: z.lazy(() => ForumThreadUpdateManyWithoutAuthorNestedInputSchema).optional(),
  posts: z.lazy(() => ForumPostUpdateManyWithoutAuthorNestedInputSchema).optional(),
  comments: z.lazy(() => ForumCommentUpdateManyWithoutAuthorNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutAccountsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutAccountsInput> = z.object({
  clerkId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  jobSeekerId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hiringCompanyId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  selfAssessmentId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  jobSeeker: z.lazy(() => JobSeekerUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  hiringCompany: z.lazy(() => HiringCompanyUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  selfAssessment: z.lazy(() => SelfAssessmentUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  threads: z.lazy(() => ForumThreadUncheckedUpdateManyWithoutAuthorNestedInputSchema).optional(),
  posts: z.lazy(() => ForumPostUncheckedUpdateManyWithoutAuthorNestedInputSchema).optional(),
  comments: z.lazy(() => ForumCommentUncheckedUpdateManyWithoutAuthorNestedInputSchema).optional()
}).strict();

export const UserCreateWithoutSessionsInputSchema: z.ZodType<Prisma.UserCreateWithoutSessionsInput> = z.object({
  id: z.string().optional(),
  clerkId: z.string(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  jobSeekerId: z.string().optional().nullable(),
  hiringCompanyId: z.string().optional().nullable(),
  selfAssessmentId: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  jobSeeker: z.lazy(() => JobSeekerCreateNestedOneWithoutUserInputSchema).optional(),
  hiringCompany: z.lazy(() => HiringCompanyCreateNestedOneWithoutUserInputSchema).optional(),
  selfAssessment: z.lazy(() => SelfAssessmentCreateNestedOneWithoutUserInputSchema).optional(),
  threads: z.lazy(() => ForumThreadCreateNestedManyWithoutAuthorInputSchema).optional(),
  posts: z.lazy(() => ForumPostCreateNestedManyWithoutAuthorInputSchema).optional(),
  comments: z.lazy(() => ForumCommentCreateNestedManyWithoutAuthorInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutSessionsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutSessionsInput> = z.object({
  id: z.string().optional(),
  clerkId: z.string(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  jobSeekerId: z.string().optional().nullable(),
  hiringCompanyId: z.string().optional().nullable(),
  selfAssessmentId: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  jobSeeker: z.lazy(() => JobSeekerUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  hiringCompany: z.lazy(() => HiringCompanyUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  selfAssessment: z.lazy(() => SelfAssessmentUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  threads: z.lazy(() => ForumThreadUncheckedCreateNestedManyWithoutAuthorInputSchema).optional(),
  posts: z.lazy(() => ForumPostUncheckedCreateNestedManyWithoutAuthorInputSchema).optional(),
  comments: z.lazy(() => ForumCommentUncheckedCreateNestedManyWithoutAuthorInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutSessionsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutSessionsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema) ]),
}).strict();

export const UserUpsertWithoutSessionsInputSchema: z.ZodType<Prisma.UserUpsertWithoutSessionsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSessionsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutSessionsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutSessionsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSessionsInputSchema) ]),
}).strict();

export const UserUpdateWithoutSessionsInputSchema: z.ZodType<Prisma.UserUpdateWithoutSessionsInput> = z.object({
  clerkId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  jobSeekerId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hiringCompanyId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  selfAssessmentId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  jobSeeker: z.lazy(() => JobSeekerUpdateOneWithoutUserNestedInputSchema).optional(),
  hiringCompany: z.lazy(() => HiringCompanyUpdateOneWithoutUserNestedInputSchema).optional(),
  selfAssessment: z.lazy(() => SelfAssessmentUpdateOneWithoutUserNestedInputSchema).optional(),
  threads: z.lazy(() => ForumThreadUpdateManyWithoutAuthorNestedInputSchema).optional(),
  posts: z.lazy(() => ForumPostUpdateManyWithoutAuthorNestedInputSchema).optional(),
  comments: z.lazy(() => ForumCommentUpdateManyWithoutAuthorNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutSessionsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutSessionsInput> = z.object({
  clerkId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  jobSeekerId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hiringCompanyId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  selfAssessmentId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  jobSeeker: z.lazy(() => JobSeekerUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  hiringCompany: z.lazy(() => HiringCompanyUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  selfAssessment: z.lazy(() => SelfAssessmentUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  threads: z.lazy(() => ForumThreadUncheckedUpdateManyWithoutAuthorNestedInputSchema).optional(),
  posts: z.lazy(() => ForumPostUncheckedUpdateManyWithoutAuthorNestedInputSchema).optional(),
  comments: z.lazy(() => ForumCommentUncheckedUpdateManyWithoutAuthorNestedInputSchema).optional()
}).strict();

export const UserCreateWithoutJobSeekerInputSchema: z.ZodType<Prisma.UserCreateWithoutJobSeekerInput> = z.object({
  id: z.string().optional(),
  clerkId: z.string(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  jobSeekerId: z.string().optional().nullable(),
  hiringCompanyId: z.string().optional().nullable(),
  selfAssessmentId: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  hiringCompany: z.lazy(() => HiringCompanyCreateNestedOneWithoutUserInputSchema).optional(),
  selfAssessment: z.lazy(() => SelfAssessmentCreateNestedOneWithoutUserInputSchema).optional(),
  threads: z.lazy(() => ForumThreadCreateNestedManyWithoutAuthorInputSchema).optional(),
  posts: z.lazy(() => ForumPostCreateNestedManyWithoutAuthorInputSchema).optional(),
  comments: z.lazy(() => ForumCommentCreateNestedManyWithoutAuthorInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutJobSeekerInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutJobSeekerInput> = z.object({
  id: z.string().optional(),
  clerkId: z.string(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  jobSeekerId: z.string().optional().nullable(),
  hiringCompanyId: z.string().optional().nullable(),
  selfAssessmentId: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  hiringCompany: z.lazy(() => HiringCompanyUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  selfAssessment: z.lazy(() => SelfAssessmentUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  threads: z.lazy(() => ForumThreadUncheckedCreateNestedManyWithoutAuthorInputSchema).optional(),
  posts: z.lazy(() => ForumPostUncheckedCreateNestedManyWithoutAuthorInputSchema).optional(),
  comments: z.lazy(() => ForumCommentUncheckedCreateNestedManyWithoutAuthorInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutJobSeekerInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutJobSeekerInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutJobSeekerInputSchema),z.lazy(() => UserUncheckedCreateWithoutJobSeekerInputSchema) ]),
}).strict();

export const CertificationCreateWithoutJobSeekerInputSchema: z.ZodType<Prisma.CertificationCreateWithoutJobSeekerInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  issuedBy: z.string(),
  issuedDate: z.coerce.date()
}).strict();

export const CertificationUncheckedCreateWithoutJobSeekerInputSchema: z.ZodType<Prisma.CertificationUncheckedCreateWithoutJobSeekerInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  issuedBy: z.string(),
  issuedDate: z.coerce.date()
}).strict();

export const CertificationCreateOrConnectWithoutJobSeekerInputSchema: z.ZodType<Prisma.CertificationCreateOrConnectWithoutJobSeekerInput> = z.object({
  where: z.lazy(() => CertificationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CertificationCreateWithoutJobSeekerInputSchema),z.lazy(() => CertificationUncheckedCreateWithoutJobSeekerInputSchema) ]),
}).strict();

export const CertificationCreateManyJobSeekerInputEnvelopeSchema: z.ZodType<Prisma.CertificationCreateManyJobSeekerInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CertificationCreateManyJobSeekerInputSchema),z.lazy(() => CertificationCreateManyJobSeekerInputSchema).array() ]),
}).strict();

export const ApplicationCreateWithoutJobSeekerInputSchema: z.ZodType<Prisma.ApplicationCreateWithoutJobSeekerInput> = z.object({
  id: z.string().optional(),
  appliedAt: z.coerce.date().optional(),
  status: z.string().optional(),
  resume: z.string(),
  coverLetter: z.string().optional().nullable(),
  job: z.lazy(() => JobCreateNestedOneWithoutApplicationsInputSchema),
  interviews: z.lazy(() => InterviewCreateNestedManyWithoutApplicationInputSchema).optional()
}).strict();

export const ApplicationUncheckedCreateWithoutJobSeekerInputSchema: z.ZodType<Prisma.ApplicationUncheckedCreateWithoutJobSeekerInput> = z.object({
  id: z.string().optional(),
  jobId: z.string(),
  appliedAt: z.coerce.date().optional(),
  status: z.string().optional(),
  resume: z.string(),
  coverLetter: z.string().optional().nullable(),
  interviews: z.lazy(() => InterviewUncheckedCreateNestedManyWithoutApplicationInputSchema).optional()
}).strict();

export const ApplicationCreateOrConnectWithoutJobSeekerInputSchema: z.ZodType<Prisma.ApplicationCreateOrConnectWithoutJobSeekerInput> = z.object({
  where: z.lazy(() => ApplicationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ApplicationCreateWithoutJobSeekerInputSchema),z.lazy(() => ApplicationUncheckedCreateWithoutJobSeekerInputSchema) ]),
}).strict();

export const ApplicationCreateManyJobSeekerInputEnvelopeSchema: z.ZodType<Prisma.ApplicationCreateManyJobSeekerInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ApplicationCreateManyJobSeekerInputSchema),z.lazy(() => ApplicationCreateManyJobSeekerInputSchema).array() ]),
}).strict();

export const UserUpsertWithoutJobSeekerInputSchema: z.ZodType<Prisma.UserUpsertWithoutJobSeekerInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutJobSeekerInputSchema),z.lazy(() => UserUncheckedUpdateWithoutJobSeekerInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutJobSeekerInputSchema),z.lazy(() => UserUncheckedCreateWithoutJobSeekerInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutJobSeekerInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutJobSeekerInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutJobSeekerInputSchema),z.lazy(() => UserUncheckedUpdateWithoutJobSeekerInputSchema) ]),
}).strict();

export const UserUpdateWithoutJobSeekerInputSchema: z.ZodType<Prisma.UserUpdateWithoutJobSeekerInput> = z.object({
  clerkId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  jobSeekerId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hiringCompanyId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  selfAssessmentId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional(),
  hiringCompany: z.lazy(() => HiringCompanyUpdateOneWithoutUserNestedInputSchema).optional(),
  selfAssessment: z.lazy(() => SelfAssessmentUpdateOneWithoutUserNestedInputSchema).optional(),
  threads: z.lazy(() => ForumThreadUpdateManyWithoutAuthorNestedInputSchema).optional(),
  posts: z.lazy(() => ForumPostUpdateManyWithoutAuthorNestedInputSchema).optional(),
  comments: z.lazy(() => ForumCommentUpdateManyWithoutAuthorNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutJobSeekerInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutJobSeekerInput> = z.object({
  clerkId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  jobSeekerId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hiringCompanyId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  selfAssessmentId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  hiringCompany: z.lazy(() => HiringCompanyUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  selfAssessment: z.lazy(() => SelfAssessmentUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  threads: z.lazy(() => ForumThreadUncheckedUpdateManyWithoutAuthorNestedInputSchema).optional(),
  posts: z.lazy(() => ForumPostUncheckedUpdateManyWithoutAuthorNestedInputSchema).optional(),
  comments: z.lazy(() => ForumCommentUncheckedUpdateManyWithoutAuthorNestedInputSchema).optional()
}).strict();

export const CertificationUpsertWithWhereUniqueWithoutJobSeekerInputSchema: z.ZodType<Prisma.CertificationUpsertWithWhereUniqueWithoutJobSeekerInput> = z.object({
  where: z.lazy(() => CertificationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CertificationUpdateWithoutJobSeekerInputSchema),z.lazy(() => CertificationUncheckedUpdateWithoutJobSeekerInputSchema) ]),
  create: z.union([ z.lazy(() => CertificationCreateWithoutJobSeekerInputSchema),z.lazy(() => CertificationUncheckedCreateWithoutJobSeekerInputSchema) ]),
}).strict();

export const CertificationUpdateWithWhereUniqueWithoutJobSeekerInputSchema: z.ZodType<Prisma.CertificationUpdateWithWhereUniqueWithoutJobSeekerInput> = z.object({
  where: z.lazy(() => CertificationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CertificationUpdateWithoutJobSeekerInputSchema),z.lazy(() => CertificationUncheckedUpdateWithoutJobSeekerInputSchema) ]),
}).strict();

export const CertificationUpdateManyWithWhereWithoutJobSeekerInputSchema: z.ZodType<Prisma.CertificationUpdateManyWithWhereWithoutJobSeekerInput> = z.object({
  where: z.lazy(() => CertificationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CertificationUpdateManyMutationInputSchema),z.lazy(() => CertificationUncheckedUpdateManyWithoutJobSeekerInputSchema) ]),
}).strict();

export const CertificationScalarWhereInputSchema: z.ZodType<Prisma.CertificationScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CertificationScalarWhereInputSchema),z.lazy(() => CertificationScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CertificationScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CertificationScalarWhereInputSchema),z.lazy(() => CertificationScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  jobSeekerId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  issuedBy: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  issuedDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const ApplicationUpsertWithWhereUniqueWithoutJobSeekerInputSchema: z.ZodType<Prisma.ApplicationUpsertWithWhereUniqueWithoutJobSeekerInput> = z.object({
  where: z.lazy(() => ApplicationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ApplicationUpdateWithoutJobSeekerInputSchema),z.lazy(() => ApplicationUncheckedUpdateWithoutJobSeekerInputSchema) ]),
  create: z.union([ z.lazy(() => ApplicationCreateWithoutJobSeekerInputSchema),z.lazy(() => ApplicationUncheckedCreateWithoutJobSeekerInputSchema) ]),
}).strict();

export const ApplicationUpdateWithWhereUniqueWithoutJobSeekerInputSchema: z.ZodType<Prisma.ApplicationUpdateWithWhereUniqueWithoutJobSeekerInput> = z.object({
  where: z.lazy(() => ApplicationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ApplicationUpdateWithoutJobSeekerInputSchema),z.lazy(() => ApplicationUncheckedUpdateWithoutJobSeekerInputSchema) ]),
}).strict();

export const ApplicationUpdateManyWithWhereWithoutJobSeekerInputSchema: z.ZodType<Prisma.ApplicationUpdateManyWithWhereWithoutJobSeekerInput> = z.object({
  where: z.lazy(() => ApplicationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ApplicationUpdateManyMutationInputSchema),z.lazy(() => ApplicationUncheckedUpdateManyWithoutJobSeekerInputSchema) ]),
}).strict();

export const ApplicationScalarWhereInputSchema: z.ZodType<Prisma.ApplicationScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ApplicationScalarWhereInputSchema),z.lazy(() => ApplicationScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ApplicationScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ApplicationScalarWhereInputSchema),z.lazy(() => ApplicationScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  jobSeekerId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  jobId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  appliedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  status: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  resume: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  coverLetter: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const ProfileCreateWithoutEducationsInputSchema: z.ZodType<Prisma.ProfileCreateWithoutEducationsInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  personalInfo: z.union([ z.lazy(() => PersonalInfoNullableCreateEnvelopeInputSchema),z.lazy(() => PersonalInfoCreateInputSchema) ]).optional().nullable(),
  skills: z.union([ z.lazy(() => SkillListCreateEnvelopeInputSchema),z.lazy(() => SkillCreateInputSchema),z.lazy(() => SkillCreateInputSchema).array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  certificates: z.lazy(() => CertificateCreateNestedManyWithoutProfileInputSchema).optional(),
  experiences: z.lazy(() => ExperienceCreateNestedOneWithoutProfileInputSchema).optional()
}).strict();

export const ProfileUncheckedCreateWithoutEducationsInputSchema: z.ZodType<Prisma.ProfileUncheckedCreateWithoutEducationsInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  personalInfo: z.union([ z.lazy(() => PersonalInfoNullableCreateEnvelopeInputSchema),z.lazy(() => PersonalInfoCreateInputSchema) ]).optional().nullable(),
  skills: z.union([ z.lazy(() => SkillListCreateEnvelopeInputSchema),z.lazy(() => SkillCreateInputSchema),z.lazy(() => SkillCreateInputSchema).array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  certificates: z.lazy(() => CertificateUncheckedCreateNestedManyWithoutProfileInputSchema).optional(),
  experiences: z.lazy(() => ExperienceUncheckedCreateNestedOneWithoutProfileInputSchema).optional()
}).strict();

export const ProfileCreateOrConnectWithoutEducationsInputSchema: z.ZodType<Prisma.ProfileCreateOrConnectWithoutEducationsInput> = z.object({
  where: z.lazy(() => ProfileWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProfileCreateWithoutEducationsInputSchema),z.lazy(() => ProfileUncheckedCreateWithoutEducationsInputSchema) ]),
}).strict();

export const EducationLevelUpdateManyInputSchema: z.ZodType<Prisma.EducationLevelUpdateManyInput> = z.object({
  where: z.lazy(() => EducationLevelWhereInputSchema),
  data: z.lazy(() => EducationLevelUpdateInputSchema)
}).strict();

export const EducationLevelDeleteManyInputSchema: z.ZodType<Prisma.EducationLevelDeleteManyInput> = z.object({
  where: z.lazy(() => EducationLevelWhereInputSchema)
}).strict();

export const ProfileUpsertWithoutEducationsInputSchema: z.ZodType<Prisma.ProfileUpsertWithoutEducationsInput> = z.object({
  update: z.union([ z.lazy(() => ProfileUpdateWithoutEducationsInputSchema),z.lazy(() => ProfileUncheckedUpdateWithoutEducationsInputSchema) ]),
  create: z.union([ z.lazy(() => ProfileCreateWithoutEducationsInputSchema),z.lazy(() => ProfileUncheckedCreateWithoutEducationsInputSchema) ]),
  where: z.lazy(() => ProfileWhereInputSchema).optional()
}).strict();

export const ProfileUpdateToOneWithWhereWithoutEducationsInputSchema: z.ZodType<Prisma.ProfileUpdateToOneWithWhereWithoutEducationsInput> = z.object({
  where: z.lazy(() => ProfileWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProfileUpdateWithoutEducationsInputSchema),z.lazy(() => ProfileUncheckedUpdateWithoutEducationsInputSchema) ]),
}).strict();

export const ProfileUpdateWithoutEducationsInputSchema: z.ZodType<Prisma.ProfileUpdateWithoutEducationsInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  personalInfo: z.union([ z.lazy(() => PersonalInfoNullableUpdateEnvelopeInputSchema),z.lazy(() => PersonalInfoCreateInputSchema) ]).optional().nullable(),
  skills: z.union([ z.lazy(() => SkillListUpdateEnvelopeInputSchema),z.lazy(() => SkillCreateInputSchema),z.lazy(() => SkillCreateInputSchema).array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  certificates: z.lazy(() => CertificateUpdateManyWithoutProfileNestedInputSchema).optional(),
  experiences: z.lazy(() => ExperienceUpdateOneWithoutProfileNestedInputSchema).optional()
}).strict();

export const ProfileUncheckedUpdateWithoutEducationsInputSchema: z.ZodType<Prisma.ProfileUncheckedUpdateWithoutEducationsInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  personalInfo: z.union([ z.lazy(() => PersonalInfoNullableUpdateEnvelopeInputSchema),z.lazy(() => PersonalInfoCreateInputSchema) ]).optional().nullable(),
  skills: z.union([ z.lazy(() => SkillListUpdateEnvelopeInputSchema),z.lazy(() => SkillCreateInputSchema),z.lazy(() => SkillCreateInputSchema).array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  certificates: z.lazy(() => CertificateUncheckedUpdateManyWithoutProfileNestedInputSchema).optional(),
  experiences: z.lazy(() => ExperienceUncheckedUpdateOneWithoutProfileNestedInputSchema).optional()
}).strict();

export const ExperienceDetailsCreateskillsInputSchema: z.ZodType<Prisma.ExperienceDetailsCreateskillsInput> = z.object({
  set: z.string().array()
}).strict();

export const ProfileCreateWithoutExperiencesInputSchema: z.ZodType<Prisma.ProfileCreateWithoutExperiencesInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  personalInfo: z.union([ z.lazy(() => PersonalInfoNullableCreateEnvelopeInputSchema),z.lazy(() => PersonalInfoCreateInputSchema) ]).optional().nullable(),
  skills: z.union([ z.lazy(() => SkillListCreateEnvelopeInputSchema),z.lazy(() => SkillCreateInputSchema),z.lazy(() => SkillCreateInputSchema).array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  certificates: z.lazy(() => CertificateCreateNestedManyWithoutProfileInputSchema).optional(),
  educations: z.lazy(() => EducationCreateNestedOneWithoutProfileInputSchema).optional()
}).strict();

export const ProfileUncheckedCreateWithoutExperiencesInputSchema: z.ZodType<Prisma.ProfileUncheckedCreateWithoutExperiencesInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  personalInfo: z.union([ z.lazy(() => PersonalInfoNullableCreateEnvelopeInputSchema),z.lazy(() => PersonalInfoCreateInputSchema) ]).optional().nullable(),
  skills: z.union([ z.lazy(() => SkillListCreateEnvelopeInputSchema),z.lazy(() => SkillCreateInputSchema),z.lazy(() => SkillCreateInputSchema).array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  certificates: z.lazy(() => CertificateUncheckedCreateNestedManyWithoutProfileInputSchema).optional(),
  educations: z.lazy(() => EducationUncheckedCreateNestedOneWithoutProfileInputSchema).optional()
}).strict();

export const ProfileCreateOrConnectWithoutExperiencesInputSchema: z.ZodType<Prisma.ProfileCreateOrConnectWithoutExperiencesInput> = z.object({
  where: z.lazy(() => ProfileWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProfileCreateWithoutExperiencesInputSchema),z.lazy(() => ProfileUncheckedCreateWithoutExperiencesInputSchema) ]),
}).strict();

export const ExperienceDetailsUpdateManyInputSchema: z.ZodType<Prisma.ExperienceDetailsUpdateManyInput> = z.object({
  where: z.lazy(() => ExperienceDetailsWhereInputSchema),
  data: z.lazy(() => ExperienceDetailsUpdateInputSchema)
}).strict();

export const ExperienceDetailsDeleteManyInputSchema: z.ZodType<Prisma.ExperienceDetailsDeleteManyInput> = z.object({
  where: z.lazy(() => ExperienceDetailsWhereInputSchema)
}).strict();

export const ProfileUpsertWithoutExperiencesInputSchema: z.ZodType<Prisma.ProfileUpsertWithoutExperiencesInput> = z.object({
  update: z.union([ z.lazy(() => ProfileUpdateWithoutExperiencesInputSchema),z.lazy(() => ProfileUncheckedUpdateWithoutExperiencesInputSchema) ]),
  create: z.union([ z.lazy(() => ProfileCreateWithoutExperiencesInputSchema),z.lazy(() => ProfileUncheckedCreateWithoutExperiencesInputSchema) ]),
  where: z.lazy(() => ProfileWhereInputSchema).optional()
}).strict();

export const ProfileUpdateToOneWithWhereWithoutExperiencesInputSchema: z.ZodType<Prisma.ProfileUpdateToOneWithWhereWithoutExperiencesInput> = z.object({
  where: z.lazy(() => ProfileWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProfileUpdateWithoutExperiencesInputSchema),z.lazy(() => ProfileUncheckedUpdateWithoutExperiencesInputSchema) ]),
}).strict();

export const ProfileUpdateWithoutExperiencesInputSchema: z.ZodType<Prisma.ProfileUpdateWithoutExperiencesInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  personalInfo: z.union([ z.lazy(() => PersonalInfoNullableUpdateEnvelopeInputSchema),z.lazy(() => PersonalInfoCreateInputSchema) ]).optional().nullable(),
  skills: z.union([ z.lazy(() => SkillListUpdateEnvelopeInputSchema),z.lazy(() => SkillCreateInputSchema),z.lazy(() => SkillCreateInputSchema).array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  certificates: z.lazy(() => CertificateUpdateManyWithoutProfileNestedInputSchema).optional(),
  educations: z.lazy(() => EducationUpdateOneWithoutProfileNestedInputSchema).optional()
}).strict();

export const ProfileUncheckedUpdateWithoutExperiencesInputSchema: z.ZodType<Prisma.ProfileUncheckedUpdateWithoutExperiencesInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  personalInfo: z.union([ z.lazy(() => PersonalInfoNullableUpdateEnvelopeInputSchema),z.lazy(() => PersonalInfoCreateInputSchema) ]).optional().nullable(),
  skills: z.union([ z.lazy(() => SkillListUpdateEnvelopeInputSchema),z.lazy(() => SkillCreateInputSchema),z.lazy(() => SkillCreateInputSchema).array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  certificates: z.lazy(() => CertificateUncheckedUpdateManyWithoutProfileNestedInputSchema).optional(),
  educations: z.lazy(() => EducationUncheckedUpdateOneWithoutProfileNestedInputSchema).optional()
}).strict();

export const JobSeekerCreateWithoutCertificationsInputSchema: z.ZodType<Prisma.JobSeekerCreateWithoutCertificationsInput> = z.object({
  id: z.string().optional(),
  firstName: z.string(),
  lastName: z.string(),
  dob: z.coerce.date(),
  gender: z.string(),
  contactNumber: z.string(),
  address: z.string(),
  city: z.string(),
  state: z.string(),
  postalCode: z.string(),
  country: z.string(),
  skills: z.union([ z.lazy(() => SkillListCreateEnvelopeInputSchema),z.lazy(() => SkillCreateInputSchema),z.lazy(() => SkillCreateInputSchema).array() ]).optional(),
  portfolioLinks: z.union([ z.lazy(() => JobSeekerCreateportfolioLinksInputSchema),z.string().array() ]).optional(),
  preferredJobRoles: z.union([ z.lazy(() => JobSeekerCreatepreferredJobRolesInputSchema),z.string().array() ]).optional(),
  resume: z.string(),
  profilePicture: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutJobSeekerInputSchema),
  applications: z.lazy(() => ApplicationCreateNestedManyWithoutJobSeekerInputSchema).optional()
}).strict();

export const JobSeekerUncheckedCreateWithoutCertificationsInputSchema: z.ZodType<Prisma.JobSeekerUncheckedCreateWithoutCertificationsInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  dob: z.coerce.date(),
  gender: z.string(),
  contactNumber: z.string(),
  address: z.string(),
  city: z.string(),
  state: z.string(),
  postalCode: z.string(),
  country: z.string(),
  skills: z.union([ z.lazy(() => SkillListCreateEnvelopeInputSchema),z.lazy(() => SkillCreateInputSchema),z.lazy(() => SkillCreateInputSchema).array() ]).optional(),
  portfolioLinks: z.union([ z.lazy(() => JobSeekerCreateportfolioLinksInputSchema),z.string().array() ]).optional(),
  preferredJobRoles: z.union([ z.lazy(() => JobSeekerCreatepreferredJobRolesInputSchema),z.string().array() ]).optional(),
  resume: z.string(),
  profilePicture: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  applications: z.lazy(() => ApplicationUncheckedCreateNestedManyWithoutJobSeekerInputSchema).optional()
}).strict();

export const JobSeekerCreateOrConnectWithoutCertificationsInputSchema: z.ZodType<Prisma.JobSeekerCreateOrConnectWithoutCertificationsInput> = z.object({
  where: z.lazy(() => JobSeekerWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => JobSeekerCreateWithoutCertificationsInputSchema),z.lazy(() => JobSeekerUncheckedCreateWithoutCertificationsInputSchema) ]),
}).strict();

export const JobSeekerUpsertWithoutCertificationsInputSchema: z.ZodType<Prisma.JobSeekerUpsertWithoutCertificationsInput> = z.object({
  update: z.union([ z.lazy(() => JobSeekerUpdateWithoutCertificationsInputSchema),z.lazy(() => JobSeekerUncheckedUpdateWithoutCertificationsInputSchema) ]),
  create: z.union([ z.lazy(() => JobSeekerCreateWithoutCertificationsInputSchema),z.lazy(() => JobSeekerUncheckedCreateWithoutCertificationsInputSchema) ]),
  where: z.lazy(() => JobSeekerWhereInputSchema).optional()
}).strict();

export const JobSeekerUpdateToOneWithWhereWithoutCertificationsInputSchema: z.ZodType<Prisma.JobSeekerUpdateToOneWithWhereWithoutCertificationsInput> = z.object({
  where: z.lazy(() => JobSeekerWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => JobSeekerUpdateWithoutCertificationsInputSchema),z.lazy(() => JobSeekerUncheckedUpdateWithoutCertificationsInputSchema) ]),
}).strict();

export const JobSeekerUpdateWithoutCertificationsInputSchema: z.ZodType<Prisma.JobSeekerUpdateWithoutCertificationsInput> = z.object({
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dob: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  gender: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  contactNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  postalCode: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  country: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  skills: z.union([ z.lazy(() => SkillListUpdateEnvelopeInputSchema),z.lazy(() => SkillCreateInputSchema),z.lazy(() => SkillCreateInputSchema).array() ]).optional(),
  portfolioLinks: z.union([ z.lazy(() => JobSeekerUpdateportfolioLinksInputSchema),z.string().array() ]).optional(),
  preferredJobRoles: z.union([ z.lazy(() => JobSeekerUpdatepreferredJobRolesInputSchema),z.string().array() ]).optional(),
  resume: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  profilePicture: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutJobSeekerNestedInputSchema).optional(),
  applications: z.lazy(() => ApplicationUpdateManyWithoutJobSeekerNestedInputSchema).optional()
}).strict();

export const JobSeekerUncheckedUpdateWithoutCertificationsInputSchema: z.ZodType<Prisma.JobSeekerUncheckedUpdateWithoutCertificationsInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dob: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  gender: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  contactNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  postalCode: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  country: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  skills: z.union([ z.lazy(() => SkillListUpdateEnvelopeInputSchema),z.lazy(() => SkillCreateInputSchema),z.lazy(() => SkillCreateInputSchema).array() ]).optional(),
  portfolioLinks: z.union([ z.lazy(() => JobSeekerUpdateportfolioLinksInputSchema),z.string().array() ]).optional(),
  preferredJobRoles: z.union([ z.lazy(() => JobSeekerUpdatepreferredJobRolesInputSchema),z.string().array() ]).optional(),
  resume: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  profilePicture: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  applications: z.lazy(() => ApplicationUncheckedUpdateManyWithoutJobSeekerNestedInputSchema).optional()
}).strict();

export const UserCreateWithoutHiringCompanyInputSchema: z.ZodType<Prisma.UserCreateWithoutHiringCompanyInput> = z.object({
  id: z.string().optional(),
  clerkId: z.string(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  jobSeekerId: z.string().optional().nullable(),
  hiringCompanyId: z.string().optional().nullable(),
  selfAssessmentId: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  jobSeeker: z.lazy(() => JobSeekerCreateNestedOneWithoutUserInputSchema).optional(),
  selfAssessment: z.lazy(() => SelfAssessmentCreateNestedOneWithoutUserInputSchema).optional(),
  threads: z.lazy(() => ForumThreadCreateNestedManyWithoutAuthorInputSchema).optional(),
  posts: z.lazy(() => ForumPostCreateNestedManyWithoutAuthorInputSchema).optional(),
  comments: z.lazy(() => ForumCommentCreateNestedManyWithoutAuthorInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutHiringCompanyInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutHiringCompanyInput> = z.object({
  id: z.string().optional(),
  clerkId: z.string(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  jobSeekerId: z.string().optional().nullable(),
  hiringCompanyId: z.string().optional().nullable(),
  selfAssessmentId: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  jobSeeker: z.lazy(() => JobSeekerUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  selfAssessment: z.lazy(() => SelfAssessmentUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  threads: z.lazy(() => ForumThreadUncheckedCreateNestedManyWithoutAuthorInputSchema).optional(),
  posts: z.lazy(() => ForumPostUncheckedCreateNestedManyWithoutAuthorInputSchema).optional(),
  comments: z.lazy(() => ForumCommentUncheckedCreateNestedManyWithoutAuthorInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutHiringCompanyInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutHiringCompanyInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutHiringCompanyInputSchema),z.lazy(() => UserUncheckedCreateWithoutHiringCompanyInputSchema) ]),
}).strict();

export const JobCreateWithoutHiringCompanyInputSchema: z.ZodType<Prisma.JobCreateWithoutHiringCompanyInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string(),
  requirements: z.union([ z.lazy(() => JobCreaterequirementsInputSchema),z.string().array() ]).optional(),
  salaryRange: z.string(),
  location: z.string(),
  employmentType: z.string(),
  benefits: z.union([ z.lazy(() => JobCreatebenefitsInputSchema),z.string().array() ]).optional(),
  remote: z.boolean(),
  postedAt: z.coerce.date().optional(),
  applications: z.lazy(() => ApplicationCreateNestedManyWithoutJobInputSchema).optional()
}).strict();

export const JobUncheckedCreateWithoutHiringCompanyInputSchema: z.ZodType<Prisma.JobUncheckedCreateWithoutHiringCompanyInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string(),
  requirements: z.union([ z.lazy(() => JobCreaterequirementsInputSchema),z.string().array() ]).optional(),
  salaryRange: z.string(),
  location: z.string(),
  employmentType: z.string(),
  benefits: z.union([ z.lazy(() => JobCreatebenefitsInputSchema),z.string().array() ]).optional(),
  remote: z.boolean(),
  postedAt: z.coerce.date().optional(),
  applications: z.lazy(() => ApplicationUncheckedCreateNestedManyWithoutJobInputSchema).optional()
}).strict();

export const JobCreateOrConnectWithoutHiringCompanyInputSchema: z.ZodType<Prisma.JobCreateOrConnectWithoutHiringCompanyInput> = z.object({
  where: z.lazy(() => JobWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => JobCreateWithoutHiringCompanyInputSchema),z.lazy(() => JobUncheckedCreateWithoutHiringCompanyInputSchema) ]),
}).strict();

export const JobCreateManyHiringCompanyInputEnvelopeSchema: z.ZodType<Prisma.JobCreateManyHiringCompanyInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => JobCreateManyHiringCompanyInputSchema),z.lazy(() => JobCreateManyHiringCompanyInputSchema).array() ]),
}).strict();

export const UserUpsertWithoutHiringCompanyInputSchema: z.ZodType<Prisma.UserUpsertWithoutHiringCompanyInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutHiringCompanyInputSchema),z.lazy(() => UserUncheckedUpdateWithoutHiringCompanyInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutHiringCompanyInputSchema),z.lazy(() => UserUncheckedCreateWithoutHiringCompanyInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutHiringCompanyInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutHiringCompanyInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutHiringCompanyInputSchema),z.lazy(() => UserUncheckedUpdateWithoutHiringCompanyInputSchema) ]),
}).strict();

export const UserUpdateWithoutHiringCompanyInputSchema: z.ZodType<Prisma.UserUpdateWithoutHiringCompanyInput> = z.object({
  clerkId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  jobSeekerId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hiringCompanyId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  selfAssessmentId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional(),
  jobSeeker: z.lazy(() => JobSeekerUpdateOneWithoutUserNestedInputSchema).optional(),
  selfAssessment: z.lazy(() => SelfAssessmentUpdateOneWithoutUserNestedInputSchema).optional(),
  threads: z.lazy(() => ForumThreadUpdateManyWithoutAuthorNestedInputSchema).optional(),
  posts: z.lazy(() => ForumPostUpdateManyWithoutAuthorNestedInputSchema).optional(),
  comments: z.lazy(() => ForumCommentUpdateManyWithoutAuthorNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutHiringCompanyInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutHiringCompanyInput> = z.object({
  clerkId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  jobSeekerId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hiringCompanyId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  selfAssessmentId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  jobSeeker: z.lazy(() => JobSeekerUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  selfAssessment: z.lazy(() => SelfAssessmentUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  threads: z.lazy(() => ForumThreadUncheckedUpdateManyWithoutAuthorNestedInputSchema).optional(),
  posts: z.lazy(() => ForumPostUncheckedUpdateManyWithoutAuthorNestedInputSchema).optional(),
  comments: z.lazy(() => ForumCommentUncheckedUpdateManyWithoutAuthorNestedInputSchema).optional()
}).strict();

export const JobUpsertWithWhereUniqueWithoutHiringCompanyInputSchema: z.ZodType<Prisma.JobUpsertWithWhereUniqueWithoutHiringCompanyInput> = z.object({
  where: z.lazy(() => JobWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => JobUpdateWithoutHiringCompanyInputSchema),z.lazy(() => JobUncheckedUpdateWithoutHiringCompanyInputSchema) ]),
  create: z.union([ z.lazy(() => JobCreateWithoutHiringCompanyInputSchema),z.lazy(() => JobUncheckedCreateWithoutHiringCompanyInputSchema) ]),
}).strict();

export const JobUpdateWithWhereUniqueWithoutHiringCompanyInputSchema: z.ZodType<Prisma.JobUpdateWithWhereUniqueWithoutHiringCompanyInput> = z.object({
  where: z.lazy(() => JobWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => JobUpdateWithoutHiringCompanyInputSchema),z.lazy(() => JobUncheckedUpdateWithoutHiringCompanyInputSchema) ]),
}).strict();

export const JobUpdateManyWithWhereWithoutHiringCompanyInputSchema: z.ZodType<Prisma.JobUpdateManyWithWhereWithoutHiringCompanyInput> = z.object({
  where: z.lazy(() => JobScalarWhereInputSchema),
  data: z.union([ z.lazy(() => JobUpdateManyMutationInputSchema),z.lazy(() => JobUncheckedUpdateManyWithoutHiringCompanyInputSchema) ]),
}).strict();

export const JobScalarWhereInputSchema: z.ZodType<Prisma.JobScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => JobScalarWhereInputSchema),z.lazy(() => JobScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => JobScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => JobScalarWhereInputSchema),z.lazy(() => JobScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  hiringCompanyId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  requirements: z.lazy(() => StringNullableListFilterSchema).optional(),
  salaryRange: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  location: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  employmentType: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  benefits: z.lazy(() => StringNullableListFilterSchema).optional(),
  remote: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  postedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const HiringCompanyCreateWithoutJobsInputSchema: z.ZodType<Prisma.HiringCompanyCreateWithoutJobsInput> = z.object({
  id: z.string().optional(),
  companyName: z.string(),
  industry: z.string(),
  companySize: z.string(),
  website: z.string(),
  socialLinks: z.union([ z.lazy(() => HiringCompanyCreatesocialLinksInputSchema),z.string().array() ]).optional(),
  contactPerson: z.string(),
  contactEmail: z.string(),
  contactNumber: z.string(),
  address: z.string(),
  city: z.string(),
  state: z.string(),
  postalCode: z.string(),
  country: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutHiringCompanyInputSchema)
}).strict();

export const HiringCompanyUncheckedCreateWithoutJobsInputSchema: z.ZodType<Prisma.HiringCompanyUncheckedCreateWithoutJobsInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  companyName: z.string(),
  industry: z.string(),
  companySize: z.string(),
  website: z.string(),
  socialLinks: z.union([ z.lazy(() => HiringCompanyCreatesocialLinksInputSchema),z.string().array() ]).optional(),
  contactPerson: z.string(),
  contactEmail: z.string(),
  contactNumber: z.string(),
  address: z.string(),
  city: z.string(),
  state: z.string(),
  postalCode: z.string(),
  country: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const HiringCompanyCreateOrConnectWithoutJobsInputSchema: z.ZodType<Prisma.HiringCompanyCreateOrConnectWithoutJobsInput> = z.object({
  where: z.lazy(() => HiringCompanyWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => HiringCompanyCreateWithoutJobsInputSchema),z.lazy(() => HiringCompanyUncheckedCreateWithoutJobsInputSchema) ]),
}).strict();

export const ApplicationCreateWithoutJobInputSchema: z.ZodType<Prisma.ApplicationCreateWithoutJobInput> = z.object({
  id: z.string().optional(),
  appliedAt: z.coerce.date().optional(),
  status: z.string().optional(),
  resume: z.string(),
  coverLetter: z.string().optional().nullable(),
  jobSeeker: z.lazy(() => JobSeekerCreateNestedOneWithoutApplicationsInputSchema),
  interviews: z.lazy(() => InterviewCreateNestedManyWithoutApplicationInputSchema).optional()
}).strict();

export const ApplicationUncheckedCreateWithoutJobInputSchema: z.ZodType<Prisma.ApplicationUncheckedCreateWithoutJobInput> = z.object({
  id: z.string().optional(),
  jobSeekerId: z.string(),
  appliedAt: z.coerce.date().optional(),
  status: z.string().optional(),
  resume: z.string(),
  coverLetter: z.string().optional().nullable(),
  interviews: z.lazy(() => InterviewUncheckedCreateNestedManyWithoutApplicationInputSchema).optional()
}).strict();

export const ApplicationCreateOrConnectWithoutJobInputSchema: z.ZodType<Prisma.ApplicationCreateOrConnectWithoutJobInput> = z.object({
  where: z.lazy(() => ApplicationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ApplicationCreateWithoutJobInputSchema),z.lazy(() => ApplicationUncheckedCreateWithoutJobInputSchema) ]),
}).strict();

export const ApplicationCreateManyJobInputEnvelopeSchema: z.ZodType<Prisma.ApplicationCreateManyJobInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ApplicationCreateManyJobInputSchema),z.lazy(() => ApplicationCreateManyJobInputSchema).array() ]),
}).strict();

export const HiringCompanyUpsertWithoutJobsInputSchema: z.ZodType<Prisma.HiringCompanyUpsertWithoutJobsInput> = z.object({
  update: z.union([ z.lazy(() => HiringCompanyUpdateWithoutJobsInputSchema),z.lazy(() => HiringCompanyUncheckedUpdateWithoutJobsInputSchema) ]),
  create: z.union([ z.lazy(() => HiringCompanyCreateWithoutJobsInputSchema),z.lazy(() => HiringCompanyUncheckedCreateWithoutJobsInputSchema) ]),
  where: z.lazy(() => HiringCompanyWhereInputSchema).optional()
}).strict();

export const HiringCompanyUpdateToOneWithWhereWithoutJobsInputSchema: z.ZodType<Prisma.HiringCompanyUpdateToOneWithWhereWithoutJobsInput> = z.object({
  where: z.lazy(() => HiringCompanyWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => HiringCompanyUpdateWithoutJobsInputSchema),z.lazy(() => HiringCompanyUncheckedUpdateWithoutJobsInputSchema) ]),
}).strict();

export const HiringCompanyUpdateWithoutJobsInputSchema: z.ZodType<Prisma.HiringCompanyUpdateWithoutJobsInput> = z.object({
  companyName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  industry: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  companySize: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  website: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  socialLinks: z.union([ z.lazy(() => HiringCompanyUpdatesocialLinksInputSchema),z.string().array() ]).optional(),
  contactPerson: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  contactEmail: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  contactNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  postalCode: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  country: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutHiringCompanyNestedInputSchema).optional()
}).strict();

export const HiringCompanyUncheckedUpdateWithoutJobsInputSchema: z.ZodType<Prisma.HiringCompanyUncheckedUpdateWithoutJobsInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  companyName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  industry: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  companySize: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  website: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  socialLinks: z.union([ z.lazy(() => HiringCompanyUpdatesocialLinksInputSchema),z.string().array() ]).optional(),
  contactPerson: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  contactEmail: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  contactNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  postalCode: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  country: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ApplicationUpsertWithWhereUniqueWithoutJobInputSchema: z.ZodType<Prisma.ApplicationUpsertWithWhereUniqueWithoutJobInput> = z.object({
  where: z.lazy(() => ApplicationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ApplicationUpdateWithoutJobInputSchema),z.lazy(() => ApplicationUncheckedUpdateWithoutJobInputSchema) ]),
  create: z.union([ z.lazy(() => ApplicationCreateWithoutJobInputSchema),z.lazy(() => ApplicationUncheckedCreateWithoutJobInputSchema) ]),
}).strict();

export const ApplicationUpdateWithWhereUniqueWithoutJobInputSchema: z.ZodType<Prisma.ApplicationUpdateWithWhereUniqueWithoutJobInput> = z.object({
  where: z.lazy(() => ApplicationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ApplicationUpdateWithoutJobInputSchema),z.lazy(() => ApplicationUncheckedUpdateWithoutJobInputSchema) ]),
}).strict();

export const ApplicationUpdateManyWithWhereWithoutJobInputSchema: z.ZodType<Prisma.ApplicationUpdateManyWithWhereWithoutJobInput> = z.object({
  where: z.lazy(() => ApplicationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ApplicationUpdateManyMutationInputSchema),z.lazy(() => ApplicationUncheckedUpdateManyWithoutJobInputSchema) ]),
}).strict();

export const JobSeekerCreateWithoutApplicationsInputSchema: z.ZodType<Prisma.JobSeekerCreateWithoutApplicationsInput> = z.object({
  id: z.string().optional(),
  firstName: z.string(),
  lastName: z.string(),
  dob: z.coerce.date(),
  gender: z.string(),
  contactNumber: z.string(),
  address: z.string(),
  city: z.string(),
  state: z.string(),
  postalCode: z.string(),
  country: z.string(),
  skills: z.union([ z.lazy(() => SkillListCreateEnvelopeInputSchema),z.lazy(() => SkillCreateInputSchema),z.lazy(() => SkillCreateInputSchema).array() ]).optional(),
  portfolioLinks: z.union([ z.lazy(() => JobSeekerCreateportfolioLinksInputSchema),z.string().array() ]).optional(),
  preferredJobRoles: z.union([ z.lazy(() => JobSeekerCreatepreferredJobRolesInputSchema),z.string().array() ]).optional(),
  resume: z.string(),
  profilePicture: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutJobSeekerInputSchema),
  certifications: z.lazy(() => CertificationCreateNestedManyWithoutJobSeekerInputSchema).optional()
}).strict();

export const JobSeekerUncheckedCreateWithoutApplicationsInputSchema: z.ZodType<Prisma.JobSeekerUncheckedCreateWithoutApplicationsInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  dob: z.coerce.date(),
  gender: z.string(),
  contactNumber: z.string(),
  address: z.string(),
  city: z.string(),
  state: z.string(),
  postalCode: z.string(),
  country: z.string(),
  skills: z.union([ z.lazy(() => SkillListCreateEnvelopeInputSchema),z.lazy(() => SkillCreateInputSchema),z.lazy(() => SkillCreateInputSchema).array() ]).optional(),
  portfolioLinks: z.union([ z.lazy(() => JobSeekerCreateportfolioLinksInputSchema),z.string().array() ]).optional(),
  preferredJobRoles: z.union([ z.lazy(() => JobSeekerCreatepreferredJobRolesInputSchema),z.string().array() ]).optional(),
  resume: z.string(),
  profilePicture: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  certifications: z.lazy(() => CertificationUncheckedCreateNestedManyWithoutJobSeekerInputSchema).optional()
}).strict();

export const JobSeekerCreateOrConnectWithoutApplicationsInputSchema: z.ZodType<Prisma.JobSeekerCreateOrConnectWithoutApplicationsInput> = z.object({
  where: z.lazy(() => JobSeekerWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => JobSeekerCreateWithoutApplicationsInputSchema),z.lazy(() => JobSeekerUncheckedCreateWithoutApplicationsInputSchema) ]),
}).strict();

export const JobCreateWithoutApplicationsInputSchema: z.ZodType<Prisma.JobCreateWithoutApplicationsInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string(),
  requirements: z.union([ z.lazy(() => JobCreaterequirementsInputSchema),z.string().array() ]).optional(),
  salaryRange: z.string(),
  location: z.string(),
  employmentType: z.string(),
  benefits: z.union([ z.lazy(() => JobCreatebenefitsInputSchema),z.string().array() ]).optional(),
  remote: z.boolean(),
  postedAt: z.coerce.date().optional(),
  hiringCompany: z.lazy(() => HiringCompanyCreateNestedOneWithoutJobsInputSchema)
}).strict();

export const JobUncheckedCreateWithoutApplicationsInputSchema: z.ZodType<Prisma.JobUncheckedCreateWithoutApplicationsInput> = z.object({
  id: z.string().optional(),
  hiringCompanyId: z.string(),
  title: z.string(),
  description: z.string(),
  requirements: z.union([ z.lazy(() => JobCreaterequirementsInputSchema),z.string().array() ]).optional(),
  salaryRange: z.string(),
  location: z.string(),
  employmentType: z.string(),
  benefits: z.union([ z.lazy(() => JobCreatebenefitsInputSchema),z.string().array() ]).optional(),
  remote: z.boolean(),
  postedAt: z.coerce.date().optional()
}).strict();

export const JobCreateOrConnectWithoutApplicationsInputSchema: z.ZodType<Prisma.JobCreateOrConnectWithoutApplicationsInput> = z.object({
  where: z.lazy(() => JobWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => JobCreateWithoutApplicationsInputSchema),z.lazy(() => JobUncheckedCreateWithoutApplicationsInputSchema) ]),
}).strict();

export const InterviewCreateWithoutApplicationInputSchema: z.ZodType<Prisma.InterviewCreateWithoutApplicationInput> = z.object({
  id: z.string().optional(),
  scheduledAt: z.coerce.date(),
  status: z.string().optional(),
  feedback: z.string().optional().nullable()
}).strict();

export const InterviewUncheckedCreateWithoutApplicationInputSchema: z.ZodType<Prisma.InterviewUncheckedCreateWithoutApplicationInput> = z.object({
  id: z.string().optional(),
  scheduledAt: z.coerce.date(),
  status: z.string().optional(),
  feedback: z.string().optional().nullable()
}).strict();

export const InterviewCreateOrConnectWithoutApplicationInputSchema: z.ZodType<Prisma.InterviewCreateOrConnectWithoutApplicationInput> = z.object({
  where: z.lazy(() => InterviewWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => InterviewCreateWithoutApplicationInputSchema),z.lazy(() => InterviewUncheckedCreateWithoutApplicationInputSchema) ]),
}).strict();

export const InterviewCreateManyApplicationInputEnvelopeSchema: z.ZodType<Prisma.InterviewCreateManyApplicationInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => InterviewCreateManyApplicationInputSchema),z.lazy(() => InterviewCreateManyApplicationInputSchema).array() ]),
}).strict();

export const JobSeekerUpsertWithoutApplicationsInputSchema: z.ZodType<Prisma.JobSeekerUpsertWithoutApplicationsInput> = z.object({
  update: z.union([ z.lazy(() => JobSeekerUpdateWithoutApplicationsInputSchema),z.lazy(() => JobSeekerUncheckedUpdateWithoutApplicationsInputSchema) ]),
  create: z.union([ z.lazy(() => JobSeekerCreateWithoutApplicationsInputSchema),z.lazy(() => JobSeekerUncheckedCreateWithoutApplicationsInputSchema) ]),
  where: z.lazy(() => JobSeekerWhereInputSchema).optional()
}).strict();

export const JobSeekerUpdateToOneWithWhereWithoutApplicationsInputSchema: z.ZodType<Prisma.JobSeekerUpdateToOneWithWhereWithoutApplicationsInput> = z.object({
  where: z.lazy(() => JobSeekerWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => JobSeekerUpdateWithoutApplicationsInputSchema),z.lazy(() => JobSeekerUncheckedUpdateWithoutApplicationsInputSchema) ]),
}).strict();

export const JobSeekerUpdateWithoutApplicationsInputSchema: z.ZodType<Prisma.JobSeekerUpdateWithoutApplicationsInput> = z.object({
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dob: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  gender: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  contactNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  postalCode: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  country: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  skills: z.union([ z.lazy(() => SkillListUpdateEnvelopeInputSchema),z.lazy(() => SkillCreateInputSchema),z.lazy(() => SkillCreateInputSchema).array() ]).optional(),
  portfolioLinks: z.union([ z.lazy(() => JobSeekerUpdateportfolioLinksInputSchema),z.string().array() ]).optional(),
  preferredJobRoles: z.union([ z.lazy(() => JobSeekerUpdatepreferredJobRolesInputSchema),z.string().array() ]).optional(),
  resume: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  profilePicture: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutJobSeekerNestedInputSchema).optional(),
  certifications: z.lazy(() => CertificationUpdateManyWithoutJobSeekerNestedInputSchema).optional()
}).strict();

export const JobSeekerUncheckedUpdateWithoutApplicationsInputSchema: z.ZodType<Prisma.JobSeekerUncheckedUpdateWithoutApplicationsInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  firstName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  lastName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dob: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  gender: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  contactNumber: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  postalCode: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  country: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  skills: z.union([ z.lazy(() => SkillListUpdateEnvelopeInputSchema),z.lazy(() => SkillCreateInputSchema),z.lazy(() => SkillCreateInputSchema).array() ]).optional(),
  portfolioLinks: z.union([ z.lazy(() => JobSeekerUpdateportfolioLinksInputSchema),z.string().array() ]).optional(),
  preferredJobRoles: z.union([ z.lazy(() => JobSeekerUpdatepreferredJobRolesInputSchema),z.string().array() ]).optional(),
  resume: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  profilePicture: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  certifications: z.lazy(() => CertificationUncheckedUpdateManyWithoutJobSeekerNestedInputSchema).optional()
}).strict();

export const JobUpsertWithoutApplicationsInputSchema: z.ZodType<Prisma.JobUpsertWithoutApplicationsInput> = z.object({
  update: z.union([ z.lazy(() => JobUpdateWithoutApplicationsInputSchema),z.lazy(() => JobUncheckedUpdateWithoutApplicationsInputSchema) ]),
  create: z.union([ z.lazy(() => JobCreateWithoutApplicationsInputSchema),z.lazy(() => JobUncheckedCreateWithoutApplicationsInputSchema) ]),
  where: z.lazy(() => JobWhereInputSchema).optional()
}).strict();

export const JobUpdateToOneWithWhereWithoutApplicationsInputSchema: z.ZodType<Prisma.JobUpdateToOneWithWhereWithoutApplicationsInput> = z.object({
  where: z.lazy(() => JobWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => JobUpdateWithoutApplicationsInputSchema),z.lazy(() => JobUncheckedUpdateWithoutApplicationsInputSchema) ]),
}).strict();

export const JobUpdateWithoutApplicationsInputSchema: z.ZodType<Prisma.JobUpdateWithoutApplicationsInput> = z.object({
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  requirements: z.union([ z.lazy(() => JobUpdaterequirementsInputSchema),z.string().array() ]).optional(),
  salaryRange: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  employmentType: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  benefits: z.union([ z.lazy(() => JobUpdatebenefitsInputSchema),z.string().array() ]).optional(),
  remote: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  postedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  hiringCompany: z.lazy(() => HiringCompanyUpdateOneRequiredWithoutJobsNestedInputSchema).optional()
}).strict();

export const JobUncheckedUpdateWithoutApplicationsInputSchema: z.ZodType<Prisma.JobUncheckedUpdateWithoutApplicationsInput> = z.object({
  hiringCompanyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  requirements: z.union([ z.lazy(() => JobUpdaterequirementsInputSchema),z.string().array() ]).optional(),
  salaryRange: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  employmentType: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  benefits: z.union([ z.lazy(() => JobUpdatebenefitsInputSchema),z.string().array() ]).optional(),
  remote: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  postedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InterviewUpsertWithWhereUniqueWithoutApplicationInputSchema: z.ZodType<Prisma.InterviewUpsertWithWhereUniqueWithoutApplicationInput> = z.object({
  where: z.lazy(() => InterviewWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => InterviewUpdateWithoutApplicationInputSchema),z.lazy(() => InterviewUncheckedUpdateWithoutApplicationInputSchema) ]),
  create: z.union([ z.lazy(() => InterviewCreateWithoutApplicationInputSchema),z.lazy(() => InterviewUncheckedCreateWithoutApplicationInputSchema) ]),
}).strict();

export const InterviewUpdateWithWhereUniqueWithoutApplicationInputSchema: z.ZodType<Prisma.InterviewUpdateWithWhereUniqueWithoutApplicationInput> = z.object({
  where: z.lazy(() => InterviewWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => InterviewUpdateWithoutApplicationInputSchema),z.lazy(() => InterviewUncheckedUpdateWithoutApplicationInputSchema) ]),
}).strict();

export const InterviewUpdateManyWithWhereWithoutApplicationInputSchema: z.ZodType<Prisma.InterviewUpdateManyWithWhereWithoutApplicationInput> = z.object({
  where: z.lazy(() => InterviewScalarWhereInputSchema),
  data: z.union([ z.lazy(() => InterviewUpdateManyMutationInputSchema),z.lazy(() => InterviewUncheckedUpdateManyWithoutApplicationInputSchema) ]),
}).strict();

export const InterviewScalarWhereInputSchema: z.ZodType<Prisma.InterviewScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => InterviewScalarWhereInputSchema),z.lazy(() => InterviewScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => InterviewScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InterviewScalarWhereInputSchema),z.lazy(() => InterviewScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  applicationId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  scheduledAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  status: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  feedback: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const ApplicationCreateWithoutInterviewsInputSchema: z.ZodType<Prisma.ApplicationCreateWithoutInterviewsInput> = z.object({
  id: z.string().optional(),
  appliedAt: z.coerce.date().optional(),
  status: z.string().optional(),
  resume: z.string(),
  coverLetter: z.string().optional().nullable(),
  jobSeeker: z.lazy(() => JobSeekerCreateNestedOneWithoutApplicationsInputSchema),
  job: z.lazy(() => JobCreateNestedOneWithoutApplicationsInputSchema)
}).strict();

export const ApplicationUncheckedCreateWithoutInterviewsInputSchema: z.ZodType<Prisma.ApplicationUncheckedCreateWithoutInterviewsInput> = z.object({
  id: z.string().optional(),
  jobSeekerId: z.string(),
  jobId: z.string(),
  appliedAt: z.coerce.date().optional(),
  status: z.string().optional(),
  resume: z.string(),
  coverLetter: z.string().optional().nullable()
}).strict();

export const ApplicationCreateOrConnectWithoutInterviewsInputSchema: z.ZodType<Prisma.ApplicationCreateOrConnectWithoutInterviewsInput> = z.object({
  where: z.lazy(() => ApplicationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ApplicationCreateWithoutInterviewsInputSchema),z.lazy(() => ApplicationUncheckedCreateWithoutInterviewsInputSchema) ]),
}).strict();

export const ApplicationUpsertWithoutInterviewsInputSchema: z.ZodType<Prisma.ApplicationUpsertWithoutInterviewsInput> = z.object({
  update: z.union([ z.lazy(() => ApplicationUpdateWithoutInterviewsInputSchema),z.lazy(() => ApplicationUncheckedUpdateWithoutInterviewsInputSchema) ]),
  create: z.union([ z.lazy(() => ApplicationCreateWithoutInterviewsInputSchema),z.lazy(() => ApplicationUncheckedCreateWithoutInterviewsInputSchema) ]),
  where: z.lazy(() => ApplicationWhereInputSchema).optional()
}).strict();

export const ApplicationUpdateToOneWithWhereWithoutInterviewsInputSchema: z.ZodType<Prisma.ApplicationUpdateToOneWithWhereWithoutInterviewsInput> = z.object({
  where: z.lazy(() => ApplicationWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ApplicationUpdateWithoutInterviewsInputSchema),z.lazy(() => ApplicationUncheckedUpdateWithoutInterviewsInputSchema) ]),
}).strict();

export const ApplicationUpdateWithoutInterviewsInputSchema: z.ZodType<Prisma.ApplicationUpdateWithoutInterviewsInput> = z.object({
  appliedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  resume: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  coverLetter: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  jobSeeker: z.lazy(() => JobSeekerUpdateOneRequiredWithoutApplicationsNestedInputSchema).optional(),
  job: z.lazy(() => JobUpdateOneRequiredWithoutApplicationsNestedInputSchema).optional()
}).strict();

export const ApplicationUncheckedUpdateWithoutInterviewsInputSchema: z.ZodType<Prisma.ApplicationUncheckedUpdateWithoutInterviewsInput> = z.object({
  jobSeekerId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  jobId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  appliedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  resume: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  coverLetter: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const UserCreateWithoutSelfAssessmentInputSchema: z.ZodType<Prisma.UserCreateWithoutSelfAssessmentInput> = z.object({
  id: z.string().optional(),
  clerkId: z.string(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  jobSeekerId: z.string().optional().nullable(),
  hiringCompanyId: z.string().optional().nullable(),
  selfAssessmentId: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  jobSeeker: z.lazy(() => JobSeekerCreateNestedOneWithoutUserInputSchema).optional(),
  hiringCompany: z.lazy(() => HiringCompanyCreateNestedOneWithoutUserInputSchema).optional(),
  threads: z.lazy(() => ForumThreadCreateNestedManyWithoutAuthorInputSchema).optional(),
  posts: z.lazy(() => ForumPostCreateNestedManyWithoutAuthorInputSchema).optional(),
  comments: z.lazy(() => ForumCommentCreateNestedManyWithoutAuthorInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutSelfAssessmentInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutSelfAssessmentInput> = z.object({
  id: z.string().optional(),
  clerkId: z.string(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  jobSeekerId: z.string().optional().nullable(),
  hiringCompanyId: z.string().optional().nullable(),
  selfAssessmentId: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  jobSeeker: z.lazy(() => JobSeekerUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  hiringCompany: z.lazy(() => HiringCompanyUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  threads: z.lazy(() => ForumThreadUncheckedCreateNestedManyWithoutAuthorInputSchema).optional(),
  posts: z.lazy(() => ForumPostUncheckedCreateNestedManyWithoutAuthorInputSchema).optional(),
  comments: z.lazy(() => ForumCommentUncheckedCreateNestedManyWithoutAuthorInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutSelfAssessmentInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutSelfAssessmentInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutSelfAssessmentInputSchema),z.lazy(() => UserUncheckedCreateWithoutSelfAssessmentInputSchema) ]),
}).strict();

export const SelfAssessmentResponseUpdateManyInputSchema: z.ZodType<Prisma.SelfAssessmentResponseUpdateManyInput> = z.object({
  where: z.lazy(() => SelfAssessmentResponseWhereInputSchema),
  data: z.lazy(() => SelfAssessmentResponseUpdateInputSchema)
}).strict();

export const SelfAssessmentResponseDeleteManyInputSchema: z.ZodType<Prisma.SelfAssessmentResponseDeleteManyInput> = z.object({
  where: z.lazy(() => SelfAssessmentResponseWhereInputSchema)
}).strict();

export const UserUpsertWithoutSelfAssessmentInputSchema: z.ZodType<Prisma.UserUpsertWithoutSelfAssessmentInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutSelfAssessmentInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSelfAssessmentInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutSelfAssessmentInputSchema),z.lazy(() => UserUncheckedCreateWithoutSelfAssessmentInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutSelfAssessmentInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutSelfAssessmentInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutSelfAssessmentInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSelfAssessmentInputSchema) ]),
}).strict();

export const UserUpdateWithoutSelfAssessmentInputSchema: z.ZodType<Prisma.UserUpdateWithoutSelfAssessmentInput> = z.object({
  clerkId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  jobSeekerId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hiringCompanyId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  selfAssessmentId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional(),
  jobSeeker: z.lazy(() => JobSeekerUpdateOneWithoutUserNestedInputSchema).optional(),
  hiringCompany: z.lazy(() => HiringCompanyUpdateOneWithoutUserNestedInputSchema).optional(),
  threads: z.lazy(() => ForumThreadUpdateManyWithoutAuthorNestedInputSchema).optional(),
  posts: z.lazy(() => ForumPostUpdateManyWithoutAuthorNestedInputSchema).optional(),
  comments: z.lazy(() => ForumCommentUpdateManyWithoutAuthorNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutSelfAssessmentInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutSelfAssessmentInput> = z.object({
  clerkId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  jobSeekerId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hiringCompanyId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  selfAssessmentId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  jobSeeker: z.lazy(() => JobSeekerUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  hiringCompany: z.lazy(() => HiringCompanyUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  threads: z.lazy(() => ForumThreadUncheckedUpdateManyWithoutAuthorNestedInputSchema).optional(),
  posts: z.lazy(() => ForumPostUncheckedUpdateManyWithoutAuthorNestedInputSchema).optional(),
  comments: z.lazy(() => ForumCommentUncheckedUpdateManyWithoutAuthorNestedInputSchema).optional()
}).strict();

export const QuizOptionCreateInputSchema: z.ZodType<Prisma.QuizOptionCreateInput> = z.object({
  optionId: z.number(),
  option: z.string()
}).strict();

export const QuizQuestionUpdateManyInputSchema: z.ZodType<Prisma.QuizQuestionUpdateManyInput> = z.object({
  where: z.lazy(() => QuizQuestionWhereInputSchema),
  data: z.lazy(() => QuizQuestionUpdateInputSchema)
}).strict();

export const QuizQuestionDeleteManyInputSchema: z.ZodType<Prisma.QuizQuestionDeleteManyInput> = z.object({
  where: z.lazy(() => QuizQuestionWhereInputSchema)
}).strict();

export const QuizAnswerUpdateManyInputSchema: z.ZodType<Prisma.QuizAnswerUpdateManyInput> = z.object({
  where: z.lazy(() => QuizAnswerWhereInputSchema),
  data: z.lazy(() => QuizAnswerUpdateInputSchema)
}).strict();

export const QuizAnswerDeleteManyInputSchema: z.ZodType<Prisma.QuizAnswerDeleteManyInput> = z.object({
  where: z.lazy(() => QuizAnswerWhereInputSchema)
}).strict();

export const UserCreateWithoutThreadsInputSchema: z.ZodType<Prisma.UserCreateWithoutThreadsInput> = z.object({
  id: z.string().optional(),
  clerkId: z.string(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  jobSeekerId: z.string().optional().nullable(),
  hiringCompanyId: z.string().optional().nullable(),
  selfAssessmentId: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  jobSeeker: z.lazy(() => JobSeekerCreateNestedOneWithoutUserInputSchema).optional(),
  hiringCompany: z.lazy(() => HiringCompanyCreateNestedOneWithoutUserInputSchema).optional(),
  selfAssessment: z.lazy(() => SelfAssessmentCreateNestedOneWithoutUserInputSchema).optional(),
  posts: z.lazy(() => ForumPostCreateNestedManyWithoutAuthorInputSchema).optional(),
  comments: z.lazy(() => ForumCommentCreateNestedManyWithoutAuthorInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutThreadsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutThreadsInput> = z.object({
  id: z.string().optional(),
  clerkId: z.string(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  jobSeekerId: z.string().optional().nullable(),
  hiringCompanyId: z.string().optional().nullable(),
  selfAssessmentId: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  jobSeeker: z.lazy(() => JobSeekerUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  hiringCompany: z.lazy(() => HiringCompanyUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  selfAssessment: z.lazy(() => SelfAssessmentUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  posts: z.lazy(() => ForumPostUncheckedCreateNestedManyWithoutAuthorInputSchema).optional(),
  comments: z.lazy(() => ForumCommentUncheckedCreateNestedManyWithoutAuthorInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutThreadsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutThreadsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutThreadsInputSchema),z.lazy(() => UserUncheckedCreateWithoutThreadsInputSchema) ]),
}).strict();

export const ForumPostCreateWithoutThreadInputSchema: z.ZodType<Prisma.ForumPostCreateWithoutThreadInput> = z.object({
  id: z.string().optional(),
  content: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  author: z.lazy(() => UserCreateNestedOneWithoutPostsInputSchema),
  comments: z.lazy(() => ForumCommentCreateNestedManyWithoutPostInputSchema).optional()
}).strict();

export const ForumPostUncheckedCreateWithoutThreadInputSchema: z.ZodType<Prisma.ForumPostUncheckedCreateWithoutThreadInput> = z.object({
  id: z.string().optional(),
  content: z.string(),
  authorId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  comments: z.lazy(() => ForumCommentUncheckedCreateNestedManyWithoutPostInputSchema).optional()
}).strict();

export const ForumPostCreateOrConnectWithoutThreadInputSchema: z.ZodType<Prisma.ForumPostCreateOrConnectWithoutThreadInput> = z.object({
  where: z.lazy(() => ForumPostWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ForumPostCreateWithoutThreadInputSchema),z.lazy(() => ForumPostUncheckedCreateWithoutThreadInputSchema) ]),
}).strict();

export const ForumPostCreateManyThreadInputEnvelopeSchema: z.ZodType<Prisma.ForumPostCreateManyThreadInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ForumPostCreateManyThreadInputSchema),z.lazy(() => ForumPostCreateManyThreadInputSchema).array() ]),
}).strict();

export const UserUpsertWithoutThreadsInputSchema: z.ZodType<Prisma.UserUpsertWithoutThreadsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutThreadsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutThreadsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutThreadsInputSchema),z.lazy(() => UserUncheckedCreateWithoutThreadsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutThreadsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutThreadsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutThreadsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutThreadsInputSchema) ]),
}).strict();

export const UserUpdateWithoutThreadsInputSchema: z.ZodType<Prisma.UserUpdateWithoutThreadsInput> = z.object({
  clerkId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  jobSeekerId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hiringCompanyId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  selfAssessmentId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional(),
  jobSeeker: z.lazy(() => JobSeekerUpdateOneWithoutUserNestedInputSchema).optional(),
  hiringCompany: z.lazy(() => HiringCompanyUpdateOneWithoutUserNestedInputSchema).optional(),
  selfAssessment: z.lazy(() => SelfAssessmentUpdateOneWithoutUserNestedInputSchema).optional(),
  posts: z.lazy(() => ForumPostUpdateManyWithoutAuthorNestedInputSchema).optional(),
  comments: z.lazy(() => ForumCommentUpdateManyWithoutAuthorNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutThreadsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutThreadsInput> = z.object({
  clerkId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  jobSeekerId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hiringCompanyId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  selfAssessmentId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  jobSeeker: z.lazy(() => JobSeekerUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  hiringCompany: z.lazy(() => HiringCompanyUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  selfAssessment: z.lazy(() => SelfAssessmentUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  posts: z.lazy(() => ForumPostUncheckedUpdateManyWithoutAuthorNestedInputSchema).optional(),
  comments: z.lazy(() => ForumCommentUncheckedUpdateManyWithoutAuthorNestedInputSchema).optional()
}).strict();

export const ForumPostUpsertWithWhereUniqueWithoutThreadInputSchema: z.ZodType<Prisma.ForumPostUpsertWithWhereUniqueWithoutThreadInput> = z.object({
  where: z.lazy(() => ForumPostWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ForumPostUpdateWithoutThreadInputSchema),z.lazy(() => ForumPostUncheckedUpdateWithoutThreadInputSchema) ]),
  create: z.union([ z.lazy(() => ForumPostCreateWithoutThreadInputSchema),z.lazy(() => ForumPostUncheckedCreateWithoutThreadInputSchema) ]),
}).strict();

export const ForumPostUpdateWithWhereUniqueWithoutThreadInputSchema: z.ZodType<Prisma.ForumPostUpdateWithWhereUniqueWithoutThreadInput> = z.object({
  where: z.lazy(() => ForumPostWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ForumPostUpdateWithoutThreadInputSchema),z.lazy(() => ForumPostUncheckedUpdateWithoutThreadInputSchema) ]),
}).strict();

export const ForumPostUpdateManyWithWhereWithoutThreadInputSchema: z.ZodType<Prisma.ForumPostUpdateManyWithWhereWithoutThreadInput> = z.object({
  where: z.lazy(() => ForumPostScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ForumPostUpdateManyMutationInputSchema),z.lazy(() => ForumPostUncheckedUpdateManyWithoutThreadInputSchema) ]),
}).strict();

export const UserCreateWithoutPostsInputSchema: z.ZodType<Prisma.UserCreateWithoutPostsInput> = z.object({
  id: z.string().optional(),
  clerkId: z.string(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  jobSeekerId: z.string().optional().nullable(),
  hiringCompanyId: z.string().optional().nullable(),
  selfAssessmentId: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  jobSeeker: z.lazy(() => JobSeekerCreateNestedOneWithoutUserInputSchema).optional(),
  hiringCompany: z.lazy(() => HiringCompanyCreateNestedOneWithoutUserInputSchema).optional(),
  selfAssessment: z.lazy(() => SelfAssessmentCreateNestedOneWithoutUserInputSchema).optional(),
  threads: z.lazy(() => ForumThreadCreateNestedManyWithoutAuthorInputSchema).optional(),
  comments: z.lazy(() => ForumCommentCreateNestedManyWithoutAuthorInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutPostsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutPostsInput> = z.object({
  id: z.string().optional(),
  clerkId: z.string(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  jobSeekerId: z.string().optional().nullable(),
  hiringCompanyId: z.string().optional().nullable(),
  selfAssessmentId: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  jobSeeker: z.lazy(() => JobSeekerUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  hiringCompany: z.lazy(() => HiringCompanyUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  selfAssessment: z.lazy(() => SelfAssessmentUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  threads: z.lazy(() => ForumThreadUncheckedCreateNestedManyWithoutAuthorInputSchema).optional(),
  comments: z.lazy(() => ForumCommentUncheckedCreateNestedManyWithoutAuthorInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutPostsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutPostsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutPostsInputSchema),z.lazy(() => UserUncheckedCreateWithoutPostsInputSchema) ]),
}).strict();

export const ForumThreadCreateWithoutPostsInputSchema: z.ZodType<Prisma.ForumThreadCreateWithoutPostsInput> = z.object({
  id: z.string().optional(),
  slug: z.string(),
  title: z.string(),
  content: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  author: z.lazy(() => UserCreateNestedOneWithoutThreadsInputSchema)
}).strict();

export const ForumThreadUncheckedCreateWithoutPostsInputSchema: z.ZodType<Prisma.ForumThreadUncheckedCreateWithoutPostsInput> = z.object({
  id: z.string().optional(),
  slug: z.string(),
  title: z.string(),
  content: z.string(),
  authorId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const ForumThreadCreateOrConnectWithoutPostsInputSchema: z.ZodType<Prisma.ForumThreadCreateOrConnectWithoutPostsInput> = z.object({
  where: z.lazy(() => ForumThreadWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ForumThreadCreateWithoutPostsInputSchema),z.lazy(() => ForumThreadUncheckedCreateWithoutPostsInputSchema) ]),
}).strict();

export const ForumCommentCreateWithoutPostInputSchema: z.ZodType<Prisma.ForumCommentCreateWithoutPostInput> = z.object({
  id: z.string().optional(),
  content: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  author: z.lazy(() => UserCreateNestedOneWithoutCommentsInputSchema)
}).strict();

export const ForumCommentUncheckedCreateWithoutPostInputSchema: z.ZodType<Prisma.ForumCommentUncheckedCreateWithoutPostInput> = z.object({
  id: z.string().optional(),
  content: z.string(),
  authorId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const ForumCommentCreateOrConnectWithoutPostInputSchema: z.ZodType<Prisma.ForumCommentCreateOrConnectWithoutPostInput> = z.object({
  where: z.lazy(() => ForumCommentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ForumCommentCreateWithoutPostInputSchema),z.lazy(() => ForumCommentUncheckedCreateWithoutPostInputSchema) ]),
}).strict();

export const ForumCommentCreateManyPostInputEnvelopeSchema: z.ZodType<Prisma.ForumCommentCreateManyPostInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ForumCommentCreateManyPostInputSchema),z.lazy(() => ForumCommentCreateManyPostInputSchema).array() ]),
}).strict();

export const UserUpsertWithoutPostsInputSchema: z.ZodType<Prisma.UserUpsertWithoutPostsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutPostsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutPostsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutPostsInputSchema),z.lazy(() => UserUncheckedCreateWithoutPostsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutPostsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutPostsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutPostsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutPostsInputSchema) ]),
}).strict();

export const UserUpdateWithoutPostsInputSchema: z.ZodType<Prisma.UserUpdateWithoutPostsInput> = z.object({
  clerkId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  jobSeekerId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hiringCompanyId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  selfAssessmentId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional(),
  jobSeeker: z.lazy(() => JobSeekerUpdateOneWithoutUserNestedInputSchema).optional(),
  hiringCompany: z.lazy(() => HiringCompanyUpdateOneWithoutUserNestedInputSchema).optional(),
  selfAssessment: z.lazy(() => SelfAssessmentUpdateOneWithoutUserNestedInputSchema).optional(),
  threads: z.lazy(() => ForumThreadUpdateManyWithoutAuthorNestedInputSchema).optional(),
  comments: z.lazy(() => ForumCommentUpdateManyWithoutAuthorNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutPostsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutPostsInput> = z.object({
  clerkId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  jobSeekerId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hiringCompanyId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  selfAssessmentId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  jobSeeker: z.lazy(() => JobSeekerUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  hiringCompany: z.lazy(() => HiringCompanyUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  selfAssessment: z.lazy(() => SelfAssessmentUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  threads: z.lazy(() => ForumThreadUncheckedUpdateManyWithoutAuthorNestedInputSchema).optional(),
  comments: z.lazy(() => ForumCommentUncheckedUpdateManyWithoutAuthorNestedInputSchema).optional()
}).strict();

export const ForumThreadUpsertWithoutPostsInputSchema: z.ZodType<Prisma.ForumThreadUpsertWithoutPostsInput> = z.object({
  update: z.union([ z.lazy(() => ForumThreadUpdateWithoutPostsInputSchema),z.lazy(() => ForumThreadUncheckedUpdateWithoutPostsInputSchema) ]),
  create: z.union([ z.lazy(() => ForumThreadCreateWithoutPostsInputSchema),z.lazy(() => ForumThreadUncheckedCreateWithoutPostsInputSchema) ]),
  where: z.lazy(() => ForumThreadWhereInputSchema).optional()
}).strict();

export const ForumThreadUpdateToOneWithWhereWithoutPostsInputSchema: z.ZodType<Prisma.ForumThreadUpdateToOneWithWhereWithoutPostsInput> = z.object({
  where: z.lazy(() => ForumThreadWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ForumThreadUpdateWithoutPostsInputSchema),z.lazy(() => ForumThreadUncheckedUpdateWithoutPostsInputSchema) ]),
}).strict();

export const ForumThreadUpdateWithoutPostsInputSchema: z.ZodType<Prisma.ForumThreadUpdateWithoutPostsInput> = z.object({
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  author: z.lazy(() => UserUpdateOneRequiredWithoutThreadsNestedInputSchema).optional()
}).strict();

export const ForumThreadUncheckedUpdateWithoutPostsInputSchema: z.ZodType<Prisma.ForumThreadUncheckedUpdateWithoutPostsInput> = z.object({
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  authorId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ForumCommentUpsertWithWhereUniqueWithoutPostInputSchema: z.ZodType<Prisma.ForumCommentUpsertWithWhereUniqueWithoutPostInput> = z.object({
  where: z.lazy(() => ForumCommentWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ForumCommentUpdateWithoutPostInputSchema),z.lazy(() => ForumCommentUncheckedUpdateWithoutPostInputSchema) ]),
  create: z.union([ z.lazy(() => ForumCommentCreateWithoutPostInputSchema),z.lazy(() => ForumCommentUncheckedCreateWithoutPostInputSchema) ]),
}).strict();

export const ForumCommentUpdateWithWhereUniqueWithoutPostInputSchema: z.ZodType<Prisma.ForumCommentUpdateWithWhereUniqueWithoutPostInput> = z.object({
  where: z.lazy(() => ForumCommentWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ForumCommentUpdateWithoutPostInputSchema),z.lazy(() => ForumCommentUncheckedUpdateWithoutPostInputSchema) ]),
}).strict();

export const ForumCommentUpdateManyWithWhereWithoutPostInputSchema: z.ZodType<Prisma.ForumCommentUpdateManyWithWhereWithoutPostInput> = z.object({
  where: z.lazy(() => ForumCommentScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ForumCommentUpdateManyMutationInputSchema),z.lazy(() => ForumCommentUncheckedUpdateManyWithoutPostInputSchema) ]),
}).strict();

export const UserCreateWithoutCommentsInputSchema: z.ZodType<Prisma.UserCreateWithoutCommentsInput> = z.object({
  id: z.string().optional(),
  clerkId: z.string(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  jobSeekerId: z.string().optional().nullable(),
  hiringCompanyId: z.string().optional().nullable(),
  selfAssessmentId: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  jobSeeker: z.lazy(() => JobSeekerCreateNestedOneWithoutUserInputSchema).optional(),
  hiringCompany: z.lazy(() => HiringCompanyCreateNestedOneWithoutUserInputSchema).optional(),
  selfAssessment: z.lazy(() => SelfAssessmentCreateNestedOneWithoutUserInputSchema).optional(),
  threads: z.lazy(() => ForumThreadCreateNestedManyWithoutAuthorInputSchema).optional(),
  posts: z.lazy(() => ForumPostCreateNestedManyWithoutAuthorInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutCommentsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutCommentsInput> = z.object({
  id: z.string().optional(),
  clerkId: z.string(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  jobSeekerId: z.string().optional().nullable(),
  hiringCompanyId: z.string().optional().nullable(),
  selfAssessmentId: z.string().optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  jobSeeker: z.lazy(() => JobSeekerUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  hiringCompany: z.lazy(() => HiringCompanyUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  selfAssessment: z.lazy(() => SelfAssessmentUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  threads: z.lazy(() => ForumThreadUncheckedCreateNestedManyWithoutAuthorInputSchema).optional(),
  posts: z.lazy(() => ForumPostUncheckedCreateNestedManyWithoutAuthorInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutCommentsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutCommentsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutCommentsInputSchema),z.lazy(() => UserUncheckedCreateWithoutCommentsInputSchema) ]),
}).strict();

export const ForumPostCreateWithoutCommentsInputSchema: z.ZodType<Prisma.ForumPostCreateWithoutCommentsInput> = z.object({
  id: z.string().optional(),
  content: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  author: z.lazy(() => UserCreateNestedOneWithoutPostsInputSchema),
  thread: z.lazy(() => ForumThreadCreateNestedOneWithoutPostsInputSchema)
}).strict();

export const ForumPostUncheckedCreateWithoutCommentsInputSchema: z.ZodType<Prisma.ForumPostUncheckedCreateWithoutCommentsInput> = z.object({
  id: z.string().optional(),
  content: z.string(),
  authorId: z.string(),
  threadId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const ForumPostCreateOrConnectWithoutCommentsInputSchema: z.ZodType<Prisma.ForumPostCreateOrConnectWithoutCommentsInput> = z.object({
  where: z.lazy(() => ForumPostWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ForumPostCreateWithoutCommentsInputSchema),z.lazy(() => ForumPostUncheckedCreateWithoutCommentsInputSchema) ]),
}).strict();

export const UserUpsertWithoutCommentsInputSchema: z.ZodType<Prisma.UserUpsertWithoutCommentsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutCommentsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCommentsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutCommentsInputSchema),z.lazy(() => UserUncheckedCreateWithoutCommentsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutCommentsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutCommentsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutCommentsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCommentsInputSchema) ]),
}).strict();

export const UserUpdateWithoutCommentsInputSchema: z.ZodType<Prisma.UserUpdateWithoutCommentsInput> = z.object({
  clerkId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  jobSeekerId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hiringCompanyId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  selfAssessmentId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional(),
  jobSeeker: z.lazy(() => JobSeekerUpdateOneWithoutUserNestedInputSchema).optional(),
  hiringCompany: z.lazy(() => HiringCompanyUpdateOneWithoutUserNestedInputSchema).optional(),
  selfAssessment: z.lazy(() => SelfAssessmentUpdateOneWithoutUserNestedInputSchema).optional(),
  threads: z.lazy(() => ForumThreadUpdateManyWithoutAuthorNestedInputSchema).optional(),
  posts: z.lazy(() => ForumPostUpdateManyWithoutAuthorNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutCommentsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutCommentsInput> = z.object({
  clerkId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  jobSeekerId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hiringCompanyId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  selfAssessmentId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  jobSeeker: z.lazy(() => JobSeekerUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  hiringCompany: z.lazy(() => HiringCompanyUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  selfAssessment: z.lazy(() => SelfAssessmentUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  threads: z.lazy(() => ForumThreadUncheckedUpdateManyWithoutAuthorNestedInputSchema).optional(),
  posts: z.lazy(() => ForumPostUncheckedUpdateManyWithoutAuthorNestedInputSchema).optional()
}).strict();

export const ForumPostUpsertWithoutCommentsInputSchema: z.ZodType<Prisma.ForumPostUpsertWithoutCommentsInput> = z.object({
  update: z.union([ z.lazy(() => ForumPostUpdateWithoutCommentsInputSchema),z.lazy(() => ForumPostUncheckedUpdateWithoutCommentsInputSchema) ]),
  create: z.union([ z.lazy(() => ForumPostCreateWithoutCommentsInputSchema),z.lazy(() => ForumPostUncheckedCreateWithoutCommentsInputSchema) ]),
  where: z.lazy(() => ForumPostWhereInputSchema).optional()
}).strict();

export const ForumPostUpdateToOneWithWhereWithoutCommentsInputSchema: z.ZodType<Prisma.ForumPostUpdateToOneWithWhereWithoutCommentsInput> = z.object({
  where: z.lazy(() => ForumPostWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ForumPostUpdateWithoutCommentsInputSchema),z.lazy(() => ForumPostUncheckedUpdateWithoutCommentsInputSchema) ]),
}).strict();

export const ForumPostUpdateWithoutCommentsInputSchema: z.ZodType<Prisma.ForumPostUpdateWithoutCommentsInput> = z.object({
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  author: z.lazy(() => UserUpdateOneRequiredWithoutPostsNestedInputSchema).optional(),
  thread: z.lazy(() => ForumThreadUpdateOneRequiredWithoutPostsNestedInputSchema).optional()
}).strict();

export const ForumPostUncheckedUpdateWithoutCommentsInputSchema: z.ZodType<Prisma.ForumPostUncheckedUpdateWithoutCommentsInput> = z.object({
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  authorId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  threadId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const EnumLevelFilterSchema: z.ZodType<Prisma.EnumLevelFilter> = z.object({
  equals: z.lazy(() => LevelSchema).optional(),
  in: z.lazy(() => LevelSchema).array().optional(),
  notIn: z.lazy(() => LevelSchema).array().optional(),
  not: z.union([ z.lazy(() => LevelSchema),z.lazy(() => NestedEnumLevelFilterSchema) ]).optional(),
}).strict();

export const QuizOptionCompositeListFilterSchema: z.ZodType<Prisma.QuizOptionCompositeListFilter> = z.object({
  equals: z.lazy(() => QuizOptionObjectEqualityInputSchema).array().optional(),
  every: z.lazy(() => QuizOptionWhereInputSchema).optional(),
  some: z.lazy(() => QuizOptionWhereInputSchema).optional(),
  none: z.lazy(() => QuizOptionWhereInputSchema).optional(),
  isEmpty: z.boolean().optional(),
  isSet: z.boolean().optional()
}).strict();

export const AccountCreateManyUserInputSchema: z.ZodType<Prisma.AccountCreateManyUserInput> = z.object({
  id: z.string().optional(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional().nullable(),
  access_token: z.string().optional().nullable(),
  expires_at: z.number().int().optional().nullable(),
  token_type: z.string().optional().nullable(),
  scope: z.string().optional().nullable(),
  id_token: z.string().optional().nullable(),
  session_state: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const SessionCreateManyUserInputSchema: z.ZodType<Prisma.SessionCreateManyUserInput> = z.object({
  id: z.string().optional(),
  sessionToken: z.string(),
  expires: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const ForumThreadCreateManyAuthorInputSchema: z.ZodType<Prisma.ForumThreadCreateManyAuthorInput> = z.object({
  id: z.string().optional(),
  slug: z.string(),
  title: z.string(),
  content: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const ForumPostCreateManyAuthorInputSchema: z.ZodType<Prisma.ForumPostCreateManyAuthorInput> = z.object({
  id: z.string().optional(),
  content: z.string(),
  threadId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const ForumCommentCreateManyAuthorInputSchema: z.ZodType<Prisma.ForumCommentCreateManyAuthorInput> = z.object({
  id: z.string().optional(),
  content: z.string(),
  postId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const AccountUpdateWithoutUserInputSchema: z.ZodType<Prisma.AccountUpdateWithoutUserInput> = z.object({
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AccountUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateWithoutUserInput> = z.object({
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AccountUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateManyWithoutUserInput> = z.object({
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionUpdateWithoutUserInputSchema: z.ZodType<Prisma.SessionUpdateWithoutUserInput> = z.object({
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateWithoutUserInput> = z.object({
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyWithoutUserInput> = z.object({
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ForumThreadUpdateWithoutAuthorInputSchema: z.ZodType<Prisma.ForumThreadUpdateWithoutAuthorInput> = z.object({
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  posts: z.lazy(() => ForumPostUpdateManyWithoutThreadNestedInputSchema).optional()
}).strict();

export const ForumThreadUncheckedUpdateWithoutAuthorInputSchema: z.ZodType<Prisma.ForumThreadUncheckedUpdateWithoutAuthorInput> = z.object({
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  posts: z.lazy(() => ForumPostUncheckedUpdateManyWithoutThreadNestedInputSchema).optional()
}).strict();

export const ForumThreadUncheckedUpdateManyWithoutAuthorInputSchema: z.ZodType<Prisma.ForumThreadUncheckedUpdateManyWithoutAuthorInput> = z.object({
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ForumPostUpdateWithoutAuthorInputSchema: z.ZodType<Prisma.ForumPostUpdateWithoutAuthorInput> = z.object({
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  thread: z.lazy(() => ForumThreadUpdateOneRequiredWithoutPostsNestedInputSchema).optional(),
  comments: z.lazy(() => ForumCommentUpdateManyWithoutPostNestedInputSchema).optional()
}).strict();

export const ForumPostUncheckedUpdateWithoutAuthorInputSchema: z.ZodType<Prisma.ForumPostUncheckedUpdateWithoutAuthorInput> = z.object({
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  threadId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  comments: z.lazy(() => ForumCommentUncheckedUpdateManyWithoutPostNestedInputSchema).optional()
}).strict();

export const ForumPostUncheckedUpdateManyWithoutAuthorInputSchema: z.ZodType<Prisma.ForumPostUncheckedUpdateManyWithoutAuthorInput> = z.object({
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  threadId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ForumCommentUpdateWithoutAuthorInputSchema: z.ZodType<Prisma.ForumCommentUpdateWithoutAuthorInput> = z.object({
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  post: z.lazy(() => ForumPostUpdateOneRequiredWithoutCommentsNestedInputSchema).optional()
}).strict();

export const ForumCommentUncheckedUpdateWithoutAuthorInputSchema: z.ZodType<Prisma.ForumCommentUncheckedUpdateWithoutAuthorInput> = z.object({
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  postId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ForumCommentUncheckedUpdateManyWithoutAuthorInputSchema: z.ZodType<Prisma.ForumCommentUncheckedUpdateManyWithoutAuthorInput> = z.object({
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  postId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CertificateCreateManyProfileInputSchema: z.ZodType<Prisma.CertificateCreateManyProfileInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  userName: z.string(),
  course: z.string(),
  attempt: z.number().int(),
  key: z.string(),
  issuedDate: z.coerce.date()
}).strict();

export const PersonalInfoUpdateInputSchema: z.ZodType<Prisma.PersonalInfoUpdateInput> = z.object({
  fullName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dob: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mobile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  relative: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  address: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  postalCode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  country: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  linkedIn: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  github: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  twitter: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  facebook: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hobbies: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  areaImprovementCurrent: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  areaImprovementFuture: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const SkillUpdateInputSchema: z.ZodType<Prisma.SkillUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  level: z.union([ z.lazy(() => LevelSchema),z.lazy(() => EnumLevelFieldUpdateOperationsInputSchema) ]).optional(),
  experienceYears: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CertificateUpdateWithoutProfileInputSchema: z.ZodType<Prisma.CertificateUpdateWithoutProfileInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  course: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  attempt: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  key: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  issuedDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CertificateUncheckedUpdateWithoutProfileInputSchema: z.ZodType<Prisma.CertificateUncheckedUpdateWithoutProfileInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  course: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  attempt: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  key: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  issuedDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CertificateUncheckedUpdateManyWithoutProfileInputSchema: z.ZodType<Prisma.CertificateUncheckedUpdateManyWithoutProfileInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  course: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  attempt: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  key: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  issuedDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CertificationCreateManyJobSeekerInputSchema: z.ZodType<Prisma.CertificationCreateManyJobSeekerInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  issuedBy: z.string(),
  issuedDate: z.coerce.date()
}).strict();

export const ApplicationCreateManyJobSeekerInputSchema: z.ZodType<Prisma.ApplicationCreateManyJobSeekerInput> = z.object({
  id: z.string().optional(),
  jobId: z.string(),
  appliedAt: z.coerce.date().optional(),
  status: z.string().optional(),
  resume: z.string(),
  coverLetter: z.string().optional().nullable()
}).strict();

export const CertificationUpdateWithoutJobSeekerInputSchema: z.ZodType<Prisma.CertificationUpdateWithoutJobSeekerInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  issuedBy: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  issuedDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CertificationUncheckedUpdateWithoutJobSeekerInputSchema: z.ZodType<Prisma.CertificationUncheckedUpdateWithoutJobSeekerInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  issuedBy: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  issuedDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CertificationUncheckedUpdateManyWithoutJobSeekerInputSchema: z.ZodType<Prisma.CertificationUncheckedUpdateManyWithoutJobSeekerInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  issuedBy: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  issuedDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ApplicationUpdateWithoutJobSeekerInputSchema: z.ZodType<Prisma.ApplicationUpdateWithoutJobSeekerInput> = z.object({
  appliedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  resume: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  coverLetter: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  job: z.lazy(() => JobUpdateOneRequiredWithoutApplicationsNestedInputSchema).optional(),
  interviews: z.lazy(() => InterviewUpdateManyWithoutApplicationNestedInputSchema).optional()
}).strict();

export const ApplicationUncheckedUpdateWithoutJobSeekerInputSchema: z.ZodType<Prisma.ApplicationUncheckedUpdateWithoutJobSeekerInput> = z.object({
  jobId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  appliedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  resume: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  coverLetter: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  interviews: z.lazy(() => InterviewUncheckedUpdateManyWithoutApplicationNestedInputSchema).optional()
}).strict();

export const ApplicationUncheckedUpdateManyWithoutJobSeekerInputSchema: z.ZodType<Prisma.ApplicationUncheckedUpdateManyWithoutJobSeekerInput> = z.object({
  jobId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  appliedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  resume: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  coverLetter: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const EducationLevelUpdateInputSchema: z.ZodType<Prisma.EducationLevelUpdateInput> = z.object({
  level: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  board: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  institute: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  degree: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  subjects: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  year: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expectedYear: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  currentSemester: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  grade: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  completed: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ExperienceDetailsUpdateInputSchema: z.ZodType<Prisma.ExperienceDetailsUpdateInput> = z.object({
  company: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  jobTitle: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  employmentType: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  locationType: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  startDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  current: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  endDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  skills: z.union([ z.lazy(() => ExperienceDetailsUpdateskillsInputSchema),z.string().array() ]).optional(),
}).strict();

export const JobCreateManyHiringCompanyInputSchema: z.ZodType<Prisma.JobCreateManyHiringCompanyInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string(),
  requirements: z.union([ z.lazy(() => JobCreaterequirementsInputSchema),z.string().array() ]).optional(),
  salaryRange: z.string(),
  location: z.string(),
  employmentType: z.string(),
  benefits: z.union([ z.lazy(() => JobCreatebenefitsInputSchema),z.string().array() ]).optional(),
  remote: z.boolean(),
  postedAt: z.coerce.date().optional()
}).strict();

export const JobUpdateWithoutHiringCompanyInputSchema: z.ZodType<Prisma.JobUpdateWithoutHiringCompanyInput> = z.object({
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  requirements: z.union([ z.lazy(() => JobUpdaterequirementsInputSchema),z.string().array() ]).optional(),
  salaryRange: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  employmentType: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  benefits: z.union([ z.lazy(() => JobUpdatebenefitsInputSchema),z.string().array() ]).optional(),
  remote: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  postedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  applications: z.lazy(() => ApplicationUpdateManyWithoutJobNestedInputSchema).optional()
}).strict();

export const JobUncheckedUpdateWithoutHiringCompanyInputSchema: z.ZodType<Prisma.JobUncheckedUpdateWithoutHiringCompanyInput> = z.object({
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  requirements: z.union([ z.lazy(() => JobUpdaterequirementsInputSchema),z.string().array() ]).optional(),
  salaryRange: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  employmentType: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  benefits: z.union([ z.lazy(() => JobUpdatebenefitsInputSchema),z.string().array() ]).optional(),
  remote: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  postedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  applications: z.lazy(() => ApplicationUncheckedUpdateManyWithoutJobNestedInputSchema).optional()
}).strict();

export const JobUncheckedUpdateManyWithoutHiringCompanyInputSchema: z.ZodType<Prisma.JobUncheckedUpdateManyWithoutHiringCompanyInput> = z.object({
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  requirements: z.union([ z.lazy(() => JobUpdaterequirementsInputSchema),z.string().array() ]).optional(),
  salaryRange: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  employmentType: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  benefits: z.union([ z.lazy(() => JobUpdatebenefitsInputSchema),z.string().array() ]).optional(),
  remote: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  postedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ApplicationCreateManyJobInputSchema: z.ZodType<Prisma.ApplicationCreateManyJobInput> = z.object({
  id: z.string().optional(),
  jobSeekerId: z.string(),
  appliedAt: z.coerce.date().optional(),
  status: z.string().optional(),
  resume: z.string(),
  coverLetter: z.string().optional().nullable()
}).strict();

export const ApplicationUpdateWithoutJobInputSchema: z.ZodType<Prisma.ApplicationUpdateWithoutJobInput> = z.object({
  appliedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  resume: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  coverLetter: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  jobSeeker: z.lazy(() => JobSeekerUpdateOneRequiredWithoutApplicationsNestedInputSchema).optional(),
  interviews: z.lazy(() => InterviewUpdateManyWithoutApplicationNestedInputSchema).optional()
}).strict();

export const ApplicationUncheckedUpdateWithoutJobInputSchema: z.ZodType<Prisma.ApplicationUncheckedUpdateWithoutJobInput> = z.object({
  jobSeekerId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  appliedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  resume: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  coverLetter: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  interviews: z.lazy(() => InterviewUncheckedUpdateManyWithoutApplicationNestedInputSchema).optional()
}).strict();

export const ApplicationUncheckedUpdateManyWithoutJobInputSchema: z.ZodType<Prisma.ApplicationUncheckedUpdateManyWithoutJobInput> = z.object({
  jobSeekerId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  appliedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  resume: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  coverLetter: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const InterviewCreateManyApplicationInputSchema: z.ZodType<Prisma.InterviewCreateManyApplicationInput> = z.object({
  id: z.string().optional(),
  scheduledAt: z.coerce.date(),
  status: z.string().optional(),
  feedback: z.string().optional().nullable()
}).strict();

export const InterviewUpdateWithoutApplicationInputSchema: z.ZodType<Prisma.InterviewUpdateWithoutApplicationInput> = z.object({
  scheduledAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  feedback: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const InterviewUncheckedUpdateWithoutApplicationInputSchema: z.ZodType<Prisma.InterviewUncheckedUpdateWithoutApplicationInput> = z.object({
  scheduledAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  feedback: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const InterviewUncheckedUpdateManyWithoutApplicationInputSchema: z.ZodType<Prisma.InterviewUncheckedUpdateManyWithoutApplicationInput> = z.object({
  scheduledAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  feedback: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const SelfAssessmentResponseUpdateInputSchema: z.ZodType<Prisma.SelfAssessmentResponseUpdateInput> = z.object({
  question: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  answer: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const QuizQuestionUpdateInputSchema: z.ZodType<Prisma.QuizQuestionUpdateInput> = z.object({
  questionId: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  question: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  difficulty: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  options: z.union([ z.lazy(() => QuizOptionListUpdateEnvelopeInputSchema),z.lazy(() => QuizOptionCreateInputSchema),z.lazy(() => QuizOptionCreateInputSchema).array() ]).optional(),
  correctOptionId: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const QuizAnswerUpdateInputSchema: z.ZodType<Prisma.QuizAnswerUpdateInput> = z.object({
  questionId: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  optionId: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ForumPostCreateManyThreadInputSchema: z.ZodType<Prisma.ForumPostCreateManyThreadInput> = z.object({
  id: z.string().optional(),
  content: z.string(),
  authorId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const ForumPostUpdateWithoutThreadInputSchema: z.ZodType<Prisma.ForumPostUpdateWithoutThreadInput> = z.object({
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  author: z.lazy(() => UserUpdateOneRequiredWithoutPostsNestedInputSchema).optional(),
  comments: z.lazy(() => ForumCommentUpdateManyWithoutPostNestedInputSchema).optional()
}).strict();

export const ForumPostUncheckedUpdateWithoutThreadInputSchema: z.ZodType<Prisma.ForumPostUncheckedUpdateWithoutThreadInput> = z.object({
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  authorId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  comments: z.lazy(() => ForumCommentUncheckedUpdateManyWithoutPostNestedInputSchema).optional()
}).strict();

export const ForumPostUncheckedUpdateManyWithoutThreadInputSchema: z.ZodType<Prisma.ForumPostUncheckedUpdateManyWithoutThreadInput> = z.object({
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  authorId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ForumCommentCreateManyPostInputSchema: z.ZodType<Prisma.ForumCommentCreateManyPostInput> = z.object({
  id: z.string().optional(),
  content: z.string(),
  authorId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const ForumCommentUpdateWithoutPostInputSchema: z.ZodType<Prisma.ForumCommentUpdateWithoutPostInput> = z.object({
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  author: z.lazy(() => UserUpdateOneRequiredWithoutCommentsNestedInputSchema).optional()
}).strict();

export const ForumCommentUncheckedUpdateWithoutPostInputSchema: z.ZodType<Prisma.ForumCommentUncheckedUpdateWithoutPostInput> = z.object({
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  authorId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ForumCommentUncheckedUpdateManyWithoutPostInputSchema: z.ZodType<Prisma.ForumCommentUncheckedUpdateManyWithoutPostInput> = z.object({
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  authorId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const NestedEnumLevelFilterSchema: z.ZodType<Prisma.NestedEnumLevelFilter> = z.object({
  equals: z.lazy(() => LevelSchema).optional(),
  in: z.lazy(() => LevelSchema).array().optional(),
  notIn: z.lazy(() => LevelSchema).array().optional(),
  not: z.union([ z.lazy(() => LevelSchema),z.lazy(() => NestedEnumLevelFilterSchema) ]).optional(),
}).strict();

export const QuizOptionWhereInputSchema: z.ZodType<Prisma.QuizOptionWhereInput> = z.object({
  AND: z.union([ z.lazy(() => QuizOptionWhereInputSchema),z.lazy(() => QuizOptionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => QuizOptionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => QuizOptionWhereInputSchema),z.lazy(() => QuizOptionWhereInputSchema).array() ]).optional(),
  optionId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  option: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const EnumLevelFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumLevelFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => LevelSchema).optional()
}).strict();

export const ExperienceDetailsUpdateskillsInputSchema: z.ZodType<Prisma.ExperienceDetailsUpdateskillsInput> = z.object({
  set: z.string().array().optional(),
  push: z.union([ z.string(),z.string().array() ]).optional(),
}).strict();

export const QuizOptionListUpdateEnvelopeInputSchema: z.ZodType<Prisma.QuizOptionListUpdateEnvelopeInput> = z.object({
  set: z.union([ z.lazy(() => QuizOptionCreateInputSchema),z.lazy(() => QuizOptionCreateInputSchema).array() ]).optional(),
  push: z.union([ z.lazy(() => QuizOptionCreateInputSchema),z.lazy(() => QuizOptionCreateInputSchema).array() ]).optional(),
  updateMany: z.lazy(() => QuizOptionUpdateManyInputSchema).optional(),
  deleteMany: z.lazy(() => QuizOptionDeleteManyInputSchema).optional()
}).strict();

export const QuizOptionUpdateManyInputSchema: z.ZodType<Prisma.QuizOptionUpdateManyInput> = z.object({
  where: z.lazy(() => QuizOptionWhereInputSchema),
  data: z.lazy(() => QuizOptionUpdateInputSchema)
}).strict();

export const QuizOptionDeleteManyInputSchema: z.ZodType<Prisma.QuizOptionDeleteManyInput> = z.object({
  where: z.lazy(() => QuizOptionWhereInputSchema)
}).strict();

export const QuizOptionUpdateInputSchema: z.ZodType<Prisma.QuizOptionUpdateInput> = z.object({
  optionId: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  option: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const UserFindFirstArgsSchema: z.ZodType<Prisma.UserFindFirstArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserFindFirstOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserFindManyArgsSchema: z.ZodType<Prisma.UserFindManyArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserAggregateArgsSchema: z.ZodType<Prisma.UserAggregateArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserGroupByArgsSchema: z.ZodType<Prisma.UserGroupByArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithAggregationInputSchema.array(),UserOrderByWithAggregationInputSchema ]).optional(),
  by: UserScalarFieldEnumSchema.array(),
  having: UserScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserFindUniqueArgsSchema: z.ZodType<Prisma.UserFindUniqueArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserFindUniqueOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const ProfileFindFirstArgsSchema: z.ZodType<Prisma.ProfileFindFirstArgs> = z.object({
  select: ProfileSelectSchema.optional(),
  include: ProfileIncludeSchema.optional(),
  where: ProfileWhereInputSchema.optional(),
  orderBy: z.union([ ProfileOrderByWithRelationInputSchema.array(),ProfileOrderByWithRelationInputSchema ]).optional(),
  cursor: ProfileWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProfileScalarFieldEnumSchema,ProfileScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ProfileFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ProfileFindFirstOrThrowArgs> = z.object({
  select: ProfileSelectSchema.optional(),
  include: ProfileIncludeSchema.optional(),
  where: ProfileWhereInputSchema.optional(),
  orderBy: z.union([ ProfileOrderByWithRelationInputSchema.array(),ProfileOrderByWithRelationInputSchema ]).optional(),
  cursor: ProfileWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProfileScalarFieldEnumSchema,ProfileScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ProfileFindManyArgsSchema: z.ZodType<Prisma.ProfileFindManyArgs> = z.object({
  select: ProfileSelectSchema.optional(),
  include: ProfileIncludeSchema.optional(),
  where: ProfileWhereInputSchema.optional(),
  orderBy: z.union([ ProfileOrderByWithRelationInputSchema.array(),ProfileOrderByWithRelationInputSchema ]).optional(),
  cursor: ProfileWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProfileScalarFieldEnumSchema,ProfileScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ProfileAggregateArgsSchema: z.ZodType<Prisma.ProfileAggregateArgs> = z.object({
  where: ProfileWhereInputSchema.optional(),
  orderBy: z.union([ ProfileOrderByWithRelationInputSchema.array(),ProfileOrderByWithRelationInputSchema ]).optional(),
  cursor: ProfileWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ProfileGroupByArgsSchema: z.ZodType<Prisma.ProfileGroupByArgs> = z.object({
  where: ProfileWhereInputSchema.optional(),
  orderBy: z.union([ ProfileOrderByWithAggregationInputSchema.array(),ProfileOrderByWithAggregationInputSchema ]).optional(),
  by: ProfileScalarFieldEnumSchema.array(),
  having: ProfileScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ProfileFindUniqueArgsSchema: z.ZodType<Prisma.ProfileFindUniqueArgs> = z.object({
  select: ProfileSelectSchema.optional(),
  include: ProfileIncludeSchema.optional(),
  where: ProfileWhereUniqueInputSchema,
}).strict() ;

export const ProfileFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ProfileFindUniqueOrThrowArgs> = z.object({
  select: ProfileSelectSchema.optional(),
  include: ProfileIncludeSchema.optional(),
  where: ProfileWhereUniqueInputSchema,
}).strict() ;

export const CertificateFindFirstArgsSchema: z.ZodType<Prisma.CertificateFindFirstArgs> = z.object({
  select: CertificateSelectSchema.optional(),
  include: CertificateIncludeSchema.optional(),
  where: CertificateWhereInputSchema.optional(),
  orderBy: z.union([ CertificateOrderByWithRelationInputSchema.array(),CertificateOrderByWithRelationInputSchema ]).optional(),
  cursor: CertificateWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CertificateScalarFieldEnumSchema,CertificateScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CertificateFindFirstOrThrowArgsSchema: z.ZodType<Prisma.CertificateFindFirstOrThrowArgs> = z.object({
  select: CertificateSelectSchema.optional(),
  include: CertificateIncludeSchema.optional(),
  where: CertificateWhereInputSchema.optional(),
  orderBy: z.union([ CertificateOrderByWithRelationInputSchema.array(),CertificateOrderByWithRelationInputSchema ]).optional(),
  cursor: CertificateWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CertificateScalarFieldEnumSchema,CertificateScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CertificateFindManyArgsSchema: z.ZodType<Prisma.CertificateFindManyArgs> = z.object({
  select: CertificateSelectSchema.optional(),
  include: CertificateIncludeSchema.optional(),
  where: CertificateWhereInputSchema.optional(),
  orderBy: z.union([ CertificateOrderByWithRelationInputSchema.array(),CertificateOrderByWithRelationInputSchema ]).optional(),
  cursor: CertificateWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CertificateScalarFieldEnumSchema,CertificateScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CertificateAggregateArgsSchema: z.ZodType<Prisma.CertificateAggregateArgs> = z.object({
  where: CertificateWhereInputSchema.optional(),
  orderBy: z.union([ CertificateOrderByWithRelationInputSchema.array(),CertificateOrderByWithRelationInputSchema ]).optional(),
  cursor: CertificateWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const CertificateGroupByArgsSchema: z.ZodType<Prisma.CertificateGroupByArgs> = z.object({
  where: CertificateWhereInputSchema.optional(),
  orderBy: z.union([ CertificateOrderByWithAggregationInputSchema.array(),CertificateOrderByWithAggregationInputSchema ]).optional(),
  by: CertificateScalarFieldEnumSchema.array(),
  having: CertificateScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const CertificateFindUniqueArgsSchema: z.ZodType<Prisma.CertificateFindUniqueArgs> = z.object({
  select: CertificateSelectSchema.optional(),
  include: CertificateIncludeSchema.optional(),
  where: CertificateWhereUniqueInputSchema,
}).strict() ;

export const CertificateFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.CertificateFindUniqueOrThrowArgs> = z.object({
  select: CertificateSelectSchema.optional(),
  include: CertificateIncludeSchema.optional(),
  where: CertificateWhereUniqueInputSchema,
}).strict() ;

export const AccountFindFirstArgsSchema: z.ZodType<Prisma.AccountFindFirstArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([ AccountOrderByWithRelationInputSchema.array(),AccountOrderByWithRelationInputSchema ]).optional(),
  cursor: AccountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AccountScalarFieldEnumSchema,AccountScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AccountFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AccountFindFirstOrThrowArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([ AccountOrderByWithRelationInputSchema.array(),AccountOrderByWithRelationInputSchema ]).optional(),
  cursor: AccountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AccountScalarFieldEnumSchema,AccountScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AccountFindManyArgsSchema: z.ZodType<Prisma.AccountFindManyArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([ AccountOrderByWithRelationInputSchema.array(),AccountOrderByWithRelationInputSchema ]).optional(),
  cursor: AccountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AccountScalarFieldEnumSchema,AccountScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AccountAggregateArgsSchema: z.ZodType<Prisma.AccountAggregateArgs> = z.object({
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([ AccountOrderByWithRelationInputSchema.array(),AccountOrderByWithRelationInputSchema ]).optional(),
  cursor: AccountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const AccountGroupByArgsSchema: z.ZodType<Prisma.AccountGroupByArgs> = z.object({
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([ AccountOrderByWithAggregationInputSchema.array(),AccountOrderByWithAggregationInputSchema ]).optional(),
  by: AccountScalarFieldEnumSchema.array(),
  having: AccountScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const AccountFindUniqueArgsSchema: z.ZodType<Prisma.AccountFindUniqueArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereUniqueInputSchema,
}).strict() ;

export const AccountFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.AccountFindUniqueOrThrowArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereUniqueInputSchema,
}).strict() ;

export const SessionFindFirstArgsSchema: z.ZodType<Prisma.SessionFindFirstArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithRelationInputSchema.array(),SessionOrderByWithRelationInputSchema ]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SessionScalarFieldEnumSchema,SessionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const SessionFindFirstOrThrowArgsSchema: z.ZodType<Prisma.SessionFindFirstOrThrowArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithRelationInputSchema.array(),SessionOrderByWithRelationInputSchema ]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SessionScalarFieldEnumSchema,SessionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const SessionFindManyArgsSchema: z.ZodType<Prisma.SessionFindManyArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithRelationInputSchema.array(),SessionOrderByWithRelationInputSchema ]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SessionScalarFieldEnumSchema,SessionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const SessionAggregateArgsSchema: z.ZodType<Prisma.SessionAggregateArgs> = z.object({
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithRelationInputSchema.array(),SessionOrderByWithRelationInputSchema ]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const SessionGroupByArgsSchema: z.ZodType<Prisma.SessionGroupByArgs> = z.object({
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithAggregationInputSchema.array(),SessionOrderByWithAggregationInputSchema ]).optional(),
  by: SessionScalarFieldEnumSchema.array(),
  having: SessionScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const SessionFindUniqueArgsSchema: z.ZodType<Prisma.SessionFindUniqueArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereUniqueInputSchema,
}).strict() ;

export const SessionFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.SessionFindUniqueOrThrowArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereUniqueInputSchema,
}).strict() ;

export const VerificationTokenFindFirstArgsSchema: z.ZodType<Prisma.VerificationTokenFindFirstArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereInputSchema.optional(),
  orderBy: z.union([ VerificationTokenOrderByWithRelationInputSchema.array(),VerificationTokenOrderByWithRelationInputSchema ]).optional(),
  cursor: VerificationTokenWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ VerificationTokenScalarFieldEnumSchema,VerificationTokenScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const VerificationTokenFindFirstOrThrowArgsSchema: z.ZodType<Prisma.VerificationTokenFindFirstOrThrowArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereInputSchema.optional(),
  orderBy: z.union([ VerificationTokenOrderByWithRelationInputSchema.array(),VerificationTokenOrderByWithRelationInputSchema ]).optional(),
  cursor: VerificationTokenWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ VerificationTokenScalarFieldEnumSchema,VerificationTokenScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const VerificationTokenFindManyArgsSchema: z.ZodType<Prisma.VerificationTokenFindManyArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereInputSchema.optional(),
  orderBy: z.union([ VerificationTokenOrderByWithRelationInputSchema.array(),VerificationTokenOrderByWithRelationInputSchema ]).optional(),
  cursor: VerificationTokenWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ VerificationTokenScalarFieldEnumSchema,VerificationTokenScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const VerificationTokenAggregateArgsSchema: z.ZodType<Prisma.VerificationTokenAggregateArgs> = z.object({
  where: VerificationTokenWhereInputSchema.optional(),
  orderBy: z.union([ VerificationTokenOrderByWithRelationInputSchema.array(),VerificationTokenOrderByWithRelationInputSchema ]).optional(),
  cursor: VerificationTokenWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const VerificationTokenGroupByArgsSchema: z.ZodType<Prisma.VerificationTokenGroupByArgs> = z.object({
  where: VerificationTokenWhereInputSchema.optional(),
  orderBy: z.union([ VerificationTokenOrderByWithAggregationInputSchema.array(),VerificationTokenOrderByWithAggregationInputSchema ]).optional(),
  by: VerificationTokenScalarFieldEnumSchema.array(),
  having: VerificationTokenScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const VerificationTokenFindUniqueArgsSchema: z.ZodType<Prisma.VerificationTokenFindUniqueArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereUniqueInputSchema,
}).strict() ;

export const VerificationTokenFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.VerificationTokenFindUniqueOrThrowArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereUniqueInputSchema,
}).strict() ;

export const JobSeekerFindFirstArgsSchema: z.ZodType<Prisma.JobSeekerFindFirstArgs> = z.object({
  select: JobSeekerSelectSchema.optional(),
  include: JobSeekerIncludeSchema.optional(),
  where: JobSeekerWhereInputSchema.optional(),
  orderBy: z.union([ JobSeekerOrderByWithRelationInputSchema.array(),JobSeekerOrderByWithRelationInputSchema ]).optional(),
  cursor: JobSeekerWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ JobSeekerScalarFieldEnumSchema,JobSeekerScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const JobSeekerFindFirstOrThrowArgsSchema: z.ZodType<Prisma.JobSeekerFindFirstOrThrowArgs> = z.object({
  select: JobSeekerSelectSchema.optional(),
  include: JobSeekerIncludeSchema.optional(),
  where: JobSeekerWhereInputSchema.optional(),
  orderBy: z.union([ JobSeekerOrderByWithRelationInputSchema.array(),JobSeekerOrderByWithRelationInputSchema ]).optional(),
  cursor: JobSeekerWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ JobSeekerScalarFieldEnumSchema,JobSeekerScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const JobSeekerFindManyArgsSchema: z.ZodType<Prisma.JobSeekerFindManyArgs> = z.object({
  select: JobSeekerSelectSchema.optional(),
  include: JobSeekerIncludeSchema.optional(),
  where: JobSeekerWhereInputSchema.optional(),
  orderBy: z.union([ JobSeekerOrderByWithRelationInputSchema.array(),JobSeekerOrderByWithRelationInputSchema ]).optional(),
  cursor: JobSeekerWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ JobSeekerScalarFieldEnumSchema,JobSeekerScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const JobSeekerAggregateArgsSchema: z.ZodType<Prisma.JobSeekerAggregateArgs> = z.object({
  where: JobSeekerWhereInputSchema.optional(),
  orderBy: z.union([ JobSeekerOrderByWithRelationInputSchema.array(),JobSeekerOrderByWithRelationInputSchema ]).optional(),
  cursor: JobSeekerWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const JobSeekerGroupByArgsSchema: z.ZodType<Prisma.JobSeekerGroupByArgs> = z.object({
  where: JobSeekerWhereInputSchema.optional(),
  orderBy: z.union([ JobSeekerOrderByWithAggregationInputSchema.array(),JobSeekerOrderByWithAggregationInputSchema ]).optional(),
  by: JobSeekerScalarFieldEnumSchema.array(),
  having: JobSeekerScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const JobSeekerFindUniqueArgsSchema: z.ZodType<Prisma.JobSeekerFindUniqueArgs> = z.object({
  select: JobSeekerSelectSchema.optional(),
  include: JobSeekerIncludeSchema.optional(),
  where: JobSeekerWhereUniqueInputSchema,
}).strict() ;

export const JobSeekerFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.JobSeekerFindUniqueOrThrowArgs> = z.object({
  select: JobSeekerSelectSchema.optional(),
  include: JobSeekerIncludeSchema.optional(),
  where: JobSeekerWhereUniqueInputSchema,
}).strict() ;

export const EducationFindFirstArgsSchema: z.ZodType<Prisma.EducationFindFirstArgs> = z.object({
  select: EducationSelectSchema.optional(),
  include: EducationIncludeSchema.optional(),
  where: EducationWhereInputSchema.optional(),
  orderBy: z.union([ EducationOrderByWithRelationInputSchema.array(),EducationOrderByWithRelationInputSchema ]).optional(),
  cursor: EducationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ EducationScalarFieldEnumSchema,EducationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const EducationFindFirstOrThrowArgsSchema: z.ZodType<Prisma.EducationFindFirstOrThrowArgs> = z.object({
  select: EducationSelectSchema.optional(),
  include: EducationIncludeSchema.optional(),
  where: EducationWhereInputSchema.optional(),
  orderBy: z.union([ EducationOrderByWithRelationInputSchema.array(),EducationOrderByWithRelationInputSchema ]).optional(),
  cursor: EducationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ EducationScalarFieldEnumSchema,EducationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const EducationFindManyArgsSchema: z.ZodType<Prisma.EducationFindManyArgs> = z.object({
  select: EducationSelectSchema.optional(),
  include: EducationIncludeSchema.optional(),
  where: EducationWhereInputSchema.optional(),
  orderBy: z.union([ EducationOrderByWithRelationInputSchema.array(),EducationOrderByWithRelationInputSchema ]).optional(),
  cursor: EducationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ EducationScalarFieldEnumSchema,EducationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const EducationAggregateArgsSchema: z.ZodType<Prisma.EducationAggregateArgs> = z.object({
  where: EducationWhereInputSchema.optional(),
  orderBy: z.union([ EducationOrderByWithRelationInputSchema.array(),EducationOrderByWithRelationInputSchema ]).optional(),
  cursor: EducationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const EducationGroupByArgsSchema: z.ZodType<Prisma.EducationGroupByArgs> = z.object({
  where: EducationWhereInputSchema.optional(),
  orderBy: z.union([ EducationOrderByWithAggregationInputSchema.array(),EducationOrderByWithAggregationInputSchema ]).optional(),
  by: EducationScalarFieldEnumSchema.array(),
  having: EducationScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const EducationFindUniqueArgsSchema: z.ZodType<Prisma.EducationFindUniqueArgs> = z.object({
  select: EducationSelectSchema.optional(),
  include: EducationIncludeSchema.optional(),
  where: EducationWhereUniqueInputSchema,
}).strict() ;

export const EducationFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.EducationFindUniqueOrThrowArgs> = z.object({
  select: EducationSelectSchema.optional(),
  include: EducationIncludeSchema.optional(),
  where: EducationWhereUniqueInputSchema,
}).strict() ;

export const ExperienceFindFirstArgsSchema: z.ZodType<Prisma.ExperienceFindFirstArgs> = z.object({
  select: ExperienceSelectSchema.optional(),
  include: ExperienceIncludeSchema.optional(),
  where: ExperienceWhereInputSchema.optional(),
  orderBy: z.union([ ExperienceOrderByWithRelationInputSchema.array(),ExperienceOrderByWithRelationInputSchema ]).optional(),
  cursor: ExperienceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ExperienceScalarFieldEnumSchema,ExperienceScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ExperienceFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ExperienceFindFirstOrThrowArgs> = z.object({
  select: ExperienceSelectSchema.optional(),
  include: ExperienceIncludeSchema.optional(),
  where: ExperienceWhereInputSchema.optional(),
  orderBy: z.union([ ExperienceOrderByWithRelationInputSchema.array(),ExperienceOrderByWithRelationInputSchema ]).optional(),
  cursor: ExperienceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ExperienceScalarFieldEnumSchema,ExperienceScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ExperienceFindManyArgsSchema: z.ZodType<Prisma.ExperienceFindManyArgs> = z.object({
  select: ExperienceSelectSchema.optional(),
  include: ExperienceIncludeSchema.optional(),
  where: ExperienceWhereInputSchema.optional(),
  orderBy: z.union([ ExperienceOrderByWithRelationInputSchema.array(),ExperienceOrderByWithRelationInputSchema ]).optional(),
  cursor: ExperienceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ExperienceScalarFieldEnumSchema,ExperienceScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ExperienceAggregateArgsSchema: z.ZodType<Prisma.ExperienceAggregateArgs> = z.object({
  where: ExperienceWhereInputSchema.optional(),
  orderBy: z.union([ ExperienceOrderByWithRelationInputSchema.array(),ExperienceOrderByWithRelationInputSchema ]).optional(),
  cursor: ExperienceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ExperienceGroupByArgsSchema: z.ZodType<Prisma.ExperienceGroupByArgs> = z.object({
  where: ExperienceWhereInputSchema.optional(),
  orderBy: z.union([ ExperienceOrderByWithAggregationInputSchema.array(),ExperienceOrderByWithAggregationInputSchema ]).optional(),
  by: ExperienceScalarFieldEnumSchema.array(),
  having: ExperienceScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ExperienceFindUniqueArgsSchema: z.ZodType<Prisma.ExperienceFindUniqueArgs> = z.object({
  select: ExperienceSelectSchema.optional(),
  include: ExperienceIncludeSchema.optional(),
  where: ExperienceWhereUniqueInputSchema,
}).strict() ;

export const ExperienceFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ExperienceFindUniqueOrThrowArgs> = z.object({
  select: ExperienceSelectSchema.optional(),
  include: ExperienceIncludeSchema.optional(),
  where: ExperienceWhereUniqueInputSchema,
}).strict() ;

export const CertificationFindFirstArgsSchema: z.ZodType<Prisma.CertificationFindFirstArgs> = z.object({
  select: CertificationSelectSchema.optional(),
  include: CertificationIncludeSchema.optional(),
  where: CertificationWhereInputSchema.optional(),
  orderBy: z.union([ CertificationOrderByWithRelationInputSchema.array(),CertificationOrderByWithRelationInputSchema ]).optional(),
  cursor: CertificationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CertificationScalarFieldEnumSchema,CertificationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CertificationFindFirstOrThrowArgsSchema: z.ZodType<Prisma.CertificationFindFirstOrThrowArgs> = z.object({
  select: CertificationSelectSchema.optional(),
  include: CertificationIncludeSchema.optional(),
  where: CertificationWhereInputSchema.optional(),
  orderBy: z.union([ CertificationOrderByWithRelationInputSchema.array(),CertificationOrderByWithRelationInputSchema ]).optional(),
  cursor: CertificationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CertificationScalarFieldEnumSchema,CertificationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CertificationFindManyArgsSchema: z.ZodType<Prisma.CertificationFindManyArgs> = z.object({
  select: CertificationSelectSchema.optional(),
  include: CertificationIncludeSchema.optional(),
  where: CertificationWhereInputSchema.optional(),
  orderBy: z.union([ CertificationOrderByWithRelationInputSchema.array(),CertificationOrderByWithRelationInputSchema ]).optional(),
  cursor: CertificationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CertificationScalarFieldEnumSchema,CertificationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CertificationAggregateArgsSchema: z.ZodType<Prisma.CertificationAggregateArgs> = z.object({
  where: CertificationWhereInputSchema.optional(),
  orderBy: z.union([ CertificationOrderByWithRelationInputSchema.array(),CertificationOrderByWithRelationInputSchema ]).optional(),
  cursor: CertificationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const CertificationGroupByArgsSchema: z.ZodType<Prisma.CertificationGroupByArgs> = z.object({
  where: CertificationWhereInputSchema.optional(),
  orderBy: z.union([ CertificationOrderByWithAggregationInputSchema.array(),CertificationOrderByWithAggregationInputSchema ]).optional(),
  by: CertificationScalarFieldEnumSchema.array(),
  having: CertificationScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const CertificationFindUniqueArgsSchema: z.ZodType<Prisma.CertificationFindUniqueArgs> = z.object({
  select: CertificationSelectSchema.optional(),
  include: CertificationIncludeSchema.optional(),
  where: CertificationWhereUniqueInputSchema,
}).strict() ;

export const CertificationFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.CertificationFindUniqueOrThrowArgs> = z.object({
  select: CertificationSelectSchema.optional(),
  include: CertificationIncludeSchema.optional(),
  where: CertificationWhereUniqueInputSchema,
}).strict() ;

export const HiringCompanyFindFirstArgsSchema: z.ZodType<Prisma.HiringCompanyFindFirstArgs> = z.object({
  select: HiringCompanySelectSchema.optional(),
  include: HiringCompanyIncludeSchema.optional(),
  where: HiringCompanyWhereInputSchema.optional(),
  orderBy: z.union([ HiringCompanyOrderByWithRelationInputSchema.array(),HiringCompanyOrderByWithRelationInputSchema ]).optional(),
  cursor: HiringCompanyWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ HiringCompanyScalarFieldEnumSchema,HiringCompanyScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const HiringCompanyFindFirstOrThrowArgsSchema: z.ZodType<Prisma.HiringCompanyFindFirstOrThrowArgs> = z.object({
  select: HiringCompanySelectSchema.optional(),
  include: HiringCompanyIncludeSchema.optional(),
  where: HiringCompanyWhereInputSchema.optional(),
  orderBy: z.union([ HiringCompanyOrderByWithRelationInputSchema.array(),HiringCompanyOrderByWithRelationInputSchema ]).optional(),
  cursor: HiringCompanyWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ HiringCompanyScalarFieldEnumSchema,HiringCompanyScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const HiringCompanyFindManyArgsSchema: z.ZodType<Prisma.HiringCompanyFindManyArgs> = z.object({
  select: HiringCompanySelectSchema.optional(),
  include: HiringCompanyIncludeSchema.optional(),
  where: HiringCompanyWhereInputSchema.optional(),
  orderBy: z.union([ HiringCompanyOrderByWithRelationInputSchema.array(),HiringCompanyOrderByWithRelationInputSchema ]).optional(),
  cursor: HiringCompanyWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ HiringCompanyScalarFieldEnumSchema,HiringCompanyScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const HiringCompanyAggregateArgsSchema: z.ZodType<Prisma.HiringCompanyAggregateArgs> = z.object({
  where: HiringCompanyWhereInputSchema.optional(),
  orderBy: z.union([ HiringCompanyOrderByWithRelationInputSchema.array(),HiringCompanyOrderByWithRelationInputSchema ]).optional(),
  cursor: HiringCompanyWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const HiringCompanyGroupByArgsSchema: z.ZodType<Prisma.HiringCompanyGroupByArgs> = z.object({
  where: HiringCompanyWhereInputSchema.optional(),
  orderBy: z.union([ HiringCompanyOrderByWithAggregationInputSchema.array(),HiringCompanyOrderByWithAggregationInputSchema ]).optional(),
  by: HiringCompanyScalarFieldEnumSchema.array(),
  having: HiringCompanyScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const HiringCompanyFindUniqueArgsSchema: z.ZodType<Prisma.HiringCompanyFindUniqueArgs> = z.object({
  select: HiringCompanySelectSchema.optional(),
  include: HiringCompanyIncludeSchema.optional(),
  where: HiringCompanyWhereUniqueInputSchema,
}).strict() ;

export const HiringCompanyFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.HiringCompanyFindUniqueOrThrowArgs> = z.object({
  select: HiringCompanySelectSchema.optional(),
  include: HiringCompanyIncludeSchema.optional(),
  where: HiringCompanyWhereUniqueInputSchema,
}).strict() ;

export const JobFindFirstArgsSchema: z.ZodType<Prisma.JobFindFirstArgs> = z.object({
  select: JobSelectSchema.optional(),
  include: JobIncludeSchema.optional(),
  where: JobWhereInputSchema.optional(),
  orderBy: z.union([ JobOrderByWithRelationInputSchema.array(),JobOrderByWithRelationInputSchema ]).optional(),
  cursor: JobWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ JobScalarFieldEnumSchema,JobScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const JobFindFirstOrThrowArgsSchema: z.ZodType<Prisma.JobFindFirstOrThrowArgs> = z.object({
  select: JobSelectSchema.optional(),
  include: JobIncludeSchema.optional(),
  where: JobWhereInputSchema.optional(),
  orderBy: z.union([ JobOrderByWithRelationInputSchema.array(),JobOrderByWithRelationInputSchema ]).optional(),
  cursor: JobWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ JobScalarFieldEnumSchema,JobScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const JobFindManyArgsSchema: z.ZodType<Prisma.JobFindManyArgs> = z.object({
  select: JobSelectSchema.optional(),
  include: JobIncludeSchema.optional(),
  where: JobWhereInputSchema.optional(),
  orderBy: z.union([ JobOrderByWithRelationInputSchema.array(),JobOrderByWithRelationInputSchema ]).optional(),
  cursor: JobWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ JobScalarFieldEnumSchema,JobScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const JobAggregateArgsSchema: z.ZodType<Prisma.JobAggregateArgs> = z.object({
  where: JobWhereInputSchema.optional(),
  orderBy: z.union([ JobOrderByWithRelationInputSchema.array(),JobOrderByWithRelationInputSchema ]).optional(),
  cursor: JobWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const JobGroupByArgsSchema: z.ZodType<Prisma.JobGroupByArgs> = z.object({
  where: JobWhereInputSchema.optional(),
  orderBy: z.union([ JobOrderByWithAggregationInputSchema.array(),JobOrderByWithAggregationInputSchema ]).optional(),
  by: JobScalarFieldEnumSchema.array(),
  having: JobScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const JobFindUniqueArgsSchema: z.ZodType<Prisma.JobFindUniqueArgs> = z.object({
  select: JobSelectSchema.optional(),
  include: JobIncludeSchema.optional(),
  where: JobWhereUniqueInputSchema,
}).strict() ;

export const JobFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.JobFindUniqueOrThrowArgs> = z.object({
  select: JobSelectSchema.optional(),
  include: JobIncludeSchema.optional(),
  where: JobWhereUniqueInputSchema,
}).strict() ;

export const ApplicationFindFirstArgsSchema: z.ZodType<Prisma.ApplicationFindFirstArgs> = z.object({
  select: ApplicationSelectSchema.optional(),
  include: ApplicationIncludeSchema.optional(),
  where: ApplicationWhereInputSchema.optional(),
  orderBy: z.union([ ApplicationOrderByWithRelationInputSchema.array(),ApplicationOrderByWithRelationInputSchema ]).optional(),
  cursor: ApplicationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ApplicationScalarFieldEnumSchema,ApplicationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ApplicationFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ApplicationFindFirstOrThrowArgs> = z.object({
  select: ApplicationSelectSchema.optional(),
  include: ApplicationIncludeSchema.optional(),
  where: ApplicationWhereInputSchema.optional(),
  orderBy: z.union([ ApplicationOrderByWithRelationInputSchema.array(),ApplicationOrderByWithRelationInputSchema ]).optional(),
  cursor: ApplicationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ApplicationScalarFieldEnumSchema,ApplicationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ApplicationFindManyArgsSchema: z.ZodType<Prisma.ApplicationFindManyArgs> = z.object({
  select: ApplicationSelectSchema.optional(),
  include: ApplicationIncludeSchema.optional(),
  where: ApplicationWhereInputSchema.optional(),
  orderBy: z.union([ ApplicationOrderByWithRelationInputSchema.array(),ApplicationOrderByWithRelationInputSchema ]).optional(),
  cursor: ApplicationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ApplicationScalarFieldEnumSchema,ApplicationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ApplicationAggregateArgsSchema: z.ZodType<Prisma.ApplicationAggregateArgs> = z.object({
  where: ApplicationWhereInputSchema.optional(),
  orderBy: z.union([ ApplicationOrderByWithRelationInputSchema.array(),ApplicationOrderByWithRelationInputSchema ]).optional(),
  cursor: ApplicationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ApplicationGroupByArgsSchema: z.ZodType<Prisma.ApplicationGroupByArgs> = z.object({
  where: ApplicationWhereInputSchema.optional(),
  orderBy: z.union([ ApplicationOrderByWithAggregationInputSchema.array(),ApplicationOrderByWithAggregationInputSchema ]).optional(),
  by: ApplicationScalarFieldEnumSchema.array(),
  having: ApplicationScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ApplicationFindUniqueArgsSchema: z.ZodType<Prisma.ApplicationFindUniqueArgs> = z.object({
  select: ApplicationSelectSchema.optional(),
  include: ApplicationIncludeSchema.optional(),
  where: ApplicationWhereUniqueInputSchema,
}).strict() ;

export const ApplicationFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ApplicationFindUniqueOrThrowArgs> = z.object({
  select: ApplicationSelectSchema.optional(),
  include: ApplicationIncludeSchema.optional(),
  where: ApplicationWhereUniqueInputSchema,
}).strict() ;

export const InterviewFindFirstArgsSchema: z.ZodType<Prisma.InterviewFindFirstArgs> = z.object({
  select: InterviewSelectSchema.optional(),
  include: InterviewIncludeSchema.optional(),
  where: InterviewWhereInputSchema.optional(),
  orderBy: z.union([ InterviewOrderByWithRelationInputSchema.array(),InterviewOrderByWithRelationInputSchema ]).optional(),
  cursor: InterviewWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ InterviewScalarFieldEnumSchema,InterviewScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const InterviewFindFirstOrThrowArgsSchema: z.ZodType<Prisma.InterviewFindFirstOrThrowArgs> = z.object({
  select: InterviewSelectSchema.optional(),
  include: InterviewIncludeSchema.optional(),
  where: InterviewWhereInputSchema.optional(),
  orderBy: z.union([ InterviewOrderByWithRelationInputSchema.array(),InterviewOrderByWithRelationInputSchema ]).optional(),
  cursor: InterviewWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ InterviewScalarFieldEnumSchema,InterviewScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const InterviewFindManyArgsSchema: z.ZodType<Prisma.InterviewFindManyArgs> = z.object({
  select: InterviewSelectSchema.optional(),
  include: InterviewIncludeSchema.optional(),
  where: InterviewWhereInputSchema.optional(),
  orderBy: z.union([ InterviewOrderByWithRelationInputSchema.array(),InterviewOrderByWithRelationInputSchema ]).optional(),
  cursor: InterviewWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ InterviewScalarFieldEnumSchema,InterviewScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const InterviewAggregateArgsSchema: z.ZodType<Prisma.InterviewAggregateArgs> = z.object({
  where: InterviewWhereInputSchema.optional(),
  orderBy: z.union([ InterviewOrderByWithRelationInputSchema.array(),InterviewOrderByWithRelationInputSchema ]).optional(),
  cursor: InterviewWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const InterviewGroupByArgsSchema: z.ZodType<Prisma.InterviewGroupByArgs> = z.object({
  where: InterviewWhereInputSchema.optional(),
  orderBy: z.union([ InterviewOrderByWithAggregationInputSchema.array(),InterviewOrderByWithAggregationInputSchema ]).optional(),
  by: InterviewScalarFieldEnumSchema.array(),
  having: InterviewScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const InterviewFindUniqueArgsSchema: z.ZodType<Prisma.InterviewFindUniqueArgs> = z.object({
  select: InterviewSelectSchema.optional(),
  include: InterviewIncludeSchema.optional(),
  where: InterviewWhereUniqueInputSchema,
}).strict() ;

export const InterviewFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.InterviewFindUniqueOrThrowArgs> = z.object({
  select: InterviewSelectSchema.optional(),
  include: InterviewIncludeSchema.optional(),
  where: InterviewWhereUniqueInputSchema,
}).strict() ;

export const SelfAssessmentFindFirstArgsSchema: z.ZodType<Prisma.SelfAssessmentFindFirstArgs> = z.object({
  select: SelfAssessmentSelectSchema.optional(),
  include: SelfAssessmentIncludeSchema.optional(),
  where: SelfAssessmentWhereInputSchema.optional(),
  orderBy: z.union([ SelfAssessmentOrderByWithRelationInputSchema.array(),SelfAssessmentOrderByWithRelationInputSchema ]).optional(),
  cursor: SelfAssessmentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SelfAssessmentScalarFieldEnumSchema,SelfAssessmentScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const SelfAssessmentFindFirstOrThrowArgsSchema: z.ZodType<Prisma.SelfAssessmentFindFirstOrThrowArgs> = z.object({
  select: SelfAssessmentSelectSchema.optional(),
  include: SelfAssessmentIncludeSchema.optional(),
  where: SelfAssessmentWhereInputSchema.optional(),
  orderBy: z.union([ SelfAssessmentOrderByWithRelationInputSchema.array(),SelfAssessmentOrderByWithRelationInputSchema ]).optional(),
  cursor: SelfAssessmentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SelfAssessmentScalarFieldEnumSchema,SelfAssessmentScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const SelfAssessmentFindManyArgsSchema: z.ZodType<Prisma.SelfAssessmentFindManyArgs> = z.object({
  select: SelfAssessmentSelectSchema.optional(),
  include: SelfAssessmentIncludeSchema.optional(),
  where: SelfAssessmentWhereInputSchema.optional(),
  orderBy: z.union([ SelfAssessmentOrderByWithRelationInputSchema.array(),SelfAssessmentOrderByWithRelationInputSchema ]).optional(),
  cursor: SelfAssessmentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SelfAssessmentScalarFieldEnumSchema,SelfAssessmentScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const SelfAssessmentAggregateArgsSchema: z.ZodType<Prisma.SelfAssessmentAggregateArgs> = z.object({
  where: SelfAssessmentWhereInputSchema.optional(),
  orderBy: z.union([ SelfAssessmentOrderByWithRelationInputSchema.array(),SelfAssessmentOrderByWithRelationInputSchema ]).optional(),
  cursor: SelfAssessmentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const SelfAssessmentGroupByArgsSchema: z.ZodType<Prisma.SelfAssessmentGroupByArgs> = z.object({
  where: SelfAssessmentWhereInputSchema.optional(),
  orderBy: z.union([ SelfAssessmentOrderByWithAggregationInputSchema.array(),SelfAssessmentOrderByWithAggregationInputSchema ]).optional(),
  by: SelfAssessmentScalarFieldEnumSchema.array(),
  having: SelfAssessmentScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const SelfAssessmentFindUniqueArgsSchema: z.ZodType<Prisma.SelfAssessmentFindUniqueArgs> = z.object({
  select: SelfAssessmentSelectSchema.optional(),
  include: SelfAssessmentIncludeSchema.optional(),
  where: SelfAssessmentWhereUniqueInputSchema,
}).strict() ;

export const SelfAssessmentFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.SelfAssessmentFindUniqueOrThrowArgs> = z.object({
  select: SelfAssessmentSelectSchema.optional(),
  include: SelfAssessmentIncludeSchema.optional(),
  where: SelfAssessmentWhereUniqueInputSchema,
}).strict() ;

export const QuizFindFirstArgsSchema: z.ZodType<Prisma.QuizFindFirstArgs> = z.object({
  select: QuizSelectSchema.optional(),
  include: QuizIncludeSchema.optional(),
  where: QuizWhereInputSchema.optional(),
  orderBy: z.union([ QuizOrderByWithRelationInputSchema.array(),QuizOrderByWithRelationInputSchema ]).optional(),
  cursor: QuizWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ QuizScalarFieldEnumSchema,QuizScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const QuizFindFirstOrThrowArgsSchema: z.ZodType<Prisma.QuizFindFirstOrThrowArgs> = z.object({
  select: QuizSelectSchema.optional(),
  include: QuizIncludeSchema.optional(),
  where: QuizWhereInputSchema.optional(),
  orderBy: z.union([ QuizOrderByWithRelationInputSchema.array(),QuizOrderByWithRelationInputSchema ]).optional(),
  cursor: QuizWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ QuizScalarFieldEnumSchema,QuizScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const QuizFindManyArgsSchema: z.ZodType<Prisma.QuizFindManyArgs> = z.object({
  select: QuizSelectSchema.optional(),
  include: QuizIncludeSchema.optional(),
  where: QuizWhereInputSchema.optional(),
  orderBy: z.union([ QuizOrderByWithRelationInputSchema.array(),QuizOrderByWithRelationInputSchema ]).optional(),
  cursor: QuizWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ QuizScalarFieldEnumSchema,QuizScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const QuizAggregateArgsSchema: z.ZodType<Prisma.QuizAggregateArgs> = z.object({
  where: QuizWhereInputSchema.optional(),
  orderBy: z.union([ QuizOrderByWithRelationInputSchema.array(),QuizOrderByWithRelationInputSchema ]).optional(),
  cursor: QuizWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const QuizGroupByArgsSchema: z.ZodType<Prisma.QuizGroupByArgs> = z.object({
  where: QuizWhereInputSchema.optional(),
  orderBy: z.union([ QuizOrderByWithAggregationInputSchema.array(),QuizOrderByWithAggregationInputSchema ]).optional(),
  by: QuizScalarFieldEnumSchema.array(),
  having: QuizScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const QuizFindUniqueArgsSchema: z.ZodType<Prisma.QuizFindUniqueArgs> = z.object({
  select: QuizSelectSchema.optional(),
  include: QuizIncludeSchema.optional(),
  where: QuizWhereUniqueInputSchema,
}).strict() ;

export const QuizFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.QuizFindUniqueOrThrowArgs> = z.object({
  select: QuizSelectSchema.optional(),
  include: QuizIncludeSchema.optional(),
  where: QuizWhereUniqueInputSchema,
}).strict() ;

export const QuizResultFindFirstArgsSchema: z.ZodType<Prisma.QuizResultFindFirstArgs> = z.object({
  select: QuizResultSelectSchema.optional(),
  include: QuizResultIncludeSchema.optional(),
  where: QuizResultWhereInputSchema.optional(),
  orderBy: z.union([ QuizResultOrderByWithRelationInputSchema.array(),QuizResultOrderByWithRelationInputSchema ]).optional(),
  cursor: QuizResultWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ QuizResultScalarFieldEnumSchema,QuizResultScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const QuizResultFindFirstOrThrowArgsSchema: z.ZodType<Prisma.QuizResultFindFirstOrThrowArgs> = z.object({
  select: QuizResultSelectSchema.optional(),
  include: QuizResultIncludeSchema.optional(),
  where: QuizResultWhereInputSchema.optional(),
  orderBy: z.union([ QuizResultOrderByWithRelationInputSchema.array(),QuizResultOrderByWithRelationInputSchema ]).optional(),
  cursor: QuizResultWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ QuizResultScalarFieldEnumSchema,QuizResultScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const QuizResultFindManyArgsSchema: z.ZodType<Prisma.QuizResultFindManyArgs> = z.object({
  select: QuizResultSelectSchema.optional(),
  include: QuizResultIncludeSchema.optional(),
  where: QuizResultWhereInputSchema.optional(),
  orderBy: z.union([ QuizResultOrderByWithRelationInputSchema.array(),QuizResultOrderByWithRelationInputSchema ]).optional(),
  cursor: QuizResultWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ QuizResultScalarFieldEnumSchema,QuizResultScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const QuizResultAggregateArgsSchema: z.ZodType<Prisma.QuizResultAggregateArgs> = z.object({
  where: QuizResultWhereInputSchema.optional(),
  orderBy: z.union([ QuizResultOrderByWithRelationInputSchema.array(),QuizResultOrderByWithRelationInputSchema ]).optional(),
  cursor: QuizResultWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const QuizResultGroupByArgsSchema: z.ZodType<Prisma.QuizResultGroupByArgs> = z.object({
  where: QuizResultWhereInputSchema.optional(),
  orderBy: z.union([ QuizResultOrderByWithAggregationInputSchema.array(),QuizResultOrderByWithAggregationInputSchema ]).optional(),
  by: QuizResultScalarFieldEnumSchema.array(),
  having: QuizResultScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const QuizResultFindUniqueArgsSchema: z.ZodType<Prisma.QuizResultFindUniqueArgs> = z.object({
  select: QuizResultSelectSchema.optional(),
  include: QuizResultIncludeSchema.optional(),
  where: QuizResultWhereUniqueInputSchema,
}).strict() ;

export const QuizResultFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.QuizResultFindUniqueOrThrowArgs> = z.object({
  select: QuizResultSelectSchema.optional(),
  include: QuizResultIncludeSchema.optional(),
  where: QuizResultWhereUniqueInputSchema,
}).strict() ;

export const ForumThreadFindFirstArgsSchema: z.ZodType<Prisma.ForumThreadFindFirstArgs> = z.object({
  select: ForumThreadSelectSchema.optional(),
  include: ForumThreadIncludeSchema.optional(),
  where: ForumThreadWhereInputSchema.optional(),
  orderBy: z.union([ ForumThreadOrderByWithRelationInputSchema.array(),ForumThreadOrderByWithRelationInputSchema ]).optional(),
  cursor: ForumThreadWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ForumThreadScalarFieldEnumSchema,ForumThreadScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ForumThreadFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ForumThreadFindFirstOrThrowArgs> = z.object({
  select: ForumThreadSelectSchema.optional(),
  include: ForumThreadIncludeSchema.optional(),
  where: ForumThreadWhereInputSchema.optional(),
  orderBy: z.union([ ForumThreadOrderByWithRelationInputSchema.array(),ForumThreadOrderByWithRelationInputSchema ]).optional(),
  cursor: ForumThreadWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ForumThreadScalarFieldEnumSchema,ForumThreadScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ForumThreadFindManyArgsSchema: z.ZodType<Prisma.ForumThreadFindManyArgs> = z.object({
  select: ForumThreadSelectSchema.optional(),
  include: ForumThreadIncludeSchema.optional(),
  where: ForumThreadWhereInputSchema.optional(),
  orderBy: z.union([ ForumThreadOrderByWithRelationInputSchema.array(),ForumThreadOrderByWithRelationInputSchema ]).optional(),
  cursor: ForumThreadWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ForumThreadScalarFieldEnumSchema,ForumThreadScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ForumThreadAggregateArgsSchema: z.ZodType<Prisma.ForumThreadAggregateArgs> = z.object({
  where: ForumThreadWhereInputSchema.optional(),
  orderBy: z.union([ ForumThreadOrderByWithRelationInputSchema.array(),ForumThreadOrderByWithRelationInputSchema ]).optional(),
  cursor: ForumThreadWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ForumThreadGroupByArgsSchema: z.ZodType<Prisma.ForumThreadGroupByArgs> = z.object({
  where: ForumThreadWhereInputSchema.optional(),
  orderBy: z.union([ ForumThreadOrderByWithAggregationInputSchema.array(),ForumThreadOrderByWithAggregationInputSchema ]).optional(),
  by: ForumThreadScalarFieldEnumSchema.array(),
  having: ForumThreadScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ForumThreadFindUniqueArgsSchema: z.ZodType<Prisma.ForumThreadFindUniqueArgs> = z.object({
  select: ForumThreadSelectSchema.optional(),
  include: ForumThreadIncludeSchema.optional(),
  where: ForumThreadWhereUniqueInputSchema,
}).strict() ;

export const ForumThreadFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ForumThreadFindUniqueOrThrowArgs> = z.object({
  select: ForumThreadSelectSchema.optional(),
  include: ForumThreadIncludeSchema.optional(),
  where: ForumThreadWhereUniqueInputSchema,
}).strict() ;

export const ForumPostFindFirstArgsSchema: z.ZodType<Prisma.ForumPostFindFirstArgs> = z.object({
  select: ForumPostSelectSchema.optional(),
  include: ForumPostIncludeSchema.optional(),
  where: ForumPostWhereInputSchema.optional(),
  orderBy: z.union([ ForumPostOrderByWithRelationInputSchema.array(),ForumPostOrderByWithRelationInputSchema ]).optional(),
  cursor: ForumPostWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ForumPostScalarFieldEnumSchema,ForumPostScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ForumPostFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ForumPostFindFirstOrThrowArgs> = z.object({
  select: ForumPostSelectSchema.optional(),
  include: ForumPostIncludeSchema.optional(),
  where: ForumPostWhereInputSchema.optional(),
  orderBy: z.union([ ForumPostOrderByWithRelationInputSchema.array(),ForumPostOrderByWithRelationInputSchema ]).optional(),
  cursor: ForumPostWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ForumPostScalarFieldEnumSchema,ForumPostScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ForumPostFindManyArgsSchema: z.ZodType<Prisma.ForumPostFindManyArgs> = z.object({
  select: ForumPostSelectSchema.optional(),
  include: ForumPostIncludeSchema.optional(),
  where: ForumPostWhereInputSchema.optional(),
  orderBy: z.union([ ForumPostOrderByWithRelationInputSchema.array(),ForumPostOrderByWithRelationInputSchema ]).optional(),
  cursor: ForumPostWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ForumPostScalarFieldEnumSchema,ForumPostScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ForumPostAggregateArgsSchema: z.ZodType<Prisma.ForumPostAggregateArgs> = z.object({
  where: ForumPostWhereInputSchema.optional(),
  orderBy: z.union([ ForumPostOrderByWithRelationInputSchema.array(),ForumPostOrderByWithRelationInputSchema ]).optional(),
  cursor: ForumPostWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ForumPostGroupByArgsSchema: z.ZodType<Prisma.ForumPostGroupByArgs> = z.object({
  where: ForumPostWhereInputSchema.optional(),
  orderBy: z.union([ ForumPostOrderByWithAggregationInputSchema.array(),ForumPostOrderByWithAggregationInputSchema ]).optional(),
  by: ForumPostScalarFieldEnumSchema.array(),
  having: ForumPostScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ForumPostFindUniqueArgsSchema: z.ZodType<Prisma.ForumPostFindUniqueArgs> = z.object({
  select: ForumPostSelectSchema.optional(),
  include: ForumPostIncludeSchema.optional(),
  where: ForumPostWhereUniqueInputSchema,
}).strict() ;

export const ForumPostFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ForumPostFindUniqueOrThrowArgs> = z.object({
  select: ForumPostSelectSchema.optional(),
  include: ForumPostIncludeSchema.optional(),
  where: ForumPostWhereUniqueInputSchema,
}).strict() ;

export const ForumCommentFindFirstArgsSchema: z.ZodType<Prisma.ForumCommentFindFirstArgs> = z.object({
  select: ForumCommentSelectSchema.optional(),
  include: ForumCommentIncludeSchema.optional(),
  where: ForumCommentWhereInputSchema.optional(),
  orderBy: z.union([ ForumCommentOrderByWithRelationInputSchema.array(),ForumCommentOrderByWithRelationInputSchema ]).optional(),
  cursor: ForumCommentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ForumCommentScalarFieldEnumSchema,ForumCommentScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ForumCommentFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ForumCommentFindFirstOrThrowArgs> = z.object({
  select: ForumCommentSelectSchema.optional(),
  include: ForumCommentIncludeSchema.optional(),
  where: ForumCommentWhereInputSchema.optional(),
  orderBy: z.union([ ForumCommentOrderByWithRelationInputSchema.array(),ForumCommentOrderByWithRelationInputSchema ]).optional(),
  cursor: ForumCommentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ForumCommentScalarFieldEnumSchema,ForumCommentScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ForumCommentFindManyArgsSchema: z.ZodType<Prisma.ForumCommentFindManyArgs> = z.object({
  select: ForumCommentSelectSchema.optional(),
  include: ForumCommentIncludeSchema.optional(),
  where: ForumCommentWhereInputSchema.optional(),
  orderBy: z.union([ ForumCommentOrderByWithRelationInputSchema.array(),ForumCommentOrderByWithRelationInputSchema ]).optional(),
  cursor: ForumCommentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ForumCommentScalarFieldEnumSchema,ForumCommentScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ForumCommentAggregateArgsSchema: z.ZodType<Prisma.ForumCommentAggregateArgs> = z.object({
  where: ForumCommentWhereInputSchema.optional(),
  orderBy: z.union([ ForumCommentOrderByWithRelationInputSchema.array(),ForumCommentOrderByWithRelationInputSchema ]).optional(),
  cursor: ForumCommentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ForumCommentGroupByArgsSchema: z.ZodType<Prisma.ForumCommentGroupByArgs> = z.object({
  where: ForumCommentWhereInputSchema.optional(),
  orderBy: z.union([ ForumCommentOrderByWithAggregationInputSchema.array(),ForumCommentOrderByWithAggregationInputSchema ]).optional(),
  by: ForumCommentScalarFieldEnumSchema.array(),
  having: ForumCommentScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ForumCommentFindUniqueArgsSchema: z.ZodType<Prisma.ForumCommentFindUniqueArgs> = z.object({
  select: ForumCommentSelectSchema.optional(),
  include: ForumCommentIncludeSchema.optional(),
  where: ForumCommentWhereUniqueInputSchema,
}).strict() ;

export const ForumCommentFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ForumCommentFindUniqueOrThrowArgs> = z.object({
  select: ForumCommentSelectSchema.optional(),
  include: ForumCommentIncludeSchema.optional(),
  where: ForumCommentWhereUniqueInputSchema,
}).strict() ;

export const UserCreateArgsSchema: z.ZodType<Prisma.UserCreateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
}).strict() ;

export const UserUpsertArgsSchema: z.ZodType<Prisma.UserUpsertArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
  create: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
  update: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
}).strict() ;

export const UserCreateManyArgsSchema: z.ZodType<Prisma.UserCreateManyArgs> = z.object({
  data: z.union([ UserCreateManyInputSchema,UserCreateManyInputSchema.array() ]),
}).strict() ;

export const UserDeleteArgsSchema: z.ZodType<Prisma.UserDeleteArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserUpdateArgsSchema: z.ZodType<Prisma.UserUpdateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserUpdateManyArgsSchema: z.ZodType<Prisma.UserUpdateManyArgs> = z.object({
  data: z.union([ UserUpdateManyMutationInputSchema,UserUncheckedUpdateManyInputSchema ]),
  where: UserWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const UserDeleteManyArgsSchema: z.ZodType<Prisma.UserDeleteManyArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ProfileCreateArgsSchema: z.ZodType<Prisma.ProfileCreateArgs> = z.object({
  select: ProfileSelectSchema.optional(),
  include: ProfileIncludeSchema.optional(),
  data: z.union([ ProfileCreateInputSchema,ProfileUncheckedCreateInputSchema ]),
}).strict() ;

export const ProfileUpsertArgsSchema: z.ZodType<Prisma.ProfileUpsertArgs> = z.object({
  select: ProfileSelectSchema.optional(),
  include: ProfileIncludeSchema.optional(),
  where: ProfileWhereUniqueInputSchema,
  create: z.union([ ProfileCreateInputSchema,ProfileUncheckedCreateInputSchema ]),
  update: z.union([ ProfileUpdateInputSchema,ProfileUncheckedUpdateInputSchema ]),
}).strict() ;

export const ProfileCreateManyArgsSchema: z.ZodType<Prisma.ProfileCreateManyArgs> = z.object({
  data: z.union([ ProfileCreateManyInputSchema,ProfileCreateManyInputSchema.array() ]),
}).strict() ;

export const ProfileDeleteArgsSchema: z.ZodType<Prisma.ProfileDeleteArgs> = z.object({
  select: ProfileSelectSchema.optional(),
  include: ProfileIncludeSchema.optional(),
  where: ProfileWhereUniqueInputSchema,
}).strict() ;

export const ProfileUpdateArgsSchema: z.ZodType<Prisma.ProfileUpdateArgs> = z.object({
  select: ProfileSelectSchema.optional(),
  include: ProfileIncludeSchema.optional(),
  data: z.union([ ProfileUpdateInputSchema,ProfileUncheckedUpdateInputSchema ]),
  where: ProfileWhereUniqueInputSchema,
}).strict() ;

export const ProfileUpdateManyArgsSchema: z.ZodType<Prisma.ProfileUpdateManyArgs> = z.object({
  data: z.union([ ProfileUpdateManyMutationInputSchema,ProfileUncheckedUpdateManyInputSchema ]),
  where: ProfileWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ProfileDeleteManyArgsSchema: z.ZodType<Prisma.ProfileDeleteManyArgs> = z.object({
  where: ProfileWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const CertificateCreateArgsSchema: z.ZodType<Prisma.CertificateCreateArgs> = z.object({
  select: CertificateSelectSchema.optional(),
  include: CertificateIncludeSchema.optional(),
  data: z.union([ CertificateCreateInputSchema,CertificateUncheckedCreateInputSchema ]),
}).strict() ;

export const CertificateUpsertArgsSchema: z.ZodType<Prisma.CertificateUpsertArgs> = z.object({
  select: CertificateSelectSchema.optional(),
  include: CertificateIncludeSchema.optional(),
  where: CertificateWhereUniqueInputSchema,
  create: z.union([ CertificateCreateInputSchema,CertificateUncheckedCreateInputSchema ]),
  update: z.union([ CertificateUpdateInputSchema,CertificateUncheckedUpdateInputSchema ]),
}).strict() ;

export const CertificateCreateManyArgsSchema: z.ZodType<Prisma.CertificateCreateManyArgs> = z.object({
  data: z.union([ CertificateCreateManyInputSchema,CertificateCreateManyInputSchema.array() ]),
}).strict() ;

export const CertificateDeleteArgsSchema: z.ZodType<Prisma.CertificateDeleteArgs> = z.object({
  select: CertificateSelectSchema.optional(),
  include: CertificateIncludeSchema.optional(),
  where: CertificateWhereUniqueInputSchema,
}).strict() ;

export const CertificateUpdateArgsSchema: z.ZodType<Prisma.CertificateUpdateArgs> = z.object({
  select: CertificateSelectSchema.optional(),
  include: CertificateIncludeSchema.optional(),
  data: z.union([ CertificateUpdateInputSchema,CertificateUncheckedUpdateInputSchema ]),
  where: CertificateWhereUniqueInputSchema,
}).strict() ;

export const CertificateUpdateManyArgsSchema: z.ZodType<Prisma.CertificateUpdateManyArgs> = z.object({
  data: z.union([ CertificateUpdateManyMutationInputSchema,CertificateUncheckedUpdateManyInputSchema ]),
  where: CertificateWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const CertificateDeleteManyArgsSchema: z.ZodType<Prisma.CertificateDeleteManyArgs> = z.object({
  where: CertificateWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const AccountCreateArgsSchema: z.ZodType<Prisma.AccountCreateArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  data: z.union([ AccountCreateInputSchema,AccountUncheckedCreateInputSchema ]),
}).strict() ;

export const AccountUpsertArgsSchema: z.ZodType<Prisma.AccountUpsertArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereUniqueInputSchema,
  create: z.union([ AccountCreateInputSchema,AccountUncheckedCreateInputSchema ]),
  update: z.union([ AccountUpdateInputSchema,AccountUncheckedUpdateInputSchema ]),
}).strict() ;

export const AccountCreateManyArgsSchema: z.ZodType<Prisma.AccountCreateManyArgs> = z.object({
  data: z.union([ AccountCreateManyInputSchema,AccountCreateManyInputSchema.array() ]),
}).strict() ;

export const AccountDeleteArgsSchema: z.ZodType<Prisma.AccountDeleteArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereUniqueInputSchema,
}).strict() ;

export const AccountUpdateArgsSchema: z.ZodType<Prisma.AccountUpdateArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  data: z.union([ AccountUpdateInputSchema,AccountUncheckedUpdateInputSchema ]),
  where: AccountWhereUniqueInputSchema,
}).strict() ;

export const AccountUpdateManyArgsSchema: z.ZodType<Prisma.AccountUpdateManyArgs> = z.object({
  data: z.union([ AccountUpdateManyMutationInputSchema,AccountUncheckedUpdateManyInputSchema ]),
  where: AccountWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const AccountDeleteManyArgsSchema: z.ZodType<Prisma.AccountDeleteManyArgs> = z.object({
  where: AccountWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const SessionCreateArgsSchema: z.ZodType<Prisma.SessionCreateArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  data: z.union([ SessionCreateInputSchema,SessionUncheckedCreateInputSchema ]),
}).strict() ;

export const SessionUpsertArgsSchema: z.ZodType<Prisma.SessionUpsertArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereUniqueInputSchema,
  create: z.union([ SessionCreateInputSchema,SessionUncheckedCreateInputSchema ]),
  update: z.union([ SessionUpdateInputSchema,SessionUncheckedUpdateInputSchema ]),
}).strict() ;

export const SessionCreateManyArgsSchema: z.ZodType<Prisma.SessionCreateManyArgs> = z.object({
  data: z.union([ SessionCreateManyInputSchema,SessionCreateManyInputSchema.array() ]),
}).strict() ;

export const SessionDeleteArgsSchema: z.ZodType<Prisma.SessionDeleteArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereUniqueInputSchema,
}).strict() ;

export const SessionUpdateArgsSchema: z.ZodType<Prisma.SessionUpdateArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  data: z.union([ SessionUpdateInputSchema,SessionUncheckedUpdateInputSchema ]),
  where: SessionWhereUniqueInputSchema,
}).strict() ;

export const SessionUpdateManyArgsSchema: z.ZodType<Prisma.SessionUpdateManyArgs> = z.object({
  data: z.union([ SessionUpdateManyMutationInputSchema,SessionUncheckedUpdateManyInputSchema ]),
  where: SessionWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const SessionDeleteManyArgsSchema: z.ZodType<Prisma.SessionDeleteManyArgs> = z.object({
  where: SessionWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const VerificationTokenCreateArgsSchema: z.ZodType<Prisma.VerificationTokenCreateArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  data: z.union([ VerificationTokenCreateInputSchema,VerificationTokenUncheckedCreateInputSchema ]),
}).strict() ;

export const VerificationTokenUpsertArgsSchema: z.ZodType<Prisma.VerificationTokenUpsertArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereUniqueInputSchema,
  create: z.union([ VerificationTokenCreateInputSchema,VerificationTokenUncheckedCreateInputSchema ]),
  update: z.union([ VerificationTokenUpdateInputSchema,VerificationTokenUncheckedUpdateInputSchema ]),
}).strict() ;

export const VerificationTokenCreateManyArgsSchema: z.ZodType<Prisma.VerificationTokenCreateManyArgs> = z.object({
  data: z.union([ VerificationTokenCreateManyInputSchema,VerificationTokenCreateManyInputSchema.array() ]),
}).strict() ;

export const VerificationTokenDeleteArgsSchema: z.ZodType<Prisma.VerificationTokenDeleteArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereUniqueInputSchema,
}).strict() ;

export const VerificationTokenUpdateArgsSchema: z.ZodType<Prisma.VerificationTokenUpdateArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  data: z.union([ VerificationTokenUpdateInputSchema,VerificationTokenUncheckedUpdateInputSchema ]),
  where: VerificationTokenWhereUniqueInputSchema,
}).strict() ;

export const VerificationTokenUpdateManyArgsSchema: z.ZodType<Prisma.VerificationTokenUpdateManyArgs> = z.object({
  data: z.union([ VerificationTokenUpdateManyMutationInputSchema,VerificationTokenUncheckedUpdateManyInputSchema ]),
  where: VerificationTokenWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const VerificationTokenDeleteManyArgsSchema: z.ZodType<Prisma.VerificationTokenDeleteManyArgs> = z.object({
  where: VerificationTokenWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const JobSeekerCreateArgsSchema: z.ZodType<Prisma.JobSeekerCreateArgs> = z.object({
  select: JobSeekerSelectSchema.optional(),
  include: JobSeekerIncludeSchema.optional(),
  data: z.union([ JobSeekerCreateInputSchema,JobSeekerUncheckedCreateInputSchema ]),
}).strict() ;

export const JobSeekerUpsertArgsSchema: z.ZodType<Prisma.JobSeekerUpsertArgs> = z.object({
  select: JobSeekerSelectSchema.optional(),
  include: JobSeekerIncludeSchema.optional(),
  where: JobSeekerWhereUniqueInputSchema,
  create: z.union([ JobSeekerCreateInputSchema,JobSeekerUncheckedCreateInputSchema ]),
  update: z.union([ JobSeekerUpdateInputSchema,JobSeekerUncheckedUpdateInputSchema ]),
}).strict() ;

export const JobSeekerCreateManyArgsSchema: z.ZodType<Prisma.JobSeekerCreateManyArgs> = z.object({
  data: z.union([ JobSeekerCreateManyInputSchema,JobSeekerCreateManyInputSchema.array() ]),
}).strict() ;

export const JobSeekerDeleteArgsSchema: z.ZodType<Prisma.JobSeekerDeleteArgs> = z.object({
  select: JobSeekerSelectSchema.optional(),
  include: JobSeekerIncludeSchema.optional(),
  where: JobSeekerWhereUniqueInputSchema,
}).strict() ;

export const JobSeekerUpdateArgsSchema: z.ZodType<Prisma.JobSeekerUpdateArgs> = z.object({
  select: JobSeekerSelectSchema.optional(),
  include: JobSeekerIncludeSchema.optional(),
  data: z.union([ JobSeekerUpdateInputSchema,JobSeekerUncheckedUpdateInputSchema ]),
  where: JobSeekerWhereUniqueInputSchema,
}).strict() ;

export const JobSeekerUpdateManyArgsSchema: z.ZodType<Prisma.JobSeekerUpdateManyArgs> = z.object({
  data: z.union([ JobSeekerUpdateManyMutationInputSchema,JobSeekerUncheckedUpdateManyInputSchema ]),
  where: JobSeekerWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const JobSeekerDeleteManyArgsSchema: z.ZodType<Prisma.JobSeekerDeleteManyArgs> = z.object({
  where: JobSeekerWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const EducationCreateArgsSchema: z.ZodType<Prisma.EducationCreateArgs> = z.object({
  select: EducationSelectSchema.optional(),
  include: EducationIncludeSchema.optional(),
  data: z.union([ EducationCreateInputSchema,EducationUncheckedCreateInputSchema ]),
}).strict() ;

export const EducationUpsertArgsSchema: z.ZodType<Prisma.EducationUpsertArgs> = z.object({
  select: EducationSelectSchema.optional(),
  include: EducationIncludeSchema.optional(),
  where: EducationWhereUniqueInputSchema,
  create: z.union([ EducationCreateInputSchema,EducationUncheckedCreateInputSchema ]),
  update: z.union([ EducationUpdateInputSchema,EducationUncheckedUpdateInputSchema ]),
}).strict() ;

export const EducationCreateManyArgsSchema: z.ZodType<Prisma.EducationCreateManyArgs> = z.object({
  data: z.union([ EducationCreateManyInputSchema,EducationCreateManyInputSchema.array() ]),
}).strict() ;

export const EducationDeleteArgsSchema: z.ZodType<Prisma.EducationDeleteArgs> = z.object({
  select: EducationSelectSchema.optional(),
  include: EducationIncludeSchema.optional(),
  where: EducationWhereUniqueInputSchema,
}).strict() ;

export const EducationUpdateArgsSchema: z.ZodType<Prisma.EducationUpdateArgs> = z.object({
  select: EducationSelectSchema.optional(),
  include: EducationIncludeSchema.optional(),
  data: z.union([ EducationUpdateInputSchema,EducationUncheckedUpdateInputSchema ]),
  where: EducationWhereUniqueInputSchema,
}).strict() ;

export const EducationUpdateManyArgsSchema: z.ZodType<Prisma.EducationUpdateManyArgs> = z.object({
  data: z.union([ EducationUpdateManyMutationInputSchema,EducationUncheckedUpdateManyInputSchema ]),
  where: EducationWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const EducationDeleteManyArgsSchema: z.ZodType<Prisma.EducationDeleteManyArgs> = z.object({
  where: EducationWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ExperienceCreateArgsSchema: z.ZodType<Prisma.ExperienceCreateArgs> = z.object({
  select: ExperienceSelectSchema.optional(),
  include: ExperienceIncludeSchema.optional(),
  data: z.union([ ExperienceCreateInputSchema,ExperienceUncheckedCreateInputSchema ]),
}).strict() ;

export const ExperienceUpsertArgsSchema: z.ZodType<Prisma.ExperienceUpsertArgs> = z.object({
  select: ExperienceSelectSchema.optional(),
  include: ExperienceIncludeSchema.optional(),
  where: ExperienceWhereUniqueInputSchema,
  create: z.union([ ExperienceCreateInputSchema,ExperienceUncheckedCreateInputSchema ]),
  update: z.union([ ExperienceUpdateInputSchema,ExperienceUncheckedUpdateInputSchema ]),
}).strict() ;

export const ExperienceCreateManyArgsSchema: z.ZodType<Prisma.ExperienceCreateManyArgs> = z.object({
  data: z.union([ ExperienceCreateManyInputSchema,ExperienceCreateManyInputSchema.array() ]),
}).strict() ;

export const ExperienceDeleteArgsSchema: z.ZodType<Prisma.ExperienceDeleteArgs> = z.object({
  select: ExperienceSelectSchema.optional(),
  include: ExperienceIncludeSchema.optional(),
  where: ExperienceWhereUniqueInputSchema,
}).strict() ;

export const ExperienceUpdateArgsSchema: z.ZodType<Prisma.ExperienceUpdateArgs> = z.object({
  select: ExperienceSelectSchema.optional(),
  include: ExperienceIncludeSchema.optional(),
  data: z.union([ ExperienceUpdateInputSchema,ExperienceUncheckedUpdateInputSchema ]),
  where: ExperienceWhereUniqueInputSchema,
}).strict() ;

export const ExperienceUpdateManyArgsSchema: z.ZodType<Prisma.ExperienceUpdateManyArgs> = z.object({
  data: z.union([ ExperienceUpdateManyMutationInputSchema,ExperienceUncheckedUpdateManyInputSchema ]),
  where: ExperienceWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ExperienceDeleteManyArgsSchema: z.ZodType<Prisma.ExperienceDeleteManyArgs> = z.object({
  where: ExperienceWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const CertificationCreateArgsSchema: z.ZodType<Prisma.CertificationCreateArgs> = z.object({
  select: CertificationSelectSchema.optional(),
  include: CertificationIncludeSchema.optional(),
  data: z.union([ CertificationCreateInputSchema,CertificationUncheckedCreateInputSchema ]),
}).strict() ;

export const CertificationUpsertArgsSchema: z.ZodType<Prisma.CertificationUpsertArgs> = z.object({
  select: CertificationSelectSchema.optional(),
  include: CertificationIncludeSchema.optional(),
  where: CertificationWhereUniqueInputSchema,
  create: z.union([ CertificationCreateInputSchema,CertificationUncheckedCreateInputSchema ]),
  update: z.union([ CertificationUpdateInputSchema,CertificationUncheckedUpdateInputSchema ]),
}).strict() ;

export const CertificationCreateManyArgsSchema: z.ZodType<Prisma.CertificationCreateManyArgs> = z.object({
  data: z.union([ CertificationCreateManyInputSchema,CertificationCreateManyInputSchema.array() ]),
}).strict() ;

export const CertificationDeleteArgsSchema: z.ZodType<Prisma.CertificationDeleteArgs> = z.object({
  select: CertificationSelectSchema.optional(),
  include: CertificationIncludeSchema.optional(),
  where: CertificationWhereUniqueInputSchema,
}).strict() ;

export const CertificationUpdateArgsSchema: z.ZodType<Prisma.CertificationUpdateArgs> = z.object({
  select: CertificationSelectSchema.optional(),
  include: CertificationIncludeSchema.optional(),
  data: z.union([ CertificationUpdateInputSchema,CertificationUncheckedUpdateInputSchema ]),
  where: CertificationWhereUniqueInputSchema,
}).strict() ;

export const CertificationUpdateManyArgsSchema: z.ZodType<Prisma.CertificationUpdateManyArgs> = z.object({
  data: z.union([ CertificationUpdateManyMutationInputSchema,CertificationUncheckedUpdateManyInputSchema ]),
  where: CertificationWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const CertificationDeleteManyArgsSchema: z.ZodType<Prisma.CertificationDeleteManyArgs> = z.object({
  where: CertificationWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const HiringCompanyCreateArgsSchema: z.ZodType<Prisma.HiringCompanyCreateArgs> = z.object({
  select: HiringCompanySelectSchema.optional(),
  include: HiringCompanyIncludeSchema.optional(),
  data: z.union([ HiringCompanyCreateInputSchema,HiringCompanyUncheckedCreateInputSchema ]),
}).strict() ;

export const HiringCompanyUpsertArgsSchema: z.ZodType<Prisma.HiringCompanyUpsertArgs> = z.object({
  select: HiringCompanySelectSchema.optional(),
  include: HiringCompanyIncludeSchema.optional(),
  where: HiringCompanyWhereUniqueInputSchema,
  create: z.union([ HiringCompanyCreateInputSchema,HiringCompanyUncheckedCreateInputSchema ]),
  update: z.union([ HiringCompanyUpdateInputSchema,HiringCompanyUncheckedUpdateInputSchema ]),
}).strict() ;

export const HiringCompanyCreateManyArgsSchema: z.ZodType<Prisma.HiringCompanyCreateManyArgs> = z.object({
  data: z.union([ HiringCompanyCreateManyInputSchema,HiringCompanyCreateManyInputSchema.array() ]),
}).strict() ;

export const HiringCompanyDeleteArgsSchema: z.ZodType<Prisma.HiringCompanyDeleteArgs> = z.object({
  select: HiringCompanySelectSchema.optional(),
  include: HiringCompanyIncludeSchema.optional(),
  where: HiringCompanyWhereUniqueInputSchema,
}).strict() ;

export const HiringCompanyUpdateArgsSchema: z.ZodType<Prisma.HiringCompanyUpdateArgs> = z.object({
  select: HiringCompanySelectSchema.optional(),
  include: HiringCompanyIncludeSchema.optional(),
  data: z.union([ HiringCompanyUpdateInputSchema,HiringCompanyUncheckedUpdateInputSchema ]),
  where: HiringCompanyWhereUniqueInputSchema,
}).strict() ;

export const HiringCompanyUpdateManyArgsSchema: z.ZodType<Prisma.HiringCompanyUpdateManyArgs> = z.object({
  data: z.union([ HiringCompanyUpdateManyMutationInputSchema,HiringCompanyUncheckedUpdateManyInputSchema ]),
  where: HiringCompanyWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const HiringCompanyDeleteManyArgsSchema: z.ZodType<Prisma.HiringCompanyDeleteManyArgs> = z.object({
  where: HiringCompanyWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const JobCreateArgsSchema: z.ZodType<Prisma.JobCreateArgs> = z.object({
  select: JobSelectSchema.optional(),
  include: JobIncludeSchema.optional(),
  data: z.union([ JobCreateInputSchema,JobUncheckedCreateInputSchema ]),
}).strict() ;

export const JobUpsertArgsSchema: z.ZodType<Prisma.JobUpsertArgs> = z.object({
  select: JobSelectSchema.optional(),
  include: JobIncludeSchema.optional(),
  where: JobWhereUniqueInputSchema,
  create: z.union([ JobCreateInputSchema,JobUncheckedCreateInputSchema ]),
  update: z.union([ JobUpdateInputSchema,JobUncheckedUpdateInputSchema ]),
}).strict() ;

export const JobCreateManyArgsSchema: z.ZodType<Prisma.JobCreateManyArgs> = z.object({
  data: z.union([ JobCreateManyInputSchema,JobCreateManyInputSchema.array() ]),
}).strict() ;

export const JobDeleteArgsSchema: z.ZodType<Prisma.JobDeleteArgs> = z.object({
  select: JobSelectSchema.optional(),
  include: JobIncludeSchema.optional(),
  where: JobWhereUniqueInputSchema,
}).strict() ;

export const JobUpdateArgsSchema: z.ZodType<Prisma.JobUpdateArgs> = z.object({
  select: JobSelectSchema.optional(),
  include: JobIncludeSchema.optional(),
  data: z.union([ JobUpdateInputSchema,JobUncheckedUpdateInputSchema ]),
  where: JobWhereUniqueInputSchema,
}).strict() ;

export const JobUpdateManyArgsSchema: z.ZodType<Prisma.JobUpdateManyArgs> = z.object({
  data: z.union([ JobUpdateManyMutationInputSchema,JobUncheckedUpdateManyInputSchema ]),
  where: JobWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const JobDeleteManyArgsSchema: z.ZodType<Prisma.JobDeleteManyArgs> = z.object({
  where: JobWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ApplicationCreateArgsSchema: z.ZodType<Prisma.ApplicationCreateArgs> = z.object({
  select: ApplicationSelectSchema.optional(),
  include: ApplicationIncludeSchema.optional(),
  data: z.union([ ApplicationCreateInputSchema,ApplicationUncheckedCreateInputSchema ]),
}).strict() ;

export const ApplicationUpsertArgsSchema: z.ZodType<Prisma.ApplicationUpsertArgs> = z.object({
  select: ApplicationSelectSchema.optional(),
  include: ApplicationIncludeSchema.optional(),
  where: ApplicationWhereUniqueInputSchema,
  create: z.union([ ApplicationCreateInputSchema,ApplicationUncheckedCreateInputSchema ]),
  update: z.union([ ApplicationUpdateInputSchema,ApplicationUncheckedUpdateInputSchema ]),
}).strict() ;

export const ApplicationCreateManyArgsSchema: z.ZodType<Prisma.ApplicationCreateManyArgs> = z.object({
  data: z.union([ ApplicationCreateManyInputSchema,ApplicationCreateManyInputSchema.array() ]),
}).strict() ;

export const ApplicationDeleteArgsSchema: z.ZodType<Prisma.ApplicationDeleteArgs> = z.object({
  select: ApplicationSelectSchema.optional(),
  include: ApplicationIncludeSchema.optional(),
  where: ApplicationWhereUniqueInputSchema,
}).strict() ;

export const ApplicationUpdateArgsSchema: z.ZodType<Prisma.ApplicationUpdateArgs> = z.object({
  select: ApplicationSelectSchema.optional(),
  include: ApplicationIncludeSchema.optional(),
  data: z.union([ ApplicationUpdateInputSchema,ApplicationUncheckedUpdateInputSchema ]),
  where: ApplicationWhereUniqueInputSchema,
}).strict() ;

export const ApplicationUpdateManyArgsSchema: z.ZodType<Prisma.ApplicationUpdateManyArgs> = z.object({
  data: z.union([ ApplicationUpdateManyMutationInputSchema,ApplicationUncheckedUpdateManyInputSchema ]),
  where: ApplicationWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ApplicationDeleteManyArgsSchema: z.ZodType<Prisma.ApplicationDeleteManyArgs> = z.object({
  where: ApplicationWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const InterviewCreateArgsSchema: z.ZodType<Prisma.InterviewCreateArgs> = z.object({
  select: InterviewSelectSchema.optional(),
  include: InterviewIncludeSchema.optional(),
  data: z.union([ InterviewCreateInputSchema,InterviewUncheckedCreateInputSchema ]),
}).strict() ;

export const InterviewUpsertArgsSchema: z.ZodType<Prisma.InterviewUpsertArgs> = z.object({
  select: InterviewSelectSchema.optional(),
  include: InterviewIncludeSchema.optional(),
  where: InterviewWhereUniqueInputSchema,
  create: z.union([ InterviewCreateInputSchema,InterviewUncheckedCreateInputSchema ]),
  update: z.union([ InterviewUpdateInputSchema,InterviewUncheckedUpdateInputSchema ]),
}).strict() ;

export const InterviewCreateManyArgsSchema: z.ZodType<Prisma.InterviewCreateManyArgs> = z.object({
  data: z.union([ InterviewCreateManyInputSchema,InterviewCreateManyInputSchema.array() ]),
}).strict() ;

export const InterviewDeleteArgsSchema: z.ZodType<Prisma.InterviewDeleteArgs> = z.object({
  select: InterviewSelectSchema.optional(),
  include: InterviewIncludeSchema.optional(),
  where: InterviewWhereUniqueInputSchema,
}).strict() ;

export const InterviewUpdateArgsSchema: z.ZodType<Prisma.InterviewUpdateArgs> = z.object({
  select: InterviewSelectSchema.optional(),
  include: InterviewIncludeSchema.optional(),
  data: z.union([ InterviewUpdateInputSchema,InterviewUncheckedUpdateInputSchema ]),
  where: InterviewWhereUniqueInputSchema,
}).strict() ;

export const InterviewUpdateManyArgsSchema: z.ZodType<Prisma.InterviewUpdateManyArgs> = z.object({
  data: z.union([ InterviewUpdateManyMutationInputSchema,InterviewUncheckedUpdateManyInputSchema ]),
  where: InterviewWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const InterviewDeleteManyArgsSchema: z.ZodType<Prisma.InterviewDeleteManyArgs> = z.object({
  where: InterviewWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const SelfAssessmentCreateArgsSchema: z.ZodType<Prisma.SelfAssessmentCreateArgs> = z.object({
  select: SelfAssessmentSelectSchema.optional(),
  include: SelfAssessmentIncludeSchema.optional(),
  data: z.union([ SelfAssessmentCreateInputSchema,SelfAssessmentUncheckedCreateInputSchema ]),
}).strict() ;

export const SelfAssessmentUpsertArgsSchema: z.ZodType<Prisma.SelfAssessmentUpsertArgs> = z.object({
  select: SelfAssessmentSelectSchema.optional(),
  include: SelfAssessmentIncludeSchema.optional(),
  where: SelfAssessmentWhereUniqueInputSchema,
  create: z.union([ SelfAssessmentCreateInputSchema,SelfAssessmentUncheckedCreateInputSchema ]),
  update: z.union([ SelfAssessmentUpdateInputSchema,SelfAssessmentUncheckedUpdateInputSchema ]),
}).strict() ;

export const SelfAssessmentCreateManyArgsSchema: z.ZodType<Prisma.SelfAssessmentCreateManyArgs> = z.object({
  data: z.union([ SelfAssessmentCreateManyInputSchema,SelfAssessmentCreateManyInputSchema.array() ]),
}).strict() ;

export const SelfAssessmentDeleteArgsSchema: z.ZodType<Prisma.SelfAssessmentDeleteArgs> = z.object({
  select: SelfAssessmentSelectSchema.optional(),
  include: SelfAssessmentIncludeSchema.optional(),
  where: SelfAssessmentWhereUniqueInputSchema,
}).strict() ;

export const SelfAssessmentUpdateArgsSchema: z.ZodType<Prisma.SelfAssessmentUpdateArgs> = z.object({
  select: SelfAssessmentSelectSchema.optional(),
  include: SelfAssessmentIncludeSchema.optional(),
  data: z.union([ SelfAssessmentUpdateInputSchema,SelfAssessmentUncheckedUpdateInputSchema ]),
  where: SelfAssessmentWhereUniqueInputSchema,
}).strict() ;

export const SelfAssessmentUpdateManyArgsSchema: z.ZodType<Prisma.SelfAssessmentUpdateManyArgs> = z.object({
  data: z.union([ SelfAssessmentUpdateManyMutationInputSchema,SelfAssessmentUncheckedUpdateManyInputSchema ]),
  where: SelfAssessmentWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const SelfAssessmentDeleteManyArgsSchema: z.ZodType<Prisma.SelfAssessmentDeleteManyArgs> = z.object({
  where: SelfAssessmentWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const QuizCreateArgsSchema: z.ZodType<Prisma.QuizCreateArgs> = z.object({
  select: QuizSelectSchema.optional(),
  include: QuizIncludeSchema.optional(),
  data: z.union([ QuizCreateInputSchema,QuizUncheckedCreateInputSchema ]),
}).strict() ;

export const QuizUpsertArgsSchema: z.ZodType<Prisma.QuizUpsertArgs> = z.object({
  select: QuizSelectSchema.optional(),
  include: QuizIncludeSchema.optional(),
  where: QuizWhereUniqueInputSchema,
  create: z.union([ QuizCreateInputSchema,QuizUncheckedCreateInputSchema ]),
  update: z.union([ QuizUpdateInputSchema,QuizUncheckedUpdateInputSchema ]),
}).strict() ;

export const QuizCreateManyArgsSchema: z.ZodType<Prisma.QuizCreateManyArgs> = z.object({
  data: z.union([ QuizCreateManyInputSchema,QuizCreateManyInputSchema.array() ]),
}).strict() ;

export const QuizDeleteArgsSchema: z.ZodType<Prisma.QuizDeleteArgs> = z.object({
  select: QuizSelectSchema.optional(),
  include: QuizIncludeSchema.optional(),
  where: QuizWhereUniqueInputSchema,
}).strict() ;

export const QuizUpdateArgsSchema: z.ZodType<Prisma.QuizUpdateArgs> = z.object({
  select: QuizSelectSchema.optional(),
  include: QuizIncludeSchema.optional(),
  data: z.union([ QuizUpdateInputSchema,QuizUncheckedUpdateInputSchema ]),
  where: QuizWhereUniqueInputSchema,
}).strict() ;

export const QuizUpdateManyArgsSchema: z.ZodType<Prisma.QuizUpdateManyArgs> = z.object({
  data: z.union([ QuizUpdateManyMutationInputSchema,QuizUncheckedUpdateManyInputSchema ]),
  where: QuizWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const QuizDeleteManyArgsSchema: z.ZodType<Prisma.QuizDeleteManyArgs> = z.object({
  where: QuizWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const QuizResultCreateArgsSchema: z.ZodType<Prisma.QuizResultCreateArgs> = z.object({
  select: QuizResultSelectSchema.optional(),
  include: QuizResultIncludeSchema.optional(),
  data: z.union([ QuizResultCreateInputSchema,QuizResultUncheckedCreateInputSchema ]),
}).strict() ;

export const QuizResultUpsertArgsSchema: z.ZodType<Prisma.QuizResultUpsertArgs> = z.object({
  select: QuizResultSelectSchema.optional(),
  include: QuizResultIncludeSchema.optional(),
  where: QuizResultWhereUniqueInputSchema,
  create: z.union([ QuizResultCreateInputSchema,QuizResultUncheckedCreateInputSchema ]),
  update: z.union([ QuizResultUpdateInputSchema,QuizResultUncheckedUpdateInputSchema ]),
}).strict() ;

export const QuizResultCreateManyArgsSchema: z.ZodType<Prisma.QuizResultCreateManyArgs> = z.object({
  data: z.union([ QuizResultCreateManyInputSchema,QuizResultCreateManyInputSchema.array() ]),
}).strict() ;

export const QuizResultDeleteArgsSchema: z.ZodType<Prisma.QuizResultDeleteArgs> = z.object({
  select: QuizResultSelectSchema.optional(),
  include: QuizResultIncludeSchema.optional(),
  where: QuizResultWhereUniqueInputSchema,
}).strict() ;

export const QuizResultUpdateArgsSchema: z.ZodType<Prisma.QuizResultUpdateArgs> = z.object({
  select: QuizResultSelectSchema.optional(),
  include: QuizResultIncludeSchema.optional(),
  data: z.union([ QuizResultUpdateInputSchema,QuizResultUncheckedUpdateInputSchema ]),
  where: QuizResultWhereUniqueInputSchema,
}).strict() ;

export const QuizResultUpdateManyArgsSchema: z.ZodType<Prisma.QuizResultUpdateManyArgs> = z.object({
  data: z.union([ QuizResultUpdateManyMutationInputSchema,QuizResultUncheckedUpdateManyInputSchema ]),
  where: QuizResultWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const QuizResultDeleteManyArgsSchema: z.ZodType<Prisma.QuizResultDeleteManyArgs> = z.object({
  where: QuizResultWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ForumThreadCreateArgsSchema: z.ZodType<Prisma.ForumThreadCreateArgs> = z.object({
  select: ForumThreadSelectSchema.optional(),
  include: ForumThreadIncludeSchema.optional(),
  data: z.union([ ForumThreadCreateInputSchema,ForumThreadUncheckedCreateInputSchema ]),
}).strict() ;

export const ForumThreadUpsertArgsSchema: z.ZodType<Prisma.ForumThreadUpsertArgs> = z.object({
  select: ForumThreadSelectSchema.optional(),
  include: ForumThreadIncludeSchema.optional(),
  where: ForumThreadWhereUniqueInputSchema,
  create: z.union([ ForumThreadCreateInputSchema,ForumThreadUncheckedCreateInputSchema ]),
  update: z.union([ ForumThreadUpdateInputSchema,ForumThreadUncheckedUpdateInputSchema ]),
}).strict() ;

export const ForumThreadCreateManyArgsSchema: z.ZodType<Prisma.ForumThreadCreateManyArgs> = z.object({
  data: z.union([ ForumThreadCreateManyInputSchema,ForumThreadCreateManyInputSchema.array() ]),
}).strict() ;

export const ForumThreadDeleteArgsSchema: z.ZodType<Prisma.ForumThreadDeleteArgs> = z.object({
  select: ForumThreadSelectSchema.optional(),
  include: ForumThreadIncludeSchema.optional(),
  where: ForumThreadWhereUniqueInputSchema,
}).strict() ;

export const ForumThreadUpdateArgsSchema: z.ZodType<Prisma.ForumThreadUpdateArgs> = z.object({
  select: ForumThreadSelectSchema.optional(),
  include: ForumThreadIncludeSchema.optional(),
  data: z.union([ ForumThreadUpdateInputSchema,ForumThreadUncheckedUpdateInputSchema ]),
  where: ForumThreadWhereUniqueInputSchema,
}).strict() ;

export const ForumThreadUpdateManyArgsSchema: z.ZodType<Prisma.ForumThreadUpdateManyArgs> = z.object({
  data: z.union([ ForumThreadUpdateManyMutationInputSchema,ForumThreadUncheckedUpdateManyInputSchema ]),
  where: ForumThreadWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ForumThreadDeleteManyArgsSchema: z.ZodType<Prisma.ForumThreadDeleteManyArgs> = z.object({
  where: ForumThreadWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ForumPostCreateArgsSchema: z.ZodType<Prisma.ForumPostCreateArgs> = z.object({
  select: ForumPostSelectSchema.optional(),
  include: ForumPostIncludeSchema.optional(),
  data: z.union([ ForumPostCreateInputSchema,ForumPostUncheckedCreateInputSchema ]),
}).strict() ;

export const ForumPostUpsertArgsSchema: z.ZodType<Prisma.ForumPostUpsertArgs> = z.object({
  select: ForumPostSelectSchema.optional(),
  include: ForumPostIncludeSchema.optional(),
  where: ForumPostWhereUniqueInputSchema,
  create: z.union([ ForumPostCreateInputSchema,ForumPostUncheckedCreateInputSchema ]),
  update: z.union([ ForumPostUpdateInputSchema,ForumPostUncheckedUpdateInputSchema ]),
}).strict() ;

export const ForumPostCreateManyArgsSchema: z.ZodType<Prisma.ForumPostCreateManyArgs> = z.object({
  data: z.union([ ForumPostCreateManyInputSchema,ForumPostCreateManyInputSchema.array() ]),
}).strict() ;

export const ForumPostDeleteArgsSchema: z.ZodType<Prisma.ForumPostDeleteArgs> = z.object({
  select: ForumPostSelectSchema.optional(),
  include: ForumPostIncludeSchema.optional(),
  where: ForumPostWhereUniqueInputSchema,
}).strict() ;

export const ForumPostUpdateArgsSchema: z.ZodType<Prisma.ForumPostUpdateArgs> = z.object({
  select: ForumPostSelectSchema.optional(),
  include: ForumPostIncludeSchema.optional(),
  data: z.union([ ForumPostUpdateInputSchema,ForumPostUncheckedUpdateInputSchema ]),
  where: ForumPostWhereUniqueInputSchema,
}).strict() ;

export const ForumPostUpdateManyArgsSchema: z.ZodType<Prisma.ForumPostUpdateManyArgs> = z.object({
  data: z.union([ ForumPostUpdateManyMutationInputSchema,ForumPostUncheckedUpdateManyInputSchema ]),
  where: ForumPostWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ForumPostDeleteManyArgsSchema: z.ZodType<Prisma.ForumPostDeleteManyArgs> = z.object({
  where: ForumPostWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ForumCommentCreateArgsSchema: z.ZodType<Prisma.ForumCommentCreateArgs> = z.object({
  select: ForumCommentSelectSchema.optional(),
  include: ForumCommentIncludeSchema.optional(),
  data: z.union([ ForumCommentCreateInputSchema,ForumCommentUncheckedCreateInputSchema ]),
}).strict() ;

export const ForumCommentUpsertArgsSchema: z.ZodType<Prisma.ForumCommentUpsertArgs> = z.object({
  select: ForumCommentSelectSchema.optional(),
  include: ForumCommentIncludeSchema.optional(),
  where: ForumCommentWhereUniqueInputSchema,
  create: z.union([ ForumCommentCreateInputSchema,ForumCommentUncheckedCreateInputSchema ]),
  update: z.union([ ForumCommentUpdateInputSchema,ForumCommentUncheckedUpdateInputSchema ]),
}).strict() ;

export const ForumCommentCreateManyArgsSchema: z.ZodType<Prisma.ForumCommentCreateManyArgs> = z.object({
  data: z.union([ ForumCommentCreateManyInputSchema,ForumCommentCreateManyInputSchema.array() ]),
}).strict() ;

export const ForumCommentDeleteArgsSchema: z.ZodType<Prisma.ForumCommentDeleteArgs> = z.object({
  select: ForumCommentSelectSchema.optional(),
  include: ForumCommentIncludeSchema.optional(),
  where: ForumCommentWhereUniqueInputSchema,
}).strict() ;

export const ForumCommentUpdateArgsSchema: z.ZodType<Prisma.ForumCommentUpdateArgs> = z.object({
  select: ForumCommentSelectSchema.optional(),
  include: ForumCommentIncludeSchema.optional(),
  data: z.union([ ForumCommentUpdateInputSchema,ForumCommentUncheckedUpdateInputSchema ]),
  where: ForumCommentWhereUniqueInputSchema,
}).strict() ;

export const ForumCommentUpdateManyArgsSchema: z.ZodType<Prisma.ForumCommentUpdateManyArgs> = z.object({
  data: z.union([ ForumCommentUpdateManyMutationInputSchema,ForumCommentUncheckedUpdateManyInputSchema ]),
  where: ForumCommentWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ForumCommentDeleteManyArgsSchema: z.ZodType<Prisma.ForumCommentDeleteManyArgs> = z.object({
  where: ForumCommentWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;