import { createLazyFileRoute } from "@tanstack/react-router";
import EmployeePage from "../../pages/students/EmployeePage";

export const Route = createLazyFileRoute("/_app/students")({
  component: EmployeePage,
});
