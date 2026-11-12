import { createLazyFileRoute } from '@tanstack/react-router'
import StudentsPage from '../../pages/students/StudentsPage'

export const Route = createLazyFileRoute('/_app/students')({
  component: StudentsPage,
})

