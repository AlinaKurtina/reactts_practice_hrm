import { useQuery } from "@tanstack/react-query";
import { fetchEmployeeData } from "@/api/employees";

const employeeDataKeys = {
  all: ["employees"] as const,
};

function useEmployeeData() {
  return useQuery({
    queryKey: employeeDataKeys.all,
    queryFn: fetchEmployeeData,
  });
}

export { useEmployeeData };
