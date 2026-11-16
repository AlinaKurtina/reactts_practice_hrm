import { createLazyFileRoute } from "@tanstack/react-router";
import EmployeePage from "../../pages/employees/EmployeePage";

export const Route = createLazyFileRoute("/_app/employees")({
  component: EmployeePage,
});
