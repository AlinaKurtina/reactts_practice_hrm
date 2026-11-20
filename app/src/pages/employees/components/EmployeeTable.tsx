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
import AvatarNameCell from "./AvatarNameCell";

import avatar from "@/assets/avatars/mainAvatar.png";
import TimeSpentCell from "./TimeSpentCell";
import type { EmployeeData } from "@/types";
import TableBodySkeleton from "./TableBodySkeleton";

interface Props {
  data: EmployeeData[] | undefined;
  isLoading: boolean;
  error: Error | null;
}

function EmployeeTable({ data, isLoading, error: isError }: Props) {
  if (isError) return <span>Error placeholder</span>;

  return (
    <Wrapper className="flex-col">
      <CounterSpan count={data?.length} counted={"employees"} isLoading={isLoading} />
      <Table className="text-(--main-gray-light) text-[13px]">
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
          {data ? (
            data.map((emp) => (
              <TableRow key={emp.id} className="animate-row-slide">
                <TableCell className="text-foreground">
                  <AvatarNameCell fullName={emp.fullName} src={avatar} />
                </TableCell>
                <TableCell>{emp.jobTitle}</TableCell>
                <TableCell>{emp.educationalMaterial}</TableCell>
                <TableCell>
                  <TimeSpentCell time={emp.timeTaken} />
                </TableCell>
                <TableCell>{emp.attempts != 0 ? emp.attempts : ""}</TableCell>
                <TableCell>{emp.grade != 0 ? emp.grade : ""}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableBodySkeleton />
          )}
        </TableBody>
      </Table>
    </Wrapper>
  );
}

export default EmployeeTable;
