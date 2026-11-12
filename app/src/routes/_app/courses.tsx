import { createFileRoute } from '@tanstack/react-router'
import CoursesPage from "@/pages/courses/CoursesPage"

export const Route = createFileRoute('/_app/courses')({
  component: CoursesPage,
})