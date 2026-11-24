interface User {
  id?: string;
  fullName: string;
  jobTitle: string;
}

interface EmployeeData extends User {
  educationalMaterial: string;
  attempts: number;
  grade: number;
  timeTaken: number;
}

interface ContentsData {
  id?: string;
  category: string;
  numberOfStudents: number;
  passedEducation: number;
  title: string;
  type: string;
  author: string;
}

type possibleCategories = "courses" | "lectures" | "quizzes";

interface EmployeeFilters {
  filter?: keyof EmployeeData;
  filterValue: string | null;
}

interface ContentsFilters {
  filter?: keyof ContentsData | null;
  filterValue: string | null;
  category: possibleCategories;
}

interface MessageData {
  id?: string;
  sender?: string;
  receiver?: string;
  messageText: string;
}

export type {
  User,
  EmployeeData,
  ContentsData,
  possibleCategories,
  EmployeeFilters,
  ContentsFilters,
  MessageData,
};
