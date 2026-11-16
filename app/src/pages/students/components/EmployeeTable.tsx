import CounterSpan from "@/components/common/CounterSpan";
import Wrapper from "@/components/common/Wrapper";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEmployeeData } from "@/hooks/useEmployeeData";

function EmployeeTable() {
  const { data, isLoading, error } = useEmployeeData();

  if (isLoading) return <span>Loading...</span>;
  if (error) return <span>Error placeholder</span>;

  return (
    <Wrapper className="flex-col">
      <CounterSpan count={data?.length} counted={"employees"} />
      <Table className="text-(--main-gray-light)">
        <TableHeader>
          <TableRow>
            <TableHead>User</TableHead>
            <TableHead>Job title</TableHead>
            <TableHead>Educational material</TableHead>
            <TableHead>Time taken</TableHead>
            <TableHead>Attempts</TableHead>
            <TableHead>Grade</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((emp) => (
            <TableRow key={emp.id}>
              <TableCell className="text-foreground">{emp.fullName}</TableCell>
              <TableCell>{emp.jobTitle}</TableCell>
              <TableCell>{emp.educationalMaterial}</TableCell>
              <TableCell>
                <span className="text-foreground">43</span> min{" "}
                <span className="text-foreground">57</span> sec
              </TableCell>
              <TableCell>{emp.attempts != 0 ? emp.attempts : ""}</TableCell>
              <TableCell>{emp.grade != 0 ? emp.grade : ""}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Wrapper>
  );
}

export default EmployeeTable;
