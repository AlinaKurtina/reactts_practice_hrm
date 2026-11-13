import { createFileRoute } from '@tanstack/react-router'
import ContentsPage from "@/pages/contents/ContentsPage"

export const Route = createFileRoute('/_app/contents')({
  component: ContentsPage,
})