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
  id?: string,
  category: string,
  numberOfStudents: number,
  passedEducation: number,
  title: string,
  type: string
}

type possibleCategories = 'courses' | 'lectures' | 'quizzes'

export type { User, EmployeeData, ContentsData, possibleCategories };
