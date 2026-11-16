interface EmployeeData {
  id: string;
  fullName: string;
  jobTitle: string;
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

export type { EmployeeData, ContentsData };
