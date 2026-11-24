import { useQuery } from "@tanstack/react-query";
import { filterEmployeeData } from "@/api/employees";
import type { EmployeeFilters } from "@/types";

const employeeDataKeys = {
  all: ["employees"] as const,
  list: (filters: EmployeeFilters) => [...employeeDataKeys.all, filters] as const,
};

function useFilteredEmployeeData({ filter, filterValue }: EmployeeFilters) {
  return useQuery({
    queryKey: employeeDataKeys.list({ filter, filterValue }),
    queryFn: () => filterEmployeeData({ filter, filterValue }),
  });
}

export { useFilteredEmployeeData };
