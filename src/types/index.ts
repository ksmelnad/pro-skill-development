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

// Forum Types
export interface ForumAuthor {
  id: string;
  name: string | null;
  image?: string | null;
}

export interface ForumCommentType {
  id: string;
  content: string;
  author: ForumAuthor;
  createdAt: Date | string;
  updatedAt: Date | string;
  postId: string;
}

export interface ForumPostType {
  id: string;
  content: string;
  author: ForumAuthor;
  createdAt: Date | string;
  updatedAt: Date | string;
  threadId: string;
  comments: ForumCommentType[];
  _count?: { comments: number };
}

export interface ForumThreadType {
  id: string;
  slug: string;
  title: string;
  content: string;
  author: ForumAuthor;
  createdAt: Date | string;
  updatedAt: Date | string;
  posts?: ForumPostType[];
  _count?: { posts: number };
}

export type ForumCommentWithAuthor = Prisma.ForumCommentGetPayload<{
  include: { author: { select: { id: true; name: true; image: true } } };
}>;

export type ForumThreadWithAuthorAndCounts = Prisma.ForumThreadGetPayload<{
  include: {
    author: { select: { id: true; name: true; image: true } };
    _count: { select: { posts: true } };
  };
}>;

export type ForumPostWithAuthorAndCounts = Prisma.ForumPostGetPayload<{
  include: {
    author: { select: { id: true; name: true; image: true } };
    _count: { select: { comments: true } };
  };
}>;

// For a list of posts, we might also want comments, or fetch them separately.
// For now, keeping it similar to ForumPostWithAuthorAndCounts, comments can be fetched on demand.
export type ForumPostInList = ForumPostWithAuthorAndCounts;

// For displaying a single thread, we might include the initial posts.
export type ForumThreadDetailed = Prisma.ForumThreadGetPayload<{
  include: {
    author: { select: { id: true; name: true; image: true } };
    // Posts will be fetched separately with pagination for the detail view
  };
}>;

// Paginated Response Type
export interface PaginatedResponse<T> {
  data: T[];
  totalItems: number;
  totalPages: number;
  currentPage: number;
  pageSize: number;
}
